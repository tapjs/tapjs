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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHooks = void 0;
// tell plugins that they should use synchronous hooks.
const MODULE = __importStar(require("node:module"));
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
exports.registerHooks = !!MODULE.registerHooks && nodeVersion([24, 11, 1]) ?
    MODULE.registerHooks
    : undefined;
//# sourceMappingURL=use-sync-hooks.js.map