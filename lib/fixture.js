const {writeFileSync, linkSync, symlinkSync} = require('fs')
const {resolve, dirname} = require('path')
const mkdirp = require('mkdirp')

class Fixture {
  constructor (type, content) {
    this.type = type
    this.content = content
    switch (type) {
      case 'dir':
        if (!content || typeof content !== 'object')
          throw new TypeError('dir fixture must have object content')
        break
      case 'file':
        if (typeof content !== 'string' && !Buffer.isBuffer(content))
          throw new TypeError('file fixture must have string/buffer content')
        break
      case 'link':
      case 'symlink':
        if (typeof content !== 'string')
          throw new TypeError(type + ' fixture must have string target')
        break
      default:
        throw new Error('invalid fixture type: ' + type)
    }
  }

  get [Symbol.toStringTag] () {
    return 'Fixture<' + this.type + '>'
  }

  static make (abs, f) {
    if (typeof f === 'string' || Buffer.isBuffer(f))
      f = new Fixture('file', f)
    else if (f && typeof f === 'object' && !(f instanceof Fixture))
      f = new Fixture('dir', f)
    else if (!(f instanceof Fixture))
      throw new Error('invalid fixture type: ' + f)

    switch (f.type) {
      case 'symlink':
        symlinkSync(f.content, abs)
        break
      case 'link':
        linkSync(resolve(dirname(abs), f.content), abs)
        break
      case 'dir':
        mkdirp.sync(abs)
        for (const [name, fixture] of Object.entries(f.content))
          Fixture.make(`${abs}/${name}`, fixture)
        break
      case 'file':
        writeFileSync(abs, f.content)
        break
    }
  }
}

module.exports = Fixture
