"use strict";
/**
 * Main export of the `@tapjs/core` module, providing the bulk of
 * the internal machinery of tests.
 *
 * @module
 */
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = void 0;
__exportStar(require("./tap-file.js"), exports);
__exportStar(require("./base.js"), exports);
__exportStar(require("./counts.js"), exports);
__exportStar(require("./extra-from-error.js"), exports);
__exportStar(require("./lists.js"), exports);
__exportStar(require("./main-script.js"), exports);
__exportStar(require("./minimal.js"), exports);
__exportStar(require("./normalize-message-extra.js"), exports);
__exportStar(require("./parse-test-args.js"), exports);
__exportStar(require("./proc.js"), exports);
__exportStar(require("./spawn.js"), exports);
__exportStar(require("./stdin.js"), exports);
__exportStar(require("./tap-dir.js"), exports);
__exportStar(require("./test-base.js"), exports);
__exportStar(require("./test-point.js"), exports);
__exportStar(require("./waiter.js"), exports);
__exportStar(require("./worker.js"), exports);
const tap_js_1 = require("./tap.js");
Object.defineProperty(exports, "tap", { enumerable: true, get: function () { return tap_js_1.tap; } });
//# sourceMappingURL=index.js.map