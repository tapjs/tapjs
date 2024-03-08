/**
 * The base class that is extended by all TAP-generating classes
 *
 * @module
 */
/// <reference types="node" />
/// <reference types="node" />
import { Domain } from 'async-hook-domain';
import { AsyncResource } from 'async_hooks';
import { Minipass } from 'minipass';
import { FinalResults, Parser, TapError } from 'tap-parser';
import { Deferred } from 'trivial-deferred';
import { Counts } from './counts.js';
import type { Extra, TestBase } from './index.js';
import { Lists } from './lists.js';
/**
 * Events emitted by the Base class
 */
export interface TapBaseEvents extends Minipass.Events<string> {
    /**
     * emitted when a timeout occurs
     */
    timeout: [threw?: Extra];
    /**
     * emitted when the test bails out
     */
    bailout: [reason?: string];
    /**
     * emitted when the test is complete
     */
    complete: [results: FinalResults];
}
/**
 * Wrapper for the async-hook-domain that catches errors thrown during
 * test operation.
 *
 * @see {@link https://npmjs.com/async-hook-domain}
 */
export declare class TapWrap extends AsyncResource {
    test: Base;
    onDestroy?: () => void;
    constructor(test: Base);
    emitDestroy(): this;
}
/**
 * A number indicating an amount of milliseconds
 */
export type MILLISECONDS = number;
/**
 * Options that may be passed to any TAP-generating class
 */
export interface BaseOpts extends Extra {
    /**
     * Bail out on the first failure
     */
    bail?: boolean;
    /**
     * Treat any unknown non-TAP data as an error
     * May be set at run-time by the TAP stream using `pragma +strict`
     */
    strict?: boolean;
    /**
     * Do not emit the `TAP version 14` line.
     */
    omitVersion?: boolean;
    /**
     * Do not elide empty lines and other unnecessary whitespace
     */
    preserveWhitespace?: boolean;
    /**
     * Skip this test entirely, emitting a `# SKIP` directive
     */
    skip?: boolean | string;
    /**
     * Mark this test as to be done later, emitting a `# TODO` directive
     */
    todo?: boolean | string;
    /**
     * Amount of time in milliseconds before this test times out
     */
    timeout?: MILLISECONDS;
    /**
     * track passes in the results lists, default false
     */
    passes?: boolean;
    /**
     * treat todo tests as failures, default false
     */
    failTodo?: boolean;
    /**
     * treat skip tests as failures, default false
     */
    failSkip?: boolean;
    /**
     * The amount of time that this test took to complete.
     *
     * Typically, this is not set explicitly, but inferred from the actual
     * time spent. However in some cases, it may be reported by the
     * top-level `# time=...` comment in a TAP subprocess stream.
     */
    time?: number;
    /**
     * The TAP data from a buffered test.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    tapChildBuffer?: string;
    /**
     * The stack where this test was initiated
     */
    stack?: string;
    /**
     * Parent test of this test
     */
    parent?: Base | TestBase;
    /**
     * The name of this test
     */
    name?: string;
    /**
     * Numeric identifier attached to child tests. Most of the time, this is
     * set based on the `TAP_CHILD_ID` environment variable.
     */
    childId?: number;
    /**
     * Any arbitrary data that is provided to this test object. Often, this
     * is set in a `t.before()` or `t.beforeEach()` method. Scalar values
     * are inherited by child tests. Object values are extended in child
     * tests using `Object.create()`.
     *
     * If not set in the options, this is initialized to a null-prototyped
     * object, so that usage like `t.context.foo = 'bar'` will work as expected.
     *
     * This is initialized and set on the Test object in the `runMain` method,
     * *not* at construction time. If set explicitly on the Test object in a
     * `before` hook, then any context specified on options or inherited from
     * the parent test will be ignored.
     */
    context?: any;
    /**
     * Number of spaces that this test is indented.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    indent?: string;
    /**
     * True to output LOTS AND LOTS of noisy debugging information.
     * Set at the top level by the `TAP_DEBUG` environment variable.
     */
    debug?: boolean;
    /**
     * Parser to use for this TAP stream.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    parser?: Parser;
    /**
     * True if this test should be buffered, and only processed once
     * complete.
     *
     * Defaults to true when `t.jobs` is set to a value greater than 1.
     *
     * If set false in that case, then the test will NOT be run in parallel,
     * so this provides a way to control the parallelism within a test suite.
     */
    buffered?: boolean;
    /**
     * Setting silent:true in a subtest option makes it completely excluded
     * from test output, UNLESS it fails.
     *
     * This was used historically for a few things which are now implemented
     * with a more sophisticated promise management system, but can be handy in
     * some rare situations.
     */
    silent?: boolean;
}
export declare class Base<Events extends TapBaseEvents = TapBaseEvents> extends Minipass<string, string, Events> {
    #private;
    /**
     * Set upon test completion when a child test is ready to be processed by its
     * parent.
     */
    readyToProcess: boolean;
    /**
     * Options provided to this test
     */
    options: BaseOpts;
    /**
     * number of spaces to indent the TAP stream
     */
    indent: string;
    /**
     * TapWrap AsyncResource that limits the async-hook-domain
     *
     * @group Internal Machinery
     */
    hook: TapWrap;
    /**
     * the async-hook-domain that catches throws and Promise rejections
     *
     * @group Internal Machinery
     */
    hookDomain: Domain;
    /**
     * The timer that fires when the test times out
     *
     * @group Internal Machinery
     */
    timer?: NodeJS.Timeout;
    /**
     * Set to true when the test times out, so its failure status can be
     * determined later.
     */
    timedOut: boolean;
    /**
     * The tap parser attached to this TAP stream
     *
     * @group Internal Machinery
     */
    parser: Parser;
    /**
     * Method that writes to stderr when `debug: true` is set in the options,
     * or no-ops otherwise
     */
    debug: (...args: any[]) => void;
    /**
     * The count of all assertions that this stream emitted
     *
     * @group Test Reflection
     */
    counts: Counts;
    /**
     * Lists of todo, skip, and failure test points. If `passes: true` is
     * set in the options, then passing test points will also be tracked.
     *
     * @group Test Reflection
     */
    lists: Lists;
    /**
     * the name of this test
     *
     * @group Test Reflection
     */
    name: string;
    /**
     * Set on completion. The results of the test run.
     *
     * @group Test Reflection
     */
    results?: FinalResults;
    /**
     * Parent test of this TAP stream
     *
     * @group Internal Machinery
     */
    parent?: Base | TestBase;
    /**
     * Nesting level, for serialization to node test runner
     *
     * Note that this is zero for parent-less tests, and *also* zero
     * for the first level of children.
     */
    nestingLevel: number;
    /**
     * Bail out on the first failed test point
     */
    bail: boolean;
    /**
     * Treat non-TAP data as an error.
     * May be set with `pragma +strict` in the TAP stream, or unset with
     * `pragma: -strict`.
     */
    strict: boolean;
    /**
     * Do not emit the `TAP version 14` line at the start
     */
    omitVersion: boolean;
    /**
     * Do not elide extraneous whitespace and empty lines.
     */
    preserveWhitespace: boolean;
    /**
     * Unrecoverable TAP protocol errors in the stream
     *
     * @group Test Reflection
     */
    errors: TapError[];
    /**
     * Numeric identifier for this test
     */
    childId: number;
    get context(): any;
    set context(c: any);
    /**
     * the TAP stream data for buffered tests
     *
     * @internal
     *
     * @group Internal Machinery
     */
    output: string;
    /**
     * True if this test should be buffered and only processed on completion
     *
     * @internal
     *
     * @group Internal Machinery
     */
    buffered: boolean;
    /**
     * True if this test emitted a bailout
     *
     * @group Test Reflection
     */
    bailedOut: string | boolean;
    /**
     * high resolution bigint time when this test started
     *
     * @group Internal Machinery
     */
    start: bigint;
    /**
     * Amount of time in milliseconds that this test took to complete.
     *
     * @group Test Reflection
     */
    time: MILLISECONDS;
    /**
     * High resolution time in ns that this test took to complete.
     *
     * @group Test Reflection
     */
    hrtime: bigint;
    /**
     * True if this test should be buffered and only emit data if it fails
     */
    silent: boolean;
    /**
     * A `Deferred` promise wrapper that is resolved when this test completes.
     *
     * @group Internal Machinery
     */
    deferred?: Deferred<FinalResults>;
    constructor(options?: BaseOpts);
    /**
     * Set the amount of time in milliseconds before this test is considered
     * a timeout. The time is counted from right now, so for example, repeatedly
     * calling `t.setTimeout(100)` can keep it going indefinitely, as long as
     * you call it more often than every 100ms.
     *
     * Calling `setTimeout(0)` will remove the timer and allow the test to run
     * indefinitely.
     *
     * @group Test Lifecycle Management
     */
    setTimeout(n: MILLISECONDS): void;
    /**
     * Called when a timeout occurs. Only exposed because it has to be called
     * and/or extended by other classes, which all have their own sorts of
     * timeout behavior specific to the type of thing they represent.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    timeout(options?: {
        expired?: string;
        message?: string;
    }): void;
    /**
     * Run the `main` test function. Called by
     * {@link @tapjs/core!test-base.TestBase} when starting a subtest.
     * Initializes the TapWrap hook
     *
     * @internal
     *
     * @group Internal Machinery
     */
    runMain(cb: () => void): void;
    /**
     * Returns true if this test has begun
     *
     * @group Test Reflection
     */
    get started(): boolean;
    /**
     * True if the test has printed *some* output of any kind
     *
     * @group Test Reflection
     */
    get printedOutput(): boolean;
    /**
     * Boolean indicating whether the underlying stream can be written to,
     * or if it has been ended.
     */
    get streamWritable(): boolean;
    /**
     * The main test function. For this Base class, this is a no-op. Subclasses
     * implement this in their specific ways.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    main(cb: () => void): void;
    /**
     * Stream write method.
     *
     * For buffered tests, this collects the output in the
     * {@link @tapjs/core!base.Base#output}
     * field. Sets {@link @tapjs/core!base.Base#printedOutput} to `true` when
     * called.
     *
     * Note: you *probably* never need to call this. Instead, use the various
     * assertion methods and other parts of the API.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    write(c: string): boolean;
    /**
     * Method called when the parser encounters a bail out
     *
     * Extended by {@link @tapjs/core!test-base.TestBase}
     */
    onbail(reason?: string): void;
    /**
     * Method called when the parser completes and emits its final results
     *
     * Extended by {@link @tapjs/core!worker.Worker} and
     * {@link @tapjs/core!tap.TAP} classes
     *
     * @internal
     *
     * @group Internal Machinery
     */
    oncomplete(results: FinalResults): void;
    /**
     * extension point for plugins that want to be notified when the test
     * is about to end, whether explicitly or implicitly.
     *
     * If the function returns a Promise, it will be awaited before ending
     * the TAP stream.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    onbeforeend(): Promise<void> | void;
    /**
     * extension point for plugins that want to be notified when the test
     * is completely done, and terminating its parser.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    onEOF(): Promise<void> | void;
    /**
     * extension point for TestBase to know when a child tests is done being
     * processed and it's safe to move on to the next one.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    ondone(): void;
    /**
     * EventEmitter emit method, but closes the
     * {@link @tapjs/core!base.Base#hook} and
     * {@link @tapjs/core!base.Base#hookDomain} when emitting `'end'`.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    emit<Event extends keyof Events>(ev: Event, ...data: Events[Event]): boolean;
    /**
     * Mark the test as ended. In this base class, this is a no-op, but
     * in {@link @tapjs/core!test-base.TestBase}, it also triggers the other
     * end-of-test operations.
     */
    end(): this;
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
    threw(er: any, extra?: Extra, proxy?: boolean, ended?: boolean): Extra | void | undefined;
    /**
     * returns true if the test has not as yet encountered any failures
     *
     * @group Test Reflection
     */
    passing(): boolean;
}
//# sourceMappingURL=base.d.ts.map