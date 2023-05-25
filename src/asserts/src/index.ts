import {
  Extra,
  MessageExtra,
  normalizeMessageExtra,
  TapPlugin,
  TestBase,
} from '@tapjs/core'
import * as stack from '@tapjs/stack'
import EventEmitter from 'events'
import {
  CompareOptions,
  has,
  hasStrict,
  match,
  same,
  strict,
} from 'tcompare'
import Deferred from 'trivial-deferred'

export interface AssertOptions {
  compareOptions?: CompareOptions
}

const normalizeThrowsArgs = (
  defaultMessage: string,
  [wanted, message, extra]: ThrowsArgs
): [ErrorMatch | undefined, string, Extra] => {
  if (typeof wanted === 'string') {
    if (typeof message === 'object' && message) {
      extra = message
    }
    message = wanted
    return [undefined, message || defaultMessage, extra || {}]
  }
  if (message && typeof message === 'object') {
    return [wanted, defaultMessage, message]
  }
  return [wanted, message || defaultMessage, extra || {}]
}

export type ErrorMessageMatch = {
  message: string | RegExp
  [k: string]: any
}

export type ErrorNameMatch = {
  name: string | RegExp
  [k: string]: any
}

export type ErrorMatch =
  | Error
  | typeof Error
  | ErrorMessageMatch
  | ErrorNameMatch
  | RegExp

export type ThrowsArgs =
  | []
  | [wanted: ErrorMatch, ...messageExtra: MessageExtra]

export type ExpectedEmit = [
  emitted: boolean,
  emitter: EventEmitter | EventTarget,
  event: string,
  handler: (...a: any) => void,
  msg: string,
  extra: Extra
]

// return true of every argument is an object
const objects = (...a: any[]): boolean =>
  !a.some(o => !!o && typeof o === 'object')

const hasOwn = <T extends {}>(obj: T, key: string | number | symbol) =>
  Object.prototype.hasOwnProperty.call(obj, key)

export class Assertions {
  #t: TestBase
  #opts: CompareOptions
  #pendingEmits: ExpectedEmit[] = []
  #setOnBeforeEnd: boolean = false
  constructor(t: TestBase, { compareOptions = {} }: AssertOptions) {
    this.#t = t
    this.#opts = compareOptions
  }

  #onBeforeEnd() {
    for (const [emitted, emitter, event, handler, msg, extra] of this
      .#pendingEmits) {
      if (emitted) {
        this.#t.pass(msg, extra)
      } else {
        if (emitter instanceof EventEmitter) {
          emitter.removeListener(event, handler)
        } else {
          emitter.removeEventListener(event, handler)
        }
        this.#t.fail(msg, extra)
      }
    }
  }

  /**
   * Verify that the value is truthy
   */
  ok(obj: any, ...[msg, extra]: MessageExtra) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.ok
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should be equal', args)
    return obj ? this.#t.pass(...me) : this.#t.fail(...me)
  }

  /**
   * Verify that the value is not truthy
   */
  notOk(obj: any, ...[msg, extra]: MessageExtra) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.notOk
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should be equal', args)
    return !obj ? this.#t.pass(...me) : this.#t.fail(...me)
  }

  /**
   * Verify that the values are equal
   */
  equal<T extends unknown>(
    found: any,
    wanted: T,
    ...[msg, extra]: MessageExtra
  ): found is T {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.equal
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should be equal', args)
    if (found === wanted) return this.#t.pass(...me)
    if (objects(found, wanted)) {
      const { match, diff } = strict(found, wanted, this.#opts)
      if (!match) {
        Object.assign(me[1], { diff, compare: '===' })
      } else {
        Object.assign(me[1], {
          found,
          wanted,
          note: 'object identities differ',
          compare: '===',
        })
      }
    } else {
      Object.assign(me[1], { found, wanted, compare: '===' })
    }
    return this.#t.fail(...me)
  }

  /**
   * Verify that the values are not equal
   */
  not(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.not
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should not be equal', args)
    if (found !== doNotWant) {
      return this.#t.pass(...me)
    }
    Object.assign(me[1], {
      found,
      doNotWant,
      compare: '!==',
    })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value is loosely equivalent to the supplied pattern
   */
  same(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.same
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should be equivalent', args)
    const { match, diff } = same(found, wanted, this.#opts)
    if (match) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value is not loosely equivalent to the supplied pattern
   */
  notSame(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.notSame
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should not be equivalent', args)
    const { match } = same(found, doNotWant, this.#opts)
    if (!match) return this.#t.pass(...me)
    Object.assign(me[1], { found, doNotWant })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value is strictly equivalent to the supplied pattern
   */
  strictSame<T extends unknown>(
    found: any,
    wanted: T,
    ...[msg, extra]: MessageExtra
  ): found is T {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.strictSame
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should be equivalent strictly', args)
    const { match, diff } = strict(found, wanted, this.#opts)
    if (match) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value is not strictly equivalent to the supplied
   * pattern object
   */
  strictNotSame(
    found: any,
    doNotWant: any,
    ...[msg, extra]: MessageExtra
  ) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.strictNotSame
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'should not be equivalent strictly',
      args
    )
    const { match } = strict(found, doNotWant, this.#opts)
    if (!match) return this.#t.pass(...me)
    Object.assign(me[1], { found, doNotWant })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the object has all of the properties and values in the
   * pattern, matching loosely.
   */
  has(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.has
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'all provided fields should be equivalent',
      args
    )
    const { match, diff } = has(found, wanted, this.#opts)
    if (match) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the object does NOT have all of the properties and values
   * in the pattern, matching loosely.
   */
  notHas(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.notHas
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'all provided fields should not be equivalent',
      args
    )
    const { match } = has(found, doNotWant, this.#opts)
    if (!match) return this.#t.pass(...me)
    Object.assign(me[1], { found, doNotWant })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value has all of the properties and values in the
   * pattern, matching strictly.
   */
  hasStrict(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.hasStrict
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'all provided fields should be equivalent strictly',
      args
    )
    const { match, diff } = hasStrict(found, wanted, this.#opts)
    if (match) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value does NOT contain all of the properties and
   * values in the test pattern, comparing strictly.
   *
   * Note that this will pass if the value has *some* of the listed properties,
   * or if they do not match the same type.
   */
  notHasStrict(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.notHasStrict
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'all provided fields should not be equivalent strictly',
      args
    )
    const { match } = hasStrict(found, doNotWant, this.#opts)
    if (!match) return this.#t.pass(...me)
    Object.assign(me[1], { found, doNotWant })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value matches the pattern provided
   */
  match(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.match
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should match pattern', args)
    const { match: ok, diff } = match(found, wanted, this.#opts)
    if (ok) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value does NOT match the pattern provided.
   */
  notMatch(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.notMatch
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should not match pattern', args)
    const { match: ok } = match(found, doNotWant, this.#opts)
    if (!ok) return this.#t.pass(...me)
    Object.assign(me[1], { found, doNotWant })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the object has the wanted property, anywhere in its
   * prototype chain.
   */
  hasProp<T extends {}>(
    found: T,
    wanted: string | number | symbol,
    ...[msg, extra]: MessageExtra
  ) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.hasProp
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'specified property should be defined',
      args
    )
    Object.assign(me[1], { found, wanted })
    try {
      if (
        wanted in found &&
        (found as { [k: typeof wanted]: any })[wanted] !== undefined
      ) {
        return this.#t.pass(...me)
      } else {
        return this.#t.fail(...me)
      }
    } catch (er) {
      return this.#t.fail((er as Error)?.message || me[0], me[1])
    }
  }

  /**
   * Verify that the object has the wanted property, using
   * Object#hasOwnProperty
   */
  hasOwnProp<T extends {}>(
    found: T,
    wanted: string | number | symbol,
    ...[msg, extra]: MessageExtra
  ) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.hasOwnProp
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'specified property should be defined own property',
      args
    )
    Object.assign(me[1], { found, wanted })
    try {
      if (
        hasOwn(found, wanted) &&
        (found as { [k: typeof wanted]: any })[wanted] !== undefined
      ) {
        return this.#t.pass(...me)
      } else {
        return this.#t.fail(...me)
      }
    } catch (er) {
      return this.#t.fail((er as Error)?.message || me[0], me[1])
    }
  }

  /**
   * Verify that the object has all of the properties in the `wanted`
   * list, anywhere in its prototype chain.
   */
  hasProps<T extends {}>(
    found: T,
    wanted: Iterable<string | number | symbol>,
    ...[msg, extra]: MessageExtra
  ) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.hasProps
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'should have all specified properties',
      args
    )
    Object.assign(me[1], { found, wanted })
    if (!isIterable(wanted)) {
      return this.#t.fail('property list must be iterable object', me[1])
    }
    for (const prop of wanted) {
      if (!['string', 'number', 'symbol'].includes(typeof prop)) {
        Object.assign(me[1], { invalidProperty: prop })
        return this.#t.fail(
          'invalid property in hasProps assertion',
          me[1]
        )
      }
      try {
        if (
          !(
            prop in found &&
            (found as { [k: typeof prop]: any })[prop] !== undefined
          )
        ) {
          return this.#t.fail(...me)
        }
      } catch (er) {
        return this.#t.fail((er as Error)?.message || me[0], me[1])
      }
    }
    return this.#t.pass(...me)
  }

  /**
   * Verify that the object has all of the properties listed in the
   * `wanted` list, using Object#hasOwnProperties()
   */
  hasOwnProps<T extends {}>(
    found: T,
    wanted: Iterable<string | number | symbol>,
    ...[msg, extra]: MessageExtra
  ) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.hasOwnProps
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'should have all specified properties',
      args
    )
    Object.assign(me[1], { found, wanted })
    if (!isIterable(wanted)) {
      return this.#t.fail('property list must be iterable object', me[1])
    }
    for (const prop of wanted) {
      if (!['string', 'number', 'symbol'].includes(typeof prop)) {
        Object.assign(me[1], { invalidProperty: prop })
        return this.#t.fail(
          'invalid property in hasProps assertion',
          me[1]
        )
      }
      try {
        if (
          !(
            hasOwn(found, prop) &&
            (found as { [k: typeof prop]: any })[prop] !== undefined
          )
        ) {
          return this.#t.fail(...me)
        }
      } catch (er) {
        return this.#t.fail((er as Error)?.message || me[0], me[1])
      }
    }
    return this.#t.pass(...me)
  }

  /**
   * Verify that the function throws an error.
   * Thrown error is tested against the `wanted` param if provided, using
   * `t.match()`.
   *
   * Returns false on failure, or the error object thrown on success
   */
  throws(
    fn: Function | (() => any),
    ...[wanted, msg, extra]: ThrowsArgs
  ): boolean | Error {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.throws
    const args = [wanted, msg, extra] as ThrowsArgs
    const [w, m, e] = normalizeThrowsArgs(
      fn.name || 'expected to throw',
      args
    )
    try {
      fn()
      return this.#t.fail(m, e)
    } catch (err) {
      const er = err as Error
      if (er?.name) {
        Object.defineProperty(er, 'name', {
          value: er.name + '',
          enumerable: true,
          configurable: true,
          writable: true,
        })
      }
      return (
        (w
          ? this.match(isRegExp(wanted) ? er.message : er, wanted, m, e)
          : this.#t.pass(m, e)) && er
      )
    }
  }

  /**
   * Returns the error object if it throws and that does not fail the test
   * (by virtue of being marked skip or todo). Otherwise returns the
   * passing status, like other assertions.
   */
  doesNotThrow(
    fn: Function | (() => any),
    ...[msg, extra]: MessageExtra
  ): boolean | Error {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.doesNotThrow
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      fn.name || 'expect to not throw',
      args
    )

    try {
      fn()
      return this.#t.pass(...me)
    } catch (er) {
      return this.#t.fail(...me) || (er as Error)
    }
  }

  /**
   * resolves to the error object rejected if it rejects as expected,
   * 'false' if it does not, or 'true' if it fails to reject but is marked
   * as skip/todo.
   */
  async rejects<T extends any = any>(
    fnOrPromise: (() => Promise<T>) | Promise<T>,
    ...[wanted, msg, extra]: ThrowsArgs
  ): Promise<boolean | Error> {
    const args = [wanted, msg, extra] as ThrowsArgs
    const [w, m, e] = normalizeThrowsArgs('expected to reject', args)
    const d = new Deferred<boolean | Error>()
    this.#t.waitOn(d.promise)

    const p: Promise<T> =
      typeof fnOrPromise === 'function' ? fnOrPromise() : fnOrPromise
    if (!isPromise(p)) {
      d.reject(new Error('did not provide a promise or async function'))
      return d.promise
    }
    let res!: boolean | Error
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    this.#t.currentAssert = this.#t.t.rejects
    try {
      await p
      res = this.#t.fail(m, e)
    } catch (err) {
      const er = err as Error
      if (er?.name) {
        Object.defineProperty(er, 'name', {
          value: er.name + '',
          enumerable: true,
          configurable: true,
          writable: true,
        })
      }
      res =
        (w
          ? this.match(isRegExp(w) ? er.message : er, w, m, e)
          : this.#t.pass(m, e)) && er
    }
    d.resolve(res)
    return d.promise
  }

  /**
   * Resolves to 'true' if the promise resolves successfully, 'false' if
   * it rejects and fails, or the rejection error if it rejects but the
   * failure is accepted by by being marked todo or skip
   */
  async resolves<T extends any = any>(
    fnOrPromise: Promise<T> | (() => Promise<T>),
    ...[msg, extra]: MessageExtra
  ): Promise<boolean | Error> {
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('expected to resolve', args)
    const d = new Deferred<boolean | Error>()
    this.#t.waitOn(d.promise)
    try {
      const p =
        typeof fnOrPromise === 'function' ? fnOrPromise() : fnOrPromise
      if (!isPromise(p)) {
        d.reject(new Error('did not provide a promise or async function'))
        return d.promise
      }
      let res: boolean | Error
      if (!this.#t.t.pluginLoaded(plugin)) {
        throw new Error('assert plugin not loaded')
      }
      this.#t.currentAssert = this.#t.t.resolves
      try {
        await p
        res = this.#t.pass(...me)
      } catch (er) {
        res = this.#t.fail(...me) || (er as Error)
      }
      d.resolve(res)
      return d.promise
    } catch (er) {
      d.reject(er)
      return d.promise
    }
  }

  /**
   * Test the resolved promise result with `t.match()`
   *
   * Resolves to true if it passes, false if the promise rejects or the match
   * fails, or the rejection error value if the promise rejects but the
   * assertion passes by being marked todo/skip.
   */
  async resolveMatch<T extends any = any>(
    fnOrPromise: Promise<T> | (() => Promise<T>),
    wanted: any,
    ...[msg, extra]: MessageExtra
  ): Promise<boolean | Error> {
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'expected to resolve and match provided pattern',
      args
    )
    const d = new Deferred<boolean | Error>()
    this.#t.waitOn(d.promise)
    try {
      const p =
        typeof fnOrPromise === 'function' ? fnOrPromise() : fnOrPromise
      if (!isPromise(p)) {
        d.reject(new Error('did not provide a promise or async function'))
        return d.promise
      }
      let res: boolean | Error
      if (!this.#t.t.pluginLoaded(plugin)) {
        throw new Error('assert plugin not loaded')
      }
      this.#t.currentAssert = this.#t.t.resolveMatch
      try {
        res = this.match(await p, wanted, ...me)
      } catch (er) {
        res = this.#t.fail(...me) || (er as Error)
      }
      d.resolve(res)
      return d.promise
    } catch (er) {
      d.reject(er)
      return d.promise
    }
  }

  // TODO: maybe let this be guarded by an AbortSignal or timeout number?
  /**
   * Asserts that the emitter emits the specified event before the test
   * ends. Returns a promise that resolves when the event is emitted.
   * Note that waiting on the returned promise within a test can deadlock
   * the test, if the event never emits, but the returned promise can be
   * a handy way to pause a test until an event happens, if you are
   * reasonably confident that it will fire.
   */
  emits(
    emitter: EventEmitter | EventTarget,
    event: string,
    ...[msg, extra]: MessageExtra
  ): Promise<void> {
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(`expect ${event} to be emitted`, args)
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('assert plugin not loaded')
    }
    me[1].at = me[1].at || stack.at(this.#t.t.emits)
    me[1].stack = me[1].stack || stack.captureString(this.#t.t.emits)
    const d = new Deferred<void>()
    const handler = () => {
      pending[0] = true
      d.resolve()
    }
    const pending: ExpectedEmit = [false, emitter, event, handler, ...me]
    this.#pendingEmits.push(pending)
    if (emitter instanceof EventEmitter) {
      emitter.once(event, handler)
    } else {
      emitter.addEventListener(event, handler, { once: true })
    }
    if (!this.#setOnBeforeEnd) {
      this.#setOnBeforeEnd = true
      const obe = this.#t.onbeforeend
      this.#t.onbeforeend = () => {
        this.#onBeforeEnd()
        return obe.call(this.#t)
      }
    }
    return d.promise
  }
}

const isIterable = (it: any) =>
  typeof it === 'string' ||
  it instanceof String ||
  (!!it &&
    typeof it === 'object' &&
    typeof it[Symbol.iterator] === 'function')

const isRegExp = (re: any): re is RegExp =>
  Object.prototype.toString.call(re) === '[object RegExp]'

const isPromise = (p: any): p is Promise<any | void> =>
  !!p && typeof p === 'object' && typeof p.then === 'function'

export const plugin: TapPlugin<Assertions> = (
  t: TestBase,
  opts: AssertOptions = {}
) => new Assertions(t, opts)
