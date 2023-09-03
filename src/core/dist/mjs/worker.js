import { Base } from './base.js';
import { cwd, env } from './proc.js';
import { format } from 'node:util';
import { Worker as NodeWorker } from 'node:worker_threads';
import { throwToParser } from './throw-to-parser.js';
/**
 * Class representing a TAP generating node worker thread
 *
 * Instantiated by `t.worker()`, typically.
 *
 * @internal
 */
export class Worker extends Base {
    eval;
    filename;
    cb;
    worker = null;
    #childId;
    env;
    // doesn't have to be cryptographically secure, just a gut check
    #childKey = String(Math.random());
    #timedOut;
    #workerEnded = false;
    constructor(options) {
        const { filename } = options;
        if (!filename) {
            throw new TypeError('no filename provided for t.worker()');
        }
        options.name =
            options.name || Worker.procName(filename, !!options.eval);
        super(options);
        this.#childId = String(options.childId || env.TAP_CHILD_ID || '1');
        this.filename = filename;
        this.eval = !!options.eval;
        this.env = {
            ...(options.env || env),
            TAP: '1',
            TAP_CHILD_ID: this.#childId,
            TAP_BAIL: this.bail ? '1' : '0',
            TAP_CHILD_KEY: this.#childKey,
        };
        this.bail = !!options.bail;
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
        this.parent?.emit('worker', this);
        const options = {
            ...this.options,
            eval: this.eval,
            stdout: true,
            env: this.env,
        };
        this.emit('preprocess', options);
        this.worker = new NodeWorker(this.filename, options);
        this.worker.stdout.pipe(this.parser);
        this.worker.on('error', e => this.threw(e));
        this.worker.on('exit', () => this.#onworkerexit());
        this.worker.on('message', msg => {
            const m = msg;
            if (m &&
                m.key === this.#childKey &&
                m.child === this.#childId) {
                this.setTimeout(m.setTimeout);
                return;
            }
            this.comment(...(Array.isArray(msg) ? msg : [msg]));
        });
        this.emit('process', this.worker);
    }
    threw(er, extra) {
        return throwToParser(this.parser, super.threw(er, extra));
    }
    #onworkerexit() {
        this.#workerEnded = true;
        if (this.results)
            this.#callCb();
    }
    timeout(options = { expired: this.name }) {
        this.#timedOut = options;
        // try to send the timeout signal.  If the child test process is
        // using node-tap as the test runner, and not caught in a busy
        // loop, it will trigger a dump of outstanding handles and refs.
        // If that doesn't do the job, then we fall back to thread termination.
        const worker = this.worker;
        if (worker) {
            try {
                worker.postMessage({
                    tapAbort: 'timeout',
                    key: this.#childKey,
                    child: this.childId,
                });
                /* c8 ignore start */
            }
            catch { }
            // need to ignore this bit because there's no way (by design) to
            // ignore the timeout signal, but it's theoretically possible that
            // it could be dropped or some busy-wait process prevents it from
            // being processed.
            const t = setTimeout(() => {
                // try to give it a chance to note the timeout and report handles
                try {
                    worker.terminate();
                }
                catch (er) { }
            }, 500);
            if (t.unref)
                t.unref();
            /* c8 ignore stop */
        }
    }
    oncomplete(results) {
        this.results = results;
        if (this.#workerEnded)
            this.#callCb();
    }
    #callCb() {
        if (this.#timedOut)
            super.timeout(this.#timedOut);
        const { results } = this;
        /* c8 ignore start */
        if (!results) {
            throw new Error('worker calling cb before parser ended??');
        }
        /* c8 ignore stop */
        // worker closing with no tests is treated as a skip.
        if (results.plan && results.plan.skipAll) {
            this.options.skip = results.plan.skipReason || true;
        }
        super.oncomplete(results);
        const { cb } = this;
        /* c8 ignore start */
        if (!cb) {
            throw new Error('tap worker finished before receiving cb??');
        }
        /* c8 ignore stop */
        cb();
    }
    comment(...args) {
        const body = format(...args);
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
    endAll() {
        if (this.worker) {
            this.parser.abort('test unfinished');
            this.worker.terminate();
        }
    }
    static procName(filename, ev) {
        const pref = '<worker> node';
        if (ev)
            return `${pref} -e <inline code>`;
        if (filename.indexOf(cwd) === 0) {
            filename = './' + filename.substring(cwd.length + 1);
        }
        filename = filename.replace(/\\/g, '/');
        return `${pref} ${filename}`;
    }
}
//# sourceMappingURL=worker.js.map