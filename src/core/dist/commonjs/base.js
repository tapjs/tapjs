"use strict";
/**
 * The base class that is extended by all TAP-generating classes
 *
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = exports.TapWrap = void 0;
const async_hook_domain_1 = require("async-hook-domain");
const async_hooks_1 = require("async_hooks");
const minipass_1 = require("minipass");
const node_process_1 = require("node:process");
const node_util_1 = require("node:util");
const tap_parser_1 = require("tap-parser");
const counts_js_1 = require("./counts.js");
const diags_js_1 = require("./diags.js");
const extra_from_error_js_1 = require("./extra-from-error.js");
const lists_js_1 = require("./lists.js");
const message_from_error_js_1 = require("./message-from-error.js");
const unsetContext = Symbol('TAP.context unset');
/**
 * Wrapper for the async-hook-domain that catches errors thrown during
 * test operation.
 *
 * @see {@link https://npmjs.com/async-hook-domain}
 */
class TapWrap extends async_hooks_1.AsyncResource {
    test;
    onDestroy;
    constructor(test) {
        super(`tap.${test.constructor.name}`);
        this.test = test;
    }
    emitDestroy() {
        this.onDestroy?.();
        super.emitDestroy();
        return this;
    }
}
exports.TapWrap = TapWrap;
const debug = (name) => (...args) => {
    const prefix = `TAP ${process.pid} ${name}: `;
    const msg = (0, node_util_1.format)(...args).trim();
    console.error(prefix + msg.split('\n').join(`\n${prefix}`));
};
class Base extends minipass_1.Minipass {
    /**
     * Set upon test completion when a child test is ready to be processed by its
     * parent.
     */
    readyToProcess = false;
    /**
     * Options provided to this test
     */
    options;
    /**
     * number of spaces to indent the TAP stream
     */
    indent;
    /**
     * TapWrap AsyncResource that limits the async-hook-domain
     *
     * @group Internal Machinery
     */
    hook;
    // this actually is deterministically set in the ctor, but
    // in the hook, so tsc doesn't see it.
    /**
     * the async-hook-domain that catches throws and Promise rejections
     *
     * @group Internal Machinery
     */
    hookDomain;
    /**
     * The timer that fires when the test times out
     *
     * @group Internal Machinery
     */
    timer;
    /**
     * Set to true when the test times out, so its failure status can be
     * determined later.
     */
    timedOut = false;
    /**
     * The tap parser attached to this TAP stream
     *
     * @group Internal Machinery
     */
    parser;
    /**
     * Method that writes to stderr when `debug: true` is set in the options,
     * or no-ops otherwise
     */
    debug;
    /**
     * The count of all assertions that this stream emitted
     *
     * @group Test Reflection
     */
    counts;
    /**
     * Lists of todo, skip, and failure test points. If `passes: true` is
     * set in the options, then passing test points will also be tracked.
     *
     * @group Test Reflection
     */
    lists;
    /**
     * the name of this test
     *
     * @group Test Reflection
     */
    name;
    /**
     * Set on completion. The results of the test run.
     *
     * @group Test Reflection
     */
    results;
    /**
     * Parent test of this TAP stream
     *
     * @group Internal Machinery
     */
    parent;
    /**
     * Nesting level, for serialization to node test runner
     *
     * Note that this is zero for parent-less tests, and *also* zero
     * for the first level of children.
     */
    nestingLevel = 0;
    /**
     * Bail out on the first failed test point
     */
    bail;
    /**
     * Treat non-TAP data as an error.
     * May be set with `pragma +strict` in the TAP stream, or unset with
     * `pragma: -strict`.
     */
    strict;
    /**
     * Do not emit the `TAP version 14` line at the start
     */
    omitVersion;
    /**
     * Do not elide extraneous whitespace and empty lines.
     */
    preserveWhitespace;
    /**
     * Unrecoverable TAP protocol errors in the stream
     *
     * @group Test Reflection
     */
    errors;
    /**
     * Numeric identifier for this test
     */
    childId;
    /**
     * Any arbitrary data that is provided to this test object. Often, this
     * is set in a `t.before()` or `t.beforeEach()` method. Scalar values
     * are inherited by child tests. Object values are extended in child
     * tests using `Object.create()`.
     */
    #context = unsetContext;
    get context() {
        if (this.#context === unsetContext)
            this.#context = Object.create(null);
        return this.#context;
    }
    set context(c) {
        this.#context = c;
    }
    /**
     * the TAP stream data for buffered tests
     *
     * @internal
     *
     * @group Internal Machinery
     */
    output;
    /**
     * True if this test should be buffered and only processed on completion
     *
     * @internal
     *
     * @group Internal Machinery
     */
    buffered;
    /**
     * True if this test emitted a bailout
     *
     * @group Test Reflection
     */
    bailedOut;
    /**
     * high resolution bigint time when this test started
     *
     * @group Internal Machinery
     */
    start;
    #started = false;
    /**
     * Amount of time in milliseconds that this test took to complete.
     *
     * @group Test Reflection
     */
    time;
    /**
     * High resolution time in ns that this test took to complete.
     *
     * @group Test Reflection
     */
    hrtime;
    /**
     * True if this test should be buffered and only emit data if it fails
     */
    silent;
    /**
     * A `Deferred` promise wrapper that is resolved when this test completes.
     *
     * @group Internal Machinery
     */
    deferred;
    #printedOutput = false;
    #writable = true;
    constructor(options = {}) {
        super({ encoding: 'utf8' });
        // always use the constructor name as toStringTag, so we get
        // [object Test] or [object TAP] and the appropriate typeName
        // in stack traces.
        Object.defineProperty(this, Symbol.toStringTag, {
            value: this.constructor.name,
            configurable: true,
        });
        // all tap streams are sync string minipasses
        this.hook = new TapWrap(this);
        this.options = options;
        this.counts = new counts_js_1.Counts();
        this.lists = new lists_js_1.Lists();
        this.silent = !!options.silent;
        this.bail = !!options.bail;
        this.strict = !!options.strict;
        this.omitVersion = !!options.omitVersion;
        this.preserveWhitespace = options.preserveWhitespace !== false;
        this.buffered =
            this.silent ?
                options.buffered === undefined
                : !!options.buffered;
        this.bailedOut = false;
        this.errors = [];
        this.parent = options.parent;
        if (this.parent?.parent) {
            this.nestingLevel = this.parent.nestingLevel + 1;
        }
        this.time = 0;
        this.hrtime = 0n;
        this.start = 0n;
        this.childId = options.childId || 0;
        // do we need this?  couldn't we just call the Minipass
        this.output = '';
        this.indent = options.indent || '';
        this.name = options.name || '(unnamed test)';
        this.hook.runInAsyncScope(() => {
            this.hookDomain = new async_hook_domain_1.Domain((er, type) => {
                /* c8 ignore start */
                if (!er || typeof er !== 'object') {
                    er = { error: er };
                }
                /* c8 ignore stop */
                ;
                er.tapCaught = type;
                this.threw(er);
            });
        });
        this.debug = !!options.debug ? debug(this.name) : () => { };
        this.parser =
            options.parser ||
                new tap_parser_1.Parser({
                    bail: this.bail,
                    strict: this.strict,
                    omitVersion: this.omitVersion,
                    preserveWhitespace: this.preserveWhitespace,
                    passes: this.options.passes,
                    name: this.name,
                });
        this.#setupParser();
        // ensure that a skip or todo on a child class reverts
        // back to Base's no-op main.
        if (options.skip || options.todo) {
            this.main = Base.prototype.main;
        }
    }
    #isFilterSkip(res) {
        return (typeof res.skip === 'string' &&
            /^filter: (only|\/.*\/)$/.test(res.skip));
    }
    #onParserResult(res) {
        this.counts.total++;
        const type = res.todo ? 'todo'
            : res.skip ? 'skip'
                : !res.ok ? 'fail'
                    : 'pass';
        this.counts[type]++;
        if (type === 'pass' && this.options.passes) {
            this.lists.pass.push(res);
        }
        else if (type === 'todo') {
            this.lists.todo.push(res);
        }
        else if (type === 'skip') {
            if (!this.#isFilterSkip(res))
                this.lists.skip.push(res);
        }
        else if (type === 'fail') {
            this.lists.fail.push(res);
        }
    }
    #setupParser() {
        this.parser.on('line', l => this.#online(l));
        this.parser.once('bailout', reason => this.onbail(reason));
        this.parser.on('complete', result => this.oncomplete(result));
        this.parser.on('result', res => this.#onParserResult(res));
    }
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
    setTimeout(n) {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        if (n <= 0) {
            this.timer = undefined;
            delete this.options.timeout;
        }
        else {
            this.options.timeout = n;
            this.timer = setTimeout(() => this.timeout(), n);
            /* c8 ignore start */
            if (this.timer.unref)
                this.timer.unref();
            /* c8 ignore stop */
        }
    }
    /**
     * Called when a timeout occurs. Only exposed because it has to be called
     * and/or extended by other classes, which all have their own sorts of
     * timeout behavior specific to the type of thing they represent.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    timeout(options = {
        expired: this.name,
        message: 'timeout!',
    }) {
        this.timedOut = true;
        const { message = 'timeout!' } = options;
        this.setTimeout(0);
        options.expired = options.expired || this.name;
        // timeouts don't generally have a useful callsite information,
        // and no sense trying to capture it from @tapjs/stack
        const extra = {
            ...options,
            message,
            stack: '',
            at: {},
        };
        const threw = this.threw({ message }, extra);
        delete extra.stack;
        delete extra.at;
        if (threw) {
            this.emit('timeout', threw);
        }
    }
    /**
     * Run the `main` test function. Called by
     * {@link @tapjs/core!test-base.TestBase} when starting a subtest.
     * Initializes the TapWrap hook
     *
     * @internal
     *
     * @group Internal Machinery
     */
    runMain(cb) {
        this.debug('BASE runMain');
        this.start = node_process_1.hrtime.bigint();
        this.#started = true;
        // if it's null or an object, inherit from it.  otherwise, copy it.
        if (this.#context === unsetContext) {
            const ctx = ('context' in this.options ?
                this.options.context
                : this.parent?.context) ?? null;
            this.#context = typeof ctx === 'object' ? Object.create(ctx) : ctx;
        }
        this.hook.runInAsyncScope(this.main, this, cb);
    }
    /**
     * Returns true if this test has begun
     *
     * @group Test Reflection
     */
    get started() {
        return this.#started;
    }
    /**
     * True if the test has printed *some* output of any kind
     *
     * @group Test Reflection
     */
    get printedOutput() {
        return this.#printedOutput;
    }
    /**
     * Boolean indicating whether the underlying stream can be written to,
     * or if it has been ended.
     */
    get streamWritable() {
        return this.#writable;
    }
    /**
     * The main test function. For this Base class, this is a no-op. Subclasses
     * implement this in their specific ways.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    main(cb) {
        cb();
    }
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
    write(c) {
        this.#printedOutput = true;
        if (this.buffered || this.silent) {
            // need the silent output if it fails
            this.output += c;
            return true;
        }
        if (!this.#writable) {
            return false;
        }
        return super.write(c);
    }
    /**
     * Method called when the parser encounters a bail out
     *
     * Extended by {@link @tapjs/core!test-base.TestBase}
     */
    onbail(reason) {
        this.bailedOut = reason || true;
        this.emit('bailout', reason);
    }
    /**
     * Method called when parser emits a line of TAP data
     *
     * @internal
     *
     * @group Internal Machinery
     */
    #online(line) {
        this.debug('LINE %j', line, [this.name, this.indent]);
        return this.write(this.indent + line);
    }
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
    oncomplete(results) {
        if (this.start) {
            this.hrtime = node_process_1.hrtime.bigint() - this.start;
            this.time =
                results.time || Math.floor(Number(this.hrtime) / 1000) / 1000;
        }
        this.debug('ONCOMPLETE %j %j', this.name, results);
        // should only ever happen once, but just in case
        /* c8 ignore start */
        if (this.results) {
            Object.assign(results, this.results);
        }
        /* c8 ignore stop */
        this.results = results;
        this.emit('complete', results);
        const errors = results.failures
            .filter(f => f.tapError)
            .map(f => {
            delete f.diag;
            delete f.ok;
            return f;
        });
        if (errors.length) {
            this.errors = errors;
        }
        this.#writable = false;
        super.end();
    }
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
    onbeforeend() { }
    /**
     * extension point for plugins that want to be notified when the test
     * is completely done, and terminating its parser.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    onEOF() { }
    /**
     * extension point for TestBase to know when a child tests is done being
     * processed and it's safe to move on to the next one.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    ondone() { }
    /**
     * EventEmitter emit method, but closes the
     * {@link @tapjs/core!base.Base#hook} and
     * {@link @tapjs/core!base.Base#hookDomain} when emitting `'end'`.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    emit(ev, ...data) {
        const ret = super.emit(ev, ...data);
        if (ev === 'end') {
            this.ondone();
            this.hook.emitDestroy();
            this.hookDomain.destroy();
        }
        return ret;
    }
    /**
     * Mark the test as ended. In this base class, this is a no-op, but
     * in {@link @tapjs/core!test-base.TestBase}, it also triggers the other
     * end-of-test operations.
     */
    end() {
        return this;
    }
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
    threw(er, extra, proxy = false, ended = false) {
        this.debug('BASE.threw', er);
        this.hook.emitDestroy();
        this.hookDomain.destroy();
        if (typeof er === 'string') {
            er = { message: er };
        }
        else if (!er || typeof er !== 'object') {
            er = { error: er };
        }
        if (this.name && !proxy) {
            er.test = this.name;
        }
        const message = (0, message_from_error_js_1.messageFromError)(er);
        if (!extra) {
            extra = (0, extra_from_error_js_1.extraFromError)(er, extra);
        }
        extra.message = message;
        this.parser.ok = false;
        // if possible to handle it here, then return the info so that this
        // Base subclass can do its thing
        if (!ended &&
            !this.results &&
            /* c8 ignore start */
            (this.parser.planEnd === -1 ||
                this.parser.count < this.parser.planEnd)
        /* c8 ignore stop */
        ) {
            return extra;
        }
        // if we ended, we have to report it SOMEWHERE, unless we're
        // already in the process of bailing out, in which case it's
        // a bit excessive. Do not print it here if it would trigger
        // a plan exceeded error, or if we already have results.
        this.debug('Base.threw, but finished', this.name, this.results, extra.message);
        const alreadyBailing = (this.results?.ok === false && this.bail) ||
            this.parser.bailedOut ||
            this.results?.bailout;
        if (this.results)
            this.results.ok = false;
        if (this.parent) {
            this.parent.threw(er, extra, true);
        }
        else if (!alreadyBailing) {
            // not already bailing out, so print the error as best we can
            if (!er.stack) {
                console.error(er);
            }
            else {
                /* c8 ignore start */
                const name = er.name || 'Error';
                /* c8 ignore stop */
                console.error('%s: %s', name, extra.message);
                console.error((0, diags_js_1.diags)(extra));
            }
        }
        // we are already bailing out, and this is the top level,
        // just make our way hastily to the nearest exit.
    }
    /**
     * returns true if the test has not as yet encountered any failures
     *
     * @group Test Reflection
     */
    passing() {
        return this.parser.ok && this.results?.ok !== false;
    }
}
exports.Base = Base;
//# sourceMappingURL=base.js.map