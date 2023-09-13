/**
 * turn `\` into `\\` and `#` into `\#`, for stringifying in a TAP stream
 */
export const esc = (str) => str.replace(/\\/g, '\\\\').replace(/#/g, '\\#');
//# sourceMappingURL=esc.js.map