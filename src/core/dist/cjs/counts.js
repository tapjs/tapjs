"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counts = void 0;
class Counts {
    total = 0;
    pass = 0;
    fail = 0;
    skip = 0;
    todo = 0;
    complete;
    constructor(c) {
        if (c)
            Object.assign(this, c);
    }
    toJSON() {
        const c = {
            total: this.total,
            pass: this.pass,
        };
        if (this.fail)
            c.fail = this.fail;
        if (this.todo)
            c.todo = this.todo;
        if (this.skip)
            c.skip = this.skip;
        if (this.complete)
            c.complete = this.complete;
        return c;
    }
}
exports.Counts = Counts;
//# sourceMappingURL=counts.js.map