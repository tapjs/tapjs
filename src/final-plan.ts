import type { Parser } from './index'
export class FinalPlan {
  public start: number | null
  public end: number | null
  public skipAll: boolean
  public skipReason: string
  public comment: string

  constructor(skipAll: boolean, self: Parser) {
    this.start = self.planStart === -1 ? null : self.planStart
    this.end = self.planStart === -1 ? null : self.planEnd
    this.skipAll = skipAll
    this.skipReason = skipAll ? self.planComment : ''
    this.comment = self.planComment || ''
  }
}
