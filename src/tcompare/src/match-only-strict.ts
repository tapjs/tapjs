import { MatchStrict } from './match-strict.js'
import { Same } from './same.js'

/**
 * this uses the test method from {@link tcompare!match-strict.MatchStrict},
 * but requires that *only* the specified fields in the pattern are present in
 * the object.
 *
 * It does still allow a field to be present in the object and not the pattern
 * if the value is set to undefined.
 */
export class MatchOnlyStrict extends Same {
  test() {
    return MatchStrict.prototype.test.call(this)
  }
}
