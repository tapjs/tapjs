// turn \ into \\ and # into \#, for stringifying back to TAP
export const esc = (str: string): string =>
  str.replace(/\\/g, '\\\\').replace(/#/g, '\\#').trim()

export const unesc = (str: string): string =>
  str
    .replace(/(\\\\)/g, '\u0000')
    .replace(/\\#/g, '#')
    .replace(/\u0000/g, '\\')
    .trim()
