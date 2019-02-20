const YAMLMap = require('yaml/dist/schema/Map').default
const parseMap = require('yaml/dist/schema/parseMap').default
const Pair = require('yaml/dist/schema/Pair').default
const domain = require('domain')

class YAMLDomain extends YAMLMap {
  constructor () {
    super()
    this.tag = '!domain'
  }
  toJSON(_, ctx) {
    return domain.create()
  }
}

const resolve = (doc, cst) =>
  Object.assign(new YAMLDomain(), parseMap(doc, cst))

const createNode = (schema, error, ctx) => {
  return new YAMLDomain()
}

const stringify = (value, ctx, onComment, onChompKeep) =>
  value.toString(ctx, onComment, onChompKeep)

module.exports = {
  identify: value => value instanceof domain.Domain,
  tag: '!domain',
  nodeClass: YAMLDomain,
  default: false,
  resolve,
  createNode,
  stringify,
}
