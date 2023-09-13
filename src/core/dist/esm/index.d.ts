/**
 * Main export of the `@tapjs/core` module, providing the bulk of
 * the internal machinery of tests.
 *
 * @module
 */
import { CallSiteLike, CallSiteLikeJSON } from '@tapjs/stack';
export * from './tap-file.js';
export * from './base.js';
export * from './counts.js';
export * from './extra-from-error.js';
export * from './lists.js';
export * from './main-script.js';
export * from './minimal.js';
export * from './normalize-message-extra.js';
export * from './parse-test-args.js';
export * from './proc.js';
export * from './spawn.js';
export * from './stdin.js';
export * from './tap-dir.js';
export * from './test-base.js';
export * from './test-point.js';
export * from './waiter.js';
export * from './worker.js';
export { tap, TAP };
import { tap, TAP } from './tap.js';
import type { TestBase, TestBaseOpts } from './test-base.js';
/**
 * The `plugin` export from any tap plugin
 *
 * @template B - the return value of the plugin
 * @template O - test options added by this plugin
 */
export type TapPlugin<B extends Object, O extends TestBaseOpts | any = unknown> = unknown extends O ? (t: TestBase) => B : (t: TestBase, opts: O) => B;
/**
 * The extra info passed to assertions.
 *
 * Extended by BaseOpts, TestBaseOpts, and ultimately TestOpts, since any
 * subtest is also an assertion, and can take all the same assertion options.
 */
export interface Extra {
    bail?: boolean;
    todo?: string | boolean;
    skip?: string | boolean;
    at?: CallSiteLike | CallSiteLikeJSON | null;
    stack?: string;
    source?: string;
    errorOrigin?: {
        at?: CallSiteLike | CallSiteLikeJSON | null;
        stack?: string;
        source?: string;
    };
    found?: any;
    wanted?: any;
    doNotWant?: any;
    pattern?: any;
    diff?: string;
    message?: string;
    expired?: string;
    type?: string;
    error?: any;
    diagnostic?: boolean;
    tapChildBuffer?: string;
    test?: string;
    [k: string]: any;
}
/**
 * The optional `..., message, extra)` arguments passed to
 * test assertions.
 */
export type MessageExtra = [] | [string] | [Extra] | [string, Extra];
//# sourceMappingURL=index.d.ts.map