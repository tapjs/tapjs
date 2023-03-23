import t from 'tap'
import * as compare from '../'

// not much of a test, but just verifying the interface exists
const obj = { a: 1 }
const expect = { a: 1 }
const opt = { style: 'js' }

t.matchSnapshot(compare.format(obj))
t.matchSnapshot(compare.same(obj, expect))
t.matchSnapshot(compare.strict(obj, expect))
t.matchSnapshot(compare.has(obj, expect))
t.matchSnapshot(compare.hasStrict(obj, expect))
t.matchSnapshot(compare.match(obj, expect))
t.matchSnapshot(compare.matchOnly(obj, expect))
t.matchSnapshot(compare.matchStrict(obj, expect))
t.matchSnapshot(compare.format(obj, opt))
t.matchSnapshot(compare.same(obj, expect, opt))
t.matchSnapshot(compare.strict(obj, expect, opt))
t.matchSnapshot(compare.has(obj, expect, opt))
t.matchSnapshot(compare.hasStrict(obj, expect, opt))
t.matchSnapshot(compare.match(obj, expect, opt))
t.matchSnapshot(compare.matchStrict(obj, expect, opt))
t.matchSnapshot(compare.matchOnly(obj, expect, opt))

t.matchSnapshot(new compare.Format(obj).print())
t.matchSnapshot(new compare.Same(obj, { expect }).print())
t.matchSnapshot(new compare.Strict(obj, { expect }).print())
t.matchSnapshot(new compare.Has(obj, { expect }).print())
t.matchSnapshot(
  new compare.HasStrict(obj, { expect }).print()
)
t.matchSnapshot(new compare.Match(obj, { expect }).print())
t.matchSnapshot(
  new compare.MatchOnly(obj, { expect }).print()
)
t.matchSnapshot(
  new compare.MatchStrict(obj, { expect }).print()
)
t.matchSnapshot(new compare.Format(obj, opt).print())
t.matchSnapshot(
  new compare.Same(obj, { expect, ...opt }).print()
)
t.matchSnapshot(
  new compare.Strict(obj, { expect, ...opt }).print()
)
t.matchSnapshot(
  new compare.Has(obj, { expect, ...opt }).print()
)
t.matchSnapshot(
  new compare.HasStrict(obj, { expect, ...opt }).print()
)
t.matchSnapshot(
  new compare.Match(obj, { expect, ...opt }).print()
)
t.matchSnapshot(
  new compare.MatchOnly(obj, { expect, ...opt }).print()
)
t.matchSnapshot(
  new compare.MatchStrict(obj, { expect, ...opt }).print()
)

t.matchSnapshot(compare.styles, 'styles object')
