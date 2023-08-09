import type { Parser } from './index.js'
/**
 * The summary of the plan, for inclusion in the results
 * provided in the `complete` event.
 */
export class FinalPlan {
  start: number | null = null
  end: number | null = null
  skipAll: boolean
  skipReason: string
  comment: string

  constructor(skipAll: boolean, self: Parser) {
    if (self.planStart >= 0) this.start = self.planStart
    if (self.planEnd >= 0) this.end = self.planEnd
    this.skipAll = skipAll
    this.skipReason = skipAll ? self.planComment : ''
    this.comment = self.planComment || ''
  }
}
