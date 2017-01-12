var Base = require('./base.js')
var util = require('util')
var ownOr = require('./own-or.js')

util.inherits(Stdin, Base)

module.exports = Stdin

function Stdin (options) {
  options = options || {}
  if (!(this instanceof Stdin))
    return new Stdin(options)

  options.name = ownOr(options, 'name', '/dev/stdin')
  Base.call(this, options)

  // This has to be here for node 0.10's wonky streams
  process.stdin.pause()
}

Stdin.prototype.main = function (cb) {
  process.stdin.pipe(this.parser)
  this.once('end', cb)
}
