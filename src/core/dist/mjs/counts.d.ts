export interface CountsJSON {
    total: number;
    pass: number;
    fail?: number;
    skip?: number;
    todo?: number;
    complete?: number;
}
export declare class Counts {
    total: number;
    pass: number;
    fail: number;
    skip: number;
    todo: number;
    complete?: number;
    constructor(c?: Counts | CountsJSON);
    toJSON(): CountsJSON;
}
//# sourceMappingURL=counts.d.ts.map