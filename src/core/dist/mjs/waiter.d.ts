export declare class Waiter {
    cb: null | ((w: Waiter) => any);
    ready: boolean;
    value: any;
    resolved: boolean;
    rejected: boolean;
    done: boolean;
    finishing: boolean;
    expectReject: boolean;
    promise: Promise<void>;
    resolve: null | ((value?: any) => void);
    constructor(promise: Promise<any | void>, cb: (w: Waiter) => any, expectReject?: boolean);
    reject(er: any): void;
    abort(er: Error): void;
    finish(): void;
}
//# sourceMappingURL=waiter.d.ts.map