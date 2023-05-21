import { TapPlugin, TestBase } from '@tapjs/core'
import { plugin as TeardownPlugin } from '@tapjs/after'
import { at, CallSiteLike } from '@tapjs/stack'

type M<O extends object> = {
  [k in keyof O]: O[k] extends (...a: any[]) => any ? k : never
}
type Methods<O extends object> = M<O>[keyof M<O>]

export interface CaptureResultBase<F extends (...a: any[]) => any> {
  args: Parameters<F>
  at?: CallSiteLike
}
export interface CaptureResultReturned<F extends (...a: any[]) => any>
  extends CaptureResultBase<F> {
  returned: any
}
export interface CaptureResultThrew<F extends (...a: any[]) => any>
  extends CaptureResultBase<F> {
  threw: true
}
export type CaptureResult<F extends (...a: any[]) => any> =
  | CaptureResultReturned<F>
  | CaptureResultThrew<F>
  | CaptureResultBase<F>

export type CaptureResultsMethod<
  F extends undefined | ((...a: any[]) => any)
> = F extends undefined
  ? CaptureResultsMethod<() => any>
  : (() => CaptureResult<Exclude<F, undefined>>[]) & {
      restore: () => void
      calls: CaptureResult<Exclude<F, undefined>>[]
    }

export interface InterceptResultBase {
  at?: CallSiteLike
  value: any
  success: boolean
  threw: boolean
}
export interface InterceptResultGet extends InterceptResultBase {
  type: 'get'
}
export interface InterceptResultSet extends InterceptResultBase {
  type: 'set'
}
export type InterceptResult = InterceptResultGet | InterceptResultSet
export type InterceptResultsMethod = (() => InterceptResult[]) & {
  restore: () => void
}

export class Interceptor {
  #t: TestBase

  constructor(t: TestBase) {
    this.#t = t
  }

  /**
   * Intercept and track object property sets and gets
   */
  intercept<T extends object>(
    obj: T,
    prop: keyof T,
    desc?: PropertyDescriptor,
    strictMode: boolean = true
  ): InterceptResultsMethod {
    const resList: InterceptResult[] = []

    // find the original property descriptor, if it exists.
    let orig = Object.getOwnPropertyDescriptor(obj, prop)
    let src = obj
    while (!orig && src) {
      src = Object.getPrototypeOf(src)
      if (!src) break
      orig = Object.getOwnPropertyDescriptor(src, prop)
    }

    let restore: () => void

    // if we have an original, then that serves as the basis for
    // the value, if desc isn't set. If we don't have a desc, and
    // don't have an orig, then it's just { value: undefined }
    if (!orig || src !== obj) {
      // either it came from the proto chain, or wasn't found.
      // either way, we're assigning here.
      restore = () => {
        delete obj[prop]
        restore = () => {}
      }
    } else {
      restore = () => {
        Object.assign(src, prop, orig)
        restore = () => {}
      }
    }

    if (this.#t.t.pluginLoaded(TeardownPlugin)) {
      this.#t.t.teardown(restore)
    }

    if (!desc) {
      desc = orig
        ? { ...orig }
        : {
            value: undefined,
            configurable: true,
            writable: true,
            enumerable: true,
          }
    }

    const base = desc as PropertyDescriptor
    const interceptor: PropertyDescriptor = {
      enumerable: desc.enumerable,
      configurable: true,

      get() {
        // return the current value, and track
        let threw = true
        let success = false
        let value: any
        try {
          value = base.get ? base.get.call(obj) : base.value
          threw = false
          success = true
        } finally {
          resList.push({
            type: 'get',
            at: at(interceptor.get),
            value,
            threw,
            success,
          })
          if (!threw) return value
        }
      },

      set(value: any) {
        let threw = true
        let success = false
        try {
          if (base.set) {
            base.set.call(obj, value)
            success = true
          } else if (base.get) {
            if (strictMode) {
              const er = new TypeError(
                `Cannot set property ${String(
                  prop
                )} of ${Object.prototype.toString.call(
                  obj
                )} which has only a getter`
              )
              Error.captureStackTrace(er, interceptor.set)
            }
          } else {
            if (base.writable) {
              base.value = value
              success = true
            } else {
              if (strictMode) {
                const er = new TypeError(
                  `Cannot assign to read only property '${String(
                    prop
                  )}' of ${Object.prototype.toString.call(obj)}`
                )
                Error.captureStackTrace(er, interceptor.set)
                throw er
              }
            }
          }
          threw = false
        } finally {
          resList.push({
            type: 'set',
            at: at(interceptor.set),
            value,
            success,
            threw,
          })
        }
      },
    }

    Object.defineProperty(obj, prop, interceptor)
    return Object.assign(
      () => {
        const r = resList.slice()
        resList.length = 0
        return r
      },
      { restore: () => restore() }
    )
  }

  /**
   * Intercept calls to a method to track the arguments, call site,
   * and return/throw status, and replace the implementation.
   *
   * By default, the method is set to a no-op. To retain the method behavior,
   * pass the current value of the method as the third argument.  For example:
   *
   * ```
   * const results = t.capture(obj, 'foo', obj.foo)
   * ```
   *
   * Automatically restores at `t.teardown()` if the `@tapjs/after`
   * plugin is not disabled.  Otherwise, it is important to call the
   * `restore()` method on the returned function when you are done capturing.
   */
  capture<T extends {}, M extends Methods<T>>(
    obj: T,
    method: M,
    impl: (...a: any[]) => any = () => {}
  ): CaptureResultsMethod<typeof impl> {
    const prop = Object.getOwnPropertyDescriptor(obj, method)

    // if we don't have a prop we can restore by just deleting
    // otherwise, we restore by putting it back as it was
    let restore = prop
      ? () => {
          Object.defineProperty(obj, method, prop)
          restore = () => {}
        }
      : () => {
          delete obj[method]
          restore = () => {}
        }

    if (this.#t.t.pluginLoaded(TeardownPlugin)) {
      this.#t.t.teardown(restore)
    }

    const fn = Object.assign(this.captureFn(impl), {
      restore: () => restore(),
    })

    Object.defineProperty(obj, method, {
      enumerable: prop ? prop.enumerable : true,
      writable: true,
      get: undefined,
      set: undefined,
      value: fn,
      configurable: true,
    })

    return Object.assign(
      () => {
        const r = fn.calls.slice()
        fn.calls.length = 0
        return r
      },
      {
        restore: () => restore(),
        calls: fn.calls,
      }
    )
  }

  /**
   * Just wrap the function and return it.  Does not have any
   * logic to restore, since it's not actually modifying anything.
   * The results hang off the function as the 'calls' property.
   */
  captureFn(
    original: (...a: any[]) => any
  ): ((...a: any[]) => any) & { calls: CaptureResult<typeof original>[] } {
    type F = typeof original
    const calls: CaptureResult<F>[] = []
    return Object.assign(
      function wrapped(this: any, ...args: Parameters<F>) {
        const res: CaptureResultBase<F> = {
          args,
          at: at(wrapped),
        }
        let threw = true
        calls.push(res)
        try {
          ;(res as CaptureResultReturned<F>).returned = original.call(
            this,
            ...args
          )
          threw = false
          calls.push(res as CaptureResultReturned<F>)
        } finally {
          if (threw) {
            ;(res as CaptureResultThrew<F>).threw = true
          }
        }
      },
      { calls }
    )
  }
}

export const plugin: TapPlugin<Interceptor> = t => new Interceptor(t)
