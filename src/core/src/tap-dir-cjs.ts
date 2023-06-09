// this form only works in the cjs.
// it'll overwrite tap-dir.js output in cjs mode
import { basename, dirname } from 'path'
/* c8 ignore start */
//@ts-ignore
const u = dirname(__dirname)
export const tapDir = basename(u) === 'dist' ? dirname(u) : u
/* c8 ignore stop */
