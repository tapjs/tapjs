const { basename } = require('path')
module.exports = t =>
  basename(t) === 'cmd.js' ? 'bin/cmd.js' : ['lib/*.js', 'src/*.ts']
