import { TestBase, TestBaseOpts } from '@tapjs/core'
import { CallSiteLike } from '@tapjs/stack'
import t from 'tap'
import {
  CaptureResultsMethod,
  InterceptResultsMethod,
  plugin,
  Receiver,
} from '../dist/esm/index.js'
t.equal(t.pluginLoaded(plugin), true, 'plugin is loaded')

// restore() calls are duplicated to cover the no-op, just ensure
// it doesn't do any harm to call multiple times.

t.test('intercept', t => {
  t.test('value prop', t => {
    const obj = { a: 1 }
    const tt = new TestBase({ name: 'x' } as TestBaseOpts)
    const i = plugin(tt)
    const res = i.intercept(obj, 'a')
    t.match({ ...res }, { restore: Function })
    obj.a = 2
    t.match(res(), [
      {
        receiver: obj,
        type: 'set',
        value: 2,
        success: true,
        at: CallSiteLike,
        stack: String,
        threw: false,
      },
    ])
    t.equal(obj.a, 2)
    t.match(res(), [
      {
        receiver: obj,
        type: 'get',
        value: 2,
        success: true,
        at: CallSiteLike,
        stack: String,
        threw: false,
      },
    ])
    const child = Object.create(obj)
    t.equal(child.a, 2)
    t.equal(res()[0]?.receiver, child)
    res.restore()
    res.restore()
    obj.a = 1
    t.strictSame(res(), [])
    t.end()
  })

  t.test('read only value prop', t => {
    const obj: { a: number } = Object.defineProperty({}, 'a', {
      value: 1,
      writable: false,
      configurable: true,
      enumerable: true,
    }) as { a: number }
    const tt = new TestBase({ name: 'x' } as TestBaseOpts)
    const i = plugin(tt)
    const res = i.intercept(obj, 'a')
    t.throws(() => (obj.a = 2), {
      message: `Cannot assign to read only property 'a' of [object Object]`,
    })
    t.match(res(), [
      {
        receiver: obj,
        type: 'set',
        value: 2,
        threw: true,
        success: false,
        at: CallSiteLike,
        stack: String,
      },
    ])
    t.equal(obj.a, 1)
    t.match(res(), [
      {
        receiver: obj,
        type: 'get',
        value: 1,
        success: true,
        at: CallSiteLike,
        stack: String,
        threw: false,
      },
    ])
    res.restore()
    res.restore()
    t.equal(obj.a, 1)
    t.match(res(), [])
    t.end()
  })

  t.test('read only value prop, loose mode', t => {
    const obj: { a: number } = Object.defineProperty({}, 'a', {
      value: 1,
      writable: false,
      configurable: true,
      enumerable: true,
    }) as { a: number }
    const tt = new TestBase({ name: 'x' } as TestBaseOpts)
    const i = plugin(tt)
    const res = i.intercept(obj, 'a', undefined, false)
    obj.a = 2
    t.match(res(), [
      {
        receiver: obj,
        type: 'set',
        value: 2,
        threw: false,
        success: false,
        at: CallSiteLike,
        stack: String,
      },
    ])
    t.equal(obj.a, 1)
    t.match(res(), [
      {
        receiver: obj,
        type: 'get',
        value: 1,
        success: true,
        at: CallSiteLike,
        stack: String,
        threw: false,
      },
    ])
    res.restore()
    res.restore()
    t.equal(obj.a, 1)
    t.match(res(), [])
    t.end()
  })

  t.test('getter/setter', t => {
    let calledSetter = false
    let calledGetter = false
    const obj = {
      _a: 1,
      get a() {
        calledGetter = true
        return this._a
      },
      set a(v) {
        calledSetter = true
        this._a = v
      },
    }
    const tt = new TestBase({ name: 'x' } as TestBaseOpts)
    const i = plugin(tt)
    const res = i.intercept(obj, 'a')
    t.equal(calledSetter, false)
    t.equal(calledGetter, false)
    obj.a = 2
    t.equal(calledSetter, true)
    t.equal(calledGetter, false)
    t.match(res(), [
      {
        receiver: obj,
        type: 'set',
        value: 2,
        success: true,
        at: CallSiteLike,
        stack: String,
        threw: false,
      },
    ])
    t.equal(obj.a, 2)
    t.equal(calledGetter, true)
    t.match(res(), [
      {
        receiver: obj,
        type: 'get',
        value: 2,
        success: true,
        at: CallSiteLike,
        stack: String,
        threw: false,
      },
    ])
    res.restore()
    res.restore()
    obj.a = 1
    t.strictSame(res(), [])
    t.end()
  })

  t.test('read only getter prop', t => {
    let calledGetter = false
    const obj = {
      _a: 1,
      get a() {
        calledGetter = true
        return this._a
      },
    }
    const tt = new TestBase({ name: 'x' } as TestBaseOpts)
    const i = plugin(tt)
    const res = i.intercept(obj, 'a')
    //@ts-expect-error
    t.throws(() => (obj.a = 2), {
      message: `Cannot set property 'a' of [object Object] which has only a getter`,
    })
    t.match(res(), [
      {
        receiver: obj,
        type: 'set',
        value: 2,
        threw: true,
        success: false,
        at: CallSiteLike,
        stack: String,
      },
    ])
    t.equal(calledGetter, false)
    t.equal(obj.a, 1)
    t.equal(calledGetter, true)
    t.match(res(), [
      {
        receiver: obj,
        type: 'get',
        value: 1,
        success: true,
        at: CallSiteLike,
        stack: String,
        threw: false,
      },
    ])
    res.restore()
    t.equal(obj.a, 1)
    t.match(res(), [])
    t.end()
  })

  t.test('read only getter prop, loose mode', t => {
    let calledGetter = false
    const obj = {
      _a: 1,
      get a() {
        calledGetter = true
        return this._a
      },
    }
    const tt = new TestBase({ name: 'x' } as TestBaseOpts)
    const i = plugin(tt)
    const res = i.intercept(obj, 'a', undefined, false)
    //@ts-expect-error
    obj.a = 2
    t.match(res(), [
      {
        receiver: obj,
        type: 'set',
        value: 2,
        threw: false,
        success: false,
        at: CallSiteLike,
        stack: String,
      },
    ])
    t.equal(calledGetter, false)
    t.equal(obj.a, 1)
    t.equal(calledGetter, true)
    t.match(res(), [
      {
        receiver: obj,
        type: 'get',
        value: 1,
        success: true,
        at: CallSiteLike,
        stack: String,
        threw: false,
      },
    ])
    res.restore()
    t.equal(obj.a, 1)
    t.match(res(), [])
    t.end()
  })

  t.test('inherited property', t => {
    class A {
      #a: number = 1
      get a() {
        return this.#a
      }
      set a(v) {
        this.#a = v
      }
    }
    class B extends A {}
    const obj = new B()
    const tt = new TestBase({ name: 'x' } as TestBaseOpts)
    const i = plugin(tt)
    const res = i.intercept(obj, 'a')
    t.match({ ...res }, { restore: Function })
    obj.a = 2
    t.match(res(), [
      {
        receiver: obj,
        type: 'set',
        value: 2,
        success: true,
        at: CallSiteLike,
        stack: String,
        threw: false,
      },
    ])
    t.equal(obj.a, 2)
    t.match(res(), [
      {
        receiver: obj,
        type: 'get',
        value: 2,
        success: true,
        at: CallSiteLike,
        stack: String,
        threw: false,
      },
    ])
    res.restore()
    res.restore()
    obj.a = 1
    t.strictSame(res(), [])
    t.end()
  })

  t.test('auto-restore', t => {
    let res!: InterceptResultsMethod
    const obj = { a: 1 }
    t.test('child test that does the intercepting', t => {
      res = t.intercept(obj, 'a')
      obj.a = 2
      t.match(res(), [{ receiver: obj, type: 'set', value: 2 }])
      t.end()
    })
    obj.a = 3
    t.match(res(), [], 'restored')
    t.end()
  })

  t.test('unknown property', t => {
    let res!: InterceptResultsMethod
    const obj: { a?: number } = {}
    t.test('child test that does the intercepting', t => {
      res = t.intercept(obj, 'a')
      obj.a = 1
      t.match(res(), [{ receiver: obj, type: 'set', value: 1 }])
      t.equal(obj.a, 1)
      t.match(res(), [{ receiver: obj, type: 'get', value: 1 }])
      t.end()
    })
    t.equal(obj.a, undefined, 'restored to original state')
    t.strictSame(res(), [])
    t.end()
  })

  t.end()
})

t.test('captureFn', t => {
  t.test('return', t => {
    const fn = () => 1
    const wrapped = t.captureFn(fn)
    // type error because wrapped expects
    //@ts-expect-error
    t.equal(wrapped(2), 1)
    t.match(wrapped.calls, [
      {
        receiver: undefined,
        args: [],
        at: CallSiteLike,
        stack: String,
        returned: 1,
      },
    ])
    t.strictSame(wrapped.args(), [[2]])
    const obj = { wrapped }
    t.equal(obj.wrapped(), 1)
    t.equal(wrapped.calls[1]?.receiver, obj)
    t.end()
  })

  t.test('throw', t => {
    const fn = () => {
      throw new Error('nope')
    }
    const wrapped = t.captureFn(fn)
    t.throws(() => wrapped(), { message: 'nope' })
    t.match(wrapped.calls, [
      {
        args: [],
        at: CallSiteLike,
        stack: String,
        threw: true,
      },
    ])
    t.end()
  })

  t.test('wrapped function preserves receiver type', t => {
    type O = { a: 1 }
    const o: O = { a: 1 }
    const fn: (this: O) => number = function () {
      return this?.a
    }
    const wrapped = t.captureFn(fn)
    //@ts-expect-error
    const p: Receiver<typeof wrapped> = { b: 2 }
    p
    const q = { b: 2 }
    //@ts-expect-error
    wrapped()
    wrapped.call(o)
    //@ts-expect-error
    wrapped.call(q)

    type M = { x(this: M, b:number): number; a: number }
    const m: M = {
      x(b) {
        return this?.a + b
      },
      a: 1,
    }
    const w = t.captureFn(m.x)
    //@ts-expect-error
    w(1)
    //@ts-expect-error
    w.call(m)
    //@ts-expect-error
    w.call({a: 2})
    t.equal(w.call(m, 1), 2)
    const c = w.calls[0]
    if (!c) {
      throw new Error('should have had at least one call')
    }
    //@ts-expect-error
    c.receiver = { a: 1 }
    c.receiver = m
    t.end()
  })

  t.end()
})

t.test('capture', t => {
  t.test('no impl, hasOwn method, return', t => {
    const obj = { a: () => 1 }
    const tt = new TestBase({ name: 'x' } as TestBaseOpts)
    const i = plugin(tt)
    const res = i.capture(obj, 'a')
    t.equal(obj.a(), undefined)

    t.match(res(), [
      { receiver: obj, returned: undefined, threw: false },
    ])
    res.restore()
    t.equal(obj.a(), 1)
    t.strictSame(res(), [])
    t.end()
  })

  t.test('custom impl, hasOwn method, return', t => {
    const obj = { a: (..._: number[]) => 1 }
    let res!: CaptureResultsMethod<typeof obj, 'a'>
    t.test('child test that does the capturing', t => {
      res = t.capture(obj, 'a', () => 2)
      t.equal(obj.a(), 2)
      t.match(res(), [{ receiver: obj, returned: 2, threw: false }])
      t.equal(obj.a(1, 2, 3), 2)
      t.strictSame(res.args(), [[1, 2, 3]])
      //@ts-expect-error
      t.equal(obj.a('x'), 2)
      //@ts-expect-error
      t.equal(obj.a(true), 2)
      t.strictSame(res.args(), [['x'], [true]])
      t.end()
    })
    t.equal(obj.a(), 1)
    t.strictSame(res(), [])
    t.end()
  })

  t.test('custom impl, hasOwn method, throw', t => {
    const obj = { a: () => 1 }
    const res = t.capture(obj, 'a', () => {
      throw new Error('nope')
    })
    t.throws(() => obj.a())
    t.match(res(), [{ threw: true }])
    res.restore()
    res.restore()
    t.equal(obj.a(), 1)
    t.end()
  })

  t.test('inherited method', t => {
    class A {
      a(n: number) {
        return n
      }
    }
    const obj = new A()
    const res = t.capture(obj, 'a')
    t.equal(obj.a(1), undefined)
    t.match(res(), [{ args: [1], returned: undefined, threw: false }])
    //@ts-ignore
    obj.a.restore()
    res.restore()
    res.restore()
    t.equal(obj.a(1), 1)
    t.strictSame(res(), [])
    t.end()
  })

  t.test('receiver type is preserved', t => {
    class A {
      b: number = 1
      a(this: A, n: number) {
        return n + this.b
      }
    }
    class B {
      #b: boolean = true
      b() {
        return this.#b
      }
    }
    const a = new A()
    // do not allow passing in a function that expects a given this
    // receiver that isn't satisfied by the object it's applied to.
    //@ts-expect-error
    t.capture(a, 'a', function(this: B) { return 2 })
    // this is fine, though, because unknown can be anything
    const res = t.capture(a, 'a', function() {
      // with the impl, it knows 'this' is same type as object
      //@ts-expect-error
      this.x = 'y'
      return this.b + 99
    })
    const rec = res()[0]
    if (rec) {
      //@ts-expect-error
      rec.receiver.x = 'x'
    }
    t.end()
  })

  t.end()
})

t.test('non-configurable properties cannot be intercepted', t => {
  const m = Symbol('symMethod')
  const p = Symbol('symProp')
  const o = Object.defineProperties(
    {},
    {
      method: {
        value: () => true,
        configurable: false,
      },
      [m]: {
        value: () => true,
        configurable: false,
      },
      property: {
        value: true,
        configurable: false,
      },
      [p]: {
        value: false,
        configurable: false,
      },
    }
  ) as {
    method: () => true
    [m]: () => true
    property: true
    [p]: true
  }

  t.throws(() => t.intercept(o, 'property'), {
    message: `Cannot intercept property 'property', defined {configurable:false}`,
  })
  t.throws(() => t.intercept(o, p), {
    message: `Cannot intercept property Symbol(symProp), defined {configurable:false}`,
  })

  t.throws(() => t.capture(o, 'method'), {
    message: `Cannot capture method 'method', defined {configurable:false}`,
  })
  t.throws(() => t.capture(o, m), {
    message: `Cannot capture method Symbol(symMethod), defined {configurable:false}`,
  })

  t.end()
})
