/**
 * JSON object representation of {@link Counts}
 */
export interface CountsJSON {
  total: number
  pass: number
  fail?: number
  skip?: number
  todo?: number
  complete?: number
}

/**
 * Class representing a count of all the assertions in a test
 *
 * The {@link Counts#complete} field is only used when counting tests and
 * tracking their completion status.
 *
 * @internal
 */
export class Counts {
  total: number = 0
  pass: number = 0
  fail: number = 0
  skip: number = 0
  todo: number = 0
  complete: number = 0
  constructor(c?: Counts | CountsJSON) {
    if (c) Object.assign(this, c)
  }
  toJSON(): CountsJSON {
    const c: CountsJSON = {
      total: this.total,
      pass: this.pass,
    }
    if (this.fail) c.fail = this.fail
    if (this.todo) c.todo = this.todo
    if (this.skip) c.skip = this.skip
    if (this.complete) c.complete = this.complete
    return c
  }
}
