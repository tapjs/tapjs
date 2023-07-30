/// <reference types="node" resolution-mode="require"/>
import { Minipass } from 'minipass';
import { Parser } from 'tap-parser';
export declare const instances: () => Reporter[];
export default class Reporter extends Minipass<string> {
    parser: Parser;
    constructor();
    write(c: string | Buffer): boolean;
    end(): this;
}
//# sourceMappingURL=index.d.ts.map