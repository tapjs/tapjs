import {
  Extra,
  extraFromError,
  MessageExtra,
  normalizeMessageExtra,
  TapPlugin,
  TestBase,
} from '@tapjs/core'
import * as stack from '@tapjs/stack'
import EventEmitter from 'events'
import { isPromise } from 'is-actual-promise'
import {
  CompareOptions,
  has,
  hasStrict,
  match,
  matchOnly,
  matchOnlyStrict,
  matchStrict,
  same,
  strict,
} from 'tcompare'
import { Deferred } from 'trivial-deferred'

export interface AssertOptions {
  compareOptions?: CompareOptions
}

import { normalizeThrowsArgs } from './normalize-throws-args.js'

export type ErrorMessageMatch = {
  message: string | RegExp
  [k: string]: any
}

export type ErrorNameMatch = {
  name: string | RegExp
  [k: string]: any
}

export type ErrorCodeMatch = {
  code: string | RegExp
  [k: string]: any
}

export type ErrorMatch =
  | Error
  | typeof Error
  | ErrorMessageMatch
  | ErrorNameMatch
  | ErrorCodeMatch
  | RegExp

export type ThrowsArgs =
  | []
  | [msg: string, extra?: Extra]
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
  !a.some(o => !o || typeof o !== 'object')

const hasOwn = <T extends {}>(
  obj: T,
  key: string | number | symbol
) => Object.prototype.hasOwnProperty.call(obj, key)

export class Assertions {
  #t: TestBase
  #opts: CompareOptions
  #pendingEmits: ExpectedEmit[] = []
  #setOnBeforeEnd: boolean = false
  constructor(t: TestBase, { compareOptions }: AssertOptions) {
    this.#t = t
    // TODO: this is a pita to do in each plugin
    // Either there should be a straightforward interface for declaring
    // which fields get inherited, or maybe add some logic in TestBase
    // to inherit all but the select few that can't be.
    if (!compareOptions) {
      for (let p = t.parent; p && !compareOptions; p = p.parent) {
        compareOptions = p.options.compareOptions
      }
      if (compareOptions) t.options.compareOptions = compareOptions
    }
    this.#opts = compareOptions || {}
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
   *
   * @group Assertion Methods
   */
  ok(obj: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = this.#t.t.ok
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should be equal', args)
    return obj ? this.#t.pass(...me) : this.#t.fail(...me)
  }

  /**
   * Verify that the value is not truthy
   *
   * @group Assertion Methods
   */
  notOk(obj: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = this.#t.t.notOk
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should be equal', args)
    return !obj ? this.#t.pass(...me) : this.#t.fail(...me)
  }

  /**
   * Verify that the values are equal
   *
   * @group Assertion Methods
   */
  equal<T extends unknown>(
    found: any,
    wanted: T,
    ...[msg, extra]: MessageExtra
  ): found is T {
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
   *
   * @group Assertion Methods
   */
  not(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
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
   * Verify that the value is of the type specified
   * Type can be either a string, or a constructor.
   *
   * If a string, then it can match either the `typeof` result
   * or 'null' for `null` values, or the `name` property of the
   * object's constructor.
   *
   * @group Assertion Methods
   */
  type(
    obj: any,
    klass: string | Function,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = this.#t.t.type

    const name =
      typeof klass === 'function'
        ? klass.name || '(anonymous constructor)'
        : klass

    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(`type is ${name}`, args)

    // simplest case, it literally is the same thing
    if (obj === klass) {
      return this.#t.pass(me[0], me[1])
    }

    const tof = typeof obj
    const type =
      !obj && tof === 'object'
        ? 'null'
        : // treat as object, but not Object
        // t.type(() => {}, Function)
        tof === 'function' &&
          typeof klass === 'function' &&
          klass !== Object
        ? 'object'
        : tof

    if (
      (type === 'number' && klass === Number) ||
      (type === 'string' && klass === String) ||
      (type === 'bigint' && klass === BigInt) ||
      (klass === 'array' && Array.isArray(obj)) ||
      (type === 'symbol' && klass === Symbol)
    ) {
      return this.#t.pass(...me)
    }

    if (type === 'object' && klass !== 'object') {
      if (typeof klass === 'function') {
        me[1].found = Object.getPrototypeOf(obj).constructor.name
        me[1].wanted = name
        return this.ok(obj instanceof klass, ...me)
      }

      // check prototype chain for name
      // at this point, we already know klass is not a function
      // if the klass specified is an obj in the proto chain, pass
      // if the name specified is the name of a ctor in the chain, pass
      for (let p = obj; p; p = Object.getPrototypeOf(p)) {
        const ctor = p.constructor && p.constructor.name
        if (p === klass || ctor === name) {
          return this.#t.pass(...me)
        }
      }
    }

    return this.equal(type, name, ...me)
  }

  /**
   * Verify that the value is loosely equivalent to the supplied pattern
   *
   * @group Assertion Methods
   */
  same(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
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
   *
   * @group Assertion Methods
   */
  notSame(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
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
   *
   * @group Assertion Methods
   */
  strictSame<T extends unknown>(
    found: any,
    wanted: T,
    ...[msg, extra]: MessageExtra
  ): found is T {
    this.#t.currentAssert = this.#t.t.strictSame
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'should be equivalent strictly',
      args
    )
    const { match, diff } = strict(found, wanted, this.#opts)
    if (match) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value is not strictly equivalent to the supplied
   * pattern object
   *
   * @group Assertion Methods
   */
  strictNotSame(
    found: any,
    doNotWant: any,
    ...[msg, extra]: MessageExtra
  ) {
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
   *
   * @group Assertion Methods
   */
  has(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
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
   *
   * @group Assertion Methods
   */
  notHas(found: any, doNotWant: any, ...[msg, extra]: MessageExtra) {
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
   *
   * @group Assertion Methods
   */
  hasStrict(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
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
   *
   * @group Assertion Methods
   */
  notHasStrict(
    found: any,
    doNotWant: any,
    ...[msg, extra]: MessageExtra
  ) {
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
   *
   * @group Assertion Methods
   */
  match(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
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
   *
   * @group Assertion Methods
   */
  notMatch(
    found: any,
    doNotWant: any,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = this.#t.t.notMatch
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should not match pattern', args)
    const { match: ok } = match(found, doNotWant, this.#opts)
    if (!ok) return this.#t.pass(...me)
    Object.assign(me[1], { found, doNotWant })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value matches the pattern provided, with no
   * extra properties.
   *
   * @group Assertion Methods
   */
  matchOnly(found: any, wanted: any, ...[msg, extra]: MessageExtra) {
    this.#t.currentAssert = this.#t.t.matchOnly
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should match pattern', args)
    const { match: ok, diff } = matchOnly(found, wanted, this.#opts)
    if (ok) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value does not match the pattern provided, with no
   * extra properties. Ie, it might either not match, or have extra props.
   *
   * @group Assertion Methods
   */
  notMatchOnly(
    found: any,
    doNotWant: any,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = this.#t.t.notMatchOnly
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should not match pattern', args)
    const { match: ok } = matchOnly(found, doNotWant, this.#opts)
    if (!ok) return this.#t.pass(...me)
    Object.assign(me[1], { found, doNotWant })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value matches the pattern provided, with no
   * extra properties.
   *
   * @group Assertion Methods
   */
  matchOnlyStrict(
    found: any,
    wanted: any,
    ...[msg, extra]: MessageExtra
  ) {
    // this.#t.currentAssert = this.#t.t.matchOnlyStrict
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should match pattern', args)
    const { match: ok, diff } = matchOnlyStrict(
      found,
      wanted,
      this.#opts
    )
    if (ok) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value does not match the pattern provided, with no
   * extra properties. Ie, it might either not match, or have extra props.
   *
   * @group Assertion Methods
   */
  notMatchOnlyStrict(
    found: any,
    doNotWant: any,
    ...[msg, extra]: MessageExtra
  ) {
    // this.#t.currentAssert = this.#t.t.notMatchOnlyStrict
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should not match pattern', args)
    const { match: ok } = matchOnlyStrict(
      found,
      doNotWant,
      this.#opts
    )
    if (!ok) return this.#t.pass(...me)
    Object.assign(me[1], { found, doNotWant })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value matches the pattern provided, but fail if any
   * fields *only* match via type coercion.
   *
   * For example,
   *
   * ```ts
   * t.matchStrict({ a: 1 }, { a: Number }, 'this passes')
   * t.matchStrict({ a: 1 }, { a: '1' }, 'this fails')
   * ```
   *
   * @group Assertion Methods
   */
  matchStrict(
    found: any,
    wanted: any,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = this.#t.t.matchStrict
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should match pattern', args)
    const { match: ok, diff } = matchStrict(found, wanted, this.#opts)
    if (ok) return this.#t.pass(...me)
    Object.assign(me[1], { diff })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the value does not match the pattern provided, without
   * type coercion.
   *
   * @group Assertion Methods
   */
  notMatchStrict(
    found: any,
    doNotWant: any,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = this.#t.t.notMatchStrict
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should not match pattern', args)
    const { match: ok } = matchStrict(found, doNotWant, this.#opts)
    if (!ok) return this.#t.pass(...me)
    Object.assign(me[1], { found, doNotWant })
    return this.#t.fail(...me)
  }

  /**
   * Verify that the object has the wanted property, anywhere in its
   * prototype chain.
   *
   * @group Assertion Methods
   */
  hasProp<T extends {}>(
    found: T,
    wanted: string | number | symbol,
    ...[msg, extra]: MessageExtra
  ) {
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
   *
   * @group Assertion Methods
   */
  hasOwnProp<T extends {}>(
    found: T,
    wanted: string | number | symbol,
    ...[msg, extra]: MessageExtra
  ) {
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
   *
   * @group Assertion Methods
   */
  hasProps<T extends {}>(
    found: T,
    wanted: Iterable<string | number | symbol>,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = this.#t.t.hasProps
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'should have all specified properties',
      args
    )
    Object.assign(me[1], { found, wanted })
    if (!isIterable(wanted)) {
      return this.#t.fail(
        'property list must be iterable object',
        me[1]
      )
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
   *
   * @group Assertion Methods
   */
  hasOwnProps<T extends {}>(
    found: T,
    wanted: Iterable<string | number | symbol>,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = this.#t.t.hasOwnProps
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'should have all specified properties',
      args
    )
    Object.assign(me[1], { found, wanted })
    if (!isIterable(wanted)) {
      return this.#t.fail(
        'property list must be iterable object',
        me[1]
      )
    }
    for (const prop of wanted) {
      if (!['string', 'number', 'symbol'].includes(typeof prop)) {
        Object.assign(me[1], { invalidProperty: prop })
        return this.#t.fail(
          'invalid property in hasOwnProps assertion',
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
   * Verify that the object has all of the properties listed in the
   * `wanted` list, using Object#hasOwnProperties(), and no others
   *
   * @group Assertion Methods
   */
  hasOwnPropsOnly<T extends {}>(
    found: T,
    wanted: Iterable<string | number | symbol>,
    ...[msg, extra]: MessageExtra
  ) {
    this.#t.currentAssert = this.#t.t.hasOwnPropsOnly
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'should have all specified properties',
      args
    )
    Object.assign(me[1], { found, wanted })
    if (!isIterable(wanted)) {
      return this.#t.fail(
        'property list must be iterable object',
        me[1]
      )
    }
    const seen = new Set<string | symbol | number>()
    for (const prop of wanted) {
      seen.add(prop)
      if (!['string', 'number', 'symbol'].includes(typeof prop)) {
        return this.#t.fail(
          'invalid property in hasOwnPropsOnly assertion',
          { ...me[1], invalidProperty: prop }
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
    for (const prop of Object.keys(found)) {
      if (!seen.has(prop)) {
        return this.#t.fail(me[0], { ...me[1], doNotWant: prop })
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
   *
   * @group Assertion Methods
   */
  throws(
    fn: Function | (() => any),
    ...[wanted, msg, extra]: ThrowsArgs
  ): boolean | Error {
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
          ? this.match(
              isRegExp(wanted) ? er.message : er,
              wanted,
              m,
              e
            )
          : this.#t.pass(m, e)) && er
      )
    }
  }

  /**
   * Returns the error object if it throws and that does not fail the test
   * (by virtue of being marked skip or todo). Otherwise returns the
   * passing status, like other assertions.
   *
   * @group Assertion Methods
   */
  doesNotThrow(
    fn: Function | (() => any),
    ...[msg, extra]: MessageExtra
  ): boolean | Error {
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
      // pull the errorOrigin from the thrown error, if possible
      const res =
        er !== undefined && er !== null
          ? this.error(er, ...me)
          : this.#t.fail(...me)
      return (res && (er as Error)) || res
    }
  }

  /**
   * resolves to the error object rejected if it rejects as expected,
   * 'false' if it does not, or 'true' if it fails to reject but is marked
   * as skip/todo.
   *
   * @group Assertion Methods
   */
  async rejects<T extends any = any>(
    fnOrPromise: (() => Promise<T>) | Promise<T>,
    ...[wanted, msg, extra]: ThrowsArgs
  ): Promise<boolean | Error> {
    const args = [wanted, msg, extra] as ThrowsArgs
    const [w, m, e] = normalizeThrowsArgs('expected to reject', args)
    this.#t.currentAssert = this.#t.t.rejects
    e.at = e.at || stack.at(this.#t.currentAssert)

    let p!: Promise<T>
    try {
      p =
        typeof fnOrPromise === 'function'
          ? fnOrPromise()
          : fnOrPromise
    } catch (er) {
      p = Promise.reject(er)
    }

    if (!isPromise(p)) {
      return this.#t.fail(
        'no promise or async function provided to t.rejects',
        e
      )
    }

    const d = new Deferred<boolean | Error>()
    this.#t.waitOn(d.promise)
    try {
      await p
      d.resolve(this.#t.fail(m, e))
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
      d.resolve(
        (w
          ? this.match(isRegExp(w) ? er.message : er, w, m, e)
          : this.#t.pass(m, e)) &&
          (er || true)
      )
    }
    return d.promise
  }

  /**
   * Resolves to 'true' if the promise resolves successfully, 'false' if
   * it rejects and fails, or the rejection error if it rejects but the
   * failure is accepted by by being marked todo or skip
   *
   * @group Assertion Methods
   */
  async resolves<T extends any = any>(
    fnOrPromise: Promise<T> | (() => Promise<T>),
    ...[msg, extra]: MessageExtra
  ): Promise<boolean | Error> {
    this.#t.currentAssert = this.#t.t.resolves
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('expected to resolve', args)
    me[1].at = me[1].at || stack.at(this.#t.currentAssert)

    let p!: Promise<T>
    try {
      p =
        typeof fnOrPromise === 'function'
          ? fnOrPromise()
          : fnOrPromise
    } catch (er) {
      p = Promise.reject(er)
    }

    if (!isPromise(p)) {
      return this.#t.fail(
        'no promise or async function provided to t.resolves',
        me[1]
      )
    }

    const d = new Deferred<boolean | Error>()
    this.#t.waitOn(d.promise)
    try {
      await p
      d.resolve(this.#t.pass(...me))
    } catch (er) {
      // pull the errorOrigin from the thrown error, if possible
      const res =
        er !== undefined && er !== null
          ? this.error(er, ...me)
          : this.#t.fail(...me)
      d.resolve((res && (er as Error)) || res)
    }
    return d.promise
  }

  /**
   * Test the resolved promise result with `t.match()`
   *
   * Resolves to true if it passes, false if the promise rejects or the match
   * fails, or the rejection error value if the promise rejects but the
   * assertion passes by being marked todo/skip.
   *
   * @group Assertion Methods
   */
  async resolveMatch<T extends any = any>(
    fnOrPromise: Promise<T> | (() => Promise<T>),
    wanted: any,
    ...[msg, extra]: MessageExtra
  ): Promise<boolean> {
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'expected to resolve and match provided pattern',
      args
    )
    this.#t.currentAssert = this.#t.t.resolveMatch
    me[1].at = me[1].at || stack.at(this.#t.currentAssert)

    let p!: Promise<T>
    try {
      p =
        typeof fnOrPromise === 'function'
          ? fnOrPromise()
          : fnOrPromise
    } catch (er) {
      p = Promise.reject(er)
    }

    if (!isPromise(p)) {
      return this.#t.fail(
        'no promise or async function provided to t.resolveMatch',
        me[1]
      )
    }

    const d = new Deferred<boolean>()
    this.#t.waitOn(d.promise)
    try {
      d.resolve(this.match(await p, wanted, ...me))
    } catch (er) {
      // pull the errorOrigin from the thrown error, if possible
      d.resolve(
        er !== undefined && er !== null
          ? this.error(er, ...me)
          : this.#t.fail(...me)
      )
    }
    return d.promise
  }

  // TODO: maybe let this be guarded by an AbortSignal or timeout number?
  /**
   * Asserts that the emitter emits the specified event before the test
   * ends. Returns a promise that resolves when the event is emitted.
   * Note that waiting on the returned promise within a test can deadlock
   * the test, if the event never emits, but the returned promise can be
   * a handy way to pause a test until an event happens, if you are
   * reasonably confident that it will fire.
   *
   * @group Assertion Methods
   */
  emits(
    emitter: EventEmitter | EventTarget,
    event: string,
    ...[msg, extra]: MessageExtra
  ): Promise<void> {
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      `expect ${event} to be emitted`,
      args
    )
    me[1].at = me[1].at || stack.at(this.#t.t.emits)
    me[1].stack = me[1].stack || stack.captureString(this.#t.t.emits)
    const d = new Deferred<void>()
    const handler = () => {
      pending[0] = true
      d.resolve()
    }
    const pending: ExpectedEmit = [
      false,
      emitter,
      event,
      handler,
      ...me,
    ]
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

  /**
   * Assert that an error object is not provided.
   *
   * Like with {@link @tapjs/asserts!index.Assertions#doesNotThrow}, you
   * can also usually just throw the error, and tap will handle that
   * reasonably.
   *
   * This is useful in cases where you just want to assert that a callback did
   * not receive an error, without necessarily aborting the callback function
   * entirely. Both the origin of the error and the location of the failed
   * assertion will be printed in the test results.
   *
   * It is also used internally in
   * {@link @tapjs/asserts!index.Assertions#resolves},
   * {@link @tapjs/asserts!index.Assertions#doesNotThrow},
   * and {@link @tapjs/asserts!index.Assertions#resolveMatch} to show both
   * the source of a raised error as well as the callsite where the assertion
   * failed.
   *
   * @group Assertion Methods
   */
  error(er: unknown, ...[msg, extra]: MessageExtra) {
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(`should not error`, args)
    this.#t.currentAssert = this.#t.t.error

    if (er === undefined || er === null) return this.#t.pass(...me)

    if (!(er instanceof Error)) {
      return this.#t.fail(
        ...normalizeMessageExtra('non-Error error encountered', [
          msg,
          { ...me[1], found: er },
        ] as MessageExtra)
      )
    }
    // ok, we got an error, that's a problem
    me[1].message = (er as Error)?.message || me[0]
    const { at, stack } = me[1]
    const ex = extraFromError(er, me[1])
    // put the error's origin on the object, but let the normal
    // diags parsing show us where the failed assertion happened,
    // or respect the at/stack added by another caller.
    ex.errorOrigin = {
      at: ex.at,
      stack: ex.stack,
    }
    ex.at = at
    ex.stack = stack
    // always going to have *something* here.
    return this.#t.fail(ex.message as string, ex)
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

export const plugin: TapPlugin<Assertions, AssertOptions> = (
  t: TestBase,
  opts: AssertOptions = {}
) => new Assertions(t, opts)
