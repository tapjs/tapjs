// this is a weird one.  Basically, it is identical to Match,
// EXCEPT in the case of two simple types.  If the object == expect,
// but the object does not === expect, then it returns false.
import { Match } from './match.js'
export class MatchStrict extends Match {
  test() {
    // equal on type coercion, but not equal strictly.
    if (
      this.expect == this.object &&
      this.expect !== this.object
    ) {
      return false
    }
    return super.test()
  }
}
