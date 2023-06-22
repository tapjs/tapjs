// the .worker() method is only added to the root test object
// See https://github.com/tapjs/node-tap/issues/812
import { Base } from './base.js';
import { env } from './proc.js';
import { format } from 'node:util';
import { Worker as NodeWorker } from 'node:worker_threads';
export class Worker extends Base {
    filename;
    cb;
    #worker;
    constructor(options) {
        const { filename } = options;
        if (!filename) {
            throw new TypeError('no filename provided for t.worker()');
        }
        super(options);
        this.filename = filename;
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
        this.#worker = new NodeWorker(this.filename, {
            ...this.options,
            stdout: true,
            // TODO: take options.env like Spawn does
            env: {
                ...env,
                TAP: '1',
                TAP_CHILD_ID: String(this.childId),
            },
        });
        this.#worker.stdout.pipe(this.parser);
        this.#worker.on('error', e => this.threw(e));
        this.#worker.on('exit', () => this.setTimeout(0));
        this.#worker.on('message', m => this.comment(m));
    }
    // TODO: if we time out, terminate worker like how spawn terminates proc
    // TODO: both parser complete AND workerexit have to happen?
    // or should we terminate here?  give it a moment to exit if it hasn't?
    oncomplete(results) {
        super.oncomplete(results);
        const { cb } = this;
        /* c8 ignore start */
        if (!cb) {
            throw new Error('tap worker finished parser before receiving cb??');
        }
        /* c8 ignore stop */
        cb();
    }
    // TODO: use message port to send timeout signal like spawn() ipc
    comment(...args) {
        const body = format(...args);
        const message = ('# ' + body.split(/\r?\n/).join('\n# ')).trim() + '\n';
        if (this.parser.results) {
            console.log(message);
        }
        else {
            this.parser.write(message);
        }
    }
}
//# sourceMappingURL=worker.js.map