var tap = require('../..')

// tap failures should be uncatchable

tap.test(function exceed_plan_sync (t) {
  console.log(11)
  t.plan(1)
  console.log(12)
  try {
    t.pass(1)
    console.log(13)
    t.pass(2)
    console.log(14)
  } catch (e) {
    console.log(15)
  }
})

tap.test(function exceed_plan_async (t) {
  console.log(21)
  t.plan(1)
  console.log(22)
  t.pass(3)
  console.log(22.5)
  process.nextTick(function () {
    console.log(23)
    try {
      t.pass(4)
      console.log(24)
    } catch (e) {
      console.log(25)
    }
  })
})

tap.test(function multiple_end_sync (t) {
  console.log(31)
  try {
    t.pass(5)
    console.log(32)
    t.end()
    console.log(33)
    t.end()
    console.log(34)
  } catch (e) {
    console.log(35)
  }
})

tap.test(function multiple_end_async (t) {
  console.log(41)
  t.pass(6)
  console.log(42)
  t.end()
  console.log(42.5)
  process.nextTick(function () {
    console.log(43)
    try {
      t.end()
      console.log(44)
    } catch (e) {
      console.log(45)
    }
  })
})

tap.test(function assert_after_end_sync (t) {
  console.log(51)
  t.pass(7)
  console.log(52)
  t.end()
  console.log(53)
  try {
    t.pass(8)
    console.log(54)
  } catch (e) {
    console.log(55)
    // noop
  }
})

tap.test(function assert_after_end_async (t) {
  console.log(61)
  t.pass(9)
  console.log(62)
  t.end()
  console.log(62.5)
  process.nextTick(function () {
    console.log(63)
    try {
      t.pass(10)
      console.log(64)
    } catch (e) {
      console.log(65)
      // noop
    }
  })
})
