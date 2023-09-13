import type { Base, BaseOpts } from './base.js';
export type Opts = Exclude<BaseOpts, 'parent'> & {
    parent?: any;
};
/**
 * Argument signatures that may be passed to a subtest method.
 *
 * If a callback is not provided, then the test is marked as `todo`.
 */
export type TestArgs<T extends Base, O extends Opts = Opts> = [] | [name: string] | [cb: ((t: T) => any) | false] | [extra: O] | [name: string | number, cb: ((t: T) => any) | false] | [name: string | number, extra: O] | [extra: O, cb: ((t: T) => any) | false] | [
    name: string | number,
    extra: O,
    cb: false | ((t: T) => any),
    defaultName?: string
];
/**
 * Normalize the arguments provided to a subtest method
 */
export declare const parseTestArgs: <T extends Base<import("./base.js").TapBaseEvents>, O extends Opts = Opts>(...args: TestArgs<T, O>) => O;
//# sourceMappingURL=parse-test-args.d.ts.map