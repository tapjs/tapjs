// json representation of the test run

import EventEmitter from 'events'
import { Minipass } from 'minipass'
import { Parser, Result } from 'tap-parser'

const trimResult = (
  o: Record<string, any>
): Record<string, any> | undefined => {
  const entries = Object.entries(o)
    .map(([k, v]) => [
      k,
      !!v && typeof v === 'object' && !Array.isArray(v)
        ? trimResult(v)
        : v,
    ])
    .filter(
      ([k, v]) =>
        k === 'ok' ||
        k === 'id' ||
        (v !== false &&
          v !== null &&
          v !== undefined &&
          v !== '' &&
          !(Array.isArray(v) && !v.length))
    )
  return Object.fromEntries(entries)
}

export class Case {
  result: Result
  constructor(result: Result) {
    this.result = result
  }
  get failures() {
    return this.result.ok && !this.result.skip && !this.result.todo
      ? 0
      : 1
  }
  get skipped() {
    return this.result.skip || this.result.todo ? 1 : 0
  }
  get tests() {
    return 1
  }
  toJSON() {
    return trimResult(this.result)
  }
}

export class Suite extends EventEmitter {
  parser: Parser
  suites: Suite[] = []
  cases: Case[] = []
  name: string
  results?: Record<string, any>
  summary?: Record<string, any>
  constructor(parser: Parser) {
    super()
    this.parser = parser
    this.name = parser.name
    this.parser.on('complete', res => (this.results = res))
    this.parser.on('child', p => {
      const s = new Suite(p)
      this.suites.push(s)
      this.emit('suite', s)
      s.on('suite', s => this.emit('suite', s))
      s.on('suiteEnd', s => this.emit('suiteEnd', s))
      s.on('case', c => this.emit('case', c))
    })
    this.parser.on('assert', a => this.onAssert(a))
  }
  onAssert(a: Result) {
    // check to see if it's the summary test point for a suite
    const s = this.suites[this.suites.length - 1]
    if (s && !s.summary && a.name === s.name) {
      s.summary = trimResult(a)
      this.emit('suiteEnd', s)
    } else {
      const c = new Case(a)
      this.cases.push(c)
      this.emit('case', c)
    }
  }
  toJSON() {
    const { tests, failures, assertions, skipped } = this
    return trimResult({
      name: this.name,
      level: this.parser.level,
      ...(this.summary || {}),
      plan: this.results?.plan,
      bailout: this.results?.bailout,
      tests,
      failures,
      assertions,
      skipped,
      suites: this.suites,
      cases: this.cases,
    })
  }
  get tests(): number {
    return [...this.suites, ...this.cases]
      .map(s => s.tests)
      .reduce((a, b) => a + b, this.suites.length)
  }
  get failures(): number {
    return [...this.suites, ...this.cases]
      .map(s => s.failures)
      .reduce((a, b) => a + b, 0)
  }
  get assertions(): number {
    return this.suites
      .map(s => s.assertions)
      .reduce((a, b) => a + b, this.cases.length)
  }
  get skipped(): number {
    return [...this.suites, ...this.cases]
      .map(s => s.skipped)
      .reduce(
        (a, b) => a + b,
        this.results?.plan.skipAll ||
          this.summary?.skip ||
          this.summary?.todo
          ? 1
          : 0
      )
  }
}

export class Suites extends Suite {
  constructor(p: Parser) {
    super(p)
    this.name ||= 'TAP Tests'
  }
}

export class JSONReport extends Minipass<string> {
  parser: Parser = new Parser()
  constructor() {
    super({ encoding: 'utf8' })
    const suites = new Suites(this.parser)
    this.parser.on('complete', () => {
      super.write(JSON.stringify(suites, null, 2))
      super.end()
    })
  }

  write(
    chunk: Minipass.ContiguousData,
    cb?: (() => void) | undefined
  ): boolean
  write(
    chunk: Minipass.ContiguousData,
    encoding?: Minipass.Encoding | undefined,
    cb?: (() => void) | undefined
  ): boolean
  write(chunk: any, encoding?: any, cb?: any): boolean {
    return this.parser.write(chunk, encoding, cb)
  }

  end(cb?: (() => void) | undefined): this
  end(
    chunk: Minipass.ContiguousData,
    cb?: (() => void) | undefined
  ): this
  end(
    chunk: Minipass.ContiguousData,
    encoding?: Minipass.Encoding | undefined,
    cb?: (() => void) | undefined
  ): this
  end(chunk?: any, encoding?: any, cb?: any): this {
    this.parser.end(chunk, encoding, cb)
    return this
  }
}

export class JSONStream extends Minipass<string> {
  parser: Parser = new Parser()
  constructor() {
    super({ encoding: 'utf8' })
    const suites = new Suites(this.parser)
    suites.on('suite', s => this.suiteStart(s))
    suites.on('case', c => this.onCase(c))
    suites.on('suiteEnd', s => this.suiteEnd(s))
    this.suiteStart(suites)
    this.parser.on('complete', () => {
      this.suiteEnd(suites)
      super.end()
    })
  }

  onCase(c: Case) {
    super.write(
      JSON.stringify([
        c.result.skip
          ? 'skip'
          : c.result.todo
          ? 'todo'
          : c.result.ok
          ? 'pass'
          : 'fail',
        c,
      ]) + '\n'
    )
  }

  suiteStart(s: Suite) {
    super.write(
      JSON.stringify([
        'start',
        { name: s.name, level: s.parser.level },
      ]) + '\n'
    )
  }

  suiteEnd(s: Suite) {
    super.write(
      JSON.stringify([
        'end',
        {
          ...s.toJSON(),
          suites: undefined,
          cases: undefined,
        },
      ]) + '\n'
    )
  }

  write(
    chunk: Minipass.ContiguousData,
    cb?: (() => void) | undefined
  ): boolean
  write(
    chunk: Minipass.ContiguousData,
    encoding?: Minipass.Encoding | undefined,
    cb?: (() => void) | undefined
  ): boolean
  write(chunk: any, encoding?: any, cb?: any): boolean {
    return this.parser.write(chunk, encoding, cb)
  }

  end(cb?: (() => void) | undefined): this
  end(
    chunk: Minipass.ContiguousData,
    cb?: (() => void) | undefined
  ): this
  end(
    chunk: Minipass.ContiguousData,
    encoding?: Minipass.Encoding | undefined,
    cb?: (() => void) | undefined
  ): this
  end(chunk?: any, encoding?: any, cb?: any): this {
    this.parser.end(chunk, encoding, cb)
    return this
  }
}
