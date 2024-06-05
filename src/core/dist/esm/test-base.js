import * as stack from '@tapjs/stack';
import { isPromise } from 'is-actual-promise';
import assert from 'node:assert';
import { relative } from 'node:path';
import { hrtime } from 'node:process';
import { format } from 'node:util';
import { FinalResults } from 'tap-parser';
import { Deferred } from 'trivial-deferred';
import { Base } from './base.js';
import { esc } from './esc.js';
import { extraFromError } from './extra-from-error.js';
import { mainScript } from './main-script.js';
import { argv, cwd } from './proc.js';
import { TestPoint } from './test-point.js';
import { Waiter } from './waiter.js';
import { IMPLICIT } from './implicit-end-sigil.js';
import { normalizeMessageExtra } from './normalize-message-extra.js';
const VERSION = 'TAP version 14\n';
const queueEmpty = (t) => t.queue.length === 0 ||
    (t.queue.length === 1 && t.queue[0] === VERSION);
/**
 * Sigil to put in the queue to signal the end of all things
 */
const EOF = Symbol('EOF');
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
export class TestBase extends Base {
    /**
     * Attached when the Test class is instantiated from a TestBase,
     * as a reference to the final plugged-in Test instance.
     * If TestBase is used directly (outside the context of a plugin)
     * or during plugin setup time, this will be undefined, so watch out.
     *
     * @group Test Reflection
     */
    t;
    /**
     * A promise that resolves when the test is done.
     *
     * @group Internal Machinery
     */
    donePromise;
    /**
     * The number of subtests to run in parallel, if allowed
     *
     * @group Test Lifecycle Management
     */
    jobs;
    /**
     * Array of all subtests that have been added/scheduled,
     * and have not yet completed.
     *
     * @group Internal Machinery
     */
    subtests = [];
    /**
     * The pool of parallel tests currently in process
     *
     * @group Internal Machinery
     */
    pool = new Set();
    /**
     * Queue of items awaiting processing. Can be any
     * {@link @tapjs/core!test-base.QueueEntry} item.
     *
     * @group Internal Machinery
     */
    queue = [VERSION];
    /**
     * Function that will get this test as an argument when it is processed
     *
     * @internal
     *
     * @group Internal Machinery
     */
    cb;
    /**
     * The count of all assertions made directly on this test.
     *
     * @group Test Reflection
     */
    count = 0;
    /**
     * Set true when {@link @tapjs/core!test-base.TestBase#end} is called
     */
    ended = false;
    /**
     * Show diagnostics for this test. A value of `null` means that
     * diagnostics will be shown only if the test is failing.
     */
    diagnostic = null;
    #planEnd = -1;
    #planAt;
    #printedResult = false;
    #endingAll = false;
    #endingAllSub = false;
    #explicitEnded = false;
    #explicitPlan = false;
    #promiseEnded = false;
    #multiEndThrew = false;
    #n = 0;
    #noparallel = false;
    #occupied = null;
    // set to true if the end should be explicit
    #awaitingEnd = false;
    #pushedBeforeEnd = false;
    #nextChildId = 1;
    #currentAssert;
    #processing = false;
    #doingStdinOnly = false;
    #calledOnEOF = false;
    #jobIds;
    /**
     * Subtests that are currently in process.
     *
     * @group Internal Machinery
     */
    activeSubtests = new Set();
    /**
     * Count of all asserts in this and all child tests,
     * excluding child test summary points
     *
     * @group Test Reflection
     */
    get assertTotals() {
        return this.counts;
    }
    /**
     * true if the test has printed at least one TestPoint
     *
     * @group Test Reflection
     */
    get printedResult() {
        return this.#printedResult;
    }
    /**
     * true if the test is currently waiting for something to finish
     *
     * @group Test Reflection
     */
    get occupied() {
        return !!this.#occupied;
    }
    constructor(options) {
        super(options);
        this.parser.on('result', r => {
            this.emit('assert', r);
        });
        this.jobs = (options.jobs && Math.max(options.jobs, 1)) || 1;
        if (typeof options.diagnostic === 'boolean') {
            this.diagnostic = options.diagnostic;
        }
        if (options.cb) {
            this.#setCB(options.cb);
        }
        this.#jobIds = new Set();
    }
    #setCB(cb) {
        this.cb = (...args) => this.hook.runInAsyncScope(cb, this.t || this, ...args);
    }
    /**
     * immediately exit this and all parent tests with a TAP
     * Bail out! message.
     *
     * @group Test Lifecycle Management
     */
    bailout(message) {
        if (this.parent && (this.results || this.ended)) {
            this.parent.bailout(message);
        }
        else {
            this.#process();
            message = message ? ' ' + ('' + esc(message)).trim() : '';
            message = message.replace(/[\r\n]/g, ' ');
            this.parser.write('Bail out!' + message + '\n');
        }
        this.#end(IMPLICIT);
        this.#process();
    }
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
    comment(...args) {
        const body = format(...args);
        const message = ('# ' + body.split(/\r?\n/).join('\n# ')).trim() + '\n';
        if (this.results || this.ended || this.#awaitingEnd) {
            // the fallback to console.log is a bit weird,
            // but the only alternative seems to be to just lose it.
            if (this.streamWritable) {
                super.write(message);
                this.parser.emit('comment', message.trim());
            }
            else if (this.parent) {
                this.parent.comment(...args);
            }
            else {
                console.log(message.trimEnd());
            }
        }
        else if (this.#occupied) {
            this.queue.push(message);
            this.#process();
        }
        else {
            this.parser.write(message);
        }
    }
    /**
     * Called when the test times out.
     * Options are passed as diagnostics to the threw() method
     *
     * @internal
     *
     * @group Internal Machinery
     */
    timeout(options = { expired: this.name }) {
        options.expired = options.expired || this.name;
        if (this.#occupied && this.#occupied instanceof Base) {
            this.#occupied.timeout(options);
        }
        else {
            super.timeout(options);
        }
        this.#end(IMPLICIT);
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
    plan(n, comment, implicit) {
        if (this.bailedOut) {
            return;
        }
        if (this.#explicitPlan) {
            throw new Error('Cannot set plan more than once');
        }
        this.#explicitPlan = implicit !== IMPLICIT;
        if (this.#explicitPlan) {
            this.#planAt = stack.at(this.plan);
        }
        if (this.#planEnd !== -1) {
            throw new Error('Cannot set plan after test has ended');
        }
        if (typeof n !== 'number' || n < 0 || n !== Math.floor(n)) {
            throw new TypeError('plan must be a non-negative integer');
        }
        // Cannot get any tests after a trailing plan, or a plan of 0
        const ending = this.count !== 0 || n === 0;
        if (n === 0 && comment && !this.options.skip) {
            this.options.skip = comment;
        }
        this.#planEnd = n;
        comment = comment ? ' # ' + esc(comment.trim()) : '';
        this.queue.push('1..' + n + comment + '\n');
        if (ending) {
            this.#end(IMPLICIT);
        }
        else {
            this.#process();
        }
    }
    /**
     * A passing (ok) Test Point.
     *
     * @group Assertion Methods
     */
    pass(...[msg, extra]) {
        this.currentAssert = this.pass;
        const args = [msg, extra];
        const me = normalizeMessageExtra('(unnamed test)', args);
        this.#printResult(true, ...me);
        return true;
    }
    /**
     * A failing (not ok) Test Point
     *
     * @group Assertion Methods
     */
    fail(...[msg, extra]) {
        this.currentAssert = this.fail;
        const args = [msg, extra];
        const me = normalizeMessageExtra('(unnamed test)', args);
        this.#printResult(false, ...me);
        return !!(me[1].todo || me[1].skip);
    }
    /**
     * The current assertion being processed. Set at the start of all
     * assertions, and used for calculating stack traces.
     *
     * @group Internal Machinery
     */
    get currentAssert() {
        return this.#currentAssert;
    }
    set currentAssert(fn) {
        if (!this.#currentAssert && typeof fn === 'function') {
            this.#currentAssert = fn;
        }
    }
    // apply flags from our options onto an Extra or TestOpts object
    #inheritFlags(extra) {
        const inheritedFlags = [
            'bail',
            'debug',
            'passes',
            'failTodo',
            'failSkip',
            'failOnly',
            'diagnostic',
        ];
        for (const k of inheritedFlags) {
            if (extra[k] === undefined &&
                typeof this.options[k] === 'boolean') {
                extra[k] = this.options[k];
            }
        }
    }
    /**
     * Print a Test Point.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    #printResult(ok, message, extra, front = false) {
        this.currentAssert = this.#printResult;
        this.#printedResult = true;
        const n = this.count + 1;
        const fn = this.currentAssert;
        this.#currentAssert = undefined;
        if (this.#planEnd !== -1 && n > this.#planEnd) {
            // prevent infinite regress of "plan exceeded" fails
            if (!this.passing())
                return;
            // the 'automatic end' can only occur with the root TAP object
            // and even then, pretty hard to trigger, since it would mean
            // going several turns of the event loop and hitting it at just
            // the right time before the process quits.
            const failMessage = this.#promiseEnded ? 'test assertion after Promise resolution'
                : this.#explicitEnded ?
                    'test assertion after end() was called'
                    : this.#explicitPlan ? 'test assertion count exceeds plan'
                        : /* c8 ignore start */ 'assertion after automatic end';
            /* c8 ignore stop */
            const er = new Error(failMessage, {
                cause: {
                    test: this.name,
                    plan: this.#planEnd,
                },
            });
            Error.captureStackTrace(er, fn);
            this.threw(er, extraFromError(er));
            return;
        }
        if (extra.skip && this.options.failSkip) {
            extra.failedSkip = extra.skip;
            delete extra.skip;
            ok = false;
        }
        if (extra.todo && this.options.failTodo) {
            extra.failedTodo = extra.todo;
            delete extra.todo;
            ok = false;
        }
        if (extra.only && this.options.failOnly) {
            extra.failedOnly = 'only:true tests not allowed';
            delete extra.only;
            ok = false;
        }
        const diagnostic = typeof extra.diagnostic === 'boolean' ? extra.diagnostic
            : typeof this.diagnostic === 'boolean' ? this.diagnostic
                : extra.skip || extra.todo ? false
                    : !ok;
        if (diagnostic) {
            extra.diagnostic = true;
        }
        if (extra.at === null) {
            delete extra.at;
            delete extra.stack;
        }
        else if (typeof extra.stack === 'string' &&
            extra.stack &&
            !extra.at) {
            const parsed = stack.parseStack(extra.stack);
            extra.at = parsed[0];
            extra.stack = parsed.map(c => String(c) + '\n').join('');
        }
        else if (!extra.at && typeof fn === 'function') {
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
        this.count = n;
        message = message + '';
        const res = { ok, message, extra };
        this.#inheritFlags(extra);
        const tp = new TestPoint(ok, message, extra);
        // when we jump the queue, skip an extra line
        if (front) {
            tp.message = tp.message.trimEnd() + '\n\n';
        }
        // push to the front when we are occupied by a waiter and have ended,
        // otherwise the relevant awaited assertion will be lost.
        if (this.#occupied &&
            this.#occupied instanceof Waiter &&
            this.#awaitingEnd) {
            front = true;
        }
        if (front) {
            if (extra.tapChildBuffer || extra.tapChildBuffer === '') {
                this.#writeSubComment(tp);
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
        this.#process();
        if (this.#planEnd === this.count) {
            if (!this.#awaitingEnd && !this.#occupied)
                this.#end(IMPLICIT);
            else
                this.#awaitingEnd ||= IMPLICIT;
        }
        this.#process();
    }
    /**
     * Explicitly mark the test as completed, outputting the TAP plan line if
     * needed.
     *
     * This is not required to be called if the test function returns a promise,
     * or if a plan is explicitly declared and eventually fulfilled.
     *
     * @group Test Lifecycle Management
     */
    end(implicit) {
        this.#end(implicit);
        return this;
    }
    /**
     * The leading `# Subtest` comment that introduces a child test
     *
     * @internal
     *
     * @group Internal Machinery
     */
    #writeSubComment(p) {
        // name will generally always be set
        /* c8 ignore start */
        const stn = p.name ? ': ' + esc(p.name) : '';
        /* c8 ignore stop */
        const comment = `# Subtest${stn}\n`;
        this.parser.write(comment);
    }
    // end TAP otput generating methods
    // flow control methods
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
    waitOn(promise, cb, expectReject = false) {
        const w = new Waiter(promise, w => {
            assert.equal(this.#occupied, w);
            if (cb)
                cb(w);
            this.#occupied = null;
            this.#process();
        }, expectReject);
        // if the top of the queue is still the version line, we come
        // in after that. otherwise, it should be the next thing processed.
        if (this.queue[0] === VERSION) {
            this.queue.shift();
            this.queue.unshift(VERSION, w);
        }
        else {
            this.queue.unshift(w);
        }
        this.#process();
        return w.promise;
    }
    #end(implicit) {
        if (this.#doingStdinOnly && implicit !== IMPLICIT) {
            throw new Error('cannot explicitly end while in stdinOnly mode');
        }
        this.debug('END %s implicit=%j', this.name, implicit === IMPLICIT);
        if (this.ended && implicit === IMPLICIT) {
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
            this.debug('#end: queue not empty, or occupied', this.#awaitingEnd, this.#occupied, this.queue);
            if (!this.#awaitingEnd) {
                this.#awaitingEnd = implicit === IMPLICIT ? IMPLICIT : true;
            }
            return this.#process();
        }
        if (implicit !== IMPLICIT) {
            if (this.#explicitEnded && this.#awaitingEnd !== true) {
                this.debug('multi-end');
                if (!this.#multiEndThrew) {
                    this.#multiEndThrew = true;
                    const er = new Error('test end() method called more than once');
                    Error.captureStackTrace(er, this.#currentAssert || this.end);
                    er.cause = {
                        test: this.name,
                    };
                    this.threw(er);
                }
                return;
            }
            this.debug('set #explicitEnded=true');
            // switch from awaiting to processing the explicit end() call.
            this.#explicitEnded = true;
            this.#awaitingEnd = false;
        }
        if (this.#planEnd === -1 && !this.#doingStdinOnly) {
            this.debug('END(%s) implicit plan', this.name, this.count);
            const c = this.count === 0 && !this.parent ? 'no tests found' : '';
            this.plan(this.count, c, IMPLICIT);
        }
        else if (!this.ended && this.#planEnd !== -1) {
            const count = this.#endingAllSub ? this.count - 1 : this.count;
            if (this.#planEnd > count) {
                this.fail(`test count(${count}) != plan(${this.#planEnd})`, {
                    found: count,
                    wanted: this.#planEnd,
                    at: this.#planAt,
                    stack: '',
                });
            }
        }
        this.debug('set ended=true');
        this.ended = true;
        this.queue.push(EOF);
        this.#process();
    }
    /**
     * The full name of the test, starting with the main script name,
     * and including all parent names.
     */
    get fullname() {
        const main = (mainScript('TAP') +
            ' ' +
            argv.slice(2).join(' ')).trim();
        const n = [
            (this.parent ? this.parent.fullname
                : main === 'TAP' ? 'TAP'
                    : relative(cwd, main).replace(/\\/g, '/')).trim(),
        ];
        // tests will generally always have a name
        /* c8 ignore start */
        const myName = (this.name || '').trim();
        /* c8 ignore stop */
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
            if (p instanceof Base) {
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
                this.debug('eof end parser', this.name);
                this.parser.end();
            }
            else if (p instanceof TestPoint) {
                this.debug(' > TESTPOINT');
                if (p.extra.tapChildBuffer || p.extra.tapChildBuffer === '') {
                    this.#writeSubComment(p);
                    this.parser.write(p.extra.tapChildBuffer);
                }
                this.emit('res', p.res);
                this.parser.write(p.ok + ++this.#n + p.message);
            }
            else if (typeof p === 'string') {
                this.debug(' > STRING');
                this.parser.write(p);
            }
            else if (p instanceof Waiter) {
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
                const fn = this[m];
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
        // waiters are serial
        const ow = !!this.#occupied && this.#occupied instanceof Waiter;
        while (!this.#noparallel && !ow && this.pool.size < this.jobs) {
            const p = this.subtests.shift();
            if (!p) {
                break;
            }
            if (!p.buffered) {
                this.#noparallel = true;
                break;
            }
            this.debug('start subtest', p);
            this.activeSubtests.add(p);
            this.pool.add(p);
            this.emit('subtestStart', p);
            if (this.bailedOut) {
                this.#onBufferedEnd(p);
            }
            else {
                // ts doesn't know this will always be set at this point
                /* c8 ignore start */
                p.options.jobId = this.#getJobId(p.options.childId || 0);
                /* c8 ignore stop */
                p.runMain(() => this.#onBufferedEnd(p));
            }
        }
        this.debug('done processing', this.queue, this.#occupied, this.#awaitingEnd);
        this.#processing = false;
        // just in case any tests ended, and we have sync stuff still
        // waiting around in the queue to be processed
        if (!this.#occupied && this.queue.length) {
            this.#process();
        }
        else if (this.idle) {
            this.debug('idle after #process', this.#awaitingEnd, this.#occupied);
            if (this.#awaitingEnd) {
                this.debug('awaited end in process', this.#awaitingEnd);
                this.#end(this.#awaitingEnd === IMPLICIT ? IMPLICIT : undefined);
            }
            // the root tap runner uses this event to know when it is safe to
            // automatically end.
            this.emit('idle');
        }
    }
    // virtual "worker" id, even though it's just a pool
    #getJobId(childId = 0) {
        let j = childId % this.jobs;
        const start = j;
        while (this.#jobIds.has(j)) {
            j = (j + 1) % this.jobs;
            // impossible because math
            /* c8 ignore start */
            if (j === start)
                return 0;
            /* c8 ignore stop */
        }
        this.#jobIds.add(j);
        return j;
    }
    /**
     * True if the test is currently in an idle state
     */
    get idle() {
        return (!this.#processing &&
            queueEmpty(this) &&
            !this.pool.size &&
            !this.subtests.length &&
            !this.#occupied &&
            // if we have a plan, don't autoend until the plan is complete.
            (this.#planEnd === -1 || this.count === this.#planEnd));
    }
    #onBufferedEnd(p) {
        // ignore ends that come in after we've already aborted
        if (this.ended && this.#endingAll)
            return;
        this.#jobIds.delete(p.options.jobId || 0);
        p.results = p.results || new FinalResults(true, p.parser);
        p.readyToProcess = true;
        const to = p.options.timeout;
        const dur = to && p.passing() ?
            Number(hrtime.bigint() - p.start) / 1e6
            : null;
        if (dur && to && dur > to) {
            p.timeout();
        }
        else {
            p.setTimeout(0);
        }
        this.debug('%s.#onBufferedEnd', this.name, p.name, p.results.bailout);
        p.options.tapChildBuffer = p.output || '';
        p.options.stack = '';
        if (p.time)
            p.options.time = p.time;
        if (this.#occupied === p)
            this.#occupied = null;
        this.pool.delete(p);
        this.activeSubtests.delete(p);
        p.deferred?.resolve(p.results);
        this.emit('subtestEnd', p);
        this.#process();
    }
    #onIndentedEnd(p) {
        // ignore ends that come in after we've already aborted
        if (this.ended && this.#endingAll)
            return;
        this.debug('onIndentedEnd', p.name);
        this.emit('subtestProcess', p);
        // we'll generally already have a results by now, but just to be sure
        /* c8 ignore start */
        p.results = p.results || new FinalResults(true, p.parser);
        /* c8 ignore stop */
        this.#noparallel = false;
        const sti = this.subtests.indexOf(p);
        if (sti !== -1)
            this.subtests.splice(sti, 1);
        p.readyToProcess = true;
        p.options.time = p.time;
        const to = p.options.timeout;
        const now = hrtime.bigint();
        const dur = to && p.passing() ? Number(now - p.start) / 1e6 : null;
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
        if (!p.silent || !p.passing()) {
            if (p.silent)
                p.options.tapChildBuffer = p.output;
            this.#printResult(p.passing(), p.name, p.options, true);
        }
        this.debug('OIE(%s) shifted into queue', this.name, this.queue);
        this.activeSubtests.delete(p);
        p.deferred?.resolve(p.results);
        this.emit('subtestEnd', p);
        this.#process();
    }
    /**
     * The main function that starts a test running. Generally no need
     * to call this directly.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    main(cb) {
        if (typeof this.options.timeout === 'number') {
            this.setTimeout(this.options.timeout);
        }
        const done = (er) => {
            this.donePromise = undefined;
            if (er)
                this.threw(er);
            if (this.results || this.bailedOut)
                cb();
            else
                this.ondone = () => {
                    super.ondone();
                    cb();
                };
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
                    er = { error: er, at: null };
                }
                er.tapCaught = 'testFunctionThrow';
                this.threw(er);
            }
        })();
        if (ret && ret.then) {
            this.donePromise = Object.assign(ret, {
                tapAbortPromise: done,
            });
            ret.then(() => {
                this.debug(' > implicit end for promise?', this.#occupied, this.queue, this.#explicitPlan, this.#awaitingEnd);
                // the promise has ended
                // If we had an explicit plan that is now satisfied but was waiting
                // for the promise to resolve, or if there was no explicit plan, end
                // the test.
                this.#promiseEnded = true;
                if (
                // not already ended
                !this.ended &&
                    ((!this.#explicitPlan && !this.#awaitingEnd) ||
                        (this.#explicitPlan &&
                            this.#awaitingEnd &&
                            this.count === this.#planEnd)) &&
                    !this.#occupied) {
                    // this should only be possible if an explicit end()
                    // has been called, because the only other source of an
                    // implicit end is this function right here.
                    this.#end(
                    /* c8 ignore start */
                    this.#awaitingEnd === IMPLICIT ? IMPLICIT : undefined);
                }
                else {
                    this.debug('await implicit end');
                    this.#awaitingEnd = IMPLICIT;
                }
                done();
            }, (er) => {
                if (!er || typeof er !== 'object') {
                    er = { error: er, at: null };
                }
                er.tapCaught = 'returnedPromiseRejection';
                done(er);
            });
        }
        else {
            done();
        }
        this.debug('MAIN post', this.name);
    }
    #processSubtest(p) {
        this.debug('processSubtest', p.name);
        this.debug(' > subtest');
        this.#occupied = p;
        if (!p.buffered) {
            this.activeSubtests.add(p);
            this.emit('subtestStart', p);
            this.debug(' > subtest indented');
            p.pipe(this.parser, { end: false });
            if (!p.silent)
                this.#writeSubComment(p);
            this.debug('calling runMain', p.name);
            p.runMain(() => this.#onIndentedEnd(p));
        }
        else if (p.readyToProcess) {
            this.emit('subtestProcess', p);
            this.debug(' > subtest buffered, finished');
            // finished!  do the thing!
            this.#occupied = null;
            if (!p.passing() || !p.silent) {
                this.#printResult(p.passing(), p.name, p.options, true);
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
     *
     * @group Subtest Methods
     */
    stdinOnly(extra) {
        const stream = (extra?.tapStream ?? process.stdin);
        /* c8 ignore start */
        if (!stream) {
            throw new Error('cannot read stdin without stdin stream');
        }
        /* c8 ignore stop */
        if (this.queue.length !== 1 ||
            this.queue[0] !== VERSION ||
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
            const t = new Base({
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
            this.activeSubtests.add(t);
            this.emit('subtestStart', t);
            this.emit('subtestProcess', t);
            p.on('complete', () => {
                t.time = p.time;
                this.activeSubtests.delete(t);
                this.emit('subtestEnd', t);
            });
        });
        stream.pipe(this.parser);
        stream.resume();
    }
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
    sub(Class, extra = {}, caller = this.sub) {
        if (this.bailedOut) {
            return Object.assign(Promise.resolve(null), {
                subtest: null,
            });
        }
        if (this.results || this.ended) {
            const msg = this.#promiseEnded ?
                'cannot create subtest after parent promise resolves'
                : this.#explicitEnded ? 'subtest after parent test end()'
                    : this.#explicitPlan ? 'test count exceeds plan'
                        : /* c8 ignore start */
                            'cannot create subtest after parent test ends';
            /* c8 ignore stop */
            const er = new Error(msg);
            Error.captureStackTrace(er, caller);
            this.threw(er);
            return Object.assign(Promise.resolve(null), {
                subtest: null,
            });
        }
        extra.childId = this.#nextChildId++;
        if (this.shouldSkipChild(extra)) {
            this.currentAssert = this.sub;
            this.pass(extra.name || '', extra);
            return Object.assign(Promise.resolve(null), {
                subtest: null,
            });
        }
        extra.indent = '    ';
        if (extra.buffered === undefined && !extra.silent) {
            extra.buffered = this.jobs > 1;
        }
        extra.parent = this;
        if (!extra.at && extra.at !== null) {
            const st = stack.capture(80, caller);
            extra.at = st[0];
            extra.stack = st.map(c => String(c)).join('\n');
        }
        this.#inheritFlags(extra);
        const t = new Class(extra);
        this.queue.push(t);
        this.subtests.push(t);
        this.emit('subtestAdd', t);
        // this would make its way here eventually anyway, but the
        // test bailing out might be waiting for its turn in the pool
        // to be processed, and bailout should happen ASAP.
        t.on('bailout', reason => this.bailout(reason));
        const d = new Deferred();
        t.deferred = d;
        this.#process();
        return Object.assign(d.promise, { subtest: t });
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
        if (typeof er === 'string') {
            er = { message: er, at: null };
        }
        if (this.name && !proxy) {
            er.test = this.name;
        }
        if (!proxy) {
            extra = extraFromError(er, extra);
        }
        this.debug('T.t call Base.threw', this.name, er, extra);
        const ended = !!this.results ||
            // should be impossible, when we hit the plan end, we end
            /* c8 ignore start */
            (this.#explicitPlan && this.count === this.#planEnd);
        /* c8 ignore stop */
        this.parser.ok = false;
        const threwInfo = super.threw(er, extra, proxy, ended);
        // Handle the failure here, but only if we (a) don't have
        // results yet (indicating an end) and (b) are not currently
        // at the plan end (which would mean that any failure is
        // ignored to prevent infinite regress in "plan exceeded"
        // failures)
        if (!ended && threwInfo) {
            const msg = threwInfo.message;
            extra ??= { at: null };
            if (this.parent && extra.test === this.name) {
                // remove extraneous indicator if it's already nested
                // in a TAP subtest
                delete extra.test;
            }
            if (extra.error === msg) {
                delete extra.error;
            }
            if (!extra.stack && er.stack && typeof er.stack === 'string') {
                // trim off the first line if it looks like the standard
                // error `Name: message` line.
                /* c8 ignore start */
                const f = `${er.name || 'Error'}: ${er.message}\n`;
                const st = er.stack.startsWith(f) ?
                    er.stack.substring(f.length)
                    : er.stack;
                /* c8 ignore stop */
                const p = stack.parseStack(st);
                extra.at = p[0] || null;
                extra.stack = p.map(c => String(c) + '\n').join('');
            }
            if (!extra.at && !extra.stack)
                extra.at = null;
            this.fail(msg, extra);
            if (this.ended || this.#awaitingEnd) {
                this.ended = false;
                this.#awaitingEnd = false;
                this.end(IMPLICIT);
            }
        }
        if (this.#occupied && this.#occupied instanceof Waiter) {
            this.#occupied.abort(Object.assign(new Error('error thrown while awaiting Promise'), { thrown: er }));
            this.#occupied = null;
        }
        if (!proxy) {
            this.#end(IMPLICIT);
            this.#processing = false;
        }
        this.#process();
        /* c8 ignore start */
        this.donePromise?.tapAbortPromise?.();
        /* c8 ignore stop */
    }
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
    onbail(message) {
        super.onbail(message);
        this.#end(IMPLICIT);
        if (!this.parent) {
            this.endAll();
        }
        else {
            throw 'bailout';
        }
    }
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
    endAll(sub = false) {
        if (this.bailedOut)
            return;
        this.#endingAll = true;
        this.#endingAllSub = sub;
        // in the case of the root TAP test object, we might sometimes
        // call endAll on a bailing-out test, as the process is ending
        // In that case, we WILL have a this.occupied and a full queue
        // These cases are very rare to encounter in other Test objs tho
        this.#processing = true;
        if (this.#occupied) {
            const p = this.#occupied;
            if (p instanceof Waiter)
                p.abort(new Error('test unfinished'));
            else if (typeof p.endAll === 'function') {
                // first try to end explicitly, then endAll if that didn't work
                const pt = p;
                pt.endAll(true);
            }
            else
                p.parser.abort('test unfinished');
            this.#occupied = null;
        }
        else if (sub) {
            this.#process();
            if (queueEmpty(this) &&
                (this.#planEnd === -1 || this.count < this.#planEnd)) {
                const options = Object.assign({}, this.options);
                options.test = this.name;
                this.fail('test unfinished', options);
            }
        }
        this.donePromise?.tapAbortPromise?.();
        for (let i = 0; i < this.queue.length; i++) {
            const p = this.queue[i];
            if (p instanceof Base && !p.readyToProcess) {
                const msg = `child test left in queue: ${p.name}`;
                delete p.options.skip;
                delete p.options.todo;
                this.queue[i] = new TestPoint(false, msg, p.options);
                this.count++;
            }
        }
        this.#processing = false;
        this.#process();
        this.end(IMPLICIT);
        this.#process();
    }
    /**
     * Return true if the child test represented by the options object
     * should be skipped.  Extended by the `@tapjs/filter` plugin.
     *
     * @internal
     *
     * @group Internal Machinery
     */
    shouldSkipChild(extra) {
        return !!(extra.skip || extra.todo);
    }
}
//# sourceMappingURL=test-base.js.map