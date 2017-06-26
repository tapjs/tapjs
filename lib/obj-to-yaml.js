'use strict'
module.exports = objToYaml

const cleanYamlObject = require('./clean-yaml-object.js')
const yaml = require('js-yaml')

function objToYaml (obj) {
  obj = cleanYamlObject(obj)
  let ret = ''
  if (obj && typeof obj === 'object' && Object.keys(obj).length) {
    const y = yaml.safeDump(obj).split('\n').map(function (l) {
      return l.trim() ? '  ' + l : l.trim()
    }).join('\n')
    ret = '  ---\n' + y + '  ...\n'
  }

  return ret
}
