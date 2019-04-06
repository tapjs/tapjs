const YAMLMap = require('yaml/dist/schema/Map').default
const parseMap = require('yaml/dist/schema/parseMap').default
const Pair = require('yaml/dist/schema/Pair').default

class YAMLNullObject extends YAMLMap {
  constructor () {
    super()
    this.tag = '!nullobject'
  }
  toJSON(_, ctx) {
    const obj = super.toJSON(_, {...ctx, mapAsMap: false})
    return Object.assign(Object.create(null), obj)
  }
}

const resolve = (doc, cst) =>
  Object.assign(new YAMLNullObject(), parseMap(doc, cst))

const createNode = (schema, obj, ctx) => {
  const nullObjNode = new YAMLNullObject()
  for (const [key, value] of Object.entries(obj)) {
    const k = schema.createNode(key, ctx.wrapScalars, null, ctx)
    const v = schema.createNode(value, ctx.wrapScalars, null, ctx)
    nullObjNode.items.push(new Pair(k, v))
  }
  return nullObjNode
}

const stringify = (value, ctx, onComment, onChompKeep) =>
  value.toString(ctx, onComment, onChompKeep)

module.exports = {
  identify: v => typeof v === 'object' && v && !Object.getPrototypeOf(v),
  tag: '!nullobject',
  nodeClass: YAMLNullObject,
  default: false,
  resolve,
  createNode,
  stringify,
}
