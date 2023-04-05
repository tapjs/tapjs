const { YAMLMap } = require('yaml')
const tag = '!nullobject'

class YAMLNullObject extends YAMLMap {
  get tag() { return tag }
  set tag(_) {}
  toJSON(_, ctx) {
    const obj = super.toJSON(_, {...ctx, mapAsMap: false}, Object)
    return Object.assign(Object.create(null), obj)
  }
}

module.exports = {
  tag,
  collection: 'map',
  nodeClass: YAMLNullObject,
  identify: v => !!(
    typeof v === 'object' &&
    v &&
    !Object.getPrototypeOf(v)
  )
}
