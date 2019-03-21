const t = require('tap')
const yaml = require('../')
const util = require('util')
class CustomError extends Error {
  constructor (message) {
    super(message)
    this.foo = 'bar'
    Object.defineProperty(this, 'name', { value: 'TingTings' })
    this.meta = {some: 'large object'}
  }
  [util.inspect.custom || 'inspect'] () {
    return { foo: this.foo }
  }
}
const o = {
  EvalError: new EvalError('evil'),
  RangeError: new RangeError('strider'),
  ReferenceError: new ReferenceError('appendix'),
  SyntaxError: new SyntaxError('semantics'),
  TypeError: new TypeError('qwerty'),
  URIError: new URIError('ur:i'),
  Error: new Error('just your standard error type'),
  assertion: (() => {
    try {
      require('assert').equal(1, 2)
    } catch (e) {
      return e
    }
  })(),
  CustomError: new CustomError('no meta, please'),
}
o.questionbegging = (() => {
  try {
    require('assert').equal(o, 99)
  } catch (e) {
    return e
  }
})()

o.dom = new Error('alton brown')
o.dom.domain = { dom: true }
o.dom.domainEmitter = o
o.dom.domainThrew = o.dom

const clean = str => str
  .replace(/^(( +)(at .*\n?))+/gm, '$2{STACK}\n')

const s1 = yaml.stringify(o)
t.matchSnapshot(clean(s1), 'first stringify')
const p1 = yaml.parse(s1)
t.matchSnapshot(clean(require('util').inspect(p1)), 'parsed stringified')
const s2 = yaml.stringify(p1)
t.equal(s2, s1, 'second stringify matches first')
