var t = require('../')

var parseTestArgs = require('../lib/parse-test-args.js')

function namedFunction () {}
var fn = function () {}
var obj = { thisIsMyObject: true }
var objTodo = { thisIsMyObject: true, todo: true }

function runTest (args, expect) {
  delete obj.todo

  var result = parseTestArgs.apply(null, args)
  t.match(result, expect)
}

function c (obj, props) {
  return Object.keys(obj).reduce(function (p, k) {
    if (!k in p)
      p[k] = obj[k]
    return p
  }, props)
}

runTest(['name', obj, fn], c(obj, {name: 'name', cb: fn}))
runTest(['name', fn], { name: 'name', cb: fn })
runTest([obj, fn], c(obj, { name: /\(unnamed test\)|fn/, cb: fn }))
runTest([obj, namedFunction], c(obj, { name: 'namedFunction', cb: namedFunction }))
runTest(['name', obj], c(objTodo, { name: 'name' }))
runTest(['name'], { name: 'name', todo: true })
runTest([obj], c(objTodo, { name: /\(unnamed test\)|fn/ }))
runTest([fn], {name: /\(unnamed test\)|fn/, cb: fn})
runTest([namedFunction], { name: 'namedFunction', cb: namedFunction })
runTest([], { name: /\(unnamed test\)|fn/, todo: true })

var dn = 'defaultName'
var _ = undefined
runTest(['name', obj, fn, dn], c(obj, {name: 'name', cb: fn}))
runTest(['name', fn, _, dn], { name: 'name', cb: fn })
runTest([obj, fn, _, dn], c(obj, { name: /defaultName|fn/, cb: fn }))
runTest([obj, namedFunction, _, dn], c(obj, { name: 'namedFunction', cb: namedFunction }))
runTest(['name', obj, _, dn], c(objTodo, { name: 'name' }))
runTest(['name', _, _, dn], { name: 'name', todo: true })
runTest([obj, _, _, dn], c(objTodo, { name: /defaultName|fn/ }))
runTest([fn, _, _, dn], {name: /defaultName|fn/, cb: fn})
runTest([namedFunction, _, _, dn], { name: 'namedFunction', cb: namedFunction })
runTest([_, _, _, dn], { name: /defaultName|fn/, todo: true })

t.throws(function () {
  runTest(['name', obj, 99], {})
})
