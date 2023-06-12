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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBR2dDO0FBRWhDLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRSxDQUNwQixJQUFJLEtBQUssQ0FBQyxZQUFZLENBQThCLENBQUE7QUFDekMsUUFBQSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUE7QUFFL0IsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBQSxrQkFBWSxHQUFFLENBQUE7QUFDMUIsUUFBQSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUE7QUFFbkMsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBQSxhQUFPLEdBQUUsQ0FBQTtBQUNoQixRQUFBLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQTtBQUV6QixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7SUFDcEIsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsS0FBSyxDQUFBO0lBQ25DLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNyQyxNQUFNLEdBQUcsR0FBaUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUE7SUFDdkQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzVCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUE7SUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUE7SUFDM0MsT0FBTyxLQUFLLENBQUE7QUFDZCxDQUFDLENBQUE7QUFDWSxRQUFBLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQSJ9