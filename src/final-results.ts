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
  constructor(skipAll: boolean, self: Parser) {
    this.ok = self.ok
    this.count = self.count
    this.pass = self.pass
    this.fail = self.fail || 0
    this.bailout = self.bailedOut || false
    this.todo = self.todo || 0
    this.skip = skipAll ? self.count : self.skip || 0
    this.plan = new FinalPlan(skipAll, self)
    this.failures = self.failures
    this.time = self.time
    if (self.passes) this.passes = self.passes
  }
}
