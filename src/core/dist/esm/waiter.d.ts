/**
 * Basically a fancy Deferred, wrapped around an existing promise, used by
 * the {@link @tapjs/core!test-base.TestBase#waitOn} method, and
 * tracked in the {@link @tapjs/core!test-base.TestBase#queue}.
 *
 * The callback function is called when it's been either resolved or
 * rejected. The Waiter internal promise is resolved if the wrapped
 * promise matches our expectation. The value member is the resolved
 * value or rejection error.
 */
export declare class Waiter {
    /**
     * Callback to call when the promise resolves, or null if not provided
     */
    cb: null | ((w: Waiter) => any);
    /**
     * whether or not this waiter is ready to process
     */
    ready: boolean;
    /**
     * The resolved value, or the error that was raised on rejection
     */
    value: any;
    /**
     * True if the promise resolved successfully
     */
    resolved: boolean;
    /**
     * True if the promise rejected
     */
    rejected: boolean;
    /**
     * Set when the Waiter's promise has either resolved or rejected
     */
    done: boolean;
    finishing: boolean;
    expectReject: boolean;
    promise: Promise<void>;
    resolve: null | ((value?: any) => void);
    constructor(promise: Promise<any | void>, cb: (w: Waiter) => any, expectReject?: boolean);
    /**
     * called when the promise rejects
     */
    reject(er: any): void;
    /**
     * Tell the waiter to abandon the promise and stop waiting.
     * Called when tests time out or bail out.
     */
    abort(er: Error): void;
    /**
     * Called when the waiter is ready, and processed by its owning
     * {@link @tapjs/core!test-base.TestBase}
     */
    finish(): void;
}
//# sourceMappingURL=waiter.d.ts.map