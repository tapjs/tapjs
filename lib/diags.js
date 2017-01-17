module.exports = diags

var objToYaml = require('./obj-to-yaml.js')
var path = require('path')
var Module = require('module')
var fs = require('fs')
var binpath = path.resolve(__dirname, '../bin')

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

  var y = objToYaml(extra)
  if (y)
    y = '\n' + y

  return y
}
