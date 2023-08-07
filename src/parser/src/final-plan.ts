import type { Parser } from './index.js'
/**
 * The summary of the plan, for inclusion in the results
 * provided in the `complete` event.
 */
export class FinalPlan {
  start: number | null
  end: number | null
  skipAll: boolean
  skipReason: string
  comment: string

  constructor(skipAll: boolean, self: Parser) {
    this.start = self.planStart === -1 ? null : self.planStart
    this.end = self.planStart === -1 ? null : self.planEnd
    this.skipAll = skipAll
    this.skipReason = skipAll ? self.planComment : ''
    this.comment = self.planComment || ''
  }
}
