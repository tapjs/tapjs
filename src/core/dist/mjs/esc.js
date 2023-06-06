// turn \ into \\ and # into \#, for stringifying back to TAP
export const esc = (str) => str.replace(/\\/g, '\\\\').replace(/#/g, '\\#');
//# sourceMappingURL=esc.js.map