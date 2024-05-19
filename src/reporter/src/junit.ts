// junit representation of the test run
// https://github.com/testmoapp/junitxml

import { Minipass } from 'minipass'
import { FinalResults, Parser, Result } from 'tap-parser'
import { stringify } from 'tap-yaml'

const xmlEscape = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const cdata = (s: string) =>
  s
    .split(']]>')
    .map(s => `<![CDATA[\n${s.trimEnd()}\n]]>`)
    .join(xmlEscape(']]>'))

class Properties {
  data?: Record<string, any>
  constructor(data?: Record<string, any>) {
    this.data = data
  }
  toString() {
    /* c8 ignore start */
    if (!this.data) return ''
    /* c8 ignore stop */
    const body = Object.entries(this.data)
      .map(([k, v]) => {
        if (
          v === undefined ||
          v === null ||
          v === '' ||
          v === false
        ) {
          return ''
        } else if (typeof v === 'string') {
          return v.includes('\n') ?
              `<property name="${xmlEscape(k)}">${cdata(
                v,
              )}</property>`
            : `<property name="${xmlEscape(k)}" value="${xmlEscape(
                v,
              )}" />`
        } else if (typeof v === 'number' || typeof v === 'boolean') {
          return `<property name="${xmlEscape(k)}" value="${xmlEscape(
            String(v),
          )}" />`
        } else {
          return `<property name="${xmlEscape(k)}">${cdata(
            stringify(v),
          )}</property>`
        }
      })
      .filter(v => !!v)
    if (!body.length) return ''
    return `<properties>
${body.join('\n')}
</properties>`
  }
}

class Failure {
  result: Result
  constructor(result: Result) {
    this.result = result
  }
  toString() {
    const msg = stringify({
      ...(this.result.diag || { name: this.result.name }),
    })
    return `<failure>${cdata(msg).trimEnd()}</failure>`
  }
}

class Case {
  result: Result
  classname: string
  constructor(result: Result) {
    this.result = result
    const fn = result.fullname
    /* c8 ignore start */
    this.classname =
      fn.endsWith(result.name) ?
        fn
          .substring(0, fn.length - result.name.length)
          .replace(/>? $/, '')
          .trimEnd()
      : fn
    /* c8 ignore stop */
  }
  get failures() {
    return this.result.ok ? 0 : 1
  }
  get skipped() {
    return this.result.skip || this.result.todo ? 1 : 0
  }
  get tests() {
    return 1
  }
  toString() {
    /* c8 ignore start */
    const file =
      this.result.diag?.at?.fileName ||
      this.result.diag?.at?.file ||
      this.result.diag?.file
    const line =
      this.result.diag?.at?.lineNumber ||
      this.result.diag?.at?.line ||
      this.result.diag?.line
    const column =
      this.result.diag?.at?.columnNumber ||
      this.result.diag?.at?.column ||
      this.result.diag?.column
    /* c8 ignore stop */
    const { ok, name, skip, todo, tapError, time, diag } = this.result
    const props = String(
      new Properties({
        ...(skip ? { skip } : {}),
        ...(todo ? { todo } : {}),
        /* c8 ignore start */
        ...(tapError ? { tapError } : {}),
        /* c8 ignore stop */
        ...(diag || {}),
      }),
    ).trimEnd()
    return `<testcase id="${this.result.id}" name="${xmlEscape(
      name,
    )}" classname="${xmlEscape(this.classname)}"${
      time ? ` time="${seconds(time)}"` : ''
    }${file ? ` file="${xmlEscape(String(file))}"` : ''}${
      file && line ? ` line="${xmlEscape(String(line))}"` : ''
    }${
      file && line && column ?
        ` column="${xmlEscape(String(column))}"`
      : ''
    }${
      ok && !props ? ' />' : (
        `>
${!ok ? new Failure(this.result) : props}
</testcase>
`
      )
    }`
  }
}

class Suite {
  parser: Parser
  suites: Suite[] = []
  cases: Case[] = []
  name: string
  results?: FinalResults
  constructor(parser: Parser) {
    this.parser = parser
    this.name = parser.name
    this.parser.on('complete', res => (this.results = res))
    this.parser.on('child', p => this.suites.push(new Suite(p)))
    this.parser.on('assert', a => this.onAssert(a))
  }
  onAssert(a: Result) {
    this.cases.push(new Case(a))
  }
  get tests(): number {
    return (
      [...this.suites, ...this.cases]
        .map(s => s.tests)
        /* c8 ignore start */
        .reduce((a, b) => a + b, this.results ? 1 : 0)
    )
    /* c8 ignore stop */
  }
  get failures(): number {
    return [...this.suites, ...this.cases]
      .map(s => s.failures)
      .reduce((a, b) => a + b, this.results?.ok === false ? 1 : 0)
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
        (
          this.results?.plan.skipAll ||
            this.results?.skip ||
            this.results?.todo
        ) ?
          1
        : 0,
      )
  }

  toString() {
    const props = new Properties({
      ok: this.results?.ok,
      plan: this.results?.plan,
      bailout: this.results?.bailout,
    })

    return `<testsuite name="${xmlEscape(this.name)}" tests="${
      this.tests
    }" failures="${this.failures}" assertions="${
      this.assertions
    }" skipped="${this.skipped}"${
      this.results?.time ?
        ` time="${seconds(this.results.time)}"`
      : ''
    }>
${props}
${this.suites
  .map(s => String(s))
  .join('\n')
  .trimEnd()}
${this.cases
  .map(c => String(c))
  .join('\n')
  .trimEnd()}
</testsuite>
`
  }
}

class Suites extends Suite {
  onAssert() {}
  toString() {
    const props = String(
      new Properties({
        ok: this.results?.ok,
        plan: this.results?.plan,
        bailout: this.results?.bailout,
      }),
    )
    const id = new Date()
      .toISOString()
      .replace(/[^0-9T]/g, '')
      .replace('T', '_')
    return `<testsuites id="${xmlEscape(id)}" name="${
      xmlEscape(this.name) || 'TAP Tests'
    }" tests="${this.tests}" failures="${
      this.failures
    }" assertions="${this.assertions}" skipped="${this.skipped}" ${
      /* c8 ignore start */
      this.results?.time ? `time="${seconds(this.results.time)}"` : ''
    }>${props ? '\n' + props : ''}
${this.suites
  /* c8 ignore stop */
  .map(s => String(s))
  .join('\n')
  .trimEnd()}
</testsuites>
`
  }
}

const seconds = (m: number) => Math.floor(m * 1000) / 1000000

export class JUnit extends Minipass<string> {
  parser: Parser = new Parser()
  constructor() {
    super({ encoding: 'utf8' })
    super.write('<?xml version="1.0" encoding="UTF-8" ?>\n')
    const suites = new Suites(this.parser)
    this.parser.on('complete', () => {
      super.write(String(suites))
      super.end()
    })
  }

  write(
    chunk: Minipass.ContiguousData,
    cb?: (() => void) | undefined,
  ): boolean
  write(
    chunk: Minipass.ContiguousData,
    encoding?: Minipass.Encoding | undefined,
    cb?: (() => void) | undefined,
  ): boolean
  write(chunk: any, encoding?: any, cb?: any): boolean {
    return this.parser.write(chunk, encoding, cb)
  }

  end(cb?: (() => void) | undefined): this
  end(
    chunk: Minipass.ContiguousData,
    cb?: (() => void) | undefined,
  ): this
  end(
    chunk: Minipass.ContiguousData,
    encoding?: Minipass.Encoding | undefined,
    cb?: (() => void) | undefined,
  ): this
  end(chunk?: any, encoding?: any, cb?: any): this {
    this.parser.end(chunk, encoding, cb)
    return this
  }
}
