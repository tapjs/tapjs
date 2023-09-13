import { parseTestArgs } from './parse-test-args.js';
import { TestBase, } from './test-base.js';
/**
 * A very minimal Test class with no plugins, which can be used in tap tests.
 *
 * It is essentially just the TestBase class, but automatically starting in the
 * constructor, and with a .test() method so that it can be used somewhat like
 * a "normal" Test instance.
 *
 * The reason that this method does not live on TestBase itself is that it
 * would make it more awkward to define on the Test class, with all its plugins
 * and extensions.
 *
 * Only useful if you want a Test without any plugins, for some reason.
 */
export class Minimal extends TestBase {
    constructor(opts) {
        super(opts);
        if (!this.parent)
            this.runMain(() => { });
    }
    test(...args) {
        const extra = parseTestArgs(...args);
        return this.sub(Minimal, extra, this.test);
    }
}
//# sourceMappingURL=minimal.js.map