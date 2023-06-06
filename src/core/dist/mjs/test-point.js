import { diags } from './diags.js';
import { esc } from './esc.js';
export class TestPoint {
    ok;
    name;
    message;
    extra;
    res;
    constructor(ok, message, extra) {
        this.ok = ok ? 'ok ' : 'not ok ';
        extra = extra || {};
        message = message
            .trim()
            .replace(/[\n\r]/g, ' ')
            .replace(/\t/g, '  ');
        this.res = { ok, message, extra };
        this.extra = extra;
        this.name = message;
        this.message = tpMessage(esc(this.name), extra);
    }
}
const tpMessage = (description, extra) => {
    let message = description ? ` - ${description}` : '';
    if (extra.skip) {
        message += ' # SKIP';
        if (typeof extra.skip === 'string') {
            message += ' ' + esc(extra.skip);
        }
    }
    else if (extra.todo) {
        message += ' # TODO';
        if (typeof extra.todo === 'string') {
            message += ' ' + esc(extra.todo);
        }
    }
    else if (extra.time) {
        message += ' # time=' + extra.time + 'ms';
    }
    const diagYaml = extra.diagnostic
        ? '\n' + diags(extra)
        : '';
    message += diagYaml + '\n';
    return message;
};
//# sourceMappingURL=test-point.js.map