// this form only works in the mjs.
// it'll be overwritten by the tap-dir-cjs.js output in cjs mode
import { dirname } from 'path'
import {fileURLToPath} from 'url'
//@ts-ignore
export const tapDir = dirname(dirname(fileURLToPath(import.meta.url)))
