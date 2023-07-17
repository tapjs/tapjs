import { resolve, sep } from 'path'
import { values } from './main-config.js'
let serial: string[] | undefined = undefined
export const testIsSerial = (file: string) => {
  if (!serial) {
    serial = (values.serial || []).map(
      s => resolve(s).toLowerCase() + sep
    )
  }
  // tack the sep onto the end so that if the config specifies an
  // individual file, rather than a dir, it still matches.
  return serial.some(s => (file.toLowerCase() + sep).startsWith(s))
}
