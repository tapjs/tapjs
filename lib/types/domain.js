const { YAMLMap } = require('yaml')

const tag = '!domain'

class YAMLDomain extends YAMLMap {
  get tag() { return tag }
  set tag(_) {}
  toJSON() {
    return require('domain').create()
  }

  // no way to faithfully return a proper domain, and capturing
  // pretty much any of its properties is a nightmare, so just
  // leave it empty.
  static from(schema) {
    return new this(schema)
  }
}

module.exports = {
  tag,
  collection: 'map',
  nodeClass: YAMLDomain,
  identify: value => !!(
    value && typeof value === 'object' &&
    value.constructor &&
    value.constructor.name === 'Domain'
  ),
}
