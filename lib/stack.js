exports.capture = capture
exports.captureString = captureString
exports.at = at

// var methods =[
//   'getThis',
//   'getFunction',
//   'getTypeName',
//   'getFunctionName',
//   'getMethodName',
//   'getFileName',
//   'getLineNumber',
//   'getColumnNumber',
//   'getEvalOrigin',
//   'isToplevel',
//   'isEval',
//   'isNative',
//   'isConstructor'
// ]

function captureString (limit, fn) {
  if (typeof limit === 'function') {
    fn = limit
    limit = Infinity
  }
  if (!fn)
    fn = captureString

  var limitBefore = Error.stackTraceLimit
  if (limit)
    Error.stackTraceLimit = limit

  var obj = {}

  Error.captureStackTrace(obj, fn)
  var stack = obj.stack
  Error.stackTraceLimit = limitBefore

  return stack.split('\n').slice(1).map(function (line) {
    return line.trim().replace(/^at /, '')
  }).join('\n')
}

function capture (limit, fn) {
  if (typeof limit === 'function') {
    fn = limit
    limit = Infinity
  }
  if (!fn)
    fn = capture
  var prepBefore = Error.prepareStackTrace
  var limitBefore = Error.stackTraceLimit

  Error.prepareStackTrace = function (obj, site) {
    return site
  }

  if (limit)
    Error.stackTraceLimit = limit

  var obj = {}
  Error.captureStackTrace(obj, fn)
  var stack = obj.stack
  Error.prepareStackTrace = prepBefore
  Error.stackTraceLimit = limitBefore

  return stack
}

function at (fn) {
  if (!fn)
    fn = at
  var site = capture(1, fn)[0]

  if (!site) {
    console.trace('weird stackless at?', fn)
    return {}
  }

  var res = {
    file: site.getFileName(),
    line: site.getLineNumber(),
    column: site.getColumnNumber()
  }

  if (site.isEval())
    res.eval = true

  if (site.isNative())
    res.native = true

  var typename = site.getTypeName()
  if (typename)
    res.type = typename

  var fname = site.getFunctionName()
  if (fname)
    res.function = fname

  var meth = site.getMethodName()
  if (meth && fname !== meth)
    res.method = meth

  return res
}
