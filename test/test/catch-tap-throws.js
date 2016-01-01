var tap = require('../..')

// tap failures should be uncatchable

tap.test(function exceed_plan (t) {
  t.plan(1)
  try {
    t.pass()
    t.pass()
  } catch (e) {
    // noop
  }
})

tap.test(function multiple_end (t) {
  try {
    t.pass()
    t.end()
    t.end()
  } catch (e) {
    // noop
  }
})

tap.test(function assert_after_end (t) {
  try {
    t.pass()
    t.end()
    t.pass()
  } catch (e) {
    // noop
  }
})
