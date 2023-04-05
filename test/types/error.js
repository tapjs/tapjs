const t = require('tap')
const yaml = require('../..')
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

class ErrorWithToJSON extends Error {
  constructor (message) {
    super(message)
    this.name = 'jsan erawr lol'
  }
  toJSON() {
    return {
      hello: 'from tojson',
    }
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
  CustomError: new CustomError('no meta, please'),
  ErrorWithToJSON: new ErrorWithToJSON('to json me'),
}

o.dom = new Error('alton brown')
o.dom.domain = { dom: true }
o.dom.domainEmitter = o
o.dom.domainThrew = o.dom

t.cleanSnapshot = str => str
  .replace(/^(( +)(at .*\n?))+/gm, '$2{STACK}\n')

const s1 = yaml.stringify(o)
t.matchSnapshot(s1, 'first stringify')
const p1 = yaml.parse(s1)
t.matchSnapshot(p1, 'parsed stringified')
const s2 = yaml.stringify(p1)
t.equal(s2, s1, 'second stringify matches first')
