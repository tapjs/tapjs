const YAMLMap = require('yaml/dist/schema/Map').default
const parseMap = require('yaml/dist/schema/parseMap').default
const Pair = require('yaml/dist/schema/Pair').default

class YAMLError extends YAMLMap {
  constructor () {
    super()
    this.tag = '!error'
  }
  toJSON(_, ctx) {
    const obj = super.toJSON(_, {...ctx, mapAsMap: false})
    const Cls = obj.name === 'EvalError' ? EvalError
      : obj.name === 'RangeError' ? RangeError
      : obj.name === 'ReferenceError' ? ReferenceError
      : obj.name === 'SyntaxError' ? SyntaxError
      : obj.name === 'TypeError' ? TypeError
      : obj.name === 'URIError' ? URIError
      : Error
    const er = Object.assign(new Cls(obj.message), obj)
    return er
  }
}

const resolve = (doc, cst) =>
  Object.assign(new YAMLError(), parseMap(doc, cst))

// If the user cared to provide a custom inspect, then use
// that as the source of extra properties.
const util = require('util')
const inspect = util.inspect.custom
const createNode = (schema, error, ctx) => {
  const ernode = new YAMLError()
  const ins = typeof error[inspect] === 'function' && error[inspect]()
  for (const [key, value] of Object.entries({
    name: error.name,
    message: error.message,
    stack: error.stack,
    ...(ins && typeof ins === 'object' ? ins : error)
  })) {
    if (key === 'domain' ||
        key === 'domainEmitter' ||
        key === 'domainThrew')
      continue

    const k = schema.createNode(key, ctx.wrapScalars, null, ctx)
    const v = schema.createNode(value, ctx.wrapScalars, null, ctx)
    ernode.items.push(new Pair(k, v))
  }
  return ernode
}

const stringify = (value, ctx, onComment, onChompKeep) =>
  value.toString(ctx, onComment, onChompKeep)

module.exports = {
  identify: value => value instanceof Error,
  tag: '!error',
  nodeClass: YAMLError,
  default: false,
  resolve,
  createNode,
  stringify,
}
