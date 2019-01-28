'use strict'
const stringType = require('yaml/dist/schema/_string.js')

module.exports = {
  class: Symbol,
  tag: 'tag:node-tap.org,2019:symbol',
  resolve (doc, $1) {
    return Symbol($1)
  },
  test: /^Symbol\((.*)\)$/,
  stringify (item, ctx, onComment, onChompKeep) {
    return stringType.stringify(item, ctx, onComment, onChompKeep)
  },
}
