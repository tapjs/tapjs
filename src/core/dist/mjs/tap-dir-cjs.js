// this form only works in the cjs.
// it'll overwrite tap-dir.js output in cjs mode
import { basename, dirname } from 'path';
//@ts-ignore
const u = dirname(__dirname);
/* c8 ignore start */
export const tapDir = basename(u) === 'dist' ? dirname(u) : u;
/* c8 ignore stop */
//# sourceMappingURL=tap-dir-cjs.js.map