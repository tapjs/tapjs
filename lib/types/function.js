'use strict'
const stringType = require('yaml/dist/schema/_string.js')
const { Type } = require('yaml/dist/cst/Node.js')

module.exports = {
  class: Function,
  tag: 'tag:node-tap.org,2019:function',
  resolve (doc, item) {
    const src = stringType.resolve(doc, item)
    const f = function parsedYamlFunction () {}
    f.toString = () => src
    return f
  },
  options: { defaultType: Type.BLOCK_LITERAL, lineWidth: 76 },
  stringify ({ comment, type, value }, ctx, onComment, onChompKeep) {
    value = value.toString()
    // better to just always put functions on a new line.
    type = type || module.exports.options.defaultType
    return stringType.stringify({ comment, type, value }, ctx, onComment, onChompKeep)
  },
}
