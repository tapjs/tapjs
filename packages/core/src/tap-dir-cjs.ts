// this form only works in the cjs.
// it'll overwrite tap-dir.js output in cjs mode
import { dirname } from 'path'
//@ts-ignore
export const tapDir = dirname(__dirname)
