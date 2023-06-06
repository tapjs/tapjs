import { Extra } from './index.js';
export interface Result {
    ok: boolean;
    message: string;
    extra: Extra;
}
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