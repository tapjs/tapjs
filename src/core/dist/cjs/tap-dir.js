"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tapDir = void 0;
// this form only works in the cjs.
// it'll overwrite tap-dir.js output in cjs mode
const path_1 = require("path");
/* c8 ignore start */
//@ts-ignore
const u = (0, path_1.dirname)(__dirname);
exports.tapDir = (0, path_1.basename)(u) === 'dist' ? (0, path_1.dirname)(u) : u;
/* c8 ignore stop */
//# sourceMappingURL=tap-dir-cjs.js.map