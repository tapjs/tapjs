import { Minipass } from 'minipass';
import { Parser } from 'tap-parser';
const instances_ = [];
export const instances = () => {
    const r = instances_.slice(0);
    instances_.length = 0;
    return r;
};
export default class Reporter extends Minipass {
    parser;
    constructor() {
        super({ encoding: 'utf8' });
        instances_.push(this);
        this.parser = new Parser(results => {
            super.write(JSON.stringify(results));
            super.end();
        });
    }
    write(c) {
        super.write(c);
        return this.parser.write(c);
    }
    end() {
        this.parser.end();
        return this;
    }
}
//# sourceMappingURL=index.js.map