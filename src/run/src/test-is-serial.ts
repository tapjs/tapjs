import { resolve, sep } from 'path'
import { values } from './main-config.js'
let serial: string[] | undefined = undefined
export const testIsSerial = (file: string) => {
  if (!serial) {
    serial = (values.serial || []).map(
      s => resolve(s).toLowerCase() + sep
    )
  }
  return serial.some(s => file.toLowerCase().startsWith(s))
}
