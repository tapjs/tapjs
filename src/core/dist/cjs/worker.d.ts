import { Base, TapBaseEvents } from './base.js';
import { TestBaseOpts } from './test-base.js';
import { FinalResults } from 'tap-parser';
export interface WorkerEvents extends TapBaseEvents {
}
export interface WorkerOpts extends TestBaseOpts {
    workerData?: any;
    threadId?: number;
}
export declare class Worker extends Base<WorkerEvents> {
    #private;
    options: WorkerOpts;
    filename: string;
    cb?: () => void;
    constructor(options: WorkerOpts);
    main(cb: () => void): void;
    oncomplete(results: FinalResults): void;
    comment(...args: any[]): void;
}
//# sourceMappingURL=worker.d.ts.map