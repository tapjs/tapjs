/// <reference types="node" />
/// <reference types="node" />
import { Base, TapBaseEvents } from './base.js';
import { TestBaseOpts } from './test-base.js';
import { Worker as NodeWorker } from 'node:worker_threads';
import { FinalResults } from 'tap-parser';
export interface WorkerEvents extends TapBaseEvents {
}
export interface WorkerOpts extends TestBaseOpts {
    workerData?: any;
    threadId?: number;
    env?: {
        [k: string]: string;
    } | NodeJS.ProcessEnv;
    eval?: boolean;
}
export declare class Worker extends Base<WorkerEvents> {
    #private;
    options: WorkerOpts;
    eval: boolean;
    filename: string;
    cb?: () => void;
    worker: null | NodeWorker;
    env: {
        [k: string]: string;
    } | NodeJS.ProcessEnv;
    constructor(options: WorkerOpts);
    main(cb: () => void): void;
    timeout(options?: {
        expired?: string;
    }): void;
    oncomplete(results: FinalResults): void;
    comment(...args: any[]): void;
    endAll(): void;
    static procName(filename: string, ev: boolean): string;
}
//# sourceMappingURL=worker.d.ts.map