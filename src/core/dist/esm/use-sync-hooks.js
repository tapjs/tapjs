// tell plugins that they should use synchronous hooks.
import * as MODULE from 'node:module';
const getNodeVersion = (v) => {
    /* c8 ignore start */
    const [major = 0, minor = 0, patch = 0] = v
        .replace(/^v/, '')
        .split('.')
        .map(n => parseInt(n, 10));
    /* c8 ignore stop */
    return [major, minor, patch];
};
const nodeVersion = (min) => {
    const nv = getNodeVersion(String(globalThis.process?.version));
    return (nv[0] > min[0] ||
        (nv[0] === min[0] && nv[1] > min[1]) ||
        (nv[0] === min[0] && nv[1] === min[1] && nv[2] >= min[2]));
};
export const registerHooks = !!MODULE.registerHooks && nodeVersion([24, 11, 1]) ?
    MODULE.registerHooks
    : undefined;
//# sourceMappingURL=use-sync-hooks.js.map