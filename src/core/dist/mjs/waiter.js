export class Waiter {
    cb;
    ready = false;
    value = null;
    resolved = false;
    rejected = false;
    done = false;
    finishing = false;
    expectReject;
    promise;
    resolve = null;
    constructor(promise, cb, expectReject = false) {
        this.cb = cb;
        this.expectReject = !!expectReject;
        this.promise = new Promise(res => (this.resolve = res));
        promise
            .then(value => {
            if (this.done) {
                return;
            }
            this.resolved = true;
            this.value = value;
            this.done = true;
            this.finish();
        })
            .catch(er => this.reject(er));
    }
    reject(er) {
        if (this.done) {
            return;
        }
        this.value = er;
        this.rejected = true;
        this.done = true;
        this.finish();
    }
    // TODO: consider AbortSignal maybe?
    abort(er) {
        if (this.done) {
            return;
        }
        this.ready = true;
        this.finishing = false;
        this.done = true;
        this.value = er;
        // make it clear that this is a problem by doing
        // the opposite of what was requested.
        this.rejected = !this.expectReject;
        return this.finish();
    }
    finish() {
        if (this.ready && this.done && !this.finishing) {
            this.finishing = true;
            this.cb && this.cb(this);
            this.resolve && this.resolve();
        }
    }
}
//# sourceMappingURL=waiter.js.map