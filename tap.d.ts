// tap.d.ts

declare module Test {

  class Deferred {
    resolve();
    reject();
  }

  class test {
    constructor(options?: any);
    tearDown();
    setTimeout(n: number);
    endAll();
    threw(er: Error, extra: Error, proxy: any);
    pragma(set: any);
    plan(n: number, comment?: string);
    test(name: string, extra: Error, cb: () => void, deferred: Deferred);
    loop(self: test, arr: test[], cb: () => void, i: number);
    next(er: Error);
    current();
    stdin(name: string, extra: any, deferred: Deferred);
    spawn(cmd: string, args: string, options: any, name: string, extra: any, deferred: Deferred);
    done(implicit: boolean);
    autoend();
    printResult(ok: boolean, message: string, extra: any);
    writeDiags(extra: any);
    passing();
    pass(message: string, extra: any);
    fail(message: string, extra: any);
    addAssert(name: string, length: number, fn: () => void);
    comment();
    push(chunk: any, encoding?: string);
    bailout(message: string);
    beforeEach(fn: () => void);
    afterEach(fn: () => void);
  }
  
}
