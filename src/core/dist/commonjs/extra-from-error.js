"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extraFromError = void 0;
const stack = __importStar(require("@tapjs/stack"));
// test that a CallSiteLike is "useful", ie, has a file/line/col
const useful = (at) => !!at?.fileName &&
    typeof at.lineNumber === 'number' &&
    typeof at.columnNumber === 'number';
/**
 * Create an {@link @tapjs/core!index.Extra} object based on a thrown Error
 */
const extraFromError = (er, extra, options) => {
    // the yaml module puts big stuff here, pluck it off
    // otherwise it's quite noisy when we throw as a result of
    // trying to parse invalid tap diagnostics.
    if (!!er &&
        typeof er === 'object' &&
        er.source &&
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
        let at;
        // walk down the stack until we find the first "useful" stack frame
        for (let i = 0; i < st.length; i++) {
            if (useful(st[i])) {
                at = st[i];
                break;
            }
        }
        extra.at = at || st[0];
    }
    else if (typeof er.stack === 'string') {
        if (er instanceof Error) {
            // if we failed to capture it, but it has a stack, then that means
            // that all of the stack frames were internal, because the error was
            // generated from native code in a dep that tap ignores (or if not
            // native code, then something else that escaped the async-hook-domain).
            // A common cause of this is import() errors.
            extra.stack = '';
        }
        else {
            extra.stack = er.stack;
        }
        extra.at = null;
    }
    if (er.name && er.name !== 'Error') {
        extra.type = er.name;
    }
    // grab any other rando props
    const { message: _, stack: __, name: ___, cause, errors, ...props } = er;
    Object.assign(extra, props);
    if (cause !== undefined)
        extra.cause = cause;
    if (errors !== undefined)
        extra.errors = errors;
    return extra;
};
exports.extraFromError = extraFromError;
//# sourceMappingURL=extra-from-error.js.map