const {stringifyString} = require('yaml/util')

module.exports = {
  identify: value =>
    typeof value === 'symbol' && Symbol.keyFor(value) === undefined,
  tag: '!symbol',
  resolve: (str) => Symbol(str),
  stringify (item, ctx, onComment, onChompKeep) {
    /* istanbul ignore if */
    if (
      typeof item.value !== "symbol" ||
      Symbol.keyFor(item.value) !== undefined
    ) {
      throw new Error('Only private symbols are supported')
    }
    const str = item.value.toString()
    const value = str.replace(/^Symbol\(|\)$/g, '')
    return stringifyString({ value }, ctx, onComment, onChompKeep)
  }
}
