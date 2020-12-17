const Module = require('module')

class Mock {
  constructor(parentFilename, filename, mocks = {}) {
    this.filename = filename
    this.mocks = new Map()

    if (!parentFilename || typeof parentFilename !== 'string') {
      throw new TypeError('A parentFilename is required to resolve Mocks paths')
    }

    if (!filename || typeof filename !== 'string') {
      throw new TypeError('t.mock() first argument should be a string')
    }

    if (typeof mocks !== 'object') {
      throw new TypeError(`mocks should be a a key/value object in which keys
are the same used in ${filename} require calls`)
    }

    const self = this
    const callerTestRef = Module._cache[parentFilename]
    const filePath = Module._resolveFilename(filename, callerTestRef)

    // populate mocks Map from resolved filenames
    for (const key of Object.keys(mocks)) {
      const mockFilePath = Module._resolveFilename(key, callerTestRef)
      this.mocks.set(mockFilePath, mocks[key])
    }

    class MockedModule extends Module {
      require (id) {
        const requiredFilePath = Module._resolveFilename(id, this)

        if (self.mocks.has(requiredFilePath))
          return self.mocks.get(requiredFilePath)

        return super.require(id)
      }
    }

    this.module = new MockedModule(filePath, callerTestRef)
    this.module.load(filePath)
  }

  static get(parentFilename, filename, mocks) {
    const mock = new Mock(parentFilename, filename, mocks)
    return mock.module.exports
  }
}

module.exports = Mock
