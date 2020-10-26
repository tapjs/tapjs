const Module = require('module')

class Mock {
  constructor(parentFilename, filename, mocks) {
    this.filename = filename
    this.mocks = new Map()

    if (!parentFilename || typeof parentFilename !== 'string') {
      throw new TypeError('A parentFilename is required to resolve Mocks paths')
    }

    if (!filename || typeof filename !== 'string') {
      throw new TypeError('t.mock() first argument should be a string')
    }

    if (!mocks || typeof mocks !== 'object') {
      throw new TypeError(`mocks should be a a key/value object in which keys
are the same used in ${filename} require calls`)
    }

    const callerTestRef = Module._cache[parentFilename]
    const filePath = Module._resolveFilename(filename, callerTestRef)
    if (!Module._cache[filePath]) {
      Module._load(filename, callerTestRef, false)
    }

    // populate mocks Map from resolved filenames
    for (const key of Object.keys(mocks)) {
      const mockFilePath = Module._resolveFilename(key, callerTestRef)
      this.mocks.set(mockFilePath, mocks[key])
    }

    this.original = Module._cache[filePath]
    const originalRequire = this.original.require

    const mod = Object.assign(
      Object.create(Module.prototype),
      this.original
    )

    const mock = this
    mod.require = function tapRequireMock(id) {
      const requiredFilePath = Module._resolveFilename(id, mock.original)
      const res = mock.mocks.get(requiredFilePath)
      if (res)
        return res

      return mock.original.require.call(this, id)
    }

    mod.loaded = false
    mod.load(filePath)
    this.module = mod.exports
  }

  static get(parentFilename, filename, mocks) {
    const mock = new Mock(parentFilename, filename, mocks)
    return mock.module
  }
}

module.exports = Mock
