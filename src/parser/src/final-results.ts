import { FinalPlan } from './final-plan.js'
import type { Parser } from './index.js'
import type { Result, TapError } from './result.js'

/**
 * The summary results provided in the `complete` event when the TAP
 * stream ends.
 */
export class FinalResults {
  ok: boolean
  count: number
  pass: number
  fail: number
  bailout: boolean | string
  todo: number
  skip: number
  failures: TapError[]
  time: number | null
  passes?: Result[]
  plan: FinalPlan
  skips: (Result & { skip: true | string })[]
  todos: (Result & { todo: true | string })[]
  constructor(skipAll: boolean, parser: Parser) {
    this.ok = parser.ok
    this.count = parser.count
    this.pass = parser.pass
    this.fail = parser.fail || 0
    this.bailout = parser.bailedOut || false
    this.todo = parser.todo || 0
    this.skip = skipAll ? parser.count : parser.skip || 0
    this.plan = new FinalPlan(skipAll, parser)
    this.failures = parser.failures
    this.time = parser.time
    this.skips = parser.skips
    this.todos = parser.todos
    if (parser.passes) this.passes = parser.passes
  }
}
