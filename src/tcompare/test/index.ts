import t from 'tap'
import * as compare from '../dist/mjs/index.js'
import { StyleType } from '../dist/mjs/styles.js'

// not much of a test, but just verifying the interface exists
const obj = { a: 1 }
const expect = { a: 1 }
const opt = { style: 'js' as StyleType }

t.matchSnapshot(compare.format(obj), 'format')
t.matchSnapshot(compare.same(obj, expect), 'same')
t.matchSnapshot(compare.strict(obj, expect), 'strict')
t.matchSnapshot(compare.has(obj, expect), 'has')
t.matchSnapshot(compare.hasStrict(obj, expect), 'hasStrict')
t.matchSnapshot(compare.match(obj, expect), 'match')
t.matchSnapshot(compare.matchOnly(obj, expect), 'matchOnly')
t.matchSnapshot(compare.matchStrict(obj, expect), 'matchStrict')
t.matchSnapshot(
  compare.matchOnlyStrict(obj, expect),
  'matchOnlyStrict'
)
t.matchSnapshot(compare.format(obj, opt), 'format opt')
t.matchSnapshot(compare.same(obj, expect, opt), 'same opt')
t.matchSnapshot(compare.strict(obj, expect, opt), 'strict opt')
t.matchSnapshot(compare.has(obj, expect, opt), 'has opt')
t.matchSnapshot(compare.hasStrict(obj, expect, opt), 'hasStrict opt')
t.matchSnapshot(compare.match(obj, expect, opt), 'match opt')
t.matchSnapshot(
  compare.matchStrict(obj, expect, opt),
  'matchStrict opt'
)
t.matchSnapshot(compare.matchOnly(obj, expect, opt), 'matchOnly opt')
t.matchSnapshot(
  compare.matchOnlyStrict(obj, expect, opt),
  'matchOnlyStrict opt'
)

t.matchSnapshot(new compare.Format(obj).print(), 'Format')
t.matchSnapshot(new compare.Same(obj, { expect }).print(), 'Same')
t.matchSnapshot(new compare.Strict(obj, { expect }).print(), 'Strict')
t.matchSnapshot(new compare.Has(obj, { expect }).print(), 'Has')
t.matchSnapshot(
  new compare.HasStrict(obj, { expect }).print(),
  'HasStrict'
)
t.matchSnapshot(new compare.Match(obj, { expect }).print(), 'Match')
t.matchSnapshot(
  new compare.MatchStrict(obj, { expect }).print(),
  'MatchStrict'
)
t.matchSnapshot(
  new compare.MatchOnly(obj, { expect }).print(),
  'MatchOnly'
)
t.matchSnapshot(
  new compare.MatchOnlyStrict(obj, { expect }).print(),
  'MatchOnlyStrict'
)
t.matchSnapshot(new compare.Format(obj, opt).print(), 'Format')
t.matchSnapshot(
  new compare.Same(obj, { expect, ...opt }).print(),
  'Same'
)
t.matchSnapshot(
  new compare.Strict(obj, { expect, ...opt }).print(),
  'Strict'
)
t.matchSnapshot(
  new compare.Has(obj, { expect, ...opt }).print(),
  'Has'
)
t.matchSnapshot(
  new compare.HasStrict(obj, { expect, ...opt }).print(),
  'HasStrict'
)
t.matchSnapshot(
  new compare.Match(obj, { expect, ...opt }).print(),
  'Match'
)
t.matchSnapshot(
  new compare.MatchStrict(obj, { expect, ...opt }).print(),
  'MatchStrict'
)
t.matchSnapshot(
  new compare.MatchOnly(obj, { expect, ...opt }).print(),
  'MatchOnly'
)
t.matchSnapshot(
  new compare.MatchOnlyStrict(obj, { expect, ...opt }).print(),
  'MatchOnlyStrict'
)

t.matchSnapshot(compare.styles, 'styles object')
