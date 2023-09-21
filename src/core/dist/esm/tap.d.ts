/// <reference types="node" resolution-mode="require"/>
/**
 * The root TAP object singleton, the `t` you get when you
 * `import t from 'tap'`
 *
 * Inherits from {@link @tapjs/test!index.Test}, with all plugins applied, and
 * has additional functionality to automatically pipe to standard output, set
 * the process exit code appropriately, and infer options from environment
 * variables.
 *
 * @module
 *
 * @see {@link @tapjs/core!tap.TAP}
 */
import { Test, TestOpts } from '@tapjs/test';
import { Minipass, PipeOptions } from 'minipass';
import { MILLISECONDS } from './index.js';
declare const privSym: unique symbol;
type PrivateTAPCtor = {
    [privSym]: true;
};
/**
 * This is a singleton subclass of the {@link @tapjs/test!index.Test} base
 * class.
 *
 * Instantiate it by calling the exported {@link @tapjs/core!tap.tap} method.
 *
 * It has all of the same plugins, fields, properties etc of a "normal"
 * Test object, but with some additional characteristics to make it
 * suitable for use as the root test runner.
 *
 * - The {@link @tapjs/core!tap.TAP#register} method will hook onto the process
 *   object, to set the exit code to 1 if there are test failures, and ignore
 *   any `EPIPE` errors that happen on stdout.  (This is quite common in cases
 *   where a test aborts, and then attempts to write more data.)
 *
 * - A brief summary is printed at the end of the test run.
 *
 * - If piped to stdout, then `this.register()` will be called automatically.
 *
 * - If not piped anywhere else, the first time it writes any data, it will
 *   begin piping to stdout.
 *
 * - Options are set based on relevant environment variables, rather than
 *   taking an options object, since in normal cases, it will be instantiated
 *   automatically before any user code is run.
 *
 * - The test will automatically implicitly end when the process exits.  If
 *   there are any unfinished tests at this time, they will be emitted as
 *   failures.
 *
 * - If a `teardown` function is added, then the test will automatically
 *   implicitly end if it is idle for 3 consecutive `setTimeout` deferrals.
 *   This is a bit of a kludge, but it allows tests to run servers or other
 *   things that would prevent a graceful process exit, and close them down
 *   in a teardown function.
 *
 * - Lastly, since test files are often spawned by the runner using
 *   `t.spawn()`, this class listens for the timeout signal, and attempts to
 *   print diagnostic information about currently active handles and requests,
 *   as these are usually the cause of a test hanging indefinitely.
 */
declare class TAP extends Test {
    #private;
    /**
     * @internal
     */
    constructor(priv: PrivateTAPCtor, opts?: TestOpts);
    get registered(): boolean;
    /**
     * register this tap instance as being in charge of the current process
     * ignore epipe errors, set exit code, etc.
     *
     * Happens automatically if piped to stdout.
     */
    register(): void;
    onbail(reason?: string): void;
    /**
     * Just the normal Minipass.pipe method, but automatically registers
     * if the destination is stdout.
     */
    pipe<W extends Minipass.Writable>(dest: W, opts?: PipeOptions): W;
    /**
     * Just the normal Minipass.write method, but automatically pipes
     * to stdout if not piped anywhere else.
     */
    write(chunk: string): boolean;
    /**
     * Similar to the normal {@link @tapjs/core!test-base.TestBase#timeout}, but
     * with the added feature that it will kill the process with `SIGALRM` if it
     * has been registered, and will decorate the diagnostics with some
     * information about currently running handles and requests, as these may be
     * the reason the process is not gracefully closing in time.
     *
     * The root test runner will time out if the process receives a `SIGALRM`
     * signal, or if it receives a timeout message via IPC or worker thread
     * channel.
     */
    timeout(options?: {
        expired?: string;
        signal?: NodeJS.Signals | null;
    }): void;
    setTimeout(n: MILLISECONDS): void;
}
/**
 * The exported function instantiates a {@link @tapjs/core!tap.TAP} object if
 * we don't already have one, or return the one that was previously
 * instantiated.
 *
 * Options may be provided, which will override the environment settings,
 * but they are ignored if the instance was already created.
 */
export declare const tap: (opts?: TestOpts) => TAP;
export type { TAP };
//# sourceMappingURL=tap.d.ts.map