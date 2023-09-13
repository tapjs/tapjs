/// <reference types="node" resolution-mode="require"/>
export declare const error: Error & {
    stack: string;
};
export declare const capture: import("../../dist/esm/call-site-like.js").CallSiteLike[];
export declare const at: import("../../dist/esm/call-site-like.js").CallSiteLike;
export declare const stack: NodeJS.CallSite[];
