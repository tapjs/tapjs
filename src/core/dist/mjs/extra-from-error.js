import * as stack from '@tapjs/stack';
export const extraFromError = (er, extra, options) => {
    // the yaml module puts big stuff here, pluck it off
    // otherwise it's quite noisy when we throw as a result of
    // trying to parse invalid tap diagnostics.
    if (er.source &&
        typeof er.source === 'object' &&
        er.source.context) {
        const { context, ...source } = er.source;
        er.source = source;
    }
    // pull out all fields from options, other than anything starting
    // with tapChild, or anything already set in the extra object.
    options = options ?? {};
    extra = Object.assign(extra ?? {}, Object.fromEntries(Object.entries(options).filter(([k]) => !/^tapChild/.test(k) && !(k in (extra ?? {})))));
    if (!er || typeof er !== 'object') {
        extra.error = er;
        return extra;
    }
    const st = stack.captureError(er);
    if (st && st.length) {
        extra.stack = st.map(c => String(c)).join('\n');
        extra.at = st[0];
    }
    if (er.name && er.name !== 'Error') {
        extra.type = er.name;
    }
    // grab any other rando props
    const { message: _, name: __, ...props } = er;
    Object.assign(extra, props);
    return extra;
};
//# sourceMappingURL=extra-from-error.js.map