"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = void 0;
// The root Test object singleton
const test_1 = require("@tapjs/test");
const async_hook_domain_1 = require("async-hook-domain");
const node_worker_threads_1 = require("node:worker_threads");
const signal_exit_1 = require("signal-exit");
const diags_js_1 = require("./diags.js");
const implicit_end_sigil_js_1 = require("./implicit-end-sigil.js");
const proc_js_1 = require("./proc.js");
const stdout = proc_js_1.proc?.stdout;
const privSym = Symbol('private constructor');
const privateTAPCtor = {
    [privSym]: true,
};
let instance = undefined;
const envFlag = (key) => proc_js_1.env[key] === undefined ? undefined : proc_js_1.env[key] === '1';
let piped = false;
let registered = false;
let autoend = false;
/**
 * This is a singleton subclass of the {@link Test} base class.
 *
 * Instantiate it by calling the exported {@link tap} method.
 *
 * It has all of the same plugins, fields, properties etc of a "normal"
 * Test object, but with some additional characteristics to make it
 * suitable for use as the root test runner.
 *
 * - The {@link TAP#register} method will hook onto the process object,
 *   to set the exit code to 1 if there are test failures, and ignore any
 *   `EPIPE` errors that happen on stdout.  (This is quite common in cases
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
            ...opts,
        };
        super(options);
        instance = this;
        this.on('idle', () => maybeAutoend());
        this.on('complete', (results) => this.#oncomplete(results));
        // only attach the teardown autoend if we're using the teardown plugin
        // we test in this convoluted manner rather than this.pluginLoaded
        // because otherwise we have a cyclical dep link between @tapjs/core
        // and @tapjs/after which prevents TS from being able to build properly
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
    /**
     * register this tap instance as being in charge of the current process
     * ignore epipe errors, set exit code, etc.
     * Happens automatically if piped to stdout.
     */
    register() {
        if (registered)
            return;
        registered = true;
        registerTimeoutListener();
        ignoreEPIPE();
        this.once('bail', () => proc_js_1.proc?.exit(1));
        proc_js_1.proc?.once('beforeExit', () => {
            ;
            this.end(implicit_end_sigil_js_1.IMPLICIT);
            if (!this.results) {
                this.endAll();
            }
        });
        // create a root domain to handle throws that happen outside
        // of any subtest.
        const rootDomain = new async_hook_domain_1.Domain((er, type) => this.hookDomain.onerror(er, type));
        this.hook.onDestroy = () => rootDomain.destroy();
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
        if (registered && !results.ok && proc_js_1.proc) {
            proc_js_1.proc.exitCode = 1;
        }
    }
    timeout(options = { expired: this.name, signal: null }) {
        const ret = super.timeout(Object.assign(getTimeoutExtra(options.signal), options));
        // don't stick around
        // this is just a defense if the SIGALRM signal is caught, since
        // we'll exit forcibly anyway.
        /* c8 ignore start */
        if (registered) {
            const t = setTimeout(() => {
                didProcessTimeout = true;
                alarmKill();
            }, 100);
            if (t.unref)
                t.unref();
        }
        /* c8 ignore stop */
        return ret;
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
const registerTimeoutListener = () => {
    // SIGALRM means being forcibly killed due to timeout
    const isTimeoutSignal = (signal) => signal === 'SIGALRM' || (signal === 'SIGINT' && !proc_js_1.env.TAP_CHILD_ID);
    (0, signal_exit_1.onExit)((_, signal) => {
        if (!isTimeoutSignal(signal) || didProcessTimeout) {
            return;
        }
        onProcessTimeout(signal);
    });
    const onMessage = (msg) => {
        if (msg &&
            typeof msg === 'object' &&
            msg.tapAbort === 'timeout' &&
            msg.key === proc_js_1.env.TAP_ABORT_KEY &&
            msg.child === proc_js_1.env.TAP_CHILD_ID) {
            onProcessTimeout('SIGALRM');
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
    if (requests.length) {
        extra.requests = requests.map(r => {
            /* c8 ignore start */
            if (!r || typeof r !== 'object')
                return r;
            /* c8 ignore stop */
            const ret = {
                type: r.constructor.name,
            };
            // most everything in node has a context these days
            /* c8 ignore start */
            if (r.context)
                ret.context = r.context;
            /* c8 ignore stop */
            return ret;
        });
    }
    // Newer node versions don't have this as reliably.
    /* c8 ignore start */
    if (handles.length) {
        extra.handles = handles.map(h => {
            /* c8 ignore start */
            if (!h || typeof h !== 'object')
                return h;
            /* c8 ignore stop */
            const ret = {
                type: h.constructor.name,
            };
            // all of this is very internal-ish
            /* c8 ignore start */
            if (h.msecs)
                ret.msecs = h.msecs;
            if (h._events)
                ret.events = Object.keys(h._events);
            if (h._sockname)
                ret.sockname = h._sockname;
            if (h._connectionKey)
                ret.connectionKey = h._connectionKey;
            /* c8 ignore stop */
            return ret;
        });
    }
    return extra;
};
let didProcessTimeout = false;
const onProcessTimeout = (signal = null) => {
    // pretty much impossible to do this, since we forcibly exit,
    // but it is theoretically possible if SIGALRM is caught.
    /* c8 ignore start */
    if (didProcessTimeout || !instance)
        return;
    /* c8 ignore stop */
    didProcessTimeout = true;
    const extra = getTimeoutExtra(signal);
    if (signal === 'SIGINT') {
        extra.message = 'interrupt!';
    }
    // ignore coverage here because it happens after everything
    // must have been shut down.
    /* c8 ignore start */
    if (!instance.results) {
        instance.timeout(extra);
    }
    else {
        console.error('possible timeout: SIGALRM received after tap end');
        if (extra.handles || extra.requests) {
            delete extra.signal;
            if (!extra.at) {
                delete extra.at;
            }
        }
        console.error((0, diags_js_1.diags)(extra));
        alarmKill();
    }
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
const tap = (opts) => instance || new TAP(privateTAPCtor, opts);
exports.tap = tap;
//# sourceMappingURL=tap.js.map