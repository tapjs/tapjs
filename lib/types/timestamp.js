// Functionally similar to the !!timestamp that ships with
// yaml, but without being marked as default, so that we
// can distinguish between actual strings and strings that
// would be parsed as dates.
module.exports = {
  tag: '!!timestamp',
  identify: (value) => (
    !!value &&
    typeof value === 'object' &&
    value instanceof Date
  ),
  // no resolve() because it uses the builtin
  stringify (item) {
    return item.value.toISOString()
  }
}
