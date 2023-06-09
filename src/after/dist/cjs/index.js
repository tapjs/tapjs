"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.After = void 0;
class After {
    #t;
    #onTeardown = [];
    #didOnEOF = false;
    constructor(t) {
        this.#t = t;
    }
    /**
     * Alias for `t.after(fn)`
     */
    teardown(fn) {
        return this.after(fn);
    }
    /**
     * Just run the supplied function right away.
     * Runs after the test is completely finished, and before the next
     * test starts.
     */
    after(fn) {
        this.#onTeardown.push(fn);
        if (!this.#didOnEOF) {
            this.#didOnEOF = true;
            const onEOF = this.#t.onEOF;
            this.#t.onEOF = () => {
                const ret = onEOF();
                if (isPromise(ret)) {
                    return ret.then(() => this.#callTeardown());
                }
                return this.#callTeardown();
            };
        }
    }
    #callTeardown() {
        let fn;
        while (fn = this.#onTeardown.shift()) {
            try {
                const ret = fn.call(this.#t.t);
                if (isPromise(ret)) {
                    this.#t.waitOn(ret, w => {
                        if (w.rejected) {
                            this.#t.threw(w.value);
                        }
                        else {
                            this.#callTeardown();
                        }
                    });
                    return ret;
                }
            }
            catch (e) {
                this.#t.threw(e);
                return;
            }
        }
    }
}
exports.After = After;
const plugin = (t) => new After(t);
exports.plugin = plugin;
const isPromise = (p) => !!p &&
    typeof p === 'object' &&
    typeof p.then === 'function';
//# sourceMappingURL=index.js.map