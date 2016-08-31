var t = require('../')

function namedFunction () {}
var fn = function () {}
var obj = { thisIsMyObject: true }
var objTodo = { thisIsMyObject: true, todo: true }

function runTest (args, expect) {
  delete obj.todo

  var result = t._parseTestArgs.apply(t, args)
  t.match(result[0], expect[0])
  t.same(result[1], expect[1])
  t.equal(result[2], expect[2])
}

runTest(['name', obj, fn], ['name', obj, fn])
runTest(['name', fn], ['name', {}, fn])
runTest([obj, fn], [/\(unnamed test\)|fn/, obj, fn])
runTest([obj, namedFunction], ['namedFunction', obj, namedFunction])
runTest(['name', obj], ['name', objTodo])
runTest(['name'], ['name', { todo: true }])
runTest([obj], [/\(unnamed test\)|fn/, objTodo])
runTest([fn], [/\(unnamed test\)|fn/, {}, fn])
runTest([namedFunction], ['namedFunction', {}, namedFunction])
runTest([], [/\(unnamed test\)|fn/, { todo: true }])

t.throws(function () {
  runTest(['name', obj, 99], [])
})
