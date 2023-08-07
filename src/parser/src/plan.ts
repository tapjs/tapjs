/**
 * A class representing the TAP plan line
 */
export class Plan {
  public start: number
  public end: number
  public comment: string
  constructor(start: number, end: number, comment: string = '') {
    this.start = start
    this.end = end
    this.comment = comment
  }
}
