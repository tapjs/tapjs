/**
 * Module that provides the location of the `@tapjs/core` module
 * Abstracted so that it can be built in two different ways depending
 * on whether we're building for CJS or ESM.
 * @module
 */
// this form only works in the cjs.
// it'll overwrite tap-dir.js output in cjs mode
import { basename, dirname } from 'path';
//@ts-ignore
const u = dirname(__dirname);
/* c8 ignore start */
export const tapDir = basename(u) === 'dist' ? dirname(u) : u;
/* c8 ignore stop */
//# sourceMappingURL=tap-dir-cjs.js.map