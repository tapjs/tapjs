'use strict'
module.exports = diags

const objToYaml = require('./obj-to-yaml.js')

function diags (extra) {
  const y = objToYaml(extra)
  return y ? '\n' + y : y
}
