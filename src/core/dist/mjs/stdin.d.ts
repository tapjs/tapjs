/// <reference types="node" />
/// <reference types="node" />
import { Minipass } from 'minipass';
import { Base, BaseOpts, TapBaseEvents } from './base.js';
export interface StdinOpts extends BaseOpts {
    tapStream?: NodeJS.ReadableStream | Minipass;
}
export interface StdinEvents extends TapBaseEvents {
}
export declare class Stdin extends Base<StdinEvents> {
    inputStream: NodeJS.ReadableStream | Minipass<string | Buffer>;
    constructor(options: StdinOpts);
    main(cb: () => void): void;
    threw(er: any, extra?: any, proxy?: boolean): void;
}
//# sourceMappingURL=stdin.d.ts.map