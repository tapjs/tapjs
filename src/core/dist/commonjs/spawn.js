"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spawn = void 0;
const base_js_1 = require("./base.js");
const processinfo_1 = require("@tapjs/processinfo");
const node_path_1 = require("node:path");
const node_util_1 = require("node:util");
const throw_to_parser_js_1 = require("./throw-to-parser.js");
const hasStdout = (p) => !!p.stdout;
/**
 * Class representing a spawned TAP process
 *
 * Instantiated by `t.spawn()`, typically.
 *
 * @internal
 */
class Spawn extends base_js_1.Base {
    cwd;
    command;
    args;
    stdio;
    env;
    proc = null;
    cb = null;
    externalID;
    // doesn't have to be cryptographically secure, just a gut check
    #childKey = String(Math.random());
    #timedOut;
    #childId;
    constructor(options) {
        // figure out the name before calling super()
        const command = options.command;
        if (!command) {
            throw new TypeError('no command provided for t.spawn()');
        }
        const cwd = typeof options.cwd === 'string' ? options.cwd : process.cwd();
        const args = options.args || [];
        options.name = options.name || Spawn.procName(cwd, command, args);
        super(options);
        this.externalID = options.externalID;
        this.cwd = cwd;
        this.command = command;
        this.args = args;
        if (options.stdio) {
            if (typeof options.stdio === 'string') {
                this.stdio = [options.stdio, 'pipe', options.stdio, 'ipc'];
            }
            else {
                const [stdin, _, stderr] = options.stdio;
                /* c8 ignore start */
                if (stdin === 'ipc' || stderr === 'ipc') {
                    throw new Error('cannot spawn subtest with ipc in stdin or stderr');
                }
                /* c8 ignore stop */
                this.stdio = [stdin, 'pipe', stderr, 'ipc'];
            }
        }
        else {
            this.stdio = [0, 'pipe', 2, 'ipc'];
        }
        const env = options.env || process.env;
        this.#childId = String(options.childId || env.TAP_CHILD_ID || '0');
        this.env = {
            ...env,
            TAP_CHILD_ID: this.#childId,
            TAP: '1',
            TAP_BAIL: this.bail ? '1' : '0',
            TAP_CHILD_KEY: this.#childKey,
        };
    }
    endAll() {
        if (this.proc) {
            this.proc.kill('SIGKILL');
            this.parser.abort('test unfinished');
        }
        this.#callCb();
    }
    #callCb() {
        if (this.cb) {
            this.cb();
        }
        this.cb = null;
    }
    main(cb) {
        this.cb = cb;
        this.setTimeout(this.options.timeout || 0);
        this.parser.on('comment', c => {
            const tomatch = c.match(/# timeout=([0-9]+)\n$/);
            if (tomatch) {
                this.setTimeout(+tomatch[1]);
            }
        });
        this.env.TAP_JOB_ID = String(this.options.jobId || 0);
        const options = {
            cwd: this.cwd,
            env: this.env,
            stdio: this.stdio,
            externalID: this.externalID,
        };
        this.parent?.emit('spawn', this);
        this.emit('preprocess', options);
        const proc = (this.proc = processinfo_1.ProcessInfo.spawn(this.command, this.args, options));
        /* c8 ignore start */
        if (!hasStdout(proc)) {
            return this.threw('failed to open child process stdout', this.options);
        }
        /* c8 ignore stop */
        proc.stdout.pipe(this.parser);
        proc.on('message', msg => {
            const m = msg;
            if (!!msg &&
                typeof msg === 'object' &&
                m.key === this.#childKey &&
                m.child === this.#childId) {
                this.setTimeout(m.setTimeout);
                return;
            }
            this.comment(...(Array.isArray(msg) ? msg : [msg]));
        });
        proc.on('close', (code, signal) => {
            this.#onprocclose(code, signal);
        });
        proc.on('error', er => this.threw(er));
        this.emit('process', proc);
    }
    comment(...args) {
        const body = (0, node_util_1.format)(...args);
        const message = ('# ' + body.split(/\r?\n/).join('\n# ')).trim() + '\n';
        // it's almost impossible to send a message that will arrive
        // AFTER the stdout closes, as this only happens when the worker
        // thread closes, but it is theoretically possible, since messages
        // are asynchronous.
        /* c8 ignore start */
        if (this.parser.results) {
            if (this.parent && !this.parent.results) {
                this.parent.parser.write(message);
            }
            else {
                console.log(message.trimEnd());
            }
        }
        else {
            /* c8 ignore stop */
            this.parser.write(message);
        }
    }
    #onprocclose(code, signal) {
        this.options.exitCode = this.options.exitCode || code;
        this.options.signal = this.options.signal || signal;
        if (this.#timedOut)
            super.timeout(this.#timedOut);
        this.debug('SPAWN close %j %s', code, signal);
        // spawn closing with no tests is treated as a skip.
        if (this.results &&
            this.results.plan &&
            this.results.plan.skipAll &&
            !code &&
            !signal) {
            this.options.skip =
                this.results.plan.skipReason || 'no tests found';
        }
        if (code || signal) {
            if (this.results) {
                this.results.ok = false;
            }
            this.parser.ok = false;
        }
        return this.#callCb();
    }
    timeout(options = { expired: this.name }) {
        // defer calling super.timeout() until we actually kill the process.
        this.#timedOut = options;
        // try to send the timeout signal.  If the child test process is
        // using node-tap as the test runner, and not caught in a busy
        // loop, it will trigger a dump of outstanding handles and refs.
        // If that doesn't do the job, then we fall back to signals.
        // Unfortunately, termination signals on windows cannot be caught,
        // so this is the only way to get that information in most cases.
        const proc = this.proc;
        if (proc) {
            try {
                proc.send({
                    tapAbort: 'timeout',
                    key: this.#childKey,
                    child: this.#childId,
                    // If the process ends while/before sending this message,
                    // then just ignore it. the eventual kills will be no-ops,
                    // and since we're done with this process, the success here
                    // doesn't matter.
                    /* c8 ignore start */
                }, () => { });
            }
            catch { }
            /* c8 ignore stop */
            // this whole bit has to be ignored because there is no way to test
            // signals on Windows without mocking to the point of irrelevance
            /* c8 ignore start */
            const t = setTimeout(() => {
                // try to give it a chance to note the timeout and report handles
                try {
                    proc.kill('SIGALRM');
                }
                catch (er) { }
                const t = setTimeout(() => {
                    const { signal, exitCode } = this.options;
                    if (!signal && exitCode === undefined) {
                        // that didn't work, use forceful termination
                        proc.kill('SIGKILL');
                    }
                }, 500);
                if (t.unref)
                    t.unref();
                proc.once('close', () => clearTimeout(t));
            }, 500);
            if (t.unref)
                t.unref();
            proc.once('close', () => clearTimeout(t));
            /* c8 ignore stop */
        }
    }
    threw(er, extra) {
        return (0, throw_to_parser_js_1.throwToParser)(this.parser, super.threw(er, extra));
    }
    static procName(cwd, command, args) {
        return (command === process.execPath ?
            (0, node_path_1.basename)(process.execPath) +
                ' ' +
                args
                    .map(a => a.indexOf(cwd) === 0 ?
                    './' + a.substring(cwd.length + 1).replace(/\\/g, '/')
                    : a)
                    .join(' ')
                    .trim()
            : command + ' ' + args.join(' ')).replace(/\\/g, '/');
    }
}
exports.Spawn = Spawn;
//# sourceMappingURL=spawn.js.map