var t = require('../')

var parseTestArgs = require('../lib/parse-test-args.js')

function namedFunction () {}
var fn = function () {}
function clone (o) {
  return Object.keys(o).reduce(function (c, k) {
    c[k] = o[k]
    return c
  }, {})
}
var obj = { thisIsMyObject: true }
var cobj = clone.bind(null, obj)
var objTodo = { thisIsMyObject: true, todo: true }
var cobjTodo = clone.bind(null, objTodo)

function runTest (args, expect) {
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

runTest(['name', cobj(), fn], c(cobj(), {name: 'name', cb: fn}))
runTest(['name', fn], { name: 'name', cb: fn })
runTest([cobj(), fn], c(cobj(), { name: /^(fn)?$/, cb: fn }))
runTest([cobj(), namedFunction], c(cobj(), { name: 'namedFunction', cb: namedFunction }))
runTest(['name', cobj()], c(cobjTodo(), { name: 'name' }))
runTest(['name'], { name: 'name', todo: true })
runTest([cobj()], c(cobjTodo(), { name: /^(fn)?$/ }))
runTest([fn], {name: /^(fn)?$/, cb: fn})
runTest([namedFunction], { name: 'namedFunction', cb: namedFunction })
runTest([], { name: /^(fn)?$/, todo: true })

var dn = 'defaultName'
var _ = undefined
runTest(['name', cobj(), fn, dn], c(cobj(), {name: 'name', cb: fn}))
runTest(['name', fn, _, dn], { name: 'name', cb: fn })
runTest([cobj(), fn, _, dn], c(cobj(), { name: /defaultName|fn/, cb: fn }))
runTest([cobj(), namedFunction, _, dn], c(cobj(), { name: 'namedFunction', cb: namedFunction }))
runTest(['name', cobj(), _, dn], c(cobjTodo(), { name: 'name' }))
runTest(['name', _, _, dn], { name: 'name', todo: true })
runTest([cobj(), _, _, dn], c(cobjTodo(), { name: /defaultName|fn/ }))
runTest([fn, _, _, dn], {name: /defaultName|fn/, cb: fn})
runTest([namedFunction, _, _, dn], { name: 'namedFunction', cb: namedFunction })
runTest([_, _, _, dn], { name: /defaultName|fn/, todo: true })

t.throws(function () {
  runTest(['name', cobj(), 99], {})
})
