/// <reference types="node" />
export declare const error: Error & {
    stack: string;
};
export declare const capture: import("../../dist/cjs/call-site-like.js").CallSiteLike[];
export declare const at: import("../../dist/cjs/call-site-like.js").CallSiteLike;
export declare const stack: NodeJS.CallSite[];
