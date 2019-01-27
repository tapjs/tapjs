'use strict'
const stringType = require('yaml/dist/schema/_string.js')

module.exports = {
  class: Symbol,
  tag: 'symbol',
  resolve (doc, $1) {
    return Symbol($1)
  },
  test: /^Symbol\((.*)\)$/,
  stringify (item, ctx, onComment, onChompKeep) {
    return stringType.stringify(item, ctx, onComment, onChompKeep)
  },
}
