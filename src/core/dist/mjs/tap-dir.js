/**
 * Module that provides the location of the `@tapjs/core` module
 * Abstracted so that it can be built in two different ways depending
 * on whether we're building for CJS or ESM.
 * @module
 */
// this form only works in the mjs.
// it'll be overwritten by the tap-dir-cjs.js output in cjs mode
import { basename, dirname } from 'path';
import { fileURLToPath } from 'url';
//@ts-ignore
const u = dirname(dirname(fileURLToPath(import.meta.url)));
// ignore this because we can't possibly import it from src anyway,
// but it feels right to be complete here.
/* c8 ignore start */
export const tapDir = basename(u) === 'dist' ? dirname(u) : u;
/* c8 ignore stop */
//# sourceMappingURL=tap-dir.js.map