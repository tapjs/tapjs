import t from 'tap'
import { filterCompletions } from '../../dist/esm/repl/filter-completions.js'

const list = [
  'apple',
  'approbium',
  'application',
  'banana',
  'barbie',
  'boggle',
]
t.strictSame(filterCompletions(list, 'a'), [
  'apple',
  'approbium',
  'application',
])
t.strictSame(filterCompletions(list, 'ba'), ['banana', 'barbie'])
t.strictSame(filterCompletions(list, 'x'), list)
