import { argv, proc } from './proc.js';
export const mainScript = (def = 'TAP') => {
    //@ts-ignore
    if (typeof repl !== 'undefined' || '_eval' in proc) {
        return def;
    }
    return argv[1] || def;
};
//# sourceMappingURL=main-script.js.map