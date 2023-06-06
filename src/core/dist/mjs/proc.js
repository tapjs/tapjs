// grab some basic process stuff safely at startup
export const proc = typeof process === 'object' && process ? process : undefined;
export const argv = proc?.argv || [];
export const cwd = proc?.cwd?.() || '.';
export const env = proc?.env || {};
//# sourceMappingURL=proc.js.map