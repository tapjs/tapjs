"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TapFile = void 0;
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const base_js_1 = require("./base.js");
const proc_js_1 = require("./proc.js");
const throw_to_parser_js_1 = require("./throw-to-parser.js");
/**
 * Class representing a file as a TAP stream
 *
 * @internal
 */
class TapFile extends base_js_1.Base {
    caughtName = 'tapFileError';
    emitName = 'tapFile';
    cwd;
    filename;
    tapStream;
    constructor(options) {
        const { filename, tapStream, cwd = proc_js_1.cwd } = options;
        const name = options.name ||
            (filename
                ? (0, node_path_1.relative)(cwd, filename).replace(/\.tap$/, '')
                : 'file input');
        super({ ...options, name });
        this.filename = filename;
        this.cwd = cwd;
        this.tapStream = tapStream;
        this.tapStream?.pause();
    }
    main(cb) {
        const { tapStream, filename } = this;
        if (filename && !tapStream) {
            this.tapStream = (0, node_fs_1.createReadStream)(filename);
        }
        else if (!this.tapStream) {
            throw new Error('either tapStream or filename must be provided');
        }
        this.tapStream.on('error', er => {
            er.tapCaught = this.caughtName;
            this.threw(er);
        });
        if (this.options.timeout) {
            this.setTimeout(this.options.timeout);
        }
        const s = this.tapStream;
        s.pipe(this.parser);
        if (this.parent) {
            this.parent.emit(this.emitName, this);
        }
        s.once('end', cb);
        s.once('error', cb);
        this.tapStream.resume();
    }
    threw(er, extra) {
        return (0, throw_to_parser_js_1.throwToParser)(this.parser, super.threw(er, extra));
    }
}
exports.TapFile = TapFile;
//# sourceMappingURL=tap-file.js.map