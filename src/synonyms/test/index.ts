import t from 'tap'
import { plugin as SynonymPlugin } from '../dist/esm/index.js'

t.applyPlugin(SynonymPlugin).test(ts => {
  ts.not_ok(t.pluginLoaded(SynonymPlugin), 'not loaded by default')

  ts.is_equal(ts.equals, ts.is)
  ts.isStrictly(ts.isa, ts.isA)
  ts.equal(ts.isa.toString(), t.type.toString())

  ts.throws(
    //@ts-expect-error
    () => class extends ts.isDeeply {},
    'should not be a class',
  )
  ts.end()
})
