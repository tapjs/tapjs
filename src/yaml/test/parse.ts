import t from 'tap'
import { parse } from '../src/index.js'
t.matchSnapshot(
  parse(`cycle:
  &a1
  a: 1
  cycle: *a1`),
  'it parses yaml',
)
