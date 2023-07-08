"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeMessageExtra = void 0;
const normalizeMessageExtra = (defaultMessage, [message, extra]) => {
    if (message && typeof message === 'object') {
        return [defaultMessage, message];
    }
    return [message || defaultMessage, extra || {}];
};
exports.normalizeMessageExtra = normalizeMessageExtra;
//# sourceMappingURL=normalize-message-extra.js.map