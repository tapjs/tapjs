const stringType = require('yaml/dist/schema/_string.js')

module.exports = {
  class: Symbol,
  tag: 'tag:node-tap.org,2019:symbol',
  default: false,
  resolve (doc, item) {
    const src = stringType.resolve(doc, item)
    const match = src.match(/^Symbol\((.*)\)$/)
    if (!match) {
      throw new Error(`Invalid Symbol Expression: ${src}`)
    }
    return Symbol(match[1])
  },
  stringify (item, ctx, onComment, onChompKeep) {
    return stringType.stringify(item, ctx, onComment, onChompKeep)
  },
}
