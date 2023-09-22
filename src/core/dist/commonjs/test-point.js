"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPoint = void 0;
const diags_js_1 = require("./diags.js");
const esc_js_1 = require("./esc.js");
/**
 * Object representing a single test point `ok` / `not ok` line
 */
class TestPoint {
    ok;
    name;
    message;
    extra;
    res;
    constructor(ok, message, extra) {
        extra = extra || {};
        this.ok = ok ? 'ok ' : 'not ok ';
        message = message
            .trim()
            .replace(/[\n\r]/g, ' ')
            .replace(/\t/g, '  ');
        this.res = { ok, message, extra };
        this.extra = extra;
        this.name = message;
        this.message = tpMessage((0, esc_js_1.esc)(this.name), extra);
    }
}
exports.TestPoint = TestPoint;
const tpMessage = (description, extra) => {
    let message = description ? ` - ${description}` : '';
    if (extra.skip) {
        message += ' # SKIP';
        if (typeof extra.skip === 'string') {
            message += ' ' + (0, esc_js_1.esc)(extra.skip);
        }
    }
    else if (extra.todo) {
        message += ' # TODO';
        if (typeof extra.todo === 'string') {
            message += ' ' + (0, esc_js_1.esc)(extra.todo);
        }
    }
    else if (extra.time) {
        message += ' # time=' + extra.time + 'ms';
    }
    // TODO: add # time if duration_ms in extra
    const diagYaml = extra.diagnostic ? '\n' + (0, diags_js_1.diags)(extra) : '';
    message += diagYaml + '\n';
    return message;
};
//# sourceMappingURL=test-point.js.map