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

    let reload = false
    const self = this
    const callerTestRef = Module._cache[parentFilename]
    const filePath = Module._resolveFilename(filename, callerTestRef)
    // populate mocks Map from resolved filenames
    for (const key of Object.keys(mocks)) {
      const mockFilePath = Module._resolveFilename(key, callerTestRef)
      this.mocks.set(mockFilePath, mocks[key])
    }

    const __require = Module.prototype.require
    function tapRequireMock (id) {
      if (this.filename === filePath) {
        const requiredFilePath = Module._resolveFilename(id, this)
        const res = self.mocks.get(requiredFilePath)

        if (res)
          return res
      }

      return __require.call(this, id)
    }

    class MockedModule extends Module {
      require (id) {
        return tapRequireMock.call(this, id)
      }
    }
    const mod = new MockedModule(filePath, callerTestRef)
    mod.load(filePath)
    this.module = mod
  }

  static get(parentFilename, filename, mocks) {
    const mock = new Mock(parentFilename, filename, mocks)
    return mock.module.exports
  }
}

module.exports = Mock
