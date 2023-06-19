import * as stack from '@tapjs/stack'
import Module, { builtinModules, createRequire } from 'module'

const builtinSet = new Set([
  ...builtinModules,
  ...builtinModules.map(m => `node:${m}`),
])

// for some reason @types/node incorrectly believes that
// Module.prototype.require is a RequireFunction, but it isn't.
type CorrectModule = Omit<Module, 'require'> & {
  require(id: string): any
  load(id: string): void
}
const CorrectModule = Module as unknown as Omit<
  typeof Module,
  'new' | 'prototype'
> & {
  new (
    id: string,
    parent: CorrectModule | MockedModule
  ): CorrectModule
  _cache: { [k: string]: CorrectModule }
}

class MockedModule extends CorrectModule {
  #resolve: (id: string) => string
  #mocker: Mocker

  constructor(
    id: string,
    parent: CorrectModule | MockedModule,
    mocker?: Mocker
  ) {
    super(id, parent)
    this.filename ??= id
    this.#resolve = createRequire(this.filename).resolve
    if (parent instanceof MockedModule && parent.#mocker) {
      this.#mocker = parent.#mocker
    } else if (mocker) {
      this.#mocker = mocker
    } else {
      throw new Error('no mocker provided to MockedModule')
    }
  }

  require(id: string): any {
    const requiredFilePath = this.#resolve(id)
    if (this.#mocker.hasMock(requiredFilePath)) {
      return this.#mocker.getMock(requiredFilePath)
    }

    if (builtinSet.has(requiredFilePath)) {
      // has to be a builtin module, and we didn't mock it.
      return super.require(id)
    }

    const s = this.#mocker.getSeen(requiredFilePath)
    if (s) return s.exports

    const mod = new MockedModule(requiredFilePath, this)
    this.#mocker.setSeen(requiredFilePath, mod)
    mod.load(requiredFilePath)
    return mod.exports
  }
}

class Mocker {
  #mocks: Map<string, any> = new Map()
  #seen: Map<string, MockedModule | Module> = new Map()
  module: MockedModule
  constructor(
    parentFileName: string,
    fileName: string,
    mocks: { [k: string]: any } = {}
  ) {
    const require = createRequire(parentFileName)
    const filePath = require.resolve(fileName)
    for (const [key, mock] of Object.entries(mocks)) {
      const mockFilePath = require.resolve(key)
      this.#mocks.set(mockFilePath, mock)
      // builtins can be either with or without the node: prefix
      if (mockFilePath.startsWith('node:')) {
        const bare = mockFilePath.substring('node:'.length)
        if (!(bare in mocks) && builtinSet.has(bare)) {
          this.#mocks.set(bare, mock)
        }
      } else if (builtinSet.has(mockFilePath)) {
        const prefixed = `node:${mockFilePath}`
        if (!(prefixed in mocks)) {
          this.#mocks.set(prefixed, mock)
        }
      }
    }

    this.#seen = new Map<string, Module>()
    const callerModule = CorrectModule._cache[parentFileName]
    this.module = new MockedModule(filePath, callerModule, this)
    this.module.load(filePath)
  }

  hasSeen(filePath: string) {
    return this.#seen.has(filePath)
  }

  getSeen(filePath: string) {
    return this.#seen.get(filePath)
  }

  setSeen(filePath: string, mod: MockedModule) {
    this.#seen.set(filePath, mod)
  }

  hasMock(id: string) {
    return this.#mocks.has(id)
  }

  getMock(id: string) {
    return this.#mocks.get(id)
  }
}

export const mockRequire: (
  module: string,
  mocks: undefined | { [k: string]: any },
  caller: Function | ((...a: any[]) => any)
) => any = (module, mocks, caller = mockRequire) => {
  const needIgnoreTap = !stack.getIgnoredPackages().includes('@tapjs')
  if (needIgnoreTap) stack.addIgnoredPackage('@tapjs')
  const at = stack.at(caller)
  if (needIgnoreTap) stack.removeIgnoredPackage('@tapjs')
  const file = at?.absoluteFileName
  if (!file) {
    throw new Error('could not get current call site')
  }
  return new Mocker(file, module, mocks).module.exports
}
