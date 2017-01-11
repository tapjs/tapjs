module.exports = testPoint

var path = require('path')
var binpath = path.resolve(__dirname, '../bin')
var util = require('util')
var yaml = require('js-yaml')
var cleanYamlObject = require('clean-yaml-object')

function testPoint (ok, n, message, extra) {
  if (typeof ok !== 'boolean')
    throw new TypeError('ok must be boolean')

  if (typeof n !== 'number' || isNaN(n) || !isFinite(n) || n < 1)
    throw new TypeError('n must be number >= 1')

  message = message + ''
  if (message)
    message = ' - ' + message
  message = message.replace(/[\n\r]/g, ' ').replace(/\t/g, '  ')
  extra = extra || {}

  var ret = util.format('%s %d%s', ok ? 'ok' : 'not ok', n, message)
  if (extra.skip) {
    ret += ' # SKIP'
    if (typeof extra.skip === 'string')
      ret += ' ' + extra.skip
  } else if (extra.todo) {
    ret += ' # TODO'
    if (typeof extra.todo === 'string')
      ret += ' ' + extra.todo
  }

  var diagYaml = extra.diagnostic ? diags(extra) : ''
  ret += diagYaml

  if (extra.tapChildBuffer) {
    if (!diagYaml)
      ret += ' '
    ret += '{\n' + extra.tapChildBuffer + '}\n'
  }

  ret += '\n'
  return ret
}

function diags (extra) {
  var file = extra.at && extra.at.file && path.resolve(extra.at.file)
  if (file && (file.indexOf(__dirname) === 0 || file.indexOf(binpath) === 0))
    delete extra.at

  if (extra.at && extra.at.file && extra.at.line && !extra.source) {
    var content
    file = path.resolve(extra.at.file)
    try {
      content = Module.wrap(fs.readFileSync(file))
    } catch (er) {}
    if (content) {
      content = (content.split('\n')[extra.at.line - 1] || '').trim()
      if (content)
        extra.source = content + '\n'
    }
  }

  // some objects are not suitable for yaml.
  var obj = cleanYamlObject(extra, yamlFilter)
  if (obj && typeof obj === 'object' && Object.keys(obj).length) {
    var y = yaml.safeDump(obj).split('\n').map(function (l) {
      return l.trim() ? '  ' + l : l.trim()
    }).join('\n')
    y = '  ---\n' + y + '  ...\n'
    return '\n' + y
  }
  return ''
}

function yamlFilter (propertyName, isRoot, source, target) {
  if (!isRoot)
    return true

  if (propertyName === 'stack') {
    target.stack = source.stack
    return false
  }

  return !(propertyName === 'todo' ||
  /^_?tapChild/.test(propertyName) ||
  propertyName === 'cb' ||
  propertyName === 'name' ||
  propertyName === 'indent' ||
  propertyName === 'skip' ||
  propertyName === 'bail' ||
  propertyName === 'diagnostic' ||
  propertyName === 'buffered' ||
  (propertyName === 'at' && !source.at))
}
