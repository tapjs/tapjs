"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainScript = void 0;
const proc_js_1 = require("./proc.js");
/**
 * Get the name of the main script for this process
 */
const mainScript = (def = 'TAP') => {
    if (
    //@ts-ignore
    typeof repl !== 'undefined' ||
        //@ts-ignore
        proc_js_1.proc._forceRepl ||
        //@ts-ignore
        '_eval' in proc_js_1.proc) {
        return def;
    }
    return proc_js_1.argv[1] || def;
};
exports.mainScript = mainScript;
//# sourceMappingURL=main-script.js.map