import { Extra } from './index.js';
/**
 * Very simple result object, just indicating pass/fail status,
 * message, and the {@link @tapjs/core!index.Extra} object provided to the
 * assertion method.
 */
export interface Result {
    ok: boolean;
    message: string;
    extra: Extra;
}
/**
 * Object representing a single test point `ok` / `not ok` line
 */
export declare class TestPoint {
    ok: 'ok ' | 'not ok ';
    name: string;
    message: string;
    extra: {
        [key: string]: any;
    };
    res: Result;
    constructor(ok: boolean, message: string, extra?: {
        [key: string]: any;
    });
}
//# sourceMappingURL=test-point.d.ts.map