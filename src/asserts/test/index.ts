import t from 'tap'
import {
  Assertions,
  AssertOptions,
  plugin,
} from '../dist/cjs/index.js'
t.equal(t.pluginLoaded(plugin), true, 'plugin loaded by default')

import { EventEmitter } from 'node:events'

import {
  parseTestArgs,
  PromiseWithSubtest,
  TapPlugin,
  TestArgs,
  TestBase,
  TestBaseOpts,
} from '@tapjs/core'

// NB: there's no need to comprehensively test most of these assertions,
// that is done in the tmatch library. Also, the specifics of TAP output
// generated are, for the most part, well tested by @tapjs/core. All we
// need to do here is verify that the plugin is doing the right thing.

// utility class to use that just has this one plugin applied
class T extends TestBase {
  constructor(opts: TestBaseOpts) {
    super(opts)
    //@ts-ignore
    this.t = plugin(this, opts as AssertOptions)
    this.t.pluginLoaded = (p: TapPlugin<any, any>) =>
      this.pluginLoaded(p)
    if (!this.parent) this.runMain(() => {})
  }
  pluginLoaded(p: TapPlugin<any, any>) {
    return p === plugin
  }
  test(
    name: string,
    extra: TestBaseOpts,
    cb: (t: T) => any
  ): PromiseWithSubtest<T>
  test(name: string, cb: (t: T) => any): PromiseWithSubtest<T>
  test(extra: TestBaseOpts, cb: (t: T) => any): PromiseWithSubtest<T>
  test(cb: (t: T) => any): PromiseWithSubtest<T>
  test(...args: TestArgs<T, TestBaseOpts>): PromiseWithSubtest<T> {
    const extra = parseTestArgs<T, TestBaseOpts>(...args)
    return this.sub(T, extra, this.test) as PromiseWithSubtest<T>
  }
}

// create a TestBase and an assertion plugin linked to it for testing
const ta = (
  opts: TestBaseOpts = {},
  aopts: AssertOptions = {}
): [T, Assertions] => {
  const t = new T(opts)
  return [t, plugin(t, aopts)]
}

t.test('compareOptions are inherited', t => {
  t.test(
    'the parent that has compareOptions',
    {
      compareOptions: { style: 'js' },
    },
    t => {
      t.test('child test in the middle', t => {
        t.test('child test that inherits options', t => {
          t.strictSame(t.options.compareOptions, { style: 'js' })
          t.end()
        })
        t.end()
      })
      t.end()
    }
  )
  t.end()
})

t.test('ok, notOk', async t => {
  const [_, a] = ta()
  t.ok(a.ok(true, 'true is ok'))
  t.notOk(a.ok(false, 'false is not ok'))
  t.ok(a.notOk(false, 'false is notOk'))
  t.notOk(a.notOk(true, 'true is not notOk'))
})

t.test('equal, not', async t => {
  const [tt, a] = ta()
  t.ok(a.equal(1, 1))
  t.notOk(a.equal({ a: 1 }, { a: 1 }))
  t.notOk(a.equal({ a: 1 }, { b: 2 }))
  t.notOk(a.equal(null, undefined))
  t.notOk(a.equal(true, 7))
  t.ok(a.not('1', 1))
  t.notOk(a.not(1, 1))
  tt.end()
  t.match(await tt.concat(), 'note: object identities differ\n')
})

t.test('type', t => {
  const [_, a] = ta()
  class F {}
  t.ok(a.type(new F(), F))
  // nameless constructor
  const C = (() => function () {})() as unknown as { new (): {} }
  t.ok(a.type(new C(), C))
  t.ok(a.type(123, 'number'))
  t.ok(a.type(123, Number))
  t.ok(a.type('hello', 'string'))
  t.ok(a.type('hello', String))
  t.ok(a.type(1n, 'bigint'))
  t.ok(a.type(1n, BigInt))
  t.ok(a.type([1], Array))
  t.ok(a.type([1], 'array'))
  t.ok(a.type(Symbol('x'), 'symbol'))
  t.ok(a.type(Symbol('x'), Symbol))
  t.ok(a.type(() => {}, Function))
  t.ok(a.type(undefined, 'undefined'))
  t.ok(a.type(F, F))
  // null is special, because typeof lies there
  t.notOk(a.type(null, 'object'))
  t.ok(a.type(null, 'null'))
  t.ok(a.type(new F(), 'F'))
  class G extends F {}
  t.ok(a.type(new G(), 'F'))
  t.notOk(a.type(new G(), 'X'))
  t.ok(a.type(new G(), F))

  t.end()
})

t.test('same, notSame', t => {
  const [_, a] = ta()
  t.ok(a.same({ a: 1 }, { a: '1' }))
  t.notOk(a.same({ a: 1 }, { b: 2 }))
  t.notOk(a.same({ a: 1 }, { a: 1, b: 2 }))
  t.notOk(a.same({ a: 1, b: 2 }, { b: 2 }))
  t.notOk(a.notSame({ a: 1 }, { a: '1' }))
  t.ok(a.notSame({ a: 1 }, { a: 1, b: 2 }))
  t.ok(a.notSame({ a: 1 }, { a: 1, b: 2 }))
  t.ok(a.notSame({ a: 1, b: 2 }, { b: 2 }))
  t.end()
})

t.test('strictSame, strictNotSame', t => {
  const [_, a] = ta()
  t.ok(a.strictSame({ a: 1 }, { a: 1 }))
  t.notOk(a.strictSame({ a: 1 }, { a: '1' }))
  t.notOk(a.strictSame({ a: 1 }, { b: 2 }))
  t.notOk(a.strictSame({ a: 1 }, { a: 1, b: 2 }))
  t.notOk(a.strictSame({ a: 1, b: 2 }, { b: 2 }))

  t.notOk(a.strictNotSame({ a: 1 }, { a: 1 }))
  t.ok(a.strictNotSame({ a: 1 }, { a: '1' }))
  t.ok(a.strictNotSame({ a: 1 }, { a: 1, b: 2 }))
  t.ok(a.strictNotSame({ a: 1 }, { a: 1, b: 2 }))
  t.ok(a.strictNotSame({ a: 1, b: 2 }, { b: 2 }))
  t.end()
})

t.test('has, notHas', t => {
  const [_, a] = ta()
  t.ok(a.has({ a: 1 }, { a: '1' }))
  t.notOk(a.has({ a: 1 }, { b: 2 }))
  t.notOk(a.has({ a: 1 }, { a: 1, b: 2 }))
  t.ok(a.has({ a: 1, b: 2 }, { b: 2 }))

  t.notOk(a.notHas({ a: 1 }, { a: '1' }))
  t.ok(a.notHas({ a: 1 }, { b: 2 }))
  t.ok(a.notHas({ a: 1 }, { a: 1, b: 2 }))
  t.notOk(a.notHas({ a: 1, b: 2 }, { b: 2 }))

  t.end()
})

t.test('hasStrict, notHasStrict', t => {
  const [_, a] = ta()
  t.ok(a.hasStrict({ a: 1 }, { a: 1 }))
  t.notOk(a.hasStrict({ a: 1 }, { a: '1' }))
  t.notOk(a.hasStrict({ a: 1 }, { b: 2 }))
  t.notOk(a.hasStrict({ a: 1 }, { a: 1, b: 2 }))
  t.ok(a.hasStrict({ a: 1, b: 2 }, { b: 2 }))

  t.notOk(a.notHasStrict({ a: 1 }, { a: 1 }))
  t.ok(a.notHasStrict({ a: 1 }, { a: '1' }))
  t.ok(a.notHasStrict({ a: 1 }, { b: 2 }))
  t.ok(a.notHasStrict({ a: 1 }, { a: 1, b: 2 }))
  t.notOk(a.notHasStrict({ a: 1, b: 2 }, { b: 2 }))

  t.end()
})

t.test('match, notMatch', t => {
  const [_, a] = ta()
  t.ok(a.match(123, Number))
  t.ok(a.match({ a: 1 }, { a: Number }))
  t.notOk(a.match({ a: 1 }, { a: String }))

  t.notOk(a.notMatch(123, Number))
  t.notOk(a.notMatch({ a: 1 }, { a: Number }))
  t.ok(a.notMatch({ a: 1 }, { a: String }))

  t.end()
})

t.test('matchOnly, notMatchOnly', t => {
  const [_, a] = ta()

  t.ok(a.matchOnly({ a: 1 }, { a: Number }))
  t.notOk(a.matchOnly({ a: 1, b: 2 }, { a: Number }))
  t.notOk(a.matchOnly({ a: '1' }, { a: Number }))

  t.notOk(a.notMatchOnly({ a: 1 }, { a: Number }))
  t.ok(a.notMatchOnly({ a: 1, b: 2 }, { a: Number }))
  t.ok(a.notMatchOnly({ a: '1' }, { a: Number }))

  t.end()
})

t.test('matchStrict, notMatchStrict', t => {
  const [_, a] = ta()

  t.ok(a.matchStrict({ a: 1 }, { a: Number }))
  t.ok(a.matchStrict({ a: 1, b: 2 }, { a: Number }))
  t.notOk(a.matchStrict({ a: '1' }, { a: Number }))
  t.notOk(a.matchStrict({ a: '1' }, { a: 1 }))

  t.notOk(a.notMatchStrict({ a: 1 }, { a: Number }))
  t.notOk(a.notMatchStrict({ a: 1, b: 2 }, { a: Number }))
  t.ok(a.notMatchStrict({ a: '1' }, { a: Number }))
  t.ok(a.notMatchStrict({ a: '1' }, { a: 1 }))

  t.end()
})


t.test('matchOnlyStrict, notMatchOnlyStrict', t => {
  const [_, a] = ta()

  t.ok(a.matchOnlyStrict({ a: 1 }, { a: Number }))
  t.notOk(a.matchOnlyStrict({ a: 1, b: 2 }, { a: Number }))
  t.notOk(a.matchOnlyStrict({ a: '1' }, { a: Number }))
  t.notOk(a.matchOnlyStrict({ a: '1' }, { a: 1 }))

  t.notOk(a.notMatchOnlyStrict({ a: 1 }, { a: Number }))
  t.ok(a.notMatchOnlyStrict({ a: 1, b: 2 }, { a: Number }))
  t.ok(a.notMatchOnlyStrict({ a: '1' }, { a: Number }))
  t.ok(a.notMatchOnlyStrict({ a: '1' }, { a: 1 }))

  t.end()
})


t.test('hasProp, hasOwnProp, hasProps, hasOwnProps', t => {
  const [_, a] = ta()
  t.ok(a.hasProp({ a: 1 }, 'a'))
  t.ok(a.hasProp(Object.create({ a: 1 }), 'a'))
  t.notOk(a.hasProp({}, 'a'))
  t.notOk(
    a.hasProp(
      {
        get a() {
          throw new Error('nope')
        },
      },
      'a'
    )
  )
  t.notOk(
    a.hasProp(
      {
        get a() {
          throw 'yolo'
        },
      },
      'a'
    )
  )

  //@ts-expect-error
  t.notOk(a.hasProps({ a: 1 }, {}))
  //@ts-expect-error
  t.notOk(a.hasProps({ a: 1 }, [{}]))
  t.ok(a.hasProps({ a: 1 }, ['a']))
  t.ok(a.hasProps({ a: 1, b: 2 }, ['a']))
  t.ok(a.hasProps(Object.create({ a: 1 }), ['a']))
  t.notOk(a.hasProps({}, ['a']))
  t.notOk(
    a.hasProps(
      {
        get a() {
          throw new Error('nope')
        },
      },
      ['a']
    )
  )
  t.notOk(
    a.hasProps(
      {
        get a() {
          throw 'yolo'
        },
      },
      ['a']
    )
  )

  t.ok(a.hasOwnProp({ a: 1 }, 'a'))
  t.notOk(a.hasOwnProp(Object.create({ a: 1 }), 'a'))
  t.notOk(a.hasOwnProp({}, 'a'))
  t.notOk(
    a.hasOwnProp(
      {
        get a() {
          throw new Error('nope')
        },
      },
      'a'
    )
  )
  t.notOk(
    a.hasOwnProp(
      {
        get a() {
          throw 'yolo'
        },
      },
      'a'
    )
  )

  //@ts-expect-error
  t.notOk(a.hasOwnProps({ a: 1 }, {}))
  //@ts-expect-error
  t.notOk(a.hasOwnProps({ a: 1 }, [{}]))
  t.ok(a.hasOwnProps({ a: 1 }, ['a']))
  t.ok(a.hasOwnProps({ a: 1, b: 2 }, ['a']))
  t.notOk(a.hasOwnProps(Object.create({ a: 1 }), ['a']))
  t.notOk(a.hasOwnProps({}, ['a']))
  t.notOk(
    a.hasOwnProps(
      {
        get a() {
          throw new Error('nope')
        },
      },
      ['a']
    )
  )
  t.notOk(
    a.hasOwnProps(
      {
        get a() {
          throw 'yolo'
        },
      },
      ['a']
    )
  )

  //@ts-expect-error
  t.notOk(a.hasOwnPropsOnly({ a: 1 }, {}))
  //@ts-expect-error
  t.notOk(a.hasOwnPropsOnly({ a: 1 }, [{}]))
  t.ok(a.hasOwnPropsOnly({ a: 1 }, ['a']))
  t.notOk(a.hasOwnPropsOnly({ a: 1, b: 2 }, ['a']))
  t.notOk(a.hasOwnPropsOnly(Object.create({ a: 1 }), ['a']))
  t.notOk(a.hasOwnPropsOnly({}, ['a']))
  t.notOk(
    a.hasOwnPropsOnly(
      {
        get a() {
          throw new Error('nope')
        },
      },
      ['a']
    )
  )
  t.notOk(
    a.hasOwnPropsOnly(
      {
        get a() {
          throw 'yolo'
        },
      },
      ['a']
    )
  )

  t.end()
})

t.test('throws, doesNotThrow', t => {
  const [_, a] = ta()
  t.match(
    a.throws(() => {
      throw new Error('ok')
    }),
    { message: 'ok' }
  )
  t.ok(
    a.throws(function named() {
      throw new Error('ok')
    })
  )
  t.notOk(
    a.throws(
      () => {
        throw new Error('ok')
      },
      { message: 'nope' }
    )
  )
  t.notOk(
    a.throws(() => {
      throw new Error('ok')
    }, /^nope$/)
  )
  t.notOk(a.throws(() => {}))

  t.ok(a.doesNotThrow(() => {}))
  t.match(
    a.doesNotThrow(
      () => {
        throw new Error('ok')
      },
      { skip: true }
    ),
    { message: 'ok' }
  )
  t.match(
    a.doesNotThrow(
      function n() {
        throw new Error('ok')
      },
      { todo: true }
    ),
    { message: 'ok' }
  )

  t.end()
})

t.test('rejects', async t => {
  const [_, a] = ta()
  t.match(
    await a.rejects(async () => {
      throw new Error('ok')
    }),
    { message: 'ok' }
  )
  t.ok(
    await a.rejects(async function named() {
      throw new Error('ok')
    })
  )
  t.notOk(
    await a.rejects(
      async () => {
        throw new Error('ok')
      },
      { message: 'nope' }
    )
  )
  t.notOk(
    await a.rejects(async () => {
      throw new Error('ok')
    }, /^nope$/)
  )
  t.notOk(await a.rejects(async () => {}))

  t.match(await a.rejects(Promise.reject(new Error('ok'))), {
    message: 'ok',
  })
  t.notOk(
    await a.rejects(Promise.reject(new Error('ok')), {
      message: 'nope',
    })
  )
  t.notOk(await a.rejects(Promise.reject(new Error('ok')), /^nope$/))
  t.notOk(await a.rejects(Promise.resolve()))

  //@ts-expect-error
  t.notOk(await a.rejects(true))

  //@ts-expect-error
  t.notOk(await a.rejects(() => {}))
  t.ok(
    await a.rejects(() => {
      throw new Error('ok')
    })
  )
})

t.test('resolves', async t => {
  const [_, a] = ta()
  t.ok(await a.resolves(Promise.resolve('hello')))
  t.ok(await a.resolves(async () => 'hello'))
  t.ok(
    await a.resolves(async function n() {
      return 'hello'
    })
  )

  t.equal(await a.resolves(Promise.reject('hello')), 'hello')
  t.equal(
    await a.resolves(async () => {
      throw 'hello'
    }),
    'hello'
  )
  t.equal(
    await a.resolves(async function n() {
      throw 'hello'
    }),
    'hello'
  )
  t.equal(
    await a.resolves(() => {
      throw 'hello'
    }),
    'hello'
  )

  //@ts-expect-error
  t.notOk(await a.resolves(true))
})

t.test('resolveMatch', async t => {
  const [_, a] = ta()
  t.ok(await a.resolveMatch(Promise.resolve('hello'), String))
  t.ok(await a.resolveMatch(async () => 'hello', 'll'))
  t.ok(
    await a.resolveMatch(async function n() {
      return 'hello'
    }, 'hel')
  )
  t.notOk(
    await a.resolveMatch(Promise.resolve({ a: 1 }), { a: String })
  )

  t.notOk(await a.resolveMatch(Promise.reject('hello'), 'hello'))
  t.notOk(
    await a.resolveMatch(async () => {
      throw 'hello'
    }, 'hello')
  )
  t.notOk(
    await a.resolveMatch(async function n() {
      throw 'hello'
    }, 'hello')
  )
  t.notOk(
    await a.resolveMatch(() => {
      throw 'hello'
    }, 'hello')
  )

  //@ts-expect-error
  t.notOk(await a.resolveMatch(true))
})

t.test('emits', async t => {
  const [tt, a] = ta()
  const ee = new EventEmitter()
  const pe = a.emits(ee, 'emitted', 'success on EventEmitter')
  a.emits(ee, 'not emitted', 'failure on EventEmitter')
  const et = new EventTarget()
  const pt = a.emits(et, 'emitted', 'success on EventTarget')
  a.emits(et, 'not emitted', 'failure on EventTarget')

  setTimeout(() => {
    ee.emit('emitted')
    et.dispatchEvent(new Event('emitted'))
  })

  await Promise.all([pe, pt])

  tt.end()
  const res = await tt.concat()
  t.match(res, /\nok [0-9] - success on EventEmitter/)
  t.match(res, /\nok [0-9] - success on EventTarget/)
  t.match(res, /\nnot ok [0-9] - failure on EventEmitter/)
  t.match(res, /\nnot ok [0-9] - failure on EventTarget/)
})

t.test('rejects does not have to be awaited', async t => {
  t.rejects(
    new Promise((_, rej) => setTimeout(() => rej(new Error('ok')))),
    {
      message: 'ok',
    }
  )
})
