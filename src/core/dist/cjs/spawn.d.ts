/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { Base, TapBaseEvents } from './base.js';
import { WithExternalID } from '@tapjs/processinfo';
import { ChildProcess, ChildProcessByStdio, IOType, SpawnOptions, StdioOptions } from 'node:child_process';
import { Readable, Stream, Writable } from 'node:stream';
import { TestBaseOpts } from './test-base.js';
export type ChildProcessWithStdout = ChildProcessByStdio<null | Writable, Readable, null | Readable>;
export interface SpawnEvents extends TapBaseEvents {
    preprocess: [WithExternalID<SpawnOptions>];
    process: [ChildProcessWithStdout];
}
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
}
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
    } | typeof process.env;
    proc: null | ChildProcess;
    cb: null | (() => void);
    constructor(options: SpawnOpts);
    endAll(): void;
    main(cb: () => void): void | import("./index.js").Extra;
    timeout(options?: {
        expired?: string;
    }): void;
    static procName(cwd: string, command: string, args: string[]): string;
}
//# sourceMappingURL=spawn.d.ts.map