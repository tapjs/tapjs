exports.capture = capture
exports.captureString = captureString
exports.at = at
exports.parseLine = parseLine

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

  if (!site)
    return {}

  var res = {
    file: site.getFileName(),
    line: site.getLineNumber(),
    column: site.getColumnNumber()
  }

  if (site.isConstructor())
    res.constructor = true

  if (site.isEval())
    res.evalOrigin = site.getEvalOrigin()

  if (site.isNative())
    res.native = true

  var typename = site.getTypeName()
  if (typename && typename !== 'Object' && typename !== '[object Object]')
    res.type = typename

  var fname = site.getFunctionName()
  if (fname)
    res.function = fname

  var meth = site.getMethodName()
  if (meth && fname !== meth)
    res.method = meth

  return res
}

var re = new RegExp(
  '^' +
  // Sometimes we strip out the '    at' because it's noisy
  '(?:\\s*at )?' +
  // $1 = ctor if 'new'
  '(?:(new) )?' +
  // Object.method [as foo] (, maybe
  // $2 = function name
  // $3 = method name
  '(?:([^\\(\\[]*)(?: \\[as ([^\\]]+)\\])? \\()?' +
  // (eval at <anonymous> (file.js:1:1), 
  // $4 = eval origin
  // $5:$6:$7 are eval file/line/col, but not normally reported
  '(?:eval at ([^ ]+) \\(([^\\)]+):([0-9]+):([0-9]+)\\), )?' +
  // file:line:col
  // $8:$9:$10
  // $11 = 'native' if native
  '(?:([^\\)]+):([0-9]+):([0-9]+)|(native))' +
  // maybe close the paren, then end
  '\\)?$'
)

function parseLine (line) {
  var match = line.match(re)
  if (!match)
    return null

  var ctor = match[1] === 'new'
  var fname = match[2]
  var meth = match[3]
  var evalOrigin = match[4]
  var evalFile = +match[5]
  var evalLine = +match[6]
  var evalCol = +match[7]
  var file = match[8]
  var lnum = match[9]
  var col = match[10]
  var native = match[11] === 'native'

  var res = {
    file: file,
    line: +lnum,
    column: +col
  }

  if (ctor)
    res.constructor = true

  if (evalOrigin) {
    res.evalOrigin = evalOrigin
    res.evalLine = evalLine
    res.evalColumn = evalCol
  }

  if (native)
    res.native = true

  if (fname)
    res.function = fname

  if (meth && fname !== meth)
    res.method = meth

  return res
}
