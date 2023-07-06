"use strict";
// lifecycle methods like beforeEach, afterEach, teardown
// defined in plugins/lifecycle.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestBase = exports.normalizeMessageExtra = void 0;
const stack = __importStar(require("@tapjs/stack"));
const node_assert_1 = __importDefault(require("node:assert"));
const node_path_1 = require("node:path");
const node_process_1 = require("node:process");
const node_util_1 = require("node:util");
const tap_parser_1 = require("tap-parser");
const trivial_deferred_1 = require("trivial-deferred");
const base_js_1 = require("./base.js");
const esc_js_1 = require("./esc.js");
const extra_from_error_js_1 = require("./extra-from-error.js");
const main_script_js_1 = require("./main-script.js");
const proc_js_1 = require("./proc.js");
const test_point_js_1 = require("./test-point.js");
const waiter_js_1 = require("./waiter.js");
const implicit_end_sigil_js_1 = require("./implicit-end-sigil.js");
const normalizeMessageExtra = (defaultMessage, [message, extra]) => {
    if (message && typeof message === 'object') {
        return [defaultMessage, message];
    }
    return [message || defaultMessage, extra || {}];
};
exports.normalizeMessageExtra = normalizeMessageExtra;
const queueEmpty = (t) => t.queue.length === 0 ||
    (t.queue.length === 1 && t.queue[0] === 'TAP version 14\n');
/**
 * Sigil to put in the queue to signal the end of all things
 */
const EOF = Symbol('EOF');
const isPromise = (p) => !!p && typeof p === 'object' && typeof p.then === 'function';
/**
 * The TestBaseBase class is the base class for all plugins,
 * and eventually thus the Test class.
 *
 * This implements subtest functionality, TAP stream generation,
 * lifecycle events, and only the most basic pass/fail assertions.
 *
 * All other features are added with plugins.
 */
class TestBase extends base_js_1.Base {
    /**
     * Attached when the Test class is instantiated from a TestBase,
     * as a reference to the final plugged-in Test instance.
     * If TestBase is used directly, outside the context of a plugin,
     * then this will be undefined, so watch out.
     */
    t;
    donePromise;
    jobs;
    // #beforeEnd: [method: string | Symbol, ...args: any[]][] = []
    subtests = [];
    pool = new Set();
    queue = ['TAP version 14\n'];
    cb;
    count = 0;
    ended = false;
    assertAt = null;
    assertStack = null;
    diagnostic = null;
    #planEnd = -1;
    #printedResult = false;
    #explicitEnded = false;
    #explicitPlan = false;
    #promiseEnded = false;
    #multiEndThrew = false;
    #n = 0;
    #noparallel = false;
    #occupied = null;
    #pushedEnd = false;
    #pushedBeforeEnd = false;
    #nextChildId = 1;
    #currentAssert = null;
    #processing = false;
    #doingStdinOnly = false;
    #calledOnEOF = false;
    /**
     * true if the test has printed at least one TestPoint
     */
    get printedResult() {
        return this.#printedResult;
    }
    /**
     * true if the test is currently waiting for something to finish
     */
    get occupied() {
        return !!this.#occupied;
    }
    constructor(options) {
        super(options);
        this.jobs = (options.jobs && Math.max(options.jobs, 1)) || 1;
        if (typeof options.diagnostic === 'boolean') {
            this.diagnostic = options.diagnostic;
        }
        if (options.cb) {
            this.#setCB(options.cb);
        }
    }
    #setCB(cb) {
        this.cb = (...args) => this.hook.runInAsyncScope(cb, this.t || this, ...args);
    }
    // TAP output generating methods
    /**
     * immediately exit this and all parent tests with a TAP
     * Bail out! message.
     */
    bailout(message) {
        if (this.parent && (this.results || this.ended)) {
            this.parent.bailout(message);
        }
        else {
            this.#process();
            message = message ? ' ' + ('' + (0, esc_js_1.esc)(message)).trim() : '';
            message = message.replace(/[\r\n]/g, ' ');
            this.parser.write('Bail out!' + message + '\n');
        }
        this.#end(implicit_end_sigil_js_1.IMPLICIT);
        this.#process();
    }
    /**
     * output a TAP comment, formatted like console.log()
     */
    comment(...args) {
        const body = (0, node_util_1.format)(...args);
        const message = ('# ' + body.split(/\r?\n/).join('\n# ')).trim() + '\n';
        if (this.results) {
            this.write(message);
        }
        else {
            this.queue.push(message);
        }
        this.#process();
    }
    /**
     * Called when the test times out.
     * Options are passed as diagnostics to the threw() method
     */
    timeout(options = { expired: this.name }) {
        options = options || {};
        options.expired = options.expired || this.name;
        if (this.#occupied && this.#occupied instanceof base_js_1.Base) {
            this.#occupied.timeout(options);
        }
        else {
            super.timeout(options);
        }
        this.#end(implicit_end_sigil_js_1.IMPLICIT);
    }
    /**
     * Set TAP pragma configs to affect the behavior of the parser.
     * Only `strict` is supported by the parser.
     */
    pragma(set) {
        const p = Object.keys(set).reduce((acc, i) => acc + 'pragma ' + (set[i] ? '+' : '-') + i + '\n', '');
        this.queue.push(p);
        this.#process();
    }
    /**
     * Specify the number of Test Points expected by this test.
     * Outputs a TAP plan line.
     */
    plan(n, comment) {
        if (this.bailedOut) {
            return;
        }
        if (this.#explicitPlan) {
            throw new Error('Cannot set plan more than once');
        }
        this.#explicitPlan = true;
        if (this.#planEnd !== -1) {
            throw new Error('Cannot set plan after test has ended');
        }
        if (typeof n !== 'number' || n < 0) {
            throw new TypeError('plan must be a number');
        }
        // Cannot get any tests after a trailing plan, or a plan of 0
        const ending = this.count !== 0 || n === 0;
        if (n === 0 && comment && !this.options.skip) {
            this.options.skip = comment;
        }
        this.#planEnd = n;
        comment = comment ? ' # ' + (0, esc_js_1.esc)(comment.trim()) : '';
        this.queue.push('1..' + n + comment + '\n');
        if (ending) {
            this.#end(implicit_end_sigil_js_1.IMPLICIT);
        }
        else {
            this.#process();
        }
    }
    /**
     * A passing (ok) Test Point
     */
    pass(...[msg, extra]) {
        this.currentAssert = this.pass;
        const args = [msg, extra];
        const me = (0, exports.normalizeMessageExtra)('(unnamed test)', args);
        this.printResult(true, ...me);
        return true;
    }
    /**
     * A failing (not ok) Test Point
     */
    fail(...[msg, extra]) {
        this.currentAssert = this.fail;
        const args = [msg, extra];
        const me = (0, exports.normalizeMessageExtra)('(unnamed test)', args);
        this.printResult(false, ...me);
        return !!(me[1].todo || me[1].skip);
    }
    /**
     * The current assertion being processed.  May only be set if
     * not already set.
     */
    get currentAssert() {
        return this.#currentAssert;
    }
    /**
     * The current assertion being processed.  May only be set if
     * not already set.
     */
    set currentAssert(fn) {
        if (!this.#currentAssert && typeof fn === 'function') {
            this.#currentAssert = fn;
        }
    }
    /**
     * Print a Test Point
     */
    printResult(ok, message, extra, front = false) {
        this.currentAssert = this.printResult;
        this.#printedResult = true;
        const n = this.count + 1;
        const fn = this.#currentAssert;
        this.#currentAssert = null;
        if (this.#planEnd !== -1 && n > this.#planEnd) {
            // prevent infinite regress of "plan exceeded" fails
            if (!this.passing())
                return;
            const failMessage = this.#explicitEnded
                ? 'test assertion after end() was called'
                : this.#promiseEnded
                    ? 'test assertion after Promise resolution'
                    : this.#explicitPlan
                        ? 'test assertion count exceeds plan'
                        : /* c8 ignore start */
                            'assertion after automatic end';
            /* c8 ignore stop */
            const er = new Error(failMessage, {
                cause: {
                    test: this.name,
                    plan: this.#planEnd,
                },
            });
            Error.captureStackTrace(er, fn || undefined);
            this.threw(er, (0, extra_from_error_js_1.extraFromError)(er));
            return;
        }
        extra = extra || {};
        if (extra.expectFail) {
            ok = !ok;
        }
        if (this.assertAt) {
            extra.at = this.assertAt;
            this.assertAt = null;
        }
        if (this.assertStack) {
            extra.stack = this.assertStack;
            this.assertStack = null;
        }
        if (typeof extra.stack === 'string' && extra.stack && !extra.at) {
            const at = stack.parseStack(extra.stack)[0];
            if (at)
                extra.at = at;
        }
        if (!extra.at && extra.at !== null && typeof fn === 'function') {
            const showStack = !ok && !extra.skip && !extra.todo;
            const showAt = showStack || extra.diagnostic === true;
            if (showAt) {
                const st = stack.capture(80, fn);
                extra.at = st[0];
                if (showStack) {
                    extra.stack = st.map(c => String(c)).join('\n');
                }
            }
        }
        const diagnostic = typeof extra.diagnostic === 'boolean'
            ? extra.diagnostic
            : typeof this.diagnostic === 'boolean'
                ? this.diagnostic
                : extra.skip || extra.todo
                    ? false
                    : !ok;
        if (diagnostic) {
            extra.diagnostic = true;
        }
        this.count = n;
        message = message + '';
        const res = { ok, message, extra };
        const tp = new test_point_js_1.TestPoint(ok, message, extra);
        // when we jump the queue, skip an extra line
        if (front) {
            tp.message = tp.message.trimEnd() + '\n\n';
        }
        if (this.#occupied &&
            this.#occupied instanceof waiter_js_1.Waiter &&
            this.#occupied.finishing) {
            front = true;
        }
        if (front) {
            if (extra.tapChildBuffer || extra.tapChildBuffer === '') {
                this.writeSubComment(tp);
                this.parser.write(extra.tapChildBuffer);
            }
            this.emit('result', res);
            this.parser.write(tp.ok + ++this.#n + tp.message);
            if (this.bail && !ok && !extra.skip && !extra.todo) {
                this.parser.write('Bail out! ' + message + '\n');
            }
        }
        else {
            this.queue.push(tp);
            if (this.bail && !ok && !extra.skip && !extra.todo) {
                this.queue.push('Bail out! ' + message + '\n');
            }
        }
        if (this.#planEnd === this.count) {
            this.#end(implicit_end_sigil_js_1.IMPLICIT);
        }
        this.#process();
    }
    end(implicit) {
        this.#end(implicit);
        return this;
    }
    /**
     * The leading `# Subtest` comment that introduces a child test
     */
    writeSubComment(p) {
        const comment = '# Subtest' + (p.name ? ': ' + (0, esc_js_1.esc)(p.name) : '') + '\n';
        this.parser.write(comment);
    }
    // end TAP otput generating methods
    // flow control methods
    /**
     * Await the end of a Promise before proceeding.
     * The supplied callback is called with the Waiter object.
     */
    waitOn(promise, cb, expectReject = false) {
        const w = new waiter_js_1.Waiter(promise, w => {
            node_assert_1.default.equal(this.#occupied, w);
            if (cb)
                cb(w);
            this.#occupied = null;
            this.#process();
        }, expectReject);
        this.queue.push(w);
        this.#process();
        return w.promise;
    }
    #end(implicit) {
        if (this.#doingStdinOnly && implicit !== implicit_end_sigil_js_1.IMPLICIT) {
            throw new Error('cannot explicitly end while in stdinOnly mode');
        }
        this.debug('END %s implicit=%j', this.name, implicit === implicit_end_sigil_js_1.IMPLICIT);
        if (this.ended && implicit === implicit_end_sigil_js_1.IMPLICIT) {
            this.debug('already ended, ignore implicit end');
            return;
        }
        // If onbeforeend returns a Promise, then wait for it to finish.
        const obe = this.onbeforeend;
        if (obe && !this.#pushedBeforeEnd) {
            this.debug('push obe');
            this.#pushedBeforeEnd = true;
            if (!queueEmpty(this) || this.#occupied) {
                this.queue.push(obe);
                this.#process();
            }
            else {
                const ret = obe();
                if (isPromise(ret)) {
                    // this will make the next section return this.#process()
                    this.waitOn(ret);
                }
            }
        }
        // beyond here we have to be actually done with things, or else
        // the semantic checks on counts and such will be off.
        if (!queueEmpty(this) || this.#occupied) {
            this.debug('#end: queue not empty, or occupied');
            if (!this.#pushedEnd) {
                this.queue.push(['#end', implicit]);
            }
            this.#pushedEnd = true;
            return this.#process();
        }
        if (implicit !== implicit_end_sigil_js_1.IMPLICIT) {
            if (this.#explicitEnded && !this.#multiEndThrew) {
                this.#multiEndThrew = true;
                const er = new Error('test end() method called more than once');
                Error.captureStackTrace(er, this.#currentAssert || this.end);
                er.cause = {
                    test: this.name,
                };
                this.threw(er);
                return;
            }
            this.debug('set #explicitEnded=true');
            this.#explicitEnded = true;
        }
        this.debug('set ended=true');
        this.ended = true;
        if (this.#planEnd === -1 && !this.#doingStdinOnly) {
            this.debug('END(%s) implicit plan', this.name, this.count);
            this.plan(this.count);
        }
        this.queue.push(EOF);
        this.#process();
    }
    get fullname() {
        const main = ((0, main_script_js_1.mainScript)('TAP') +
            ' ' +
            proc_js_1.argv.slice(2).join(' ')).trim();
        const n = [
            (this.parent
                ? this.parent.fullname
                : main === 'TAP'
                    ? 'TAP'
                    : (0, node_path_1.relative)(proc_js_1.cwd, main).replace(/\\/g, '/')).trim(),
        ];
        const myName = (this.name || '').trim();
        if (myName)
            n.push(myName);
        return n.join(' > ');
    }
    #process() {
        if (this.#processing) {
            return this.debug(' < already processing');
        }
        this.debug('\nPROCESSING(%s)', this.name, this.queue.length);
        this.#processing = true;
        while (!this.#occupied) {
            const p = this.queue.shift();
            if (!p) {
                this.debug('> end of queue');
                break;
            }
            if (p instanceof base_js_1.Base) {
                this.debug('> subtest in queue', p.name);
                this.#processSubtest(p);
            }
            else if (p === EOF) {
                this.debug(' > EOF', this.name);
                if (!this.#calledOnEOF) {
                    this.#calledOnEOF = true;
                    // I AM BECOME EOF, DESTROYER OF STREAMS
                    this.debug('call onEOF', this.name);
                    const eofRet = this.onEOF();
                    if (isPromise(eofRet)) {
                        this.debug('onEOF is promise');
                        this.waitOn(eofRet, w => {
                            if (w.rejected) {
                                // threw on the parent, since we're EOFing already
                                this.debug('eofRet reject', w.value);
                                this.comment('error thrown in teardown');
                                this.threw(w.value);
                            }
                            this.queue.push(EOF);
                            this.#process();
                        });
                        break;
                    }
                }
                if (this.#occupied) {
                    this.debug('eof occupied', this.name);
                    this.queue.push(EOF);
                }
                else {
                    this.debug('eof end parser', this.name);
                    this.parser.end();
                }
            }
            else if (p instanceof test_point_js_1.TestPoint) {
                this.debug(' > TESTPOINT');
                if (p.extra.tapChildBuffer || p.extra.tapChildBuffer === '') {
                    this.writeSubComment(p);
                    this.parser.write(p.extra.tapChildBuffer);
                }
                this.emit('res', p.res);
                this.parser.write(p.ok + ++this.#n + p.message);
            }
            else if (typeof p === 'string') {
                this.debug(' > STRING');
                this.parser.write(p);
            }
            else if (p instanceof waiter_js_1.Waiter) {
                p.ready = true;
                this.#occupied = p;
                p.finish();
            }
            else if (typeof p === 'function') {
                this.debug(' > FUNCTION');
                const ret = p();
                if (isPromise(ret)) {
                    this.waitOn(ret);
                }
            }
            else if (Array.isArray(p)) {
                this.debug(' > METHOD');
                const m = p.shift();
                const fn = (m === '#end' ? this.#end : this[m]);
                if (typeof fn !== 'function') {
                    this.debug(' > weird method not found in queue??', m, typeof this[m]);
                    continue;
                }
                const ret = fn.call(this, ...p);
                if (isPromise(ret)) {
                    // returned promise
                    ret.then(() => {
                        this.#processing = false;
                        this.#process();
                    }, (er) => {
                        this.#processing = false;
                        this.threw(er);
                    });
                    return;
                }
                /* c8 ignore start */
            }
            else {
                throw new Error('weird thing got in the queue');
            }
            /* c8 ignore stop */
        }
        while (!this.#noparallel && this.pool.size < this.jobs) {
            const p = this.subtests.shift();
            if (!p) {
                break;
            }
            if (!p.buffered) {
                this.#noparallel = true;
                break;
            }
            this.debug('start subtest', p);
            this.emit('subtestStart', p);
            this.pool.add(p);
            if (this.bailedOut) {
                this.#onBufferedEnd(p);
            }
            else {
                p.runMain(() => this.#onBufferedEnd(p));
            }
        }
        this.debug('done processing', this.queue, this.#occupied);
        this.#processing = false;
        // just in case any tests ended, and we have sync stuff still
        // waiting around in the queue to be processed
        if (!this.#occupied && this.queue.length) {
            this.#process();
        }
        else if (this.idle) {
            // the root tap runner uses this event to know when it is safe to
            // automatically end.
            this.emit('idle');
        }
    }
    get idle() {
        return (!this.#processing &&
            queueEmpty(this) &&
            !this.pool.size &&
            !this.subtests.length &&
            !this.#occupied &&
            // if we have a plan, don't autoend until the plan is complete.
            this.#planEnd === -1);
    }
    #onBufferedEnd(p) {
        p.ondone = p.constructor.prototype.ondone;
        p.results = p.results || new tap_parser_1.FinalResults(true, p.parser);
        p.readyToProcess = true;
        const to = p.options.timeout;
        const dur = to && p.passing()
            ? Number(node_process_1.hrtime.bigint() - p.start) / 1e6
            : null;
        if (dur && to && dur > to) {
            p.timeout();
        }
        else {
            p.setTimeout(0);
        }
        this.debug('%s.#onBufferedEnd', this.name, p.name, p.results.bailout);
        this.pool.delete(p);
        p.options.tapChildBuffer = p.output || '';
        p.options.stack = '';
        if (p.time)
            p.options.time = p.time;
        if (this.#occupied === p)
            this.#occupied = null;
        p.deferred?.resolve(p.results);
        this.emit('subtestEnd', p);
        this.#process();
    }
    #onIndentedEnd(p) {
        this.debug('onIndentedEnd', p.name);
        this.emit('subtestProcess', p);
        p.ondone = p.constructor.prototype.ondone;
        p.results = p.results || new tap_parser_1.FinalResults(true, p.parser);
        this.#noparallel = false;
        const sti = this.subtests.indexOf(p);
        if (sti !== -1)
            this.subtests.splice(sti, 1);
        p.readyToProcess = true;
        p.options.time = p.time;
        const to = p.options.timeout;
        const dur = to && p.passing() ? node_process_1.hrtime.bigint() - p.start : null;
        if (dur && to && dur > to) {
            p.timeout();
        }
        else {
            p.setTimeout(0);
        }
        this.debug('#onIndentedEnd %s(%s)', this.name, p.name);
        this.#occupied = null;
        this.debug('OIE(%s) >shift into queue', this.name, this.queue);
        p.options.stack = '';
        this.printResult(p.passing(), p.name, p.options, true);
        this.debug('OIE(%s) shifted into queue', this.name, this.queue);
        p.deferred?.resolve(p.results);
        this.emit('subtestEnd', p);
        this.#process();
    }
    /**
     * @internal
     */
    main(cb) {
        if (typeof this.options.timeout === 'number') {
            this.setTimeout(this.options.timeout);
        }
        this.debug('MAIN pre', this.name);
        const end = () => {
            this.debug(' > implicit end for promise');
            this.#promiseEnded = true;
            this.#end(implicit_end_sigil_js_1.IMPLICIT);
            done();
        };
        const done = (er) => {
            if (er)
                this.threw(er);
            if (this.results || this.bailedOut)
                cb();
            else
                this.ondone = () => cb();
        };
        // This bit of overly clever line-noise wraps the call to user-code
        // in a try-catch. We can't rely on the domain for this yet, because
        // the 'end' event can trigger a throw after the domain is unhooked,
        // but before this is no longer the official "active test"
        const ret = (() => {
            if (!this.cb)
                return;
            try {
                return this.cb(this.t || this);
            }
            catch (er) {
                if (!er || typeof er !== 'object') {
                    er = { error: er };
                }
                er.tapCaught = 'testFunctionThrow';
                this.threw(er);
            }
        })();
        if (ret && ret.then) {
            this.donePromise = ret;
            ret.tapAbortPromise = done;
            ret.then(end, (er) => {
                if (!er || typeof er !== 'object') {
                    er = { error: er };
                }
                er.tapCaught = 'returnedPromiseRejection';
                done(er);
            });
        }
        else
            done();
        this.debug('MAIN post', this.name);
    }
    #processSubtest(p) {
        this.debug('processSubtest', p.name);
        this.debug(' > subtest');
        this.#occupied = p;
        if (!p.buffered) {
            this.emit('subtestStart', p);
            this.debug(' > subtest indented');
            p.pipe(this.parser, { end: false });
            this.writeSubComment(p);
            this.debug('calling runMain', p.name);
            p.runMain(() => {
                this.debug('runMain callback', p.name);
                this.#onIndentedEnd(p);
            });
        }
        else if (p.readyToProcess) {
            this.emit('subtestProcess', p);
            this.debug(' > subtest buffered, finished');
            // finished!  do the thing!
            this.#occupied = null;
            if (!p.passing() || !p.silent) {
                this.printResult(p.passing(), p.name, p.options, true);
            }
        }
        else {
            this.#occupied = p;
            this.debug(' > subtest buffered, unfinished', p);
            // unfinished buffered test.
            // nothing to do yet, just leave it there.
            this.queue.unshift(p);
        }
    }
    /**
     * Parse stdin as the only tap stream (ie, not as a child test)
     * If used, then no other subtests or assertions are allowed.
     */
    stdinOnly(extra) {
        const stream = ((extra && extra.tapStream) ||
            process.stdin);
        if (!stream) {
            throw new Error('cannot read stdin without stdin stream');
        }
        if (this.queue.length !== 1 ||
            this.queue[0] !== 'TAP version 14\n' ||
            this.#processing ||
            this.results ||
            this.#occupied ||
            this.pool.size ||
            this.subtests.length) {
            throw new Error('Cannot use stdinOnly on a test in progress');
        }
        this.#doingStdinOnly = true;
        this.queue.length = 0;
        this.parser.on('child', p => {
            // pretend to be a rooted parser, so it gets counts.
            p.root = p;
            const t = new base_js_1.Base({
                name: p.name,
                parent: this,
                parser: p,
                bail: p.bail,
                strict: p.strict,
                omitVersion: p.omitVersion,
                preserveWhitespace: p.preserveWhitespace,
                childId: this.#nextChildId++,
            });
            this.emit('subtestAdd', t);
            this.emit('subtestStart', t);
            this.emit('subtestProcess', t);
            p.on('complete', () => {
                t.time = p.time;
                this.emit('subtestEnd', t);
            });
        });
        stream.pipe(this.parser);
        stream.resume();
    }
    /**
     * Mount a subtest, using this Test object as a harness.
     * Exposed mainly so that it can be used by builtin plugins.
     *
     * @internal
     */
    sub(Class, extra = {}, caller) {
        if (this.bailedOut)
            return Object.assign(Promise.resolve(null), {
                subtest: null,
            });
        if (this.results || this.ended) {
            const er = new Error('cannot create subtest after parent test ends');
            Error.captureStackTrace(er, caller);
            this.threw(er);
            return Object.assign(Promise.resolve(null), {
                subtest: null,
            });
        }
        extra.childId = this.#nextChildId++;
        if (this.shouldSkipChild(extra)) {
            this.pass(extra.name || '', extra);
            return Object.assign(Promise.resolve(null), {
                subtest: null,
            });
        }
        extra.indent = '    ';
        if (extra.buffered === undefined) {
            if (this.jobs > 1) {
                extra.buffered = true;
            }
            else {
                extra.buffered = false;
            }
        }
        extra.bail = extra.bail !== undefined ? extra.bail : this.bail;
        extra.parent = this;
        const st = stack.capture(80, caller);
        extra.at = st[0];
        extra.stack = st.map(c => String(c)).join('\n');
        extra.context = this.context;
        const t = new Class(extra);
        this.queue.push(t);
        this.subtests.push(t);
        this.emit('subtestAdd', t);
        const d = new trivial_deferred_1.Deferred();
        t.deferred = d;
        this.#process();
        return Object.assign(d.promise, { subtest: t });
    }
    threw(er, extra, proxy = false) {
        this.debug('TestBase.threw', this.name, er.message);
        // this can happen if a beforeEach throws.  capture the error here
        // and raise it once we've started the test officially.
        if (this.parent && !this.started) {
            this.cb = () => {
                this.threw(er);
                this.end();
            };
            return;
        }
        // suppress the callsite for non-error throws, since
        // it'll always just be useless noise pointing back here.
        if (!er || typeof er !== 'object') {
            er = { error: er, at: null };
        }
        if (this.name && !proxy) {
            er.test = this.name;
        }
        if (!proxy) {
            extra = (0, extra_from_error_js_1.extraFromError)(er, extra);
        }
        this.debug('T.t call Base.threw', this.name, extra);
        const ended = !!this.results ||
            (this.#explicitPlan && this.count === this.#planEnd);
        this.parser.ok = false;
        super.threw(er, extra, proxy, ended);
        // Handle the failure here, but only if we (a) don't have
        // results yet (indicating an end) and (b) are not currently
        // at the plan end (which would mean that any failure is
        // ignored to prevent infinite regress in "plan exceeded"
        // failures)
        if (!ended) {
            const msg = typeof extra?.message === 'string'
                ? extra.message
                : typeof er.message === 'string'
                    ? er.message
                    : er.stack
                        ? er.stack.split('\n')[0]
                        : typeof er.error === 'string'
                            ? er.error
                            : '';
            this.fail(msg, extra || { at: null });
            if (this.ended || this.#pushedEnd) {
                this.ended = false;
                this.#pushedEnd = false;
                this.end(implicit_end_sigil_js_1.IMPLICIT);
            }
        }
        if (this.#occupied && this.#occupied instanceof waiter_js_1.Waiter) {
            this.#occupied.abort(Object.assign(new Error('error thrown while awaiting Promise'), { thrown: er }));
            this.#occupied = null;
        }
        if (!proxy) {
            this.#end(implicit_end_sigil_js_1.IMPLICIT);
            this.#processing = false;
        }
        this.#process();
    }
    onbail(message) {
        super.onbail(message);
        this.#end(implicit_end_sigil_js_1.IMPLICIT);
        if (!this.parent) {
            this.endAll();
        }
    }
    endAll(sub = false) {
        if (this.bailedOut)
            return;
        // in the case of the root TAP test object, we might sometimes
        // call endAll on a bailing-out test, as the process is ending
        // In that case, we WILL have a this.occupied and a full queue
        // These cases are very rare to encounter in other Test objs tho
        this.#processing = true;
        if (this.#occupied) {
            const p = this.#occupied;
            if (p instanceof waiter_js_1.Waiter)
                p.abort(new Error('test unfinished'));
            else if (typeof p.endAll === 'function')
                p.endAll(true);
            else
                p.parser.abort('test unfinished');
            this.#occupied = null;
        }
        else if (sub) {
            this.#process();
            if (queueEmpty(this)) {
                const options = Object.assign({}, this.options);
                options.test = this.name;
                this.fail('test unfinished', options);
            }
        }
        if (this.donePromise && this.donePromise.tapAbortPromise)
            this.donePromise.tapAbortPromise();
        for (let i = 0; i < this.queue.length; i++) {
            const p = this.queue[i];
            if (p instanceof base_js_1.Base && !p.readyToProcess) {
                const cn = p.constructor.name.toLowerCase();
                const msg = `child test left in queue: t.${cn} ${p.name}`;
                this.queue[i] = new test_point_js_1.TestPoint(false, msg, p.options);
            }
            this.#end(implicit_end_sigil_js_1.IMPLICIT);
        }
        this.#processing = false;
        this.#process();
    }
    /**
     * Return true if the child test represented by the options object
     * should be skipped.  Extended by the grep/only filtering plugins.
     */
    shouldSkipChild(extra) {
        return !!(extra.skip || extra.todo);
    }
}
exports.TestBase = TestBase;
//# sourceMappingURL=test-base.js.map