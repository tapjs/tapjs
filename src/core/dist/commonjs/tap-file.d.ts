/// <reference types="node" />
/// <reference types="node" />
/**
 * This is not very useful in many cases outside of the tap runner itself,
 * where it's used to replay previous stored test results.
 *
 * @module
 */
import { Minipass } from 'minipass';
import { Base, BaseOpts, TapBaseEvents } from './base.js';
/**
 * Options that may be provided to the {@link @tapjs/core!tap-file.TapFile}
 * class
 */
export interface TapFileOpts extends BaseOpts {
    /**
     * Optionally provide a stream of content to treat as the file's TAP data
     */
    tapStream?: NodeJS.ReadableStream | Minipass<Buffer> | Minipass<string>;
    /**
     * The file to read, required if tapStream not provided
     */
    filename?: string;
    /**
     * just used to calculate the default name from the filename
     * ignored otherwise
     */
    cwd?: string;
}
export interface TapFileEvents extends TapBaseEvents {
}
/**
 * Class representing a file as a TAP stream
 *
 * @internal
 */
export declare class TapFile extends Base<TapFileEvents> {
    caughtName: string;
    emitName: string;
    cwd?: string;
    filename?: string;
    tapStream?: NodeJS.ReadableStream | Minipass<Buffer> | Minipass<string>;
    constructor(options: TapFileOpts);
    static getName(name?: string, filename?: string, cwd?: string): string;
    main(cb: () => void): void;
    threw(er: any, extra?: any): import("./index.js").Extra | undefined;
}
//# sourceMappingURL=tap-file.d.ts.map