"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
// the .worker() method is only added to the root test object
// See https://github.com/tapjs/node-tap/issues/812
const base_js_1 = require("./base.js");
const proc_js_1 = require("./proc.js");
const node_util_1 = require("node:util");
const node_worker_threads_1 = require("node:worker_threads");
class Worker extends base_js_1.Base {
    filename;
    cb;
    #worker;
    #childId;
    #env;
    // doesn't have to be cryptographically secure, just a gut check
    #tapAbortKey = String(Math.random());
    #timedOut;
    #parserEnded = false;
    #workerEnded = false;
    constructor(options) {
        const { filename } = options;
        if (!filename) {
            throw new TypeError('no filename provided for t.worker()');
        }
        super(options);
        this.#childId = String(options.childId || proc_js_1.env.TAP_CHILD_ID || '0');
        this.filename = filename;
        this.#env = options.env || proc_js_1.env;
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
            stdout: true,
            env: {
                ...this.#env,
                TAP: '1',
                TAP_CHILD_ID: this.#childId,
                TAP_BAIL: this.bail ? '1' : '0',
                TAP_ABORT_KEY: this.#tapAbortKey,
            },
        };
        this.emit('preprocess', options);
        this.#worker = new node_worker_threads_1.Worker(this.filename, options);
        this.#worker.stdout.pipe(this.parser);
        this.#worker.on('error', e => this.threw(e));
        this.#worker.on('exit', () => this.#onworkerexit());
        this.#worker.on('message', m => this.comment(m));
        this.emit('process', this.#worker);
    }
    #onworkerexit() {
        if (this.#timedOut)
            super.timeout(this.#timedOut);
        this.#workerEnded = true;
        if (this.#parserEnded)
            this.#callCb();
        this.setTimeout(0);
    }
    timeout(options = { expired: this.name }) {
        this.#timedOut = options;
        // try to send the timeout signal.  If the child test process is
        // using node-tap as the test runner, and not caught in a busy
        // loop, it will trigger a dump of outstanding handles and refs.
        // If that doesn't do the job, then we fall back to thread termination.
        const worker = this.#worker;
        if (worker) {
            try {
                worker.postMessage({
                    tapAbort: 'timeout',
                    key: this.#tapAbortKey,
                    child: this.childId,
                });
                /* c8 ignore start */
            }
            catch (_) { }
            /* c8 ignore stop */
            const t = setTimeout(() => {
                // try to give it a chance to note the timeout and report handles
                try {
                    worker.terminate();
                }
                catch (er) { }
            }, 500);
            /* c8 ignore start */
            if (t.unref)
                t.unref();
            /* c8 ignore stop */
        }
    }
    oncomplete(results) {
        super.oncomplete(results);
        this.#parserEnded = true;
        if (this.#workerEnded)
            this.#callCb();
    }
    #callCb() {
        const { cb } = this;
        /* c8 ignore start */
        if (!cb) {
            throw new Error('tap worker finished before receiving cb??');
        }
        /* c8 ignore stop */
        cb();
    }
    comment(...args) {
        const body = (0, node_util_1.format)(...args);
        const message = ('# ' + body.split(/\r?\n/).join('\n# ')).trim() + '\n';
        if (this.parser.results) {
            console.log(message);
        }
        else {
            this.parser.write(message);
        }
    }
}
exports.Worker = Worker;
//# sourceMappingURL=worker.js.map