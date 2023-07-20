/// <reference types="node" />
/// <reference types="node" />
import type { Test, TestOpts } from '@tapjs/test';
import { Minipass } from 'minipass';
import { Readable } from 'node:stream';
import { FinalResults, Result as ParserResult } from 'tap-parser';
import { Base, BaseOpts } from './base.js';
import { Spawn } from './spawn.js';
import { Stdin } from './stdin.js';
import { Result, TestPoint } from './test-point.js';
import { Waiter } from './waiter.js';
import { Worker } from './worker.js';
import { IMPLICIT } from './implicit-end-sigil.js';
import { Counts, Extra, MessageExtra, TapBaseEvents } from './index.js';
export interface TestBaseOpts extends BaseOpts {
    /**
     * The number of jobs to run in parallel. Defaults to 1
     */
    jobs?: number;
    /**
     * Test function called when this Test is executed
     * This is usually not set on the extra object, but as an argument to
     * the `t.test(..)` method, just defined here so TS doesn't complain
     * when we reference it in the various flow control machinery.
     *
     * @internal
     */
    cb?: (...args: any[]) => any;
}
export type TapPlugin<B extends Object, O extends TestBaseOpts | any = unknown> = unknown extends O ? (t: TestBase) => B : (t: TestBase, opts: O) => B;
/**
 * Sigil to put in the queue to signal the end of all things
 */
declare const EOF: unique symbol;
export type { EOF };
export type QueueEntry = string | TestPoint | Base | typeof EOF | Waiter | [method: string, ...args: any[]] | (() => any);
/**
 * the promise returned by t.test(), t.spawn(), etc.
 * If a subtest was not created (because of being marked skipped,
 * the parent having bailed out, etc.) then the `subtest` field
 * will be set to `null`.
 */
export interface PromiseWithSubtest<S extends Base> extends Promise<FinalResults | null> {
    subtest: S | null;
}
export interface TestBaseEvents extends TapBaseEvents {
    subtestStart: [p: Base];
    idle: [];
    subtestEnd: [p: Base];
    subtestProcess: [p: Base];
    subtestAdd: [p: Base];
    result: [res: Result];
    assert: [res: ParserResult];
    stdin: [s: Stdin];
    spawn: [s: Spawn];
    worker: [w: Worker];
}
/**
 * The TestBaseBase class is the base class for all plugins,
 * and eventually thus the Test class.
 *
 * This implements subtest functionality, TAP stream generation,
 * lifecycle events, and only the most basic pass/fail assertions.
 *
 * All other features are added with plugins.
 */
export declare class TestBase extends Base<TestBaseEvents> {
    #private;
    parent?: TestBase;
    options: TestBaseOpts;
    /**
     * Attached when the Test class is instantiated from a TestBase,
     * as a reference to the final plugged-in Test instance.
     * If TestBase is used directly (outside the context of a plugin)
     * or during plugin setup time, this will be undefined, so watch out.
     */
    t: Test;
    donePromise?: Promise<any> & {
        tapAbortPromise?: () => void;
    };
    jobs: number;
    subtests: Base[];
    pool: Set<Base>;
    queue: QueueEntry[];
    cb?: (...args: any[]) => any;
    count: number;
    ended: boolean;
    diagnostic: null | boolean;
    /**
     * Subtests that are currently in process
     */
    activeSubtests: Set<Base>;
    /**
     * Count of all asserts in this and all child tests,
     * excluding child test summary points
     */
    assertTotals: Counts;
    /**
     * true if the test has printed at least one TestPoint
     */
    get printedResult(): boolean;
    /**
     * true if the test is currently waiting for something to finish
     */
    get occupied(): boolean;
    constructor(options: TestBaseOpts);
    /**
     * immediately exit this and all parent tests with a TAP
     * Bail out! message.
     */
    bailout(message?: string): void;
    /**
     * output a TAP comment, formatted like console.log()
     */
    comment(...args: any[]): void;
    /**
     * Called when the test times out.
     * Options are passed as diagnostics to the threw() method
     */
    timeout(options?: Extra & {
        expired?: string;
    }): void;
    /**
     * Set TAP pragma configs to affect the behavior of the parser.
     * Only `strict` is supported by the parser.
     */
    pragma(set: {
        [k: string]: boolean;
    }): void;
    /**
     * Specify the number of Test Points expected by this test.
     * Outputs a TAP plan line.
     */
    plan(n: number, comment?: string): void;
    plan(n: number, comment: string, implicit: typeof IMPLICIT): void;
    /**
     * A passing (ok) Test Point
     */
    pass(...[msg, extra]: MessageExtra): boolean;
    /**
     * A failing (not ok) Test Point
     */
    fail(...[msg, extra]: MessageExtra): boolean;
    /**
     * The current assertion being processed.  May only be set if
     * not already set.
     */
    get currentAssert(): null | Function | ((...a: any[]) => any);
    /**
     * The current assertion being processed.  May only be set if
     * not already set.
     */
    set currentAssert(fn: null | Function | ((...a: any[]) => any));
    /**
     * Print a Test Point
     */
    printResult(ok: boolean, message: string, extra: Extra, front?: boolean): void;
    end(implicit?: typeof IMPLICIT): this;
    /**
     * The leading `# Subtest` comment that introduces a child test
     */
    writeSubComment<T extends TestPoint | Base>(p: T): void;
    /**
     * Await the end of a Promise before proceeding.
     * The supplied callback is called with the Waiter object.
     */
    waitOn(promise: Promise<any | void>, cb?: (w: Waiter) => any, expectReject?: boolean): Promise<void>;
    get fullname(): string;
    get idle(): boolean;
    /**
     * @internal
     */
    main(cb: () => void): void;
    /**
     * Parse stdin as the only tap stream (ie, not as a child test)
     * If used, then no other subtests or assertions are allowed.
     */
    stdinOnly<T extends BaseOpts>(extra?: T & {
        tapStream?: Readable | Minipass<string | Buffer>;
    }): void;
    /**
     * Mount a subtest, using this Test object as a harness.
     * Exposed mainly so that it can be used by builtin plugins.
     *
     * @internal
     */
    sub<T extends Base, O extends BaseOpts>(Class: {
        new (options: O): T;
    }, extra: TestBaseOpts | BaseOpts | TestOpts | O | undefined, caller: (...a: any[]) => unknown): PromiseWithSubtest<T>;
    threw(er: any, extra?: Extra, proxy?: boolean): Extra | void | undefined;
    onbail(message?: string): void;
    endAll(sub?: boolean): void;
    /**
     * Return true if the child test represented by the options object
     * should be skipped.  Extended by the grep/only filtering plugins.
     */
    shouldSkipChild(extra: TestOpts | TestBaseOpts | BaseOpts): boolean;
}
//# sourceMappingURL=test-base.d.ts.map