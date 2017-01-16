
module.exports = function (name, extra, cb) {
  if (typeof name === 'function') {
    cb = name
    name = ''
    extra = {}
  } else if (typeof name === 'object') {
    cb = extra
    extra = name
    name = ''
  } else if (typeof extra === 'function') {
    cb = extra
    extra = {}
  }

  if (!extra)
    extra = {}

  if (!cb)
    extra.todo = true
  else if (typeof cb !== 'function')
    throw new TypeError('test() callback must be function if provided')

  if (!name && cb && cb.name)
    name = cb.name

  name = name || '(unnamed test)'
  extra.name = name
  extra.cb = cb || function () {
    throw new Error('callback called for TODO test')
  }
  return extra
}
