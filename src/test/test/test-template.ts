import t from 'tap'
import { Test } from '../scripts/test-template'
t.strictSame(
  [...Test.plugins.entries()],
  [],
  'no plugins loaded in template'
)
