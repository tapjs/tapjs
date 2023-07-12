export const isWindows =
  typeof process === 'object' &&
  process &&
  process.platform === 'win32'
