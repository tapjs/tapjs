import type { Base, BaseOpts } from './base.js';
import { TestOpts } from '@tapjs/test';
export type TestArgs<T extends Base, O extends TestOpts | BaseOpts = TestOpts | BaseOpts> = [] | [name: string] | [cb: ((t: T) => any) | false] | [extra: O] | [name: string | number, cb: ((t: T) => any) | false] | [name: string | number, extra: O] | [extra: O, cb: ((t: T) => any) | false] | [
    name: string | number,
    extra: O,
    cb: false | ((t: T) => any),
    defaultName?: string
];
export declare const parseTestArgs: <T extends Base<import("./base.js").TapBaseEvents>, O extends BaseOpts | TestOpts = BaseOpts | TestOpts>(...args: TestArgs<T, O>) => O;
//# sourceMappingURL=parse-test-args.d.ts.map