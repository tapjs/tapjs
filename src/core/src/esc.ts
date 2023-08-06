/**
 * turn `\` into `\\` and `#` into `\#`, for stringifying in a TAP stream
 */
export const esc = (str: string) =>
  str.replace(/\\/g, '\\\\').replace(/#/g, '\\#')
