'use strict'
const stringType = require('yaml/dist/schema/_string.js')

module.exports = {
  class: RegExp,
  tag: 'tag:node-tap.org,2019:regexp',
  resolve (doc, src, flags) {
    return new RegExp(src, flags)
  },
  default: true,
  test: /^\/(.*)\/([gimuy]+)$/,
  stringify (item, ctx, onComment, onChompKeep) {
    return stringType.stringify(item, ctx, onComment, onChompKeep)
  },
}
