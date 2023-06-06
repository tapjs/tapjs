import { Base } from './base.js';
export class Stdin extends Base {
    inputStream;
    constructor(options) {
        super({
            ...options,
            name: options.name || '/dev/stdin',
        });
        this.inputStream = options.tapStream || process.stdin;
        this.inputStream.pause();
    }
    main(cb) {
        this.inputStream.on('error', er => {
            er.tapCaught = 'stdinError';
            this.threw(er);
        });
        if (this.options.timeout) {
            this.setTimeout(this.options.timeout);
        }
        const s = this.inputStream;
        s.pipe(this.parser);
        if (this.parent) {
            this.parent.emit('stdin', this);
        }
        this.inputStream.resume();
        this.once('end', cb);
    }
    threw(er, extra, proxy) {
        extra = super.threw(er, extra, proxy);
        Object.assign(this.options, extra);
        this.parser.abort(er.message, extra);
        this.parser.end();
    }
}
//# sourceMappingURL=stdin.js.map