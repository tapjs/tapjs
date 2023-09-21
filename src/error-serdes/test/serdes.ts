import t from 'tap'
import {inspect} from 'util'
import {
  kCustomInspect,
  kCustomInspectedObject,
  kInspectedError,
  kInspectedSymbol,
  kSerializedError,
  kSerializedObject,
} from '../src/constants.js'
import { deserializeError } from '../src/deserialize.js'
import { serializeError } from '../src/serialize.js'

const serdes = <T extends unknown>(er: T): T =>
  deserializeError(serializeError(er))

t.test('check serialized type byte', t => {
  t.equal(serializeError(Symbol('x'))[0], kInspectedSymbol)
  t.equal(serializeError(Symbol.for('x'))[0], kInspectedSymbol)
  t.equal(serializeError(new Error('x'))[0], kSerializedError)
  t.equal(serializeError({ x: true })[0], kSerializedObject)
  t.equal(
    serializeError({ [kCustomInspect]: () => 'x' })[0],
    kCustomInspectedObject
  )
  t.equal(serializeError({
    [kCustomInspect]: () => { throw 'oops' },
  })[0], kSerializedObject)
  t.equal(serializeError(null)[0], kSerializedObject)

  // too big to be serialized as an object, serializes as inspect
  const a: Record<string, any> = {}
  let b: Record<string, any> = a
  for (let i = 0; i < 10000; i++) {
    b.a = {} as Record<string, any>
    b = b.a
  }
  t.equal(serializeError(a)[0], kInspectedError)
  t.equal(serializeError(() => {})[0], kInspectedError)
  t.end()
})

t.test('custom instpect survives serdes', t => {
  const d = serdes({ [kCustomInspect]: () => 'x' })
  t.equal(inspect(d), 'x')
  t.end()
})

t.test('serdes symbol, becomes Symbol.for', t => {
  const s = Symbol.for('x')
  const d = serdes(s)
  t.equal(d, s)
  const x = Symbol('x')
  const y = serdes(x)
  t.equal(y, d)
  t.not(y, x)
  t.end()
})

t.test('serdes function becomes inspected string', t => {
  const f = function hello () {}
  t.equal(serdes(f), inspect(f))
  t.end()
})

t.test('serdes plain old object becomes matching object', t => {
  const a: Record<string, any> = { a: true }
  a.s = a
  t.strictSame(serdes(a), a)
  t.end()
})

t.test('enumerability servives serdes', t => {
  const er = Object.defineProperties(new RangeError('home'), {
    plain: { value: 1, enumerable: true, writable: true },
    noenum: { value: 2, writable: true },
    nowrite: { value: 3 },
    getter: { get: () => 4 },
    getset: { get: () => 5, set: _ => {} },
    throwget: {
      get: () => {
        throw 'oops'
      },
      enumerable: true,
    },
  }) as RangeError & Record<string, number>
  const d = serdes(er)
  t.equal(d.plain, 1)
  t.equal(d.noenum, 2)
  t.equal(d.nowrite, 3)
  t.equal(d.getter, 4)
  t.equal(d.getset, 5)
  t.equal(d.throwget, undefined)
  t.strictSame(
    Object.getOwnPropertyDescriptor(d, 'getter'),
    {
      value: 4,
      enumerable: false,
      configurable: false,
      writable: false,
    },
    'getter flattened'
  )
  t.strictSame(
    Object.getOwnPropertyDescriptor(d, 'getset'),
    {
      value: 5,
      enumerable: false,
      configurable: false,
      writable: false,
    },
    'getter/setter flattened'
  )
  const c = new Error('with cause', { cause: er })
  const b = serdes(c)
  t.strictSame(b.cause, d)
  t.end()
})
