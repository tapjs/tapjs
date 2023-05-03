declare class JSONParseError extends SyntaxError {
    code: "EJSONPARSE";
    systemError: Error;
    constructor(er: Error, txt: string, context: number, caller: Function | ((...a: any[]) => any));
    get name(): string;
    set name(_: string);
    get [Symbol.toStringTag](): string;
}
type Reviver = (this: any, key: string, value: any) => any;
type Replacer = ((this: any, key: string, value: any) => any) | (string | number)[] | null;
type Scalar = string | number | null;
type JSONResult = {
    [k: string]: JSONResult;
} | JSONResult[] | Scalar;
declare const parseJson: {
    (txt: string, reviver?: Reviver, context?: number): JSONResult;
    JSONParseError: typeof JSONParseError;
    noExceptions(txt: string, reviver?: Reviver): any;
    stringify(obj: any, replacer?: Replacer, indent?: string | number): string;
};
export = parseJson;
