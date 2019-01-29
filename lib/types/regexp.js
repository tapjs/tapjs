const stringType = require('yaml/dist/schema/_string.js')

module.exports = {
  class: RegExp,
  tag: 'tag:node-tap.org,2019:regexp',
  test: /^\/(.*)\/([gimuy]+)$/,
  resolve(doc, pattern, flags) {
    return new RegExp(pattern, flags)
  },
  default: true,
  stringify (item, ctx, onComment, onChompKeep) {
    return stringType.stringify(item, ctx, onComment, onChompKeep)
  },
}
