"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stdin = void 0;
const tap_file_js_1 = require("./tap-file.js");
/**
 * Class representing standard input as a TAP stream
 *
 * Instantiated by `t.stdin()`, typically.
 *
 * @internal
 */
class Stdin extends tap_file_js_1.TapFile {
    caughtName = 'stdinError';
    emitName = 'stdin';
    constructor(options) {
        super({
            tapStream: process.stdin,
            name: '/dev/stdin',
            ...options,
            filename: '/dev/stdin',
        });
    }
}
exports.Stdin = Stdin;
//# sourceMappingURL=stdin.js.map