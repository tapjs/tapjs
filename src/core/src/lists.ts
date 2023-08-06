import { Result } from 'tap-parser'

/**
 * List of {@link Result} objects corresponding to test points
 * encountered in a TAP stream.
 */
export class Lists {
  fail: Result[] = []
  todo: Result[] = []
  skip: Result[] = []
  pass: Result[] = []
}
