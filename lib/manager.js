'use strict'

const nock = require('nock')
// HACK: this is icky, but allows us to remove targeted interceptors instead of all of them
const { removeInterceptor } = require('nock/lib/intercept.js')

const _nockManager = Symbol('tap.nock.manager')
const _nockRecorder = Symbol('tap.nock.recorder')

const {
  findCallLocation,
  ErrMockNotSatisfied,
} = require('./errors.js')
const NockRecorder = require('./recorder.js')

class NockManager {
  #recorder
  #recording = false
  #scopes = []
  #test

  static installManager (test) {
    if (!test[_nockManager]) {
      test[_nockManager] = new NockManager(test)
    }
    return test[_nockManager]
  }

  static tapNock (...args) {
    const manager = NockManager.installManager(this)
    return manager.nock(...args)
  }

  static tapNockSnapshot (...args) {
    const manager = NockManager.installManager(this)
    return manager.snapshot(...args)
  }

  constructor (test) {
    this.#test = test
    this.#test.teardown(() => this.nockTeardown())
  }

  get ancestorNocked () {
    let foundNockedAncestor = false
    let parent = this.#test.parent
    while (parent) {
      if (parent[_nockManager]) {
        foundNockedAncestor = true
        break
      }
      parent = parent.parent
    }
    return foundNockedAncestor
  }

  get root () {
    let root = this.#test
    while (root.parent) {
      root = root.parent
    }
    return root
  }

  get recorder () {
    if (!this.#recorder) {
      if (!this.root[_nockRecorder]) {
        this.root[_nockRecorder] = new NockRecorder(this.root, NockManager.tapNockSnapshot)
      }
      this.#recorder = this.root[_nockRecorder]
    }
    return this.#recorder
  }

  nock (scope, options = {}) {
    // automatically disable network connections the first time a scope is defined
    nock.disableNetConnect()

    const _scope = nock(scope, options)
    // find the call location from tapNock, which should give us the line where
    // the user actually declared their scopes in their test
    _scope._at = findCallLocation(NockManager.tapNock)
    this.#scopes.push(_scope)
    return _scope
  }

  snapshot (...args) {
    if (this.#test.writeSnapshot) {
      this.recorder.start(this.#test.fullname)
      this.#recording = true
    } else {
      nock.disableNetConnect()
      this.#scopes.push(...this.recorder.load(this.#test.fullname))
    }
  }

  nockTeardown () {
    for (const scope of this.#scopes) {
      if (!scope.isDone()) {
        throw new ErrMockNotSatisfied(scope)
      }

      // instead of calling nock.cleanAll() which erases _all_ nock scopes, even those
      // that live outside of the scope of this test, we instead use some internal methods
      // from nock to clean only the scopes that were defined in this test
      scope.persist(false) // removeInterceptor won't work if the persist flag is set
      scope.keyedInterceptors = {}
      while (scope.interceptors.length > 0) {
        removeInterceptor(scope.interceptors.pop())
      }
    }

    // if we're recording and we found a recorder instance, tell it we're done
    if (this.#recording) {
      this.recorder.finish()
    }

    // if none of our ancestors have defined a nock scope, then go ahead and enable
    // network connections again
    if (!this.ancestorNocked) {
      nock.enableNetConnect()
    }
  }
}

module.exports = NockManager
