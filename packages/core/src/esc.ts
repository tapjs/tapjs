// turn \ into \\ and # into \#, for stringifying back to TAP
export const esc = (str: string) =>
  str.replace(/\\/g, '\\\\').replace(/#/g, '\\#')
