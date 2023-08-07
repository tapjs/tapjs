/// <reference types="node" />
/// <reference types="node" />
import { Base, TapBaseEvents } from './base.js';
import { TestBaseOpts } from './test-base.js';
import { Worker as NodeWorker } from 'node:worker_threads';
import { FinalResults } from 'tap-parser';
/**
 * Events emitted by {@link Worker} instances
 */
export interface WorkerEvents extends TapBaseEvents {
    process: [NodeWorker];
}
/**
 * Options that can be provided to a {@link Worker}
 */
export interface WorkerOpts extends TestBaseOpts {
    /**
     * Data that will be available on `t.workerData` on the root {@link TAP}
     * object in the worker thread.
     */
    workerData?: any;
    /**
     * Set internally to the numeric thread identifier once the worker is
     * instantiated.
     */
    threadId?: number;
    /**
     * Environment variables that are set in the worker thread
     */
    env?: {
        [k: string]: string;
    } | NodeJS.ProcessEnv;
    /**
     * If true, treat the `filename` argument as a string of JavaScript to
     * be evaluated by Node in the worker thread.
     */
    eval?: boolean;
}
/**
 * Class representing a TAP generating node worker thread
 *
 * Instantiated by `t.worker()`, typically.
 *
 * @internal
 */
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