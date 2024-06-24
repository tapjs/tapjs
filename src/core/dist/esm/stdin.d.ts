import { Minipass } from 'minipass';
import { BaseOpts } from './base.js';
import { TapFile } from './tap-file.js';
/**
 * Options that may be provided to the {@link @tapjs/core!stdin.Stdin} class
 */
export interface StdinOpts extends BaseOpts {
    tapStream?: NodeJS.ReadableStream | Minipass<Buffer> | Minipass<string>;
}
/**
 * Class representing standard input as a TAP stream
 *
 * Instantiated by `t.stdin()`, typically.
 *
 * @internal
 */
export declare class Stdin extends TapFile {
    caughtName: string;
    emitName: string;
    filename: '/dev/stdin';
    tapStream: NodeJS.ReadableStream | Minipass<Buffer> | Minipass<string>;
    constructor(options: StdinOpts);
}
//# sourceMappingURL=stdin.d.ts.map