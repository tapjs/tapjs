"use strict";
/**
 * grab some basic process stuff safely at startup
 *
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = exports.argvRelative = exports.cwd = exports.argv = exports.proc = void 0;
const node_path_1 = require("node:path");
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
 * Relativized argv, for use in snapshot filenames and test.fullname
 */
exports.argvRelative = exports.argv.map(s => s.startsWith(exports.cwd) ? (0, node_path_1.relative)(exports.cwd, s).replace(/\\/g, '/') : s);
/**
 * A reference to `process.env`, if available.
 */
exports.env = exports.proc?.env || {};
//# sourceMappingURL=proc.js.map