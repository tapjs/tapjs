'use strict'
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

const t = require('./tap.js')
t.jobs = 1
const tapStack = [ t ]
let level = 0
const suiteStack = []

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
  const t = tapStack[ tapStack.length - 1 ]
  t.test(this.name, { todo: this.todo }, function (tt) {
    this.test = tt
    tapStack.push(tt)
    suiteStack.push(this)
    const ret = this.fn()
    this.runAfter()
    suiteStack.pop()
    return ret
  }.bind(this))
}

Suite.prototype.runAfter = function () {
  this.after.forEach(function (namefn) {
    const name = namefn[0]
    const fn = namefn[1]
    before(name, fn)
  })
  let t
  do {
    t = tapStack.pop()
  } while (t && t !== this.test)
  if (this.test && !this.test.results)
    t.end()
}

function before (name, fn) {
  if (typeof name === 'function')
    fn = name, name = null
  if (fn && fn.name && !name)
    name = fn.name
  const todo = !fn
  const suite = suiteStack[ suiteStack.length - 1 ]
  const t = tapStack[ tapStack.length - 1 ]
  if (!name)
    name = ''
  t.test(name, { todo: todo, silent: true }, function (tt) {
    const ret = fn.call(suite, done(tt))
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
  const todo = !fn
  const suite = suiteStack[ suiteStack.length - 1 ]
  const t = tapStack[ tapStack.length - 1 ]
  if (!name)
    name = ''
  t.test(name, { todo: todo, tapMochaTest: true }, function (tt) {
    const ret = fn.call(tt, done(tt))
    if (ret && ret.then)
      return ret
    else if (fn.length === 0)
      tt.end()
  })

  function done (tt) { return function (er) {
    if (er)
      tt.threw(er)
    else
      tt.end()
  }}
}

function after (name, fn) {
  const suite = suiteStack[ suiteStack.length - 1 ]
  if (!suite)
    throw new Error('cannot call "after" outside of describe()')
  if (fn)
    suite.after.push([name, fn])
  else
    suite.after.push([name])
}

function moment (when, fn) {
  const t = tapStack[ tapStack.length - 1 ]
  t[when](function (cb) {
    if (!this.options.tapMochaTest)
      return cb()
    const suite = suiteStack[ suiteStack.length - 1 ]
    const ret = fn.call(this, cb)
    if (ret && ret.then)
      return ret
    else if (fn.length === 0)
      return cb()
  })
}

function beforeEach (fn) {
  moment('beforeEach', fn)
}

function afterEach (fn) {
  moment('afterEach', fn)
}
