const { stringifyString } = require('yaml/util')

module.exports = {
  identify: value => value?.constructor === Symbol,
  tag: '!symbol/shared',
  resolve: str => Symbol.for(str),
  stringify(item, ctx, onComment, onChompKeep) {
    let key
    /* istanbul ignore if */
    if (
      typeof item.value !== "symbol" ||
      (key = Symbol.keyFor(item.value)) === undefined
    ) {
      throw new Error('Only shared symbols are supported')
    }
    return stringifyString({ value: key }, ctx, onComment, onChompKeep)
  }
}
