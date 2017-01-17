var stack = require('./stack.js')

module.exports = function (er, extra) {
  extra = extra || {}
  if (!er || typeof er !== 'object') {
    extra.error = er
    return extra
  }

  var message = er.message
  var addName = true

  if (!message && er.stack) {
    message = er.stack.split('\n')[0]
    addName = false
  }

  er.message = ''
  var st = er.stack
  if (st) {
    st = st.split('\n')
    // parse out the 'at' bit from the first line.
    extra.at = stack.parseLine(st[1])
    extra.stack = stack.clean(st)
  }
  er.message = message

  if (addName && er.name)
    message = er.name + ': ' + message

  Object.keys(er).forEach(function (k) {
    if (k === 'message' ||
        k === 'domainThrown' ||
        k === 'domain' ||
        k === 'domainBound')
      return
    extra[k] = er[k]
  })

  extra.message = message

  return extra
}
