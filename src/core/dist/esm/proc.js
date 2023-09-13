/**
 * grab some basic process stuff safely at startup
 *
 * @module
 */
/**
 * A reference to the global `process` object, if available
 */
export const proc = typeof process === 'object' && process ? process : undefined;
/**
 * A reference to `process.argv`, if available
 */
export const argv = proc?.argv || [];
/**
 * A reference to `process.cwd()`, if available. Note that this is not
 * updated if `process.chdir()` is called.
 */
export const cwd = proc?.cwd?.() || '.';
/**
 * A reference to `process.env`, if available.
 */
export const env = proc?.env || {};
//# sourceMappingURL=proc.js.map