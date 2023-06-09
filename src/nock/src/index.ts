import { TapPlugin, TestBase } from '@tapjs/core'
import { plugin as SnapshotPlugin } from '@tapjs/snapshot'
import { at, CallSiteLike } from '@tapjs/stack'
import nock from 'nock'
import { ErrMockNotSatisfied } from './errors.js'
import NockRecorder, {
  NockRecorderLoadOptions,
  NockRecorderOptionsMaybe,
} from './recorder.js'
export * from './recorder.js'
export { NockRecorder }

const { removeInterceptor } = nock

/**
 * Just like the nock() function, but with a .snapshot() method
 *
 * Note that t.nock.snapshot() requires @tapjs/snapshot being loaded.
 */
export type NockMethod = ((
  ...args: Parameters<typeof nock>
) => ReturnType<typeof nock> & { at?: CallSiteLike }) & {
  enableNetConnect: (typeof nock)['enableNetConnect']
  disableNetConnect: (typeof nock)['disableNetConnect']
  snapshot: (
    options?: NockRecorderOptionsMaybe & NockRecorderLoadOptions
  ) => nock.Scope[]
}

export class TapNock {
  static #refs = new Map<TestBase, TapNock>()

  // Construct the t.nock() method with t.nock.snapshot() attached
  static #nockMethod(tn: TapNock): NockMethod {
    const nockMethod = (
      ...args: Parameters<typeof nock>
    ): ReturnType<typeof nock> & { at?: CallSiteLike } => {
      tn.#getRecorder()?.pause()
      nock.disableNetConnect()
      const _scope = Object.assign(nock(...args), {
        _at: at(TapNock.#nockMethod),
      })
      tn.#scopes.push(_scope)
      return _scope
    }
    return Object.assign(nockMethod, {
      // these two we always do globally
      enableNetConnect: () => nock.enableNetConnect(),
      disableNetConnect: () => {
        return nock.disableNetConnect()
      },
      snapshot: (
        options: NockRecorderOptionsMaybe &
          NockRecorderLoadOptions = {}
      ) => tn.#snapshot(options),
    })
  }

  #t: TestBase
  #recorder?: NockRecorder
  #recording: boolean = false
  #nock?: NockMethod
  #scopes: nock.Scope[] = []
  #didTeardown: boolean = false

  constructor(t: TestBase) {
    TapNock.#refs.set(t, this)
    this.#t = t
  }

  // Lazily attach, since the teardown() method doesn't exist at
  // construct time, since it's provided by another plugin.
  // While we're at it, save the work of setting up the nock method
  // as well, until it's actually accessed for the first time.
  get nock() {
    this.#doTeardown()
    if (!this.#nock) {
      this.#nock = TapNock.#nockMethod(this)
    }
    return this.#nock
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
  ): nock.Scope[] {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('nock plugin not loaded')
    }
    const recorder = this.#getRecorder()
    if (!recorder) {
      const er = new Error(
        'Cannot use t.nock.snapshot() without the @tapjs/snapshot plugin'
      )
      Error.captureStackTrace(er, this.nock.snapshot)
      throw er
    }
    if (
      this.#t.t.pluginLoaded(SnapshotPlugin) &&
      this.#t.t.writeSnapshot
    ) {
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
      tn.#recorder = new NockRecorder(t, this.nock.snapshot)
    }
    return tn.#recorder
  }
}

export const plugin: TapPlugin<TapNock> = (t: TestBase) =>
  new TapNock(t)
