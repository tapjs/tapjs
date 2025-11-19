/**
 * Implementation of the {@link TapMock#mockRequire} method
 */
import * as stack from '@tapjs/stack'
import Module, { createRequire, isBuiltin } from 'module'
import { dirname, resolve } from 'path'
import { walkUp } from 'walk-up-path'

// for some reason @types/node incorrectly believes that
// Module.prototype.require is a RequireFunction, but it isn't.
/**
 * Export of the Module class, but with the `require()` and `load()` methods
 * exposed.
 */
export type CorrectModule = Omit<Module, 'require'> & {
  require(id: string): any
  load(id: string): void
}

export type CorrectModuleCtor = Omit<
  typeof Module,
  'new' | 'prototype'
> & {
  new (id: string, parent: CorrectModule | MockedModule): CorrectModule
  _cache: { [k: string]: CorrectModule }
}

const CorrectModule: CorrectModuleCtor =
  Module as unknown as CorrectModuleCtor

/**
 * A child class of Module, which loads modules from the mock object
 * if specified, otherwise will load *unmocked* modules in its own
 * mocked environment, so that they will load the mocked modules as well.
 */
export class MockedModule extends CorrectModule {
  #resolve: (id: string) => string
  #mocker: Mocker

  constructor(
    id: string,
    parent: CorrectModule | MockedModule,
    mocker?: Mocker,
  ) {
    super(id, parent)
    this.filename ??= id
    this.#resolve = createRequire(this.filename).resolve
    if (parent instanceof MockedModule && parent.#mocker) {
      this.#mocker = parent.#mocker
    } else if (mocker) {
      this.#mocker = mocker
      /* c8 ignore start */
    } else {
      throw new Error('no mocker provided to MockedModule')
    }
    /* c8 ignore stop */
  }

  /**
   * Override require() to perform our mocked require
   */
  require(id: string): any {
    const requiredFilePath = this.#resolve(id)
    if (this.#mocker.hasMock(requiredFilePath)) {
      return this.#mocker.getMock(requiredFilePath)
    }

    if (isBuiltin(requiredFilePath)) {
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

/**
 * Class that handles swapping out real modules for mocks as needed
 */
export class Mocker {
  #mocks: Map<string, any> = new Map()
  #seen: Map<string, MockedModule | Module> = new Map()
  module: MockedModule
  constructor(
    parentFileName: string,
    fileName: string,
    mocks: { [k: string]: any } = {},
  ) {
    const require = createRequire(parentFileName)
    const filePath = require.resolve(fileName)
    for (const [key, mock] of Object.entries(mocks)) {
      const mockFilePath = require.resolve(key)
      this.#mocks.set(mockFilePath, mock)
      // builtins can be either with or without the node: prefix
      if (mockFilePath.startsWith('node:')) {
        const bare = mockFilePath.substring('node:'.length)
        if (!(bare in mocks) && isBuiltin(bare)) {
          this.#mocks.set(bare, mock)
        }
      } else if (isBuiltin(mockFilePath)) {
        const prefixed = `node:${mockFilePath}`
        if (!(prefixed in mocks)) {
          this.#mocks.set(prefixed, mock)
        }
      }
    }

    this.#seen = new Map<string, Module>()
    const callerModule = CorrectModule._cache[parentFileName]
    let p: CorrectModule
    /* c8 ignore start */
    if (callerModule) p = callerModule
    else {
      /* c8 ignore stop */
      // if calling t.mockRequire from esm, you won't get a parent
      // but we should still pretend to have one.
      p = new Module(parentFileName) as unknown as CorrectModule
      p.filename = parentFileName
      p.loaded = true
      p.paths = [...walkUp(dirname(parentFileName))].map(path =>
        resolve(path, 'node_modules'),
      )
    }

    this.module = new MockedModule(filePath, p, this)
    this.module.load(filePath)
  }

  /**
   * Return the module we've previously loaded from the specified filePath,
   * or undefined if it's new.
   */
  getSeen(filePath: string) {
    return this.#seen.get(filePath)
  }

  /**
   * Set the module in the internal cache once loaded
   */
  setSeen(filePath: string, mod: MockedModule) {
    this.#seen.set(filePath, mod)
  }

  /**
   * returns true if the set of mocks includes the specified ID
   */
  hasMock(id: string) {
    return this.#mocks.has(id)
  }

  /**
   * Get the mock at the specified identifier, or undefined if it's not mocked
   */
  getMock(id: string) {
    return this.#mocks.get(id)
  }
}

/**
 * Function that actually performs a mocked require()
 */
export const mockRequire: (
  module: string,
  mocks?: { [k: string]: any },
  caller?: Function | ((...a: any[]) => any),
) => any = (module, mocks = {}, caller = mockRequire) => {
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
