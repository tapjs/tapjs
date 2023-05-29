import type { Result, TapError } from './result.js'
import { FinalPlan } from './final-plan.js'
import type { Parser } from './index.js'

export class FinalResults {
  public ok: boolean
  public count: number
  public pass: number
  public fail: number
  public bailout: boolean | string
  public todo: number
  public skip: number
  public failures: TapError[]
  public time: number | null
  public passes?: Result[]
  public plan: FinalPlan
  public skips: (Result & { skip: true | string })[]
  public todos: (Result & { todo: true | string })[]
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
