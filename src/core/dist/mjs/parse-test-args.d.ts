import type { Base, BaseOpts } from './base.js';
import { TestOpts } from '@tapjs/test';
export type TestArgs<T extends Base> = [
    name?: string | number,
    extra?: TestOpts | BaseOpts,
    cb?: false | ((t: T) => any),
    defaultName?: string
] | [
    extra: TestOpts | BaseOpts,
    cb?: ((t: T) => any) | false
] | [name: string | number, cb?: ((t: T) => any) | false] | [cb?: ((t: T) => any) | false] | [name: string] | [extra: TestOpts | BaseOpts];
export declare const parseTestArgs: <T extends Base<import("./base.js").TapBaseEvents>>(...args: TestArgs<T>) => TestOpts;
//# sourceMappingURL=parse-test-args.d.ts.map