const stringType = require('yaml/dist/schema/_string.js')

module.exports = {
  class: Symbol,
  tag: 'tag:node-tap.org,2019:symbol',
  default: true,
  test: /^Symbol\((.*)\)$/,
  resolve (doc, src) {
    return Symbol(src)
  },
  stringify (item, ctx, onComment, onChompKeep) {
    return stringType.stringify(item, ctx, onComment, onChompKeep)
  },
}
