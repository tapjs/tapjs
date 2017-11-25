'use strict'

const cleanYamlObject = require('./clean-yaml-object.js')
const yaml = require('js-yaml')

module.exports = obj => (clean =>
  (clean && typeof clean === 'object' && Object.keys(clean).length) ?
    '  ---\n' + (yaml.safeDump(clean).split('\n').map(
      l => l.trim() ? '  ' + l : l.trim()
    ).join('\n')) + '  ...\n'
    : ''
)(cleanYamlObject(obj))
