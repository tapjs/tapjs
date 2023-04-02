import { TapPlugin, TestBase } from '@tapjs/core'
import SnapshotPlugin from '@tapjs/snapshot'
import { at } from '@tapjs/stack'
import nock, { removeInterceptor } from 'nock'
import { ErrMockNotSatisfied } from './errors.js'
import NockRecorder, {
  NockRecorderLoadOptions,
  NockRecorderOptionsMaybe,
} from './recorder.js'

/**
 * Just like the nock() function, but with a .snapshot() method
 *
 * Note that t.nock.snapshot() requires @tapjs/snapshot being loaded.
 */
export type NockMethod = ((
  ...args: Parameters<typeof nock>
) => ReturnType<typeof nock>) & {
  snapshot: () => void
}

export class TapNock {
  static #refs = new Map<TestBase, TapNock>()

  // Construct the t.nock() method with t.nock.snapshot() attached
  static #nockMethod(tn: TapNock) {
    const nockMethod = (...args: Parameters<typeof nock>) => {
      tn.#doTeardown()
      tn.#getRecorder()?.pause()
      nock.disableNetConnect()
      const _scope = Object.assign(nock(...args), {
        _at: at(),
      })
      tn.#scopes.push(_scope)
      return _scope
    }
    return Object.assign(nockMethod, {
      snapshot: () => tn.#snapshot(),
      disableNetConnect: nock.disableNetConnect,
      enableNetConnect: nock.enableNetConnect,
    })
  }

  #t: TestBase
  #recorder?: NockRecorder
  #recording: boolean = false
  nock: NockMethod
  #scopes: nock.Scope[] = []
  #didTeardown: boolean = false

  constructor(t: TestBase) {
    TapNock.#refs.set(t, this)
    this.#t = t
    this.nock = TapNock.#nockMethod(this)
  }

  #doTeardown() {
    if (this.#didTeardown) return
    this.#t.t.teardown(() => this.#nockTeardown())
    this.#didTeardown = true
  }

  #nockTeardown() {
    for (const scope of this.#scopes) {
      if (!scope.isDone()) {
        throw new ErrMockNotSatisfied(scope)
      }

      // instead of calling nock.cleanAll() which erases _all_ nock scopes,
      // even those that live outside of the scope of this test, we instead
      // use some internal methods from nock to clean only the scopes that
      // were defined in this test

      // removeInterceptor won't work if the persist flag is set
      scope.persist(false)
      const s = scope as nock.Scope & {
        keyedInterceptors: {}
        interceptors: nock.Interceptor[]
      }
      s.keyedInterceptors = {}
      let interceptor: nock.Interceptor | undefined
      while ((interceptor = s.interceptors.pop())) {
        removeInterceptor(interceptor)
      }
    }
    const recorder = this.#getRecorder()
    recorder?.resume()
    if (this.#recording) {
      recorder?.finish()
    }
    // if none of our ancestors have defined a nock scope, then go ahead
    // and enable network connections again
    if (!this.#ancestorNocked()) {
      nock.enableNetConnect()
    }
  }

  #ancestorNocked() {
    let parent: TestBase | undefined = this.#t.parent
    while (parent) {
      if (TapNock.#refs.has(parent)) {
        return true
      }
      parent = parent.parent
    }
    return false
  }

  #snapshot(
    options: NockRecorderOptionsMaybe & NockRecorderLoadOptions = {}
  ) {
    const recorder = this.#getRecorder()
    if (!recorder) {
      const er = new Error(
        'Cannot use t.nock.snapshot() without the @tapjs/snapshot plugin'
      )
      Error.captureStackTrace(er, this.nock.snapshot)
      throw er
    }
    if (this.#t.t.writeSnapshot) {
      recorder.start(this.#t.fullname, options)
      this.#recording = true
      return []
    }
    nock.disableNetConnect()
    const scopes = recorder.load(this.#t.fullname, options)
    this.#scopes.push(...scopes)
    return scopes
  }

  #getRecorder(): NockRecorder | undefined {
    if (!this.#t.t.pluginLoaded(SnapshotPlugin)) {
      return undefined
    }
    let t = this.#t
    let tn: TapNock = this
    let tnp: TapNock | undefined = this
    while (t.parent && (tnp = TapNock.#refs.get(t.parent))) {
      t = t.parent
      tn = tnp
    }
    if (!tn.#recorder) {
      tn.#recorder = new NockRecorder(t, TapNock.prototype.#snapshot)
    }
    return tn.#recorder
  }
}

const plugin: TapPlugin<TapNock> = (t: TestBase) => new TapNock(t)
export default plugin
