// this form only works in the mjs.
// it'll be overwritten by the tap-dir-cjs.js output in cjs mode
import { basename, dirname } from 'path'
import { fileURLToPath } from 'url'
/* c8 ignore start */
//@ts-ignore
const u = dirname(dirname(fileURLToPath(import.meta.url)))
export const tapDir =
  basename(u) === 'dist' ? dirname(u) : u
/* c8 ignore stop */
