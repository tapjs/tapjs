/**
 * Normalize the {@link @tapjs/core!index.MessageExtra} arguments to test
 * assertion methods
 */
export const normalizeMessageExtra = (defaultMessage, [message, extra]) => {
    if (message && typeof message === 'object') {
        return [defaultMessage, message];
    }
    return [message || defaultMessage, extra || {}];
};
//# sourceMappingURL=normalize-message-extra.js.map