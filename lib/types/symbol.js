const stringType = require('yaml/dist/schema/_string.js')

module.exports = {
  class: Symbol,
  tag: 'tag:node-tap.org,2019:symbol',
  resolve (doc, item) {
    const src = stringType.resolve(doc, item)
    if (!/^Symbol\(.*\)$/.test(src)) {
      throw new Error(`Invalid Symbol expression; ${src}`)
    }
    return Symbol(src.slice(7, -1))
  },
  stringify (item, ctx, onComment, onChompKeep) {
    return stringType.stringify(item, ctx, onComment, onChompKeep)
  },
}
