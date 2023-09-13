"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minimal = void 0;
const parse_test_args_js_1 = require("./parse-test-args.js");
const test_base_js_1 = require("./test-base.js");
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
class Minimal extends test_base_js_1.TestBase {
    constructor(opts) {
        super(opts);
        if (!this.parent)
            this.runMain(() => { });
    }
    test(...args) {
        const extra = (0, parse_test_args_js_1.parseTestArgs)(...args);
        return this.sub(Minimal, extra, this.test);
    }
}
exports.Minimal = Minimal;
//# sourceMappingURL=minimal.js.map