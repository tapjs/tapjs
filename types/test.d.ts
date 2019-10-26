export declare class Test {
  constructor (options?: Options.Test)
  tearDown(fn: () => void | Promise<void>): void
  setTimeout(n: number): void
  endAll(): void
  threw(error: Error, extra?: Error, proxy?: Test): void
  pragma(set: Options.Pragma): void
  plan(n: number, comment?: string): void
  test(name: string, extra?: Options.Test, cb?: (t: Test) => Promise<void> | void): Promise<void>
  test(name: string, cb?: (t: Test) => Promise<void> | void): Promise<void>
  current(): Test
  stdin(name: string, extra?: Options.Bag): Promise<void>
  spawn(cmd: string, args: string, options?: Options.Bag, name?: string, extra?: Options.Spawn): Promise<void>
  done(): void
  passing(): boolean
  pass(message?: string, extra?: Options.Assert): boolean
  fail(message?: string, extra?: Options.Assert): boolean
  addAssert(name: string, length: number, fn: (...args: any[]) => boolean): boolean
  comment(message: string, ...args:any[]): void
  bailout(message?: string): void
  beforeEach(fn: (done: () => void, childTest: Test) => void | Promise<void>): void
  afterEach(fn: (done: () => void, childTest: Test) => void | Promise<void>): void
  context: any

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

export declare namespace Options {
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

export declare namespace Assertions {
  export type Basic = (obj: any, message?: string, extra?: Options.Assert) => boolean

  export type Throws = (fn?: (a: any) => any, expectedError?: Error, message?: string, extra?: Options.Assert) => boolean

  export type DoesNotThrow = (fn?: (a: any) => any, message?: string, extra?: Options.Assert) => boolean

  export type Equal = (found: any, wanted: any, message?: string, extra?: Options.Assert) => boolean

  export type NotEqual = (found: any, notWanted: any, message?: string, extra?: Options.Assert) => boolean

  export type Match = (found: any, pattern: any, message?: string, extra?: Options.Assert) => boolean

  export type Type = (found: any, type: string | ((a: any) => any), message?: string, extra?: Options.Assert) => boolean
}

export declare interface Mocha {
  it: (name?: string, fn?: (a: any) => any) => void
  describe: (name?: string, fn?: (a: any) => any) => void
  global: () => void
}

// Little hack to simulate the Test class on the tap export
export declare interface TestConstructor {
  new(options?: Options.Test): Test
  prototype: Test
}

export declare interface Tap extends Test {
  Test: TestConstructor
  mocha: Mocha
  mochaGlobals: () => void
}