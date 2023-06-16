import type { Base, BaseOpts } from './base.js';
import { TestOpts } from '@tapjs/test';
export type TestArgs<T extends Base, O extends TestOpts | BaseOpts = TestOpts | BaseOpts> = [
    name?: string | number,
    extra?: O,
    cb?: false | ((t: T) => any),
    defaultName?: string
] | [extra: O, cb?: ((t: T) => any) | false] | [name: string | number, cb?: ((t: T) => any) | false] | [cb?: ((t: T) => any) | false] | [name: string] | [extra: O];
export declare const parseTestArgs: <T extends Base<import("./base.js").TapBaseEvents>, O extends TestOpts | BaseOpts = TestOpts | BaseOpts>(...args: TestArgs<T, O>) => O;
//# sourceMappingURL=parse-test-args.d.ts.map