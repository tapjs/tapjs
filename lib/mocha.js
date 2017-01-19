exports.it = exports.specify = it
exports.context = exports.describe = describe
exports.before = before
exports.after = after
exports.beforeEach = beforeEach
exports.afterEach = afterEach

exports.global = function () {
  Object.keys(exports).forEach(function (g) {
    global[g] = exports[g]
  })
}

var t = require('./tap.js')
t.jobs = 1
var tapStack = [ t ]
var level = 0
var suiteStack = []

var running = false
function run () {
  if (running)
    return
  running = true
  process.nextTick(function () {
    rootSuite.run()
  })
}

function describe (name, fn) {
  new Suite(name, fn)
}

function Suite (name, fn) {
  this.parent = suiteStack[ suiteStack.length - 1 ]
  if (typeof name === 'function')
    fn = name, name = null
  if (fn && fn.name && !name)
    name = fn.name
  this.todo = !fn
  this.fn = fn
  this.name = name
  this.after = []
  this.test = null

  this.run()
}

Suite.prototype.run = function () {
  var t = tapStack[ tapStack.length - 1 ]
  t.test(this.name, { todo: this.todo }, function (tt) {
    this.test = tt
    tapStack.push(tt)
    suiteStack.push(this)
    this.fn()
    this.runAfter()
    suiteStack.pop()
  }.bind(this))
}

Suite.prototype.runAfter = function () {
  this.after.forEach(function (namefn) {
    var name = namefn[0]
    var fn = namefn[1]
    before(name, fn)
  })
  do {
    var t = tapStack.pop()
  } while (t && t !== this.test)
  if (this.test && !this.test.results)
    t.end()
}

function before (name, fn) {
  if (typeof name === 'function')
    fn = name, name = null
  if (fn && fn.name && !name)
    name = fn.name
  var todo = !fn
  var suite = suiteStack[ suiteStack.length - 1 ]
  var t = tapStack[ tapStack.length - 1 ]
  if (!name)
    name = ''
  t.test(name, { todo: todo, silent: true }, function (tt) {
    var ret = fn.call(suite, done(tt))
    if (!ret && fn.length === 0)
      tt.end()
    else
      return ret
  })

  function done (tt) { return function (er) {
    if (er)
      tt.threw(er)
    else
      tt.end()
  }}
}

function it (name, fn) {
  if (typeof name === 'function')
    fn = name, name = null
  if (fn && fn.name && !name)
    name = fn.name
  var todo = !fn
  var suite = suiteStack[ suiteStack.length - 1 ]
  var t = tapStack[ tapStack.length - 1 ]
  if (!name)
    name = ''
  t.test(name, { todo: todo }, function (tt) {
    var ret = fn.call(suite, done(tt))
    if (!ret && fn.length === 0)
      tt.end()
    else
      return ret
  })

  function done (tt) { return function (er) {
    if (er)
      tt.threw(er)
    else
      tt.end()
  }}
}

function after (name, fn) {
  var suite = suiteStack[ suiteStack.length - 1 ]
  if (!suite)
    throw new Error('cannot call "after" outside of describe()')
  if (fn)
    suite.after.push([name, fn])
  else
    suite.after.push([name])
}

function moment (when, fn) {
  var t = tapStack[ tapStack.length - 1 ]
  t[when](function (cb) {
    var suite = suiteStack[ suiteStack.length - 1 ]
    var ret = fn.call(suite, cb)
    if (!ret && fn.length === 0)
      return cb()
    else
      return ret
  })
}

function beforeEach (fn) {
  moment('beforeEach', fn)
}

function afterEach (fn) {
  moment('afterEach', fn)
}
