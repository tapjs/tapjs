"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esc = void 0;
/**
 * turn `\` into `\\` and `#` into `\#`, for stringifying in a TAP stream
 */
const esc = (str) => str.replace(/\\/g, '\\\\').replace(/#/g, '\\#');
exports.esc = esc;
//# sourceMappingURL=esc.js.map