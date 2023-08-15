import { Match } from './match.js'
import { Same } from './same.js'

/**
 * this uses the test method from {@link tcompare!match.Match}, but requires
 * that *only* the specified fields in the pattern are present in the object.
 *
 * It does still allow a field to be present in the object and not the pattern
 * if the value is set to null or undefined.
 */
export class MatchOnly extends Same {
  test() {
    return Match.prototype.test.call(this)
  }
}
