"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tapDir = void 0;
/**
 * Module that provides the location of the `@tapjs/core` module
 * Abstracted so that it can be built in two different ways depending
 * on whether we're building for CJS or ESM.
 * @module
 */
// this form only works in the cjs.
// it'll overwrite tap-dir.js output in cjs mode
const path_1 = require("path");
//@ts-ignore
const u = (0, path_1.dirname)(__dirname);
/* c8 ignore start */
exports.tapDir = (0, path_1.basename)(u) === 'dist' ? (0, path_1.dirname)(u) : u;
/* c8 ignore stop */
//# sourceMappingURL=tap-dir-cjs.cjs.map