import { isWindows } from './is-windows.js'
export const isRelativeRequire = (url: string) =>
  /^\.\.?\//.test(url) || (isWindows && /^\.\.?\\/.test(url))
