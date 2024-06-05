"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = void 0;
/**
 * The root TAP object singleton, the `t` you get when you
 * `import t from 'tap'`
 *
 * Inherits from {@link @tapjs/test!index.Test}, with all plugins applied, and
 * has additional functionality to automatically pipe to standard output, set
 * the process exit code appropriately, and infer options from environment
 * variables.
 *
 * @module
 *
 * @see {@link @tapjs/core!tap.TAP}
 */
const test_1 = require("@tapjs/test");
const async_hook_domain_1 = require("async-hook-domain");
const node_worker_threads_1 = require("node:worker_threads");
const signal_exit_1 = require("signal-exit");
const diags_js_1 = require("./diags.js");
const implicit_end_sigil_js_1 = require("./implicit-end-sigil.js");
const proc_js_1 = require("./proc.js");
const stdout = proc_js_1.proc?.stdout;
const privSym = Symbol.for('TAP private constructor');
const privateTAPCtor = {
    [privSym]: true,
};
let instance = undefined;
const envFlag = (key) => proc_js_1.env[key] === undefined ? undefined : proc_js_1.env[key] === '1';
let piped = false;
let registered = false;
let autoend = false;
/**
 * This is a singleton subclass of the {@link @tapjs/test!index.Test} base
 * class.
 *
 * Instantiate it by calling the exported {@link @tapjs/core!tap.tap} method.
 *
 * It has all of the same plugins, fields, properties etc of a "normal"
 * Test object, but with some additional characteristics to make it
 * suitable for use as the root test runner.
 *
 * - The {@link @tapjs/core!tap.TAP#register} method will hook onto the process
 *   object, to set the exit code to 1 if there are test failures, and ignore
 *   any `EPIPE` errors that happen on stdout.  (This is quite common in cases
 *   where a test aborts, and then attempts to write more data.)
 *
 * - A brief summary is printed at the end of the test run.
 *
 * - If piped to stdout, then `this.register()` will be called automatically.
 *
 * - If not piped anywhere else, the first time it writes any data, it will
 *   begin piping to stdout.
 *
 * - Options are set based on relevant environment variables, rather than
 *   taking an options object, since in normal cases, it will be instantiated
 *   automatically before any user code is run.
 *
 * - The test will automatically implicitly end when the process exits.  If
 *   there are any unfinished tests at this time, they will be emitted as
 *   failures.
 *
 * - If a `teardown` function is added, then the test will automatically
 *   implicitly end if it is idle for 3 consecutive `setTimeout` deferrals.
 *   This is a bit of a kludge, but it allows tests to run servers or other
 *   things that would prevent a graceful process exit, and close them down
 *   in a teardown function.
 *
 * - Lastly, since test files are often spawned by the runner using
 *   `t.spawn()`, this class listens for the timeout signal, and attempts to
 *   print diagnostic information about currently active handles and requests,
 *   as these are usually the cause of a test hanging indefinitely.
 */
class TAP extends test_1.Test {
    /**
     * @internal
     */
    constructor(priv, opts = {}) {
        /* c8 ignore start */
        if (priv !== privateTAPCtor) {
            throw new Error('the TAP singleton should not be instantiated directly');
        }
        const timeoutEnv = proc_js_1.env.TAP_TIMEOUT || '30';
        /* c8 ignore stop */
        const timeout = Number(timeoutEnv) * 1000;
        const options = {
            name: 'TAP',
            diagnostic: envFlag('TAP_DIAG'),
            bail: envFlag('TAP_BAIL'),
            debug: envFlag('TAP_DEBUG') ||
                /\btap\b/i.test(proc_js_1.env['NODE_DEBUG'] || ''),
            omitVersion: envFlag('TAP_OMIT_VERSION'),
            preserveWhitespace: !envFlag('TAP_OMIT_WHITESPACE'),
            timeout,
            failTodo: envFlag('TAP_FAIL_TODO'),
            failSkip: envFlag('TAP_FAIL_SKIP'),
            failOnly: envFlag('TAP_FAIL_ONLY'),
            passes: envFlag('TAP_PASSES'),
            // these are always set in our tests.
            /* c8 ignore start */
            childId: Number(proc_js_1.env.TAP_CHILD_ID) || 0,
            jobId: Number(proc_js_1.env.TAP_JOB_ID) || 0,
            /* c8 ignore stop */
            ...opts,
        };
        // plugins get applied right here:
        super(options);
        instance = g[privSym] = this;
        this.on('idle', () => maybeAutoend());
        this.on('complete', (results) => this.#oncomplete(results));
        // only attach the teardown autoend if we're using the teardown plugin
        // we test in this convoluted manner rather than this.pluginLoaded
        // because otherwise we have a cyclical dep link between `@tapjs/core`
        // and `@tapjs/after` which prevents TS from being able to build properly
        // from a cold start.
        const td = this;
        const { teardown } = td;
        if (typeof teardown === 'function') {
            td.teardown = (...args) => {
                autoend = true;
                td.teardown = teardown;
                return td.teardown(...args);
            };
        }
        this.runMain(() => { });
    }
    get registered() {
        return registered;
    }
    /**
     * register this tap instance as being in charge of the current process
     * ignore epipe errors, set exit code, etc.
     *
     * Happens automatically if piped to stdout.
     */
    register() {
        if (registered)
            return;
        registered = true;
        registerTimeoutListener(this);
        ignoreEPIPE();
        proc_js_1.proc?.once('beforeExit', () => {
            ;
            this.end(implicit_end_sigil_js_1.IMPLICIT);
        });
        proc_js_1.proc?.once('exit', () => {
            if (!this.results) {
                this.endAll();
            }
        });
        // create a root domain to handle throws that happen outside
        // of any subtest.
        const rootDomain = new async_hook_domain_1.Domain((er, type) => this.hookDomain.onerror(er, type));
        this.hook.onDestroy = () => rootDomain.destroy();
    }
    onbail(reason) {
        if (registered) {
            this.debug('bailout, exit 1');
            super.write(`Bail out!${reason ? ' ' + reason : ''}\n`);
        }
        super.onbail(reason);
        // don't fast-exit in the runner, so we can print the reason for
        // the bailout on test failure.
        if (registered && this.context !== Symbol.for('tap.isRunner')) {
            proc_js_1.proc?.exit(1);
        }
    }
    /**
     * Just the normal Minipass.pipe method, but automatically registers
     * if the destination is stdout.
     */
    pipe(dest, opts) {
        piped = true;
        if (stdout && dest === stdout) {
            this.register();
        }
        return super.pipe(dest, opts);
    }
    /**
     * Just the normal Minipass.write method, but automatically pipes
     * to stdout if not piped anywhere else.
     */
    write(chunk) {
        if (!registered && !piped && stdout) {
            this.pipe(stdout);
        }
        return super.write(chunk);
    }
    #oncomplete(results) {
        // only print this added info in the root test, otherwise
        // it's a bit extraneous.
        if (!proc_js_1.env.TAP_CHILD_ID) {
            this.comment(this.counts.toJSON());
            this.comment(`time=${this.time}ms`);
        }
        if (registered && proc_js_1.proc && !results.ok) {
            this.debug('TAP results not ok, setting exitCode', results);
            proc_js_1.proc.exitCode = 1;
        }
    }
    /**
     * Similar to the normal {@link @tapjs/core!test-base.TestBase#timeout}, but
     * with the added feature that it will kill the process with `SIGALRM` if it
     * has been registered, and will decorate the diagnostics with some
     * information about currently running handles and requests, as these may be
     * the reason the process is not gracefully closing in time.
     *
     * The root test runner will time out if the process receives a `SIGALRM`
     * signal, or if it receives a timeout message via IPC or worker thread
     * channel.
     */
    timeout(options = { expired: this.name, signal: null }) {
        const occ = this.occupied;
        const extra = Object.assign(getTimeoutExtra(options.signal), options);
        super.timeout(extra);
        if (occ)
            this.emit('timeout', extra);
        // don't stick around
        // this is just a defense if the SIGALRM signal is caught, since
        // we'll exit forcibly anyway.
        /* c8 ignore start */
        if (registered) {
            setTimeout(() => {
                didProcessTimeout = true;
                alarmKill();
            }, 10000)?.unref?.();
        }
        /* c8 ignore stop */
    }
    // tell our parent process about our intended timeout
    setTimeout(n) {
        const msg = {
            setTimeout: n,
            key: proc_js_1.env.TAP_CHILD_KEY,
            child: proc_js_1.env.TAP_CHILD_ID,
        };
        proc_js_1.proc?.send?.(msg);
        // workers can't generate coverage
        /* c8 ignore start */
        node_worker_threads_1.parentPort?.postMessage(msg);
        /* c8 ignore stop */
        return super.setTimeout(n);
    }
}
const shouldAutoend = (instance) => !!autoend && !!instance?.idle;
let autoendTimer = undefined;
const maybeAutoend = () => {
    clearTimeout(autoendTimer);
    if (!shouldAutoend(instance))
        return;
    autoendTimer = setTimeout(() => {
        clearTimeout(autoendTimer);
        if (shouldAutoend(instance)) {
            autoendTimer = setTimeout(() => {
                clearTimeout(autoendTimer);
                if (shouldAutoend(instance)) {
                    ;
                    instance.end(implicit_end_sigil_js_1.IMPLICIT);
                    autoend = false;
                }
            });
        }
    });
};
// SIGALRM means being forcibly killed due to timeout
const registerTimeoutListener = (t) => {
    const oe = (_, sig) => {
        if (sig === 'SIGALRM' && !didProcessTimeout) {
            onProcessTimeout(t, sig);
            (0, signal_exit_1.onExit)(oe);
            return true;
        }
    };
    (0, signal_exit_1.onExit)(oe);
    const onMessage = (msg) => {
        if (msg &&
            typeof msg === 'object' &&
            msg.tapAbort === 'timeout' &&
            msg.key === proc_js_1.env.TAP_CHILD_KEY &&
            msg.child === proc_js_1.env.TAP_CHILD_ID) {
            onProcessTimeout(t, 'SIGALRM');
        }
    };
    // this is a bit of a handshake agreement between the root TAP object
    // and the Spawn and Worker classes. Because Windows cannot catch and
    // process posix signals, we have to use an IPC message to send the
    // timeout signal.
    // t.spawn() will always open an ipc channel on fd 3 for this purpose,
    // and t.worker() will use the worker message port.
    // The key and childId are just a basic gut check to ensure that we don't
    // treat a message as a timeout unintentionally, though of course that
    // would be extremely rare.
    /* c8 ignore start */
    proc_js_1.proc?.on('message', onMessage);
    node_worker_threads_1.parentPort?.on('message', onMessage);
    // We don't want the channel to keep the child running
    //@ts-ignore
    proc_js_1.proc?.channel?.unref();
    node_worker_threads_1.parentPort?.unref();
    /* c8 ignore stop */
};
const getTimeoutExtra = (signal = null) => {
    const p = process;
    /* c8 ignore start */
    const handles = (p._getActiveHandles() || []).filter(
    /* c8 ignore stop */
    h => h !== proc_js_1.proc?.stdout && h !== proc_js_1.proc?.stdin && h !== proc_js_1.proc?.stderr);
    const requests = p._getActiveRequests();
    const extra = {
        at: undefined,
        signal,
    };
    // node 20 doesn't have requests in the same way as node 18
    // we get different objects, handles vs requests, etc.
    // it's all very "internal machinery", version specific and unstable
    // there are tests to show that we can get SOMETHING in expected cases,
    // but it'll be completely differerent across node versions.
    /* c8 ignore start */
    if (requests.length) {
        extra.requests = requests.map(r => {
            if (!r || typeof r !== 'object')
                return r;
            const ret = {
                type: r.constructor.name,
            };
            if (r.context)
                ret.context = r.context;
            return ret;
        });
    }
    if (handles.length) {
        extra.handles = handles.map(h => {
            if (!h || typeof h !== 'object')
                return h;
            const ret = {
                type: h.constructor.name,
            };
            if (h.msecs)
                ret.msecs = h.msecs;
            if (h._events)
                ret.events = Object.keys(h._events);
            if (h._sockname)
                ret.sockname = h._sockname;
            if (h._connectionKey)
                ret.connectionKey = h._connectionKey;
            return ret;
        });
    }
    /* c8 ignore stop */
    return extra;
};
let didProcessTimeout = false;
const onProcessTimeout = (t, signal = null) => {
    // pretty much impossible to do this, since we forcibly exit,
    // but it is theoretically possible if SIGALRM is caught.
    /* c8 ignore start */
    if (didProcessTimeout)
        return;
    /* c8 ignore stop */
    didProcessTimeout = true;
    const extra = getTimeoutExtra(signal);
    // ignore coverage here because it happens after everything
    // must have been shut down.
    /* c8 ignore start */
    if (!t.results) {
        t.timeout(extra);
    }
    else {
        if (extra.handles || extra.requests) {
            delete extra.signal;
            if (!extra.at) {
                delete extra.at;
            }
        }
        console.error((0, diags_js_1.diags)(extra));
    }
    // defer to print the timeout failure before termination
    setTimeout(() => alarmKill());
};
const alarmKill = () => {
    // can only kill in main thread, worker threads will be terminated
    if (!node_worker_threads_1.isMainThread)
        return;
    // SIGALRM isn't supported everywhere,
    // and we won't be able to catch it on windows anyway.
    /* c8 ignore start */
    try {
        proc_js_1.proc?.kill(proc_js_1.proc?.pid, 'SIGALRM');
    }
    catch {
        proc_js_1.proc?.kill(proc_js_1.proc?.pid, 'SIGKILL');
    }
    const t = setTimeout(() => {
        proc_js_1.proc?.kill(proc_js_1.proc?.pid, 'SIGKILL');
    }, 500);
    if (t.unref)
        t.unref();
};
/* c8 ignore stop */
const ignoreEPIPE = () => {
    /* c8 ignore start */
    if (!stdout?.emit)
        return;
    /* c8 ignore stop */
    const emit = stdout.emit;
    stdout.emit = (ev, ...args) => {
        const er = args[0];
        if (ev === 'error' && er?.code === 'EPIPE') {
            return false;
        }
        //@ts-ignore
        return emit.call(stdout, ev, ...args);
    };
};
const g = globalThis;
/**
 * The exported function instantiates a {@link @tapjs/core!tap.TAP} object if
 * we don't already have one, or return the one that was previously
 * instantiated.
 *
 * Options may be provided, which will override the environment settings,
 * but they are ignored if the instance was already created.
 */
const tap = (opts) => instance ?? g[privSym] ?? new TAP(privateTAPCtor, opts);
exports.tap = tap;
//# sourceMappingURL=tap.js.map