const { YAMLMap } = require('yaml')
const tag = '!error'
const util = require('util')

// If the user cared to provide a custom inspect, then use
// that as the source of extra properties.
const inspect = util.inspect.custom

class YAMLErrorObject extends YAMLMap {
  get tag () { return tag }
  set tag (_) {}

  toJSON(_, ctx) {
    const { name, message, ...rest } = super.toJSON(_, ctx, Object)
    const Cls =
      name === 'EvalError' ? EvalError
        : name === 'RangeError' ? RangeError
        : name === 'ReferenceError' ? ReferenceError
        : name === 'SyntaxError' ? SyntaxError
        : name === 'TypeError' ? TypeError
        : name === 'URIError' ? URIError
        : Error
    const er = new Cls(message)
    if (Cls.name !== name) {
      Object.defineProperty(er, 'name', {
        value: name,
        enumerable: false,
        configurable: true,
      })
    }
    return Object.assign(er, rest)
  }

  static from(schema, error, ctx) {
    const { name, message, stack } = error
    const ins = typeof error[inspect] === 'function' && error[inspect]()
    const json = !(ins && typeof ins === 'object') &&
      typeof error.toJSON === 'function' &&
      error.toJSON()
    const fields = !!json && typeof json === 'object' ? json
      : !!ins && typeof ins === 'object' ? ins
      : { ...error }

    delete fields.domain
    delete fields.domainEmitter
    delete fields.domainThrew
    return super.from(schema, {
      name,
      message,
      stack,
      ...fields,
    }, ctx)
  }
}

module.exports = {
  tag,
  collection: 'map',
  nodeClass: YAMLErrorObject,
  identify: er => er instanceof Error,
}
