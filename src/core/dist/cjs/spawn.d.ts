/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { Base, TapBaseEvents } from './base.js';
import { WithExternalID } from '@tapjs/processinfo';
import { ChildProcess, ChildProcessByStdio, IOType, SpawnOptions, StdioOptions } from 'node:child_process';
import { Readable, Stream, Writable } from 'node:stream';
import { Extra } from './index.js';
import { TestBaseOpts } from './test-base.js';
/**
 * A child process that is known to have a stdout stream
 */
export type ChildProcessWithStdout = ChildProcessByStdio<null | Writable, Readable, null | Readable>;
/**
 * Events emitted by the {@link @tapjs/core!spawn.Spawn} class
 */
export interface SpawnEvents extends TapBaseEvents {
    /**
     * Emitted immediately before the child process is spawned. If the
     * options are mutated, then the changes *will* take effect.
     */
    preprocess: [WithExternalID<SpawnOptions>];
    /**
     * Emitted immediately after the child process is spawned, providing
     * the actual `ChildProcess` object as an argument
     */
    process: [ChildProcessWithStdout];
}
/**
 * Options that may be provided to the {@link @tapjs/core!spawn.Spawn} class
 */
export interface SpawnOpts extends TestBaseOpts {
    cwd?: string;
    command?: string;
    args?: string[];
    /**
     * Passed to child_process.spawn's 'stdio' option
     *
     * No matter what is specified here, stdout is *always* set to 'pipe',
     * and stdio[3] is *always* set to 'ipc', because TAP uses these internally
     * to communicate test results and timeout, respectively.
     *
     * So, this is only to set the behavior of stdin and stderr.
     */
    stdio?: StdioOptions;
    env?: {
        [k: string]: string;
    } | NodeJS.ProcessEnv;
    exitCode?: number | null;
    signal?: string | null;
    /**
     * Used for tracking the test process for tap --changed etc
     * Typically set to the test name. Unlikely that you should
     * ever set this, outside of tap itself.
     */
    externalID?: string;
}
/**
 * Class representing a spawned TAP process
 *
 * Instantiated by `t.spawn()`, typically.
 *
 * @internal
 */
export declare class Spawn extends Base<SpawnEvents> {
    #private;
    options: SpawnOpts;
    cwd: string;
    command: string;
    args: string[];
    stdio: [
        IOType | Stream | number | null | undefined,
        'pipe',
        IOType | Stream | number | null | undefined,
        'ipc'
    ];
    env: {
        [k: string]: string;
    } | NodeJS.ProcessEnv;
    proc: null | ChildProcess;
    cb: null | (() => void);
    externalID?: string;
    constructor(options: SpawnOpts);
    endAll(): void;
    main(cb: () => void): void | Extra;
    comment(...args: any[]): void;
    timeout(options?: {
        expired?: string;
    }): void;
    threw(er: any, extra?: Extra): Extra | void | undefined;
    static procName(cwd: string, command: string, args: string[]): string;
}
//# sourceMappingURL=spawn.d.ts.map