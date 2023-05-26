const { basename } = require('path')
module.exports = t =>
  basename(t) === 'cmd.js' ? 'bin/cmd.js' : ['src/*.ts']
