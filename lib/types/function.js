const { Type } = require('yaml/dist/cst/Node.js')
const {stringify} = require('yaml/schema')

module.exports = {
  identify: value => typeof value === 'function',
  tag: '!function',
  resolve: (doc, cst) => {
    const src = cst.strValue
    const f = function parsedYamlFunction () {}
    f.toString = () => src
    return f
  },
  options: { defaultType: Type.BLOCK_LITERAL, lineWidth: 76 },
  stringify ({ comment, type, value }, ctx, onComment, onChompKeep) {
    value = value.toString()
    // better to just always put functions on a new line.
    type = type || module.exports.options.defaultType
    return stringify({ comment, type, value }, ctx, onComment, onChompKeep)
  }
}
