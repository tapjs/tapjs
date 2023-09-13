import { diags } from './diags.js';
/**
 * Provides a way for Spawn and Worker instances to handle thrown
 * errors in their TAP subtest block, rather than always having to
 * proxy their throws to the parent, since they lack any TAP generation
 * methods like TestBase.
 */
export const throwToParser = (parser, extra) => {
    // if the throw was already proxied up for some reason, just give up
    if (!extra)
        return;
    parser.write(`not ok ${parser.pointsSeen.size + 1} - ${extra.message || 'unhandled error'}\n${diags(extra)}`);
    if (parser.planEnd === -1) {
        parser.write(`\n1..${parser.pointsSeen.size}\n`);
    }
    parser.end();
    return extra;
};
//# sourceMappingURL=throw-to-parser.js.map