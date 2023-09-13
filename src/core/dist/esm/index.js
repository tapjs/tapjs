/**
 * Main export of the `@tapjs/core` module, providing the bulk of
 * the internal machinery of tests.
 *
 * @module
 */
export * from './tap-file.js';
export * from './base.js';
export * from './counts.js';
export * from './extra-from-error.js';
export * from './lists.js';
export * from './main-script.js';
export * from './minimal.js';
export * from './normalize-message-extra.js';
export * from './parse-test-args.js';
export * from './proc.js';
export * from './spawn.js';
export * from './stdin.js';
export * from './tap-dir.js';
export * from './test-base.js';
export * from './test-point.js';
export * from './waiter.js';
export * from './worker.js';
// do it in this weird way to keep prettier from moving tap.js
// ahead of test-base.js. We need TestBase to be loaded
// and exported *before* tap, because TAP loades @tapjs/test, which
// extends TestBase.
export { tap };
import { tap } from './tap.js';
//# sourceMappingURL=index.js.map