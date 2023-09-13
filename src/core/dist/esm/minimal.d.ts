import { PromiseWithSubtest, TestBase, TestBaseOpts } from './test-base.js';
/**
 * A very minimal Test class with no plugins, which can be used in tap tests.
 *
 * It is essentially just the TestBase class, but automatically starting in the
 * constructor, and with a .test() method so that it can be used somewhat like
 * a "normal" Test instance.
 *
 * The reason that this method does not live on TestBase itself is that it
 * would make it more awkward to define on the Test class, with all its plugins
 * and extensions.
 *
 * Only useful if you want a Test without any plugins, for some reason.
 */
export declare class Minimal extends TestBase {
    constructor(opts: TestBaseOpts);
    /**
     * Spawn a subtest that is also a {@link @tapjs/core!minimal.Minimal}
     */
    test(name: string, extra: TestBaseOpts, cb: (t: Minimal) => any): PromiseWithSubtest<Minimal>;
    test(name: string, cb: (t: Minimal) => any): PromiseWithSubtest<Minimal>;
    test(extra: TestBaseOpts, cb: (t: Minimal) => any): PromiseWithSubtest<Minimal>;
    test(cb: (t: Minimal) => any): PromiseWithSubtest<Minimal>;
}
//# sourceMappingURL=minimal.d.ts.map