/**
 * Plugin class providing {@link @tapjs/after!After#after} and
 * {@link @tapjs/after!After#teardown} on the
 * {@link @tapjs/test!index.Test} class.
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
     * Alias for {@link @tapjs/after!After#after}
     */
    teardown(fn: () => any): void;
    /**
     * Runs the supplied function after the test is completely finished, and
     * before the next test starts.
     */
    after(fn: () => any): void;
}
/**
 * Plugin method that creates the {@link @tapjs/after!After} instance
 */
export declare const plugin: TapPlugin<After>;
//# sourceMappingURL=index.d.ts.map