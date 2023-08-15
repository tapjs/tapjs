/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { Minipass } from 'minipass';
import { Base, BaseOpts, TapBaseEvents } from './base.js';
/**
 * Options that may be provided to the {@link @tapjs/core!stdin.Stdin} class
 */
export interface StdinOpts extends BaseOpts {
    tapStream?: NodeJS.ReadableStream | Minipass<Buffer> | Minipass<string>;
}
export interface StdinEvents extends TapBaseEvents {
}
/**
 * Class representing standard input as a TAP stream
 *
 * Instantiated by `t.stdin()`, typically.
 *
 * @internal
 */
export declare class Stdin extends Base<StdinEvents> {
    inputStream: NodeJS.ReadableStream | Minipass<Buffer> | Minipass<string>;
    constructor(options: StdinOpts);
    main(cb: () => void): void;
    threw(er: any, extra?: any, proxy?: boolean): void;
}
//# sourceMappingURL=stdin.d.ts.map