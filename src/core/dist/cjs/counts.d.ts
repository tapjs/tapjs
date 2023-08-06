/**
 * JSON object representation of {@link Counts}
 */
export interface CountsJSON {
    total: number;
    pass: number;
    fail?: number;
    skip?: number;
    todo?: number;
    complete?: number;
}
/**
 * Class representing a count of all the assertions in a test
 */
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