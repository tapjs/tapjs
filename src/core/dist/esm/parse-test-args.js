/**
 * Normalize the arguments provided to a subtest method
 */
export const parseTestArgs = (...args) => {
    let name = undefined;
    let extra = undefined;
    let cb = undefined;
    // this only works if it's literally the 4th argument.
    // used internally.
    const defaultName = args[3] || '';
    for (let i = 0; i < 3 && i < args.length; i++) {
        const arg = args[i];
        if (name === undefined &&
            (typeof arg === 'string' || typeof arg === 'number')) {
            name = '' + arg;
        }
        else if (arg && typeof arg === 'object') {
            extra = arg;
            if (name === undefined)
                name = null;
        }
        else if (typeof arg === 'function') {
            if (extra === undefined)
                extra = {};
            if (name === undefined)
                name = null;
            cb = arg;
        }
        else if (arg === false) {
            // it's handy while developing to put a ! in front of a
            // function to temporarily make a test todo
            continue;
        }
        else if (typeof arg !== 'undefined') {
            throw new TypeError('invalid test argument: ' + typeof arg);
        }
    }
    if (!extra)
        extra = {};
    const bex = extra;
    if (!cb && defaultName !== '/dev/stdin') {
        bex.todo = bex.todo || true;
    }
    if (!name && bex.name)
        name = bex.name;
    if (!name && cb && cb.name)
        name = cb.name;
    name = name || defaultName;
    bex.name = name;
    const opts = extra;
    opts.cb = cb || todoCb;
    return opts;
};
const todoCb = () => {
    throw new Error('callback called for TODO test');
};
//# sourceMappingURL=parse-test-args.js.map