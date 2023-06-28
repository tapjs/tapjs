"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const async_hook_domain_1 = require("async-hook-domain");
const async_hooks_1 = require("async_hooks");
const minipass_1 = require("minipass");
const node_process_1 = require("node:process");
const node_util_1 = require("node:util");
const tap_parser_1 = require("tap-parser");
const counts_js_1 = require("./counts.js");
const extra_from_error_js_1 = require("./extra-from-error.js");
const lists_js_1 = require("./lists.js");
class TapWrap extends async_hooks_1.AsyncResource {
    test;
    constructor(test) {
        super(`tap.${test.constructor.name}`);
        this.test = test;
    }
}
const debug = (name) => (...args) => {
    const prefix = `TAP ${process.pid} ${name}: `;
    const msg = (0, node_util_1.format)(...args).trim();
    console.error(prefix + msg.split('\n').join(`\n${prefix}`));
};
class Base extends minipass_1.Minipass {
    readyToProcess = false;
    options;
    indent;
    hook;
    // this actually is deterministically set in the ctor, but
    // in the hook, so tsc doesn't see it.
    hookDomain;
    timer;
    parser;
    debug;
    counts;
    lists;
    name;
    results;
    parent;
    bail;
    strict;
    omitVersion;
    preserveWhitespace;
    errors;
    childId;
    context;
    output;
    buffered;
    bailedOut;
    start;
    #started = false;
    time;
    hrtime;
    silent;
    deferred;
    #printedOutput = false;
    constructor(options = {}) {
        super({ encoding: 'utf8' });
        // all tap streams are sync string minipasses
        this.hook = new TapWrap(this);
        this.options = options;
        this.counts = new counts_js_1.Counts();
        this.lists = new lists_js_1.Lists();
        this.silent = !!options.silent;
        // if it's null or an object, inherit from it.  otherwise, copy it.
        const ctx = options.context;
        if (ctx !== undefined) {
            this.context =
                typeof ctx === 'object' ? Object.create(ctx) : ctx;
        }
        else {
            this.context = null;
        }
        this.bail = !!options.bail;
        this.strict = !!options.strict;
        this.omitVersion = !!options.omitVersion;
        this.preserveWhitespace = options.preserveWhitespace !== false;
        this.buffered = !!options.buffered;
        this.bailedOut = false;
        this.errors = [];
        this.parent = options.parent;
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
                    name: this.name,
                });
        this.setupParser();
        // ensure that a skip or todo on a child class reverts
        // back to Base's no-op main.
        if (options.skip || options.todo) {
            this.main = Base.prototype.main;
        }
    }
    setupParser() {
        this.parser.on('line', l => this.online(l));
        this.parser.once('bailout', reason => this.onbail(reason));
        this.parser.on('complete', result => this.oncomplete(result));
        this.parser.on('result', () => this.counts.total++);
        this.parser.on('pass', () => this.counts.pass++);
        this.parser.on('todo', res => {
            this.counts.todo++;
            this.lists.todo.push(res);
        });
        this.parser.on('skip', res => {
            // it is uselessly noisy to print out lists of tests skipped
            // because of a --grep or --only argument.
            if (/^filter: (only|\/.*\/)$/.test(res.skip))
                return;
            this.counts.skip++;
            this.lists.skip.push(res);
        });
        this.parser.on('fail', res => {
            this.counts.fail++;
            this.lists.fail.push(res);
        });
    }
    setTimeout(n) {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        if (n <= 0) {
            this.timer = undefined;
        }
        else {
            this.timer = setTimeout(() => this.timeout(), n);
            /* c8 ignore start */
            if (this.timer.unref)
                this.timer.unref();
            /* c8 ignore stop */
        }
    }
    timeout(options = {
        expired: this.name,
        message: 'timeout!',
    }) {
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
    runMain(cb) {
        this.debug('BASE runMain');
        this.start = node_process_1.hrtime.bigint();
        this.#started = true;
        this.hook.runInAsyncScope(this.main, this, cb);
    }
    get started() {
        return this.#started;
    }
    get printedOutput() {
        return this.#printedOutput;
    }
    main(cb) {
        cb();
    }
    write(c) {
        this.#printedOutput = true;
        if (this.buffered) {
            this.output += c;
            return true;
        }
        return super.write(c);
    }
    onbail(reason) {
        this.bailedOut = reason || true;
        this.emit('bailout', reason);
    }
    online(line) {
        this.debug('LINE %j', line, [this.name, this.indent]);
        return this.write(this.indent + line);
    }
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
        super.end();
    }
    /**
     * extension point for plugins that want to be notified when the test
     * is about to end, whether explicitly or implicitly.
     */
    onbeforeend() { }
    /**
     * extension point for plugins that want to be notified when the test
     * is completely done, and terminating its parser.
     * Eg, used by Snapshot plugin to write the snapshot file.
     */
    onEOF() { }
    /**
     * extension point for TestBase to know when a child tests is done being
     * processed and it's safe to move on to the next one.
     *
     * @internal
     */
    ondone() { }
    emit(ev, ...data) {
        const ret = super.emit(ev, ...data);
        if (ev === 'end') {
            this.ondone();
            this.hook.emitDestroy();
            this.hookDomain.destroy();
        }
        return ret;
    }
    end() {
        return this;
    }
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
        const message = er.message;
        if (!extra) {
            extra = (0, extra_from_error_js_1.extraFromError)(er, extra);
        }
        this.parser.ok = false;
        // if we ended, we have to report it SOMEWHERE, unless we're
        // already in the process of bailing out, in which case it's
        // a bit excessive. Do not print it here if it would trigger
        // a plan exceeded error, or if we already have results.
        if (ended ||
            this.results ||
            /* c8 ignore start */
            (this.parser.planEnd !== -1 &&
                this.parser.count >= this.parser.planEnd)
        /* c8 ignore stop */
        ) {
            this.debug('Base.threw, but finished', this.name, this.results, er.message);
            const alreadyBailing = (this.results?.ok === false && this.bail) ||
                this.parser.bailedOut ||
                this.results?.bailout;
            if (this.results)
                this.results.ok = false;
            if (this.parent) {
                this.parent.threw(er, extra, true);
            }
            else if (alreadyBailing) {
                // we are already bailing out, and this is the top level,
                // just make our way hastily to the nearest exit.
                return;
            }
            else if (!er.stack) {
                console.error(er);
            }
            else {
                if (message) {
                    er.message = message;
                }
                delete extra.stack;
                delete extra.at;
                /* c8 ignore start */
                const name = er.name || 'Error';
                /* c8 ignore stop */
                console.error('%s: %s', name, message);
                console.error(er.stack.split(/\n/).slice(1).join('\n'));
                console.error(extra);
            }
        }
        return extra;
    }
    passing() {
        return this.parser.ok;
    }
}
exports.Base = Base;
//# sourceMappingURL=base.js.map