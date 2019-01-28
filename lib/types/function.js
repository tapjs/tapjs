'use strict'
const stringType = require('yaml/dist/schema/_string.js')

const functionType = {
  class: Function,
  tag: 'tag:node-tap.org,2019:function',
  resolve (doc, item) {
    const range = item.valueRange
    const src = item.context.src
    const f = function parsedYamlFunction () {}
    f.___source = src.slice(range.start, range.end)
    return f
  },
  stringify (item, ctx, onComment, onChompKeep) {
    const value = item.value.___source || item.value.toString()
    return stringType.stringify({ value }, ctx, onComment, onChompKeep)
  },
}
