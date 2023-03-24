import { TapPlugin, TestBase } from '@tapjs/core'
import EventEmitter from 'events'
import { has, hasStrict, match, same, SameOptions, strict } from 'tcompare'
import Deferred from 'trivial-deferred'

export interface CompareOptions {
  compareOptions?: Omit<SameOptions, 'expect'>
}

type Extra = { [k: string]: any }

const normalizeMessageExtra = (
  defaultMessage: string,
  [message, extra]: MessageExtra
): [string, Extra] => {
  if (message && typeof message === 'object') {
    return [defaultMessage, message]
  }

  return [message || defaultMessage, extra || {}]
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

type MessageExtra = [] | [string] | [Extra] | [string, Extra]

type ErrorMatch =
  | Error
  | typeof Error
  | { message: string; [k: string]: any }
  | RegExp

type ThrowsArgs = [] | [wanted: ErrorMatch, ...messageExtra: MessageExtra]

type ExpectedEmit = [
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

class Assertions {
  #t: TestBase
  #opts: CompareOptions['compareOptions']
  #pendingEmits: ExpectedEmit[] = []
  #setOnBeforeEnd: boolean = false
  constructor(t: TestBase, { compareOptions = {} }: CompareOptions) {
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

  ok(obj: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should be equal', args)
    return obj ? this.#t.pass(...me) : this.#t.fail(...me)
  }

  notOk(obj: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should be equal', args)
    return !obj ? this.#t.pass(...me) : this.#t.fail(...me)
  }

  equal(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
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
    this.#t.fail(...me)
  }

  not(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
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

  same(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should be equivalent', args)
    const { match, diff } = same(found, wanted, this.#opts)
    if (match) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  notSame(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should not be equivalent', args)
    const { match } = same(found, doNotWant, this.#opts)
    if (!match) return this.#t.pass(...me)
    Object.assign(me[1], { found, doNotWant })
    return this.#t.fail(...me)
  }

  strictSame(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should be equivalent strictly', args)
    const { match, diff } = strict(found, wanted, this.#opts)
    if (match) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  strictNotSame(
    found: any,
    doNotWant: any,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = arguments.callee
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

  has(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
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

  notHas(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
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

  hasStrict(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
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

  notHasStrict(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
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

  match(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should match pattern', args)
    const { match: ok, diff } = match(found, wanted, this.#opts)
    if (ok) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  notMatch(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = arguments.callee
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should not match pattern', args)
    const { match: ok } = match(found, doNotWant, this.#opts)
    if (!ok) return this.#t.pass(...me)
    Object.assign(me[1], { found, doNotWant })
    return this.#t.fail(...me)
  }

  hasProp<T extends {}>(
    found: T,
    wanted: string | number | symbol,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = arguments.callee
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

  hasOwnProp<T extends {}>(
    found: T,
    wanted: string | number | symbol,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = arguments.callee
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

  hasProps<T extends {}>(
    found: T,
    wanted: Iterable<string | number | symbol>,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = arguments.callee
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

  hasOwnProps<T extends {}>(
    found: T,
    wanted: Iterable<string | number | symbol>,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = arguments.callee
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

  throws(
    fn: Function | (() => any),
    ...[wanted, msg, extra]: ThrowsArgs
  ): boolean | Error {
    this.#t.currentAssert = arguments.callee
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

  doesNotThrow(
    fn: Function | (() => any),
    ...[msg, extra]: MessageExtra
  ): boolean | Error {
    this.#t.currentAssert = arguments.callee
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
    try {
      await p
      this.#t.currentAssert = arguments.callee
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
      this.#t.currentAssert = arguments.callee
      res =
        (w
          ? this.match(isRegExp(w) ? er.message : er, w, m, e)
          : this.#t.pass(m, e)) && er
    }
    d.resolve(res)
    return d.promise
  }

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
      try {
        this.#t.currentAssert = arguments.callee
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

  // hmm... need to capture the stack here, setting currentAssert isn't right
  // because this is an async pass/fail, so we need to get the stack/at
  // values and put them on the extra object right here.
  emits(
    emitter: EventEmitter | EventTarget,
    event: string,
    ...[msg, extra]: MessageExtra
  ): Promise<void> {
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(`expect ${event} to be emitted`, args)
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

const plugin: TapPlugin<Assertions> = (
  t: TestBase,
  opts: CompareOptions = {}
) => new Assertions(t, opts)

export default plugin
