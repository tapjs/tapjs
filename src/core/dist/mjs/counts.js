/**
 * Class representing a count of all the assertions in a test
 *
 * The {@link @tapjs/core!counts.Counts#complete} field is only used when counting tests and
 * tracking their completion status.
 *
 * @internal
 */
export class Counts {
    total = 0;
    pass = 0;
    fail = 0;
    skip = 0;
    todo = 0;
    complete = 0;
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
//# sourceMappingURL=counts.js.map