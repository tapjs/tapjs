// root.d.ts

declare var tap: Tap;
export = tap;

declare global {
    interface Tap extends Tap.Test {
      Test: Tap.TestConstructor;
    }
    namespace Tap {
      export interface Test extends NodeJS.ReadableStream {
        constructor (options?: Options.Test)
        addAssert(name: string, length: number, fn: (...args:any[]) => boolean): boolean
        afterEach(fn: (cb: () => any) => Promise | void):void
        bailout(message?: string):void
        beforeEach(fn: (cb: () => any) => Promise | void):void
        comment(message: string, ...args:any[]):void
        current(): Test
        done():void
        end():void
        endAll():void
        fail(message?: string, extra?: Options.Assert):boolean
        pass(message?: string, extra?: Options.Assert):boolean
        passing():boolean
        plan(n: number, comment?: string):void
        pragma(set: Options.Pragma):void
        setTimeout(n: number):void
        spawn(cmd: string, args: string, options?: Options.Bag, name?: string, extra?: Options.Spawn): Promise
        stdin(name: string, extra?: Options.Bag): Promise
        tearDown(fn:(a:any) => any):void
        test(name: string, cb?: (t: Test) => Promise | void): Promise
        test(name: string, extra?: Options.Test, cb?: (t: Test) => Promise | void): Promise
        threw(er: Error, extra?: Error, proxy?: Test):void

        // Assertions
        ok: Assertions.Basic
        true: Assertions.Basic
        assert: Assertions.Basic

        notOk: Assertions.Basic
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
        export type Basic =
          (obj: any, message?: string, extra?: Options.Assert) => boolean

        export type Throws =
          (fn?:()=>any, expectedError?: Error|object|(()=>any), message?: string, extra?: Options.Assert) => boolean;

        export type DoesNotThrow =
          (fn?: (a:any) => any, message?: string, extra?: Options.Assert) => boolean

        export type Equal =
          (found: any, wanted: any, message?: string, extra?: Options.Assert) => boolean

        export type NotEqual =
          (found: any, notWanted: any, message?: string, extra?: Options.Assert) => boolean

        export type Match =
          (found: any, pattern: any, message?: string, extra?: Options.Assert) => boolean

        export type Type =
          (found: any, type: string | ((a:any) => any), message?: string, extra?: Options.Assert) => boolean
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


    // declare var tap: Tap;

    // declare interface Tap extends Test {
    //   Test: TestConstructor
    //   mocha: Mocha
    //   mochaGlobals: () => void
    // }

    // export = tap;


}
