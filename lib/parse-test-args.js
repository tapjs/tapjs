'use strict'
const typeOf = arg =>
  typeof arg === 'object' ? (arg ? 'object' : 'null')
  : typeof arg

module.exports = (name_, extra_, cb_, defaultName) => {
  let name
  let extra
  let cb

  const args = [name_, extra_, cb_]

  // this only works if it's literally the 4th argument.  it's mostly
  // used internally.
  defaultName = defaultName || '(unnamed test)'

  for (let i = 0; i < 3 && i < args.length; i++) {
    const arg = args[i]
    const type = typeOf(arg)
    if (name === undefined && (type === 'string' || type === 'number'))
      name = '' + arg
    else if (type === 'object') {
      extra = arg
      if (name === undefined)
        name = null
    } else if (type === 'function') {
      if (extra === undefined)
        extra = {}
      if (name === undefined)
        name = null
      cb = arg
    } else if (arg === false) {
      // it's handy while developing to put a ! in front of a
      // function to temporarily make a test todo
      continue
    } else if (type !== 'undefined')
      throw new TypeError('unknown argument passed to parseTestArgs: ' + type)
  }

  if (!extra)
    extra = {}

  if (!cb)
    extra.todo = true

  if (!name && extra.name)
    name = extra.name

  if (!name && cb && cb.name)
    name = cb.name

  name = name || defaultName
  extra.name = name
  extra.cb = cb || todoCb
  return extra
}

/* istanbul ignore next */
const todoCb = () => {
  throw new Error('callback called for TODO test')
}
