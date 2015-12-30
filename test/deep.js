var tap = require('../')
var test = tap.test

test("deepEquals shouldn't care about key order and types", function (t) {
  t.deepEqual({ a: 1, b: 2 }, { b: 2, a: '1' })
  t.end()
})

test("deepEquals shouldn't care about key order recursively and types", function (t) {
  t.deepEqual(
    { x: { a: 1, b: 2 }, y: { c: 3, d: 4 } },
    { y: { d: 4, c: 3 }, x: { b: '2', a: '1' } }
  )
  t.end()
})

test("deepEquals shouldn't care about key order (but still might) and types", function (t) {
  t.deepEqual(
    [
      {
        foo: {
          z: 100,
          y: 200,
          x: 300
        }
      },
      'bar',
      11,
      {
        baz: {
          d: 4,
          a: 1,
          b: 2,
          c: 3
        }
      }
    ],
    [
      {
        foo: {
          z: 100,
          y: 200,
          x: 300
        }
      },
      'bar',
      11,
      {
        baz: {
          a: '1',
          b: '2',
          c: '3',
          d: '4'
        }
      }
    ]
  )
  t.end()
})

test("deepEquals shouldn't blow up on circular data structures", function (t) {
  var x1 = { z: 4 }
  var y1 = { x: x1 }
  x1.y = y1

  var x2 = { z: 4 }
  var y2 = { x: x2 }
  x2.y = y2

  t.deepEquals(x1, x2)
  t.end()
})
