// root.d.ts

declare var tap: Tap;
export = tap;

declare global {
  interface Tap extends Tap.Test {
    Test: Tap.TestConstructor;
    mocha: Tap.Mocha;
    mochaGlobals: () => void;
  }
  namespace Tap {
    type Callback = (t:Test) => Promise|void;
    type DoneCallback = (result?:any)=>void;

    export interface Test extends NodeJS.ReadableStream {
      constructor (options?: Options.Test)
      addAssert(name: string, length: number, fn: (...args:any[]) => boolean): boolean
      afterEach(fn: (cb: DoneCallback) => Promise | void):void
      bailout(message?: string):void
      beforeEach(fn: (cb: DoneCallback) => Promise | void):void
      comment(message: string|number, ...args:any[]):void
      current(): Test
      done():void
      end():void
      endAll():void
      fail(message?: string|number, extra?: Options.Assert):boolean
      only(name, cb:Callback): Promise;
      pass(message?: string|number, extra?: Options.Assert):boolean
      passing():boolean
      plan(n: number, comment?: string):void
      pragma(set: Options.Pragma):void
      rejects(message:string, p:Promise|(()=>any), expected: Error):Promise;
      rejects(p:Promise|(()=>any), expected: Error):Promise;
      setTimeout(n: number):void
      spawn(cmd: string, args: string|string[], options: Options.Spawn, name?: string): Promise
      spawn(cmd: string, args?: string|string[], name?:string, options?: Options.Spawn): Promise
      stdin(extra: Options.Bag): Promise
      stdin(name: string, extra?: Options.Bag): Promise
      tearDown(fn:(a:any) => any):void
      teardown(fn:(a:any) => any):void
      test(): Promise
      test(cb: Callback): Promise
      test(name: string, cb?: Callback): Promise
      test(name: string, extra?: Options.Test, cb?: Callback): Promise
      test(options: Options.Test|object, cb: Callback): Promise
      test(options: Options.Test|object): Promise
      threw(er: Error, extra?: Error, proxy?: Test):void

      // Properties
      name: string;
      jobs: number;

      // Assertions
      ok: Assertions.Basic
      true: Assertions.Basic
      assert: Assertions.Basic

      notOk: Assertions.Basic
      not_ok: Assertions.Basic
      false: Assertions.Basic
      assertNot: Assertions.Basic

      error: Assertions.Basic
      ifErr: Assertions.Basic
      ifError: Assertions.Basic

      throws: Assertions.Throws
      throw: Assertions.Throws

      doesNotThrow: Assertions.DoesNotThrow
      notThrow: Assertions.DoesNotThrow

      equal: Assertions.Equal
      equals: Assertions.Equal
      isEqual: Assertions.Equal
      is: Assertions.Equal
      strictEqual: Assertions.Equal
      strictEquals: Assertions.Equal
      strictIs: Assertions.Equal
      isStrict: Assertions.Equal
      isStrictly: Assertions.Equal

      notEqual: Assertions.NotEqual
      not: Assertions.NotEqual
      notEquals: Assertions.NotEqual
      inequal: Assertions.NotEqual
      notStrictEqual: Assertions.NotEqual
      notStrictEquals: Assertions.NotEqual
      isNotEqual: Assertions.NotEqual
      isNot: Assertions.NotEqual
      doesNotEqual: Assertions.NotEqual
      isInequal: Assertions.NotEqual

      same: Assertions.Equal
      equivalent: Assertions.Equal
      looseEqual: Assertions.Equal
      looseEquals: Assertions.Equal
      deepEqual: Assertions.Equal
      deepEquals: Assertions.Equal
      isLoose: Assertions.Equal
      looseIs: Assertions.Equal

      notSame: Assertions.NotEqual
      not_same: Assertions.NotEqual
      inequivalent: Assertions.NotEqual
      looseInequal: Assertions.NotEqual
      notDeep: Assertions.NotEqual
      deepInequal: Assertions.NotEqual
      notLoose: Assertions.NotEqual
      looseNot: Assertions.NotEqual

      strictSame: Assertions.Equal
      strictEquivalent: Assertions.Equal
      strictDeepEqual: Assertions.Equal
      sameStrict: Assertions.Equal
      deepIs: Assertions.Equal
      isDeeply: Assertions.Equal
      isDeep: Assertions.Equal
      strictDeepEquals: Assertions.Equal

      strictNotSame: Assertions.NotEqual
      strictInequivalent: Assertions.NotEqual
      strictDeepInequal: Assertions.NotEqual
      notSameStrict: Assertions.NotEqual
      deepNot: Assertions.NotEqual
      notDeeply: Assertions.NotEqual
      strictDeepInequals: Assertions.NotEqual
      notStrictSame: Assertions.NotEqual
      not_strict_same: Assertions.NotEqual

      match: Assertions.Match
      has: Assertions.Match
      hasFields: Assertions.Match
      matches: Assertions.Match
      similar: Assertions.Match
      like: Assertions.Match
      isLike: Assertions.Match
      includes: Assertions.Match
      include: Assertions.Match
      contains: Assertions.Match

      notMatch: Assertions.Match
      not_match: Assertions.Match
      dissimilar: Assertions.Match
      unsimilar: Assertions.Match
      notSimilar: Assertions.Match
      unlike: Assertions.Match
      isUnlike: Assertions.Match
      notLike: Assertions.Match
      isNotLike: Assertions.Match
      doesNotHave: Assertions.Match
      isNotSimilar: Assertions.Match
      isDissimilar: Assertions.Match

      type: Assertions.Type
      isa: Assertions.Type
      isA: Assertions.Type
    }

    namespace Options {
      export interface Bag {
        [propName: string]: any
      }

      export interface Pragma {
        [propName: string]: boolean
      }

      export interface Assert extends Bag {
        todo?: boolean | string,
        skip?: boolean | string
      }

      export interface Spawn extends Assert {
        bail?: boolean,
        timeout?: number
      }

      export interface Test extends Assert {
        name?: string,
        timeout?: number,
        bail?: boolean,
        autoend?: boolean
      }
    }

    namespace Assertions {


      export interface Basic {
        (obj: any, message?: string, extra?: Options.Assert): boolean;
      }

      type Fn = ()=>any;
      type ThrowWanted = Error | object | RegExp;

      export interface Throws {
        (fn: Fn, wanted: ThrowWanted, extra?: Options.Assert, message?: string): boolean;
        (fn: Fn, wanted?: ThrowWanted, extra?: Options.Assert, message?: string): boolean;
        (fn: Fn, wanted: ThrowWanted, message: string, extra?: Options.Assert): boolean;
        (fn: Fn, message: string, wanted?: ThrowWanted, extra?: Options.Assert): boolean;

        (wanted: ThrowWanted, fn: Fn, extra: Options.Assert, message: string): boolean;
        (wanted: ThrowWanted, fn: Fn, message: string, extra: Options.Assert): boolean;
        (wanted: ThrowWanted, extra: Options.Assert, fn: Fn, message: string): boolean;
        (wanted: ThrowWanted, extra: Options.Assert, message: string, fn: Fn): boolean;
        (wanted: ThrowWanted, message: string, fn: Fn, extra: Options.Assert): boolean;
        (wanted: ThrowWanted, message: string, extra: Options.Assert, fn: Fn): boolean;

        (message: string, wanted: ThrowWanted, extra: Options.Assert, fn: Fn): boolean;
        (message: string, wanted: ThrowWanted, fn: Fn, extra: Options.Assert): boolean;
        (message: string, fn: Fn, wanted?: ThrowWanted, extra?: Options.Assert): boolean;
        (message: string): boolean;
      }

      export interface DoesNotThrow {
        (fn: Fn, message?: string, extra?: Options.Assert): boolean;
        (message: string, fn: Fn): boolean;
        (message: string): boolean;
      }

      export interface Equal {
        (found: any, wanted: any, message?: string, extra?: Options.Assert): boolean
      }

      export interface NotEqual {
        (found: any, notWanted: any, message?: string, extra?: Options.Assert): boolean
      }

      export interface Match {
        (found: any, pattern: any, message?: string, extra?: Options.Assert): boolean;
        (found: any, pattern: any, options: Options.Assert): boolean;
      }
      
      export interface Type {
        (found: any, type: any, message?: string, extra?: Options.Assert): boolean
      }
    }

    // Super minimal description of returned Promise (which are really Bluebird promises)
    interface Promise {
      [propName: string] : any
      then(fn: (t: Test) => any): Promise
      catch(fn: (err: Error) => any): Promise
    }

    interface Mocha {
      it: (name?: string, fn?: (a:any) => any) => void
      describe: (name?: string, fn?: (a:any) => any) => void
      global: () => void
    }

    // Little hack to simulate the Test class on the tap export
    interface TestConstructor {
      new(options?: Options.Test): Test
      prototype: Test
    }

  }
}
