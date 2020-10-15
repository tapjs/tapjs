const Module = require('module')

class Mock {
  constructor(id, mocks) {
    if (!id || typeof id !== 'string') {
      throw new TypeError('invalid mock filepath')
    }

    const filePath = Module._resolveFilename(id, module.parent)
    if (!Module._cache[filePath]) {
      Module._load(id, module.parent, false)
    }

    const mod = Module._cache[filePath]
    const originalExports = mod.exports
    const originalRequire = mod.require
    mod.require = function (id) {
      for (const mockKey of Object.keys(mocks)) {
        return mocks[mockKey]
      }

      return originalRequire.call(this, id)
    }

    mod.loaded = false
    mod.load(mod.filename)
    const mocked = mod.exports
    mod.require = originalRequire
    mod.exports = originalExports
    return mocked
  }

  static make (id, mocks = {}) {
  }
}

Mock.cache = {}

module.exports = Mock
