'use strict'
const stack = require('./stack.js')

module.exports = function (er, extra, options) {
  extra = Object.keys(options || {}).reduce(function (set, k) {
    if (!(k in set) && !/^tapChild/.test(k))
      set[k] = options[k]
    return set
  }, extra || {})

  if (!er || typeof er !== 'object') {
    extra.error = er
    return extra
  }

  const message = er.message ? er.message
    : er.stack ? er.stack.split('\n')[0]
    : ''
  const addName = er.message || !er.stack

  if (er.message)
    er.message = ''
  const st = er.stack
  if (st) {
    const splitst = st.split('\n')
    // parse out the 'at' bit from the first line.
    extra.at = stack.parseLine(splitst[1])
    extra.stack = stack.clean(splitst)
  }
  if (message)
    er.message = message

  if (er.name && er.name !== 'Error')
    extra.type = er.name

  Object.keys(er).forEach(function (k) {
    if (k === 'message' ||
        k === 'domainEmitter' ||
        k === 'domainThrown' ||
        k === 'domain' ||
        k === 'domainBound')
      return
    extra[k] = er[k]
  })

  return extra
}
