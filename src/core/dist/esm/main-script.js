import { argv, proc } from './proc.js';
/**
 * Get the name of the main script for this process
 */
export const mainScript = (def = 'TAP') => {
    if (
    //@ts-ignore
    typeof repl !== 'undefined' ||
        //@ts-ignore
        proc._forceRepl ||
        //@ts-ignore
        '_eval' in proc) {
        return def;
    }
    return argv[1] || def;
};
//# sourceMappingURL=main-script.js.map