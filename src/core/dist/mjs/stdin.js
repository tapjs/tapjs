import { TapFile } from './tap-file.js';
/**
 * Class representing standard input as a TAP stream
 *
 * Instantiated by `t.stdin()`, typically.
 *
 * @internal
 */
export class Stdin extends TapFile {
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
//# sourceMappingURL=stdin.js.map