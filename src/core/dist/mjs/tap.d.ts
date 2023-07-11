/// <reference types="node" />
import { Test, TestOpts } from '@tapjs/test';
import { Minipass, PipeOptions } from 'minipass';
declare const privSym: unique symbol;
type PrivateTAPCtor = {
    [privSym]: true;
};
/**
 * This is a singleton subclass of the {@link Test} base class.
 *
 * Instantiate it by calling the exported {@link tap} method.
 *
 * It has all of the same plugins, fields, properties etc of a "normal"
 * Test object, but with some additional characteristics to make it
 * suitable for use as the root test runner.
 *
 * - The {@link TAP#register} method will hook onto the process object,
 *   to set the exit code to 1 if there are test failures, and ignore any
 *   `EPIPE` errors that happen on stdout.  (This is quite common in cases
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
    constructor(priv: PrivateTAPCtor, opts?: TestOpts);
    /**
     * register this tap instance as being in charge of the current process
     * ignore epipe errors, set exit code, etc.
     * Happens automatically if piped to stdout.
     */
    register(): void;
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
    timeout(options?: {
        expired?: string;
        signal?: NodeJS.Signals | null;
    }): void;
}
export declare const tap: (opts?: TestOpts) => TAP;
export type { TAP };
//# sourceMappingURL=tap.d.ts.map