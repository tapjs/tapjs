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
const extraFromError = (er, extra, options) => {
    // the yaml module puts big stuff here, pluck it off
    if (er.source &&
        typeof er.source === 'object' &&
        er.source.context) {
        const { context, ...source } = er.source;
        er.source = source;
    }
    // pull out all fields from options, other than anything starting
    // with tapChild, or anything already set in the extra object.
    extra = Object.assign(extra || {}, Object.fromEntries(Object.entries(options || {}).filter(([k]) => !/^tapChild/.test(k) && !(k in (extra || {})))));
    if (!er || typeof er !== 'object') {
        extra.error = er;
        return extra;
    }
    const st = stack.captureError(er);
    const message = er.message
        ? er.message
        : er.stack
            ? er.stack.split('\n')[0]
            : '';
    if (st && st.length) {
        extra.stack = st.map(c => String(c)).join('\n');
        extra.at = st[0];
    }
    if (message) {
        try {
            Object.defineProperty(er, 'message', {
                value: message,
                configurable: true,
            });
        }
        catch { }
    }
    if (er.name && er.name !== 'Error') {
        extra.type = er.name;
    }
    // grab any other rando props
    const { message: _, ...props } = er;
    Object.assign(extra, props);
    return extra;
};
exports.extraFromError = extraFromError;
//# sourceMappingURL=extra-from-error.js.map