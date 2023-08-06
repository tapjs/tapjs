/**
 * Plugin class providing {@link After#after} and {@link After#teardown}
 * on the {@link Test} class.
 *
 * @module
 */
import { TapPlugin, TestBase } from '@tapjs/core';
/**
 * Implementation class returned by plugin function
 */
export declare class After {
    #private;
    constructor(t: TestBase);
    /**
     * Alias for {@link After#after}
     */
    teardown(fn: () => any): void;
    /**
     * Runs the supplied function after the test is completely finished, and
     * before the next test starts.
     */
    after(fn: () => any): void;
}
/**
 * Plugin method that creates the {@link After} instance
 */
export declare const plugin: TapPlugin<After>;
//# sourceMappingURL=index.d.ts.map