export class Counts {
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
        return c;
    }
}
//# sourceMappingURL=counts.js.map