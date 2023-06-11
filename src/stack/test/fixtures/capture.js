"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stack = exports.at = exports.capture = exports.error = void 0;
const index_js_1 = require("../../dist/cjs/index.js");
const getError = () => new Error('test error');
exports.error = getError();
const getCapture = () => (0, index_js_1.capture)();
exports.capture = getCapture();
const getAt = () => (0, index_js_1.at)();
exports.at = getAt();
const getStack = () => {
    const { prepareStackTrace } = Error;
    Error.prepareStackTrace = (_, c) => c;
    const obj = { stack: [] };
    Error.captureStackTrace(obj);
    const { stack } = obj;
    Object.assign(Error, { prepareStackTrace });
    return stack;
};
exports.stack = getStack();
//# sourceMappingURL=capture.js.map