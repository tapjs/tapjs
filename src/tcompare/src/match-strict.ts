import { Match } from './match.js'

/**
 * Identical to {@link Match}, *except* in the case of two simple types.
 * If the value loosely equals the expected pattern, but is not strictly
 * equal, then the test returns false.
 */
export class MatchStrict extends Match {
  test() {
    // equal on type coercion, but not equal strictly.
    if (this.expect == this.object && this.expect !== this.object) {
      return false
    }
    return super.test()
  }
}
