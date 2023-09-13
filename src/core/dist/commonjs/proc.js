"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = exports.cwd = exports.argv = exports.proc = void 0;
/**
 * grab some basic process stuff safely at startup
 *
 * @module
 */
/**
 * A reference to the global `process` object, if available
 */
exports.proc = typeof process === 'object' && process ? process : undefined;
/**
 * A reference to `process.argv`, if available
 */
exports.argv = exports.proc?.argv || [];
/**
 * A reference to `process.cwd()`, if available. Note that this is not
 * updated if `process.chdir()` is called.
 */
exports.cwd = exports.proc?.cwd?.() || '.';
/**
 * A reference to `process.env`, if available.
 */
exports.env = exports.proc?.env || {};
//# sourceMappingURL=proc.js.map