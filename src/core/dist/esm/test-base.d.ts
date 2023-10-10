/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import type { Test } from '@tapjs/test';
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
import { Extra, MessageExtra, TapBaseEvents, TapFile } from './index.js';
/**
 * Options that can be passed to TestBase objects
 */
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
     *
     * @group Internal Machinery
     */
    cb?: (...args: any[]) => any;
}
/**
 * Sigil to put in the queue to signal the end of all things
 */
declare const EOF: unique symbol;
export type { EOF };
/**
 * Entries in the {@link @tapjs/core!test-base.TestBase#queue} awaiting
 * processing
 */
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
/**
 * Events emitted by TestBase and inherited classes
 */
export interface TestBaseEvents extends TapBaseEvents {
    /**
     * Emitted when a subtest begins running
     *
     * @event
     */
    subtestStart: [p: Base];
    /**
     * Emitted when a subtest is completed and no longer active, but may
     * not yet have been processed by the parent test.
     *
     * @event
     */
    subtestEnd: [p: Base];
    /**
     * Emitted when a subtest begins to be processed.
     *
     * @event
     */
    subtestProcess: [p: Base];
    /**
     * Emitted when a subtest is added to its parent's management
     *
     * @event
     */
    subtestAdd: [p: Base];
    /**
     * Emitted whenever the test has an assertion result, with the minimal
     * `{ ok, message, extra }` result object.
     *
     * @event
     */
    result: [res: Result];
    /**
     * Emitted when the parser emits a result, with the full parser result
     * object
     *
     * @event
     */
    assert: [res: ParserResult];
    /**
     * Emitted when a child test is initiated that will process stdin
     * as a TAP stream
     *
     * @event
     */
    stdin: [s: Stdin];
    /**
     * Emitted when a child test is initiated that will process a subprocess
     * output as a TAP stream
     *
     * @event
     */
    spawn: [s: Spawn];
    /**
     * Emitted when a child test is initiated that will process a node
     * Worker thread's output as a TAP stream
     *
     * @event
     */
    worker: [w: Worker];
    /**
     * Emitted when a child tests is initiated that replays a .tap file.
     *
     * @event
     */
    tapFile: [tf: TapFile];
    /**
     * Emitted when the test is in an idle state, not waiting
     * for anything, with nothing in its queue. Used by the root
     * {@link @tapjs/core!tap.TAP} singleton to know when to automatically
     * terminate.
     *
     * @event
     */
    idle: [];
}
/**
 * The TestBase class is the parent class of {@link @tapjs/test!index.Test},
 * and passed
 * to all plugins at instantiation time.
 *
 * This implements subtest functionality, TAP stream generation,
 * lifecycle events, and only the basic pass/fail assertion methods.
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
     *
     * @group Test Reflection
     */
    t: Test;
    /**
     * A promise that resolves when the test is done.
     *
     * @group Internal Machinery
     */
    donePromise?: Promise<any> & {
        tapAbortPromise?: () => void;
    };
    /**
     * The number of subtests to run in parallel, if allowed
     *
     * @group Test Lifecycle Management
     */
    jobs: number;
    /**
     * Array of all subtests that have been added/scheduled,
     * and have not yet completed.
     *
     * @group Internal Machinery
     */
    subtests: Base[];
    /**
     * The pool of parallel tests currently in process
     *
     * @group Internal Machinery
     */
    pool: Set<Base>;
    /**
     * Queue of items awaiting processing. Can be any
     * {@link @tapjs/core!test-base.QueueEntry} item.
     *
     * @group Internal Machinery
     */
    queue: QueueEntry[];
    /**
     * Function that will get this test as an argument when it is processed
     *
     * @internal
     *
     * @group Internal Machinery
     */
    cb?: (...args: any[]) => any;
    /**
     * The count of all assertions made directly on this test.
     *
     * @group Test Reflection
     */
    count: number;
    /**
     * Set true when {@link @tapjs/core!test-base.TestBase#end} is called
     */
    ended: boolean;
    /**
     * Show diagnostics for this test. A value of `null` means that
     * diagnostics will be shown only if the test is failing.
     */
    diagnostic: null | boolean;
    /**
     * Subtests that are currently in process.
     *
     * @group Internal Machinery
     */
    activeSubtests: Set<Base>;
    /**
     * Count of all asserts in this and all child tests,
     * excluding child test summary points
     *
     * @group Test Reflection
     */
    get assertTotals(): import("./counts.js").Counts;
    /**
     * true if the test has printed at least one TestPoint
     *
     * @group Test Reflection
     */
    get printedResult(): boolean;
    /**
     * true if the test is currently waiting for something to finish
     *
     * @group Test Reflection
     */
    get occupied(): boolean;
    constructor(options: TestBaseOpts);
    /**
     * immediately exit this and all parent tests with a TAP
     * Bail out! message.
     *
     * @group Test Lifecycle Management
     */
    bailout(message?: string): void;
    /**
     * output a TAP comment, formatted like console.log()
     *
     * If the test is currently awaiting a child test, it will be deferred
     * until after the child test completes.
     *
     * If the test is already completed, the comment will be emitted
     * on the parent, or if no parent is available, it will be printed
     * to standard output.
     */
    comment(...args: any[]): void;
    /**
     * Called when the test times out.
     * Options are passed as diagnostics to the threw() method
     *
     * @internal
     *
     * @group Internal Machinery
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
     *
     * @group Test Lifecycle Management
     */
    plan(n: number, comment?: string): void;
    plan(n: number, comment: string, implicit: typeof IMPLICIT): void;
    /**
     * A passing (ok) Test Point.
     *
     * @group Assertion Methods
     */
    pass(...[msg, extra]: MessageExtra): boolean;
    /**
     * A failing (not ok) Test Point
     *
     * @group Assertion Methods
     */
    fail(...[msg, extra]: MessageExtra): boolean;
    /**
     * The current assertion being processed. Set at the start of all
     * assertions, and used for calculating stack traces.
     *
     * @group Internal Machinery
     */
    get currentAssert(): undefined | Function | ((...a: any[]) => any);
    set currentAssert(fn: undefined | Function | ((...a: any[]) => any));
    /**
     * Explicitly mark the test as completed, outputting the TAP plan line if
     * needed.
     *
     * This is not required to be called if the test function returns a promise,
     * or if a plan is explicitly declared and eventually fulfilled.
     *
     * @group Test Lifecycle Management
     */
    end(implicit?: typeof IMPLICIT): this;
    /**
     * Await the end of a Promise before proceeding.
     * The supplied callback is called with the Waiter object.
     *
     * This is internal, used in some plugins when a promise must be awaited
     * before proceeding. In normal test usage, it's usually best to simply use
     * an async test function and `await` promises as normal.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    waitOn(promise: Promise<any | void>, cb?: (w: Waiter) => any, expectReject?: boolean): Promise<void>;
    /**
     * The full name of the test, starting with the main script name,
     * and including all parent names.
     */
    get fullname(): string;
    /**
     * True if the test is currently in an idle state
     */
    get idle(): boolean;
    /**
     * The main function that starts a test running. Generally no need
     * to call this directly.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    main(cb: () => void): void;
    /**
     * Parse stdin as the only tap stream (ie, not as a child test)
     * If used, then no other subtests or assertions are allowed.
     *
     * @group Subtest Methods
     */
    stdinOnly<T extends BaseOpts>(extra?: T & {
        tapStream?: Readable | Minipass<string | Buffer>;
    }): void;
    /**
     * Mount a subtest, using this Test object as a harness.
     * Exposed so that it can be used by some builtin plugins, but perhaps
     * the least convenient way imaginable to create subtests. Just use
     * `t.test()` to do that, it's much easier.
     *
     * @group Subtest Methods
     *
     * @internal
     */
    sub<T extends Base, O extends BaseOpts>(Class: {
        new (options: O): T;
    }, extra?: O | TestBaseOpts, caller?: (...a: any[]) => unknown): PromiseWithSubtest<T>;
    /**
     * Method called when an unrecoverable error is encountered in a test.
     *
     * Typically, in tests you would not call this, you'd just actually throw
     * an error.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    threw(er: any, extra?: Extra, proxy?: boolean): Extra | void | undefined;
    /**
     * Method called when the parser encounters a bail out
     *
     * To listen to bailout events, listen to the
     * {@link @tapjs/core!base.TapBaseEvents#bailout} event:
     *
     * ```ts
     * t.on('bailout', message => {
     *   // test bailed out!
     * })
     * ```
     *
     * @internal
     *
     * @group Internal Machinery
     */
    onbail(message?: string): void;
    /**
     * Called when a test times out or bails out, or the process ends,
     * marking all currently active or queued subtests as incomplete.
     *
     * No need to ever call this directly, exposed so that it can be extended by
     * {@link @tapjs/core!spawn.Spawn} and {@link @tapjs/core!worker.Worker},
     * which have special behaviors that are required when a process hangs
     * indefinitely.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    endAll(sub?: boolean): void;
    /**
     * Return true if the child test represented by the options object
     * should be skipped.  Extended by the `@tapjs/filter` plugin.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    shouldSkipChild<O extends BaseOpts>(extra: O | TestBaseOpts | BaseOpts): boolean;
}
//# sourceMappingURL=test-base.d.ts.map