const stringType = require('yaml/dist/schema/_string.js')

module.exports = {
  class: RegExp,
  tag: 'tag:node-tap.org,2019:regexp',
  resolve (doc, item) {
    const src = stringType.resolve(doc, item)
    const match = src.match(/^\/(.*)\/([gimuy]+)$/)
    if (!match) {
      throw new Error(`Invalid Regular Expression: ${src}`)
    }
    return new RegExp(match[1], match[2])
  },
  default: false,
  stringify (item, ctx, onComment, onChompKeep) {
    return stringType.stringify(item, ctx, onComment, onChompKeep)
  },
}
