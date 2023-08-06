"use strict";
/**
 * Plugin class providing {@link After#after} and {@link After#teardown}
 * on the {@link Test} class.
 *
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.After = void 0;
const is_actual_promise_1 = require("is-actual-promise");
/**
 * Implementation class returned by plugin function
 */
class After {
    #t;
    #onTeardown = [];
    #didOnEOF = false;
    constructor(t) {
        this.#t = t;
    }
    /**
     * Alias for {@link After#after}
     */
    teardown(fn) {
        return this.after(fn);
    }
    /**
     * Runs the supplied function after the test is completely finished, and
     * before the next test starts.
     */
    after(fn) {
        this.#onTeardown.push(fn);
        if (!this.#didOnEOF) {
            this.#didOnEOF = true;
            const onEOF = this.#t.onEOF;
            this.#t.onEOF = () => {
                const ret = onEOF();
                if ((0, is_actual_promise_1.isPromise)(ret)) {
                    return ret.then(() => this.#callTeardown());
                }
                return this.#callTeardown();
            };
        }
    }
    /**
     * call the teardown functions
     *
     * @internal
     */
    #callTeardown() {
        let fn;
        while ((fn = this.#onTeardown.shift())) {
            try {
                const ret = fn.call(this.#t.t);
                if ((0, is_actual_promise_1.isPromise)(ret)) {
                    return ret.then(() => this.#callTeardown());
                }
            }
            catch (e) {
                this.#onTeardown.length = 0;
                this.#t.threw(e);
                return;
            }
        }
    }
}
exports.After = After;
/**
 * Plugin method that creates the {@link After} instance
 */
const plugin = (t) => new After(t);
exports.plugin = plugin;
//# sourceMappingURL=index.js.map