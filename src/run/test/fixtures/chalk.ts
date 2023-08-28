// make chalk think this is a fully functional terminal,
// even when running in a tap subproc, nx, ci, etc.
import chalk, { supportsColor, supportsColorStderr } from 'chalk'
chalk.level = 3
Object.assign(supportsColor, {
  level: 3,
  hasBasic: true,
  has256: true,
  has16m: true,
})
Object.assign(supportsColorStderr, {
  level: 3,
  hasBasic: true,
  has256: true,
  has16m: true,
})

export * from 'chalk'
export default chalk
