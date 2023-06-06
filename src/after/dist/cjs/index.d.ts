import { TapPlugin, TestBase } from '@tapjs/core';
export declare class After {
    #private;
    constructor(t: TestBase);
    /**
     * Alias for `t.after(fn)`
     */
    teardown(fn: () => any): void;
    /**
     * Just run the supplied function right away.
     * Runs after the test is completely finished, and before the next
     * test starts.
     */
    after(fn: () => any): void;
}
export declare const plugin: TapPlugin<After>;
//# sourceMappingURL=index.d.ts.map