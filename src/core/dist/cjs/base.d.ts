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
     */
    context?: any;
    /**
     * Number of spaces that this test is indented.
     *
     * @internal
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
     */
    parser?: Parser;
    /**
     * True if this test should be buffered, and only processed once
     * complete. Used when running tests in parallel, unlikely that there's
     * any reason to set this explicitly.
     *
     * @internal
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
     */
    hook: TapWrap;
    /**
     * the async-hook-domain that catches throws and Promise rejections
     */
    hookDomain: Domain;
    /**
     * The timer that fires when the test times out
     */
    timer?: NodeJS.Timeout;
    /**
     * Set to true when the test times out, so its failure status can be
     * determined later.
     */
    timedOut: boolean;
    /**
     * The tap parser attached to this TAP stream
     */
    parser: Parser;
    /**
     * Method that writes to stderr when `debug: true` is set in the options,
     * or no-ops otherwise
     */
    debug: (...args: any[]) => void;
    /**
     * The count of all assertions that this stream emitted
     */
    counts: Counts;
    /**
     * Lists of todo, skip, and failure test points. If `passes: true` is
     * set in the options, then passing test points will also be tracked.
     */
    lists: Lists;
    /**
     * the name of this test
     */
    name: string;
    /**
     * Set on completion. The results of the test run.
     */
    results?: FinalResults;
    /**
     * Parent test of this TAP stream
     */
    parent?: Base | TestBase;
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
     */
    errors: TapError[];
    /**
     * Numeric identifier for this test
     */
    childId: number;
    /**
     * Any arbitrary data that is provided to this test object. Often, this
     * is set in a `t.before()` or `t.beforeEach()` method. Scalar values
     * are inherited by child tests. Object values are extended in child
     * tests using `Object.create()`.
     */
    context: any;
    /**
     * the TAP stream data for buffered tests
     */
    output: string;
    /**
     * True if this test should be buffered and only processed on completion
     *
     * @internal
     */
    buffered: boolean;
    /**
     * True if this test emitted a bailout
     */
    bailedOut: string | boolean;
    /**
     * high resolution bigint time when this test started
     */
    start: bigint;
    /**
     * Amount of time in milliseconds that this test took to complete.
     */
    time: MILLISECONDS;
    /**
     * High resolution time in ns that this test took to complete.
     */
    hrtime: bigint;
    /**
     * True if this test should be buffered and only emit data if it fails
     */
    silent: boolean;
    /**
     * A `Deferred` promise wrapper that is resolved when this test completes.
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
     */
    setTimeout(n: MILLISECONDS): void;
    /**
     * Called when a timeout occurs. Only exposed because it has to be called
     * and/or extended by other classes, which all have their own sorts of
     * timeout behavior specific to the type of thing they represent.
     *
     * @internal
     */
    timeout(options?: {
        expired?: string;
        message?: string;
    }): void;
    /**
     * Run the `main` test function. Called by {@link TestBase} when
     * starting a subtest. Initializes the TapWrap hook
     *
     * @internal
     */
    runMain(cb: () => void): void;
    /**
     * getter for the high resolution time when this test began
     */
    get started(): boolean;
    /**
     * True if the test has printed *some* output of any kind
     */
    get printedOutput(): boolean;
    /**
     * The main test function. For this Base class, this is a no-op. Subclasses
     * implement this in their specific ways.
     */
    main(cb: () => void): void;
    /**
     * Stream write method.
     *
     * For buffered tests, this collects the output in the
     * {@link Base#output}
     * field. Sets {@link Base#printedOutput} to `true` when called.
     */
    write(c: string): boolean;
    /**
     * Method called when the parser encounters a bail out
     *
     * Extended by {@link TestBase}
     */
    onbail(reason?: string): void;
    /**
     * Method called when the parser completes and emits its final results
     *
     * Extended by {@link Worker} and {@link TAP} classes
     */
    oncomplete(results: FinalResults): void;
    /**
     * extension point for plugins that want to be notified when the test
     * is about to end, whether explicitly or implicitly.
     *
     * If the function returns a Promise, it will be awaited before ending
     * the TAP stream.
     */
    onbeforeend(): Promise<void> | void;
    /**
     * extension point for plugins that want to be notified when the test
     * is completely done, and terminating its parser.
     */
    onEOF(): Promise<void> | void;
    /**
     * extension point for TestBase to know when a child tests is done being
     * processed and it's safe to move on to the next one.
     *
     * @internal
     */
    ondone(): void;
    /**
     * EventEmitter emit method, but closes the {@link Base#hook} and
     * {@link Base#hookDomain} when emitting `'end'`.
     */
    emit<Event extends keyof Events>(ev: Event, ...data: Events[Event]): boolean;
    /**
     * Mark the test as ended. In this base class, this is a no-op, but
     * in {@link TestBase}, it also triggers the other end-of-test
     * operations.
     */
    end(): this;
    /**
     * Method called when an unrecoverable error is encountered in a test.
     *
     * Typically, in tests you would not call this, you'd just actually throw
     * an error.
     *
     * @internal
     */
    threw(er: any, extra?: Extra, proxy?: boolean, ended?: boolean): Extra | void | undefined;
    /**
     * returns true if the test has not as yet encountered any failures
     */
    passing(): boolean;
}
//# sourceMappingURL=base.d.ts.map