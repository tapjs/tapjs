const Module = require('module')

class Mock {
  constructor(filename, mocks) {
    this.filename = filename
    this.mocks = mocks

    if (!filename || typeof filename !== 'string') {
      throw new TypeError('t.mock() first argument should be a string')
    }

    if (!mocks || typeof mocks !== 'object') {
      throw new TypeError(`mocks should be a a key/value object in which keys
are the same used in ${filename} require calls`)
    }

    const callerTestRef = module.parent.parent.parent
    const filePath = Module._resolveFilename(filename, callerTestRef)
    if (!Module._cache[filePath]) {
      Module._load(filename, callerTestRef, false)
    }

    this.original = Module._cache[filePath]
    const originalRequire = this.original.require

    const mod = Object.assign(
      Object.create(Module.prototype),
      this.original
    )

    mod.require = function requireMock(id) {
      if (Object.prototype.hasOwnProperty.call(mocks, id))
        return mocks[id]

      return originalRequire.call(this, id)
    }

    mod.loaded = false
    mod.load(filePath)
    this.module = mod.exports
  }

  static get(filename, mocks) {
    const mock = new Mock(filename, mocks)
    return mock.module
  }
}

module.exports = Mock
