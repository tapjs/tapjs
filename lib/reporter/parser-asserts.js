const EE = require('events').EventEmitter

// turn a parser into a stream of failures and endings we care about
// We only care about failures, skips, and todos.  Also, this is not
// where we capture the *test* top-level summary, since that's already
// covered by the test object handling.  This is just about individual
// assertion data.

class ParserAsserts extends EE {
  constructor (parser, parent) {
    super()
    this.parser = parser
    this.name = parser.name
    this.fullname = parser.fullname
    this.child = null
    this.parent = parent
    this.root = parent ? parent.root : this

    this.parser.on('child', c =>
      this.child = new this.constructor(c, this))

    this.parser.on('assert', res => this.onAssert(res))
  }

  onAssert (res) {
    if (this.child) {
      const c = this.child
      this.child = null
      if (res.name === c.name && res.ok === c.parser.results.ok) {
        // just procedural, ignore it
        return
      }
    }

    const data = {
      ...res,
      name: ((this.fullname ? this.fullname + ' > ' : '')
        + (res.name || '')).trim(),
    }

    this.root.emit('assert', data)
    if (res.skip)
      this.root.emit('skip', data)
    else if (res.todo)
      this.root.emit('todo', data)
    else if (!res.ok)
      this.root.emit('fail', data)
    else
      this.root.emit('pass', data)
  }
}

module.exports = ParserAsserts
