"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = exports.cwd = exports.argv = exports.proc = void 0;
// grab some basic process stuff safely at startup
exports.proc = typeof process === 'object' && process ? process : undefined;
exports.argv = exports.proc?.argv || [];
exports.cwd = exports.proc?.cwd?.() || '.';
exports.env = exports.proc?.env || {};
//# sourceMappingURL=proc.js.map