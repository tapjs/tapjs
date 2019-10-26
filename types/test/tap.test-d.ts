import { expectType } from 'tsd';
import * as tap from '../..'
import { Tap, Test, Mocha, Assertions } from '../test'

type doneFn = () => void;

// API
expectType<Tap>(tap)

expectType<Test['test']>(tap.test)

expectType<Mocha>(tap.mocha)

expectType<void>(tap.tearDown(() => {}))

expectType<void>(tap.tearDown(async () => {}))

expectType<void>(tap.setTimeout(42))

expectType<void>(tap.endAll())

expectType<void>(tap.threw(new Error()))

expectType<void>(tap.pragma({ val: true }))

expectType<void>(tap.plan(42))

expectType<Promise<void>>(tap.test('str', { timeout: 42 }, t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.test('str', t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.test('str', { timeout: 42 }, async t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.test('str', async t => {
  expectType<Test>(t)
}))

expectType<Promise<void>>(tap.todo('str', { timeout: 42 }, t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.todo('str', t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.todo('str', { timeout: 42 }, async t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.todo('str', async t => {
  expectType<Test>(t)
}))

expectType<Promise<void>>(tap.skip('str', { timeout: 42 }, t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.skip('str', t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.skip('str', { timeout: 42 }, async t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.skip('str', async t => {
  expectType<Test>(t)
}))

expectType<Promise<void>>(tap.only('str', { timeout: 42 }, t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.only('str', t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.only('str', { timeout: 42 }, async t => {
  expectType<Test>(t)
}))
expectType<Promise<void>>(tap.only('str', async t => {
  expectType<Test>(t)
}))

expectType<Test>(tap.current())

expectType<Promise<void>>(tap.stdin('in'))

expectType<Promise<void>>(tap.spawn('cmd', 'args'))

expectType<void>(tap.done())

expectType<boolean>(tap.passing())

expectType<boolean>(tap.pass())

expectType<boolean>(tap.fail())

expectType<boolean>(tap.addAssert('name', 42, () => true))

expectType<void>(tap.comment('message'))

expectType<void>(tap.bailout())

expectType<void>(tap.beforeEach((done, childTest) => {
  expectType<doneFn>(done)
  expectType<Test>(childTest)
}))
expectType<void>(tap.beforeEach(async (done, childTest) => {
  expectType<doneFn>(done)
  expectType<Test>(childTest)
}))
expectType<void>(tap.afterEach((done, childTest) => {
  expectType<doneFn>(done)
  expectType<Test>(childTest)
}))
expectType<void>(tap.afterEach(async (done, childTest) => {
  expectType<doneFn>(done)
  expectType<Test>(childTest)
}))

expectType<any>(tap.context)

expectType<string>(tap.name)

expectType<boolean>(tap.runOnly)

expectType<number>(tap.jobs)

// Assertions.Basic
expectType<Assertions.Basic>(tap.ok)
expectType<Assertions.Basic>(tap.true)
expectType<Assertions.Basic>(tap.assert)
expectType<Assertions.Basic>(tap.notOk)
expectType<Assertions.Basic>(tap.false)
expectType<Assertions.Basic>(tap.assertNot)
expectType<Assertions.Basic>(tap.error)
expectType<Assertions.Basic>(tap.ifErr)
expectType<Assertions.Basic>(tap.ifError)
expectType<boolean>(tap.ok(true))
expectType<boolean>(tap.ok(true, 'message'))
expectType<boolean>(tap.ok(true, 'message', { bail: true }))
// Assertions.Throws
expectType<Assertions.Throws>(tap.throws)
expectType<Assertions.Throws>(tap.throw)
expectType<boolean>(tap.throw(() => {}))
expectType<boolean>(tap.throw(() => {}, new Error()))
expectType<boolean>(tap.throw(() => {}, new Error(), 'message'))
expectType<boolean>(tap.throw(() => {}, new Error(), 'message', { bail: true }))
// Assertions.DoesNotThrow
expectType<Assertions.DoesNotThrow>(tap.notThrow)
expectType<Assertions.DoesNotThrow>(tap.doesNotThrow)
expectType<boolean>(tap.notThrow(() => {}))
expectType<boolean>(tap.notThrow(() => {}, 'message'))
expectType<boolean>(tap.notThrow(() => {}, 'message', { bail: true }))
// Assertions.Equal
expectType<Assertions.Equal>(tap.equal)
expectType<Assertions.Equal>(tap.equals)
expectType<Assertions.Equal>(tap.isEqual)
expectType<Assertions.Equal>(tap.is)
expectType<Assertions.Equal>(tap.strictEqual)
expectType<Assertions.Equal>(tap.strictEquivalent)
expectType<Assertions.Equal>(tap.strictIs)
expectType<Assertions.Equal>(tap.isStrict)
expectType<Assertions.Equal>(tap.isStrictly)
expectType<Assertions.Equal>(tap.same)
expectType<Assertions.Equal>(tap.equivalent)
expectType<Assertions.Equal>(tap.looseEqual)
expectType<Assertions.Equal>(tap.looseEquals)
expectType<Assertions.Equal>(tap.deepEqual)
expectType<Assertions.Equal>(tap.deepEquals)
expectType<Assertions.Equal>(tap.isLoose)
expectType<Assertions.Equal>(tap.looseIs)
expectType<Assertions.Equal>(tap.strictSame)
expectType<Assertions.Equal>(tap.strictEquivalent)
expectType<Assertions.Equal>(tap.strictDeepEqual)
expectType<Assertions.Equal>(tap.strictDeepEquals)
expectType<Assertions.Equal>(tap.sameStrict)
expectType<Assertions.Equal>(tap.deepIs)
expectType<Assertions.Equal>(tap.isDeeply)
expectType<Assertions.Equal>(tap.isDeep)
expectType<boolean>(tap.equal(1, 1))
expectType<boolean>(tap.equal(1, 1, 'message'))
expectType<boolean>(tap.equal(1, 1, 'message', { bail: true }))
// Assertions.NotEqual
expectType<Assertions.NotEqual>(tap.notEqual)
expectType<Assertions.NotEqual>(tap.notEquals)
expectType<Assertions.NotEqual>(tap.inequal)
expectType<Assertions.NotEqual>(tap.notStrictEqual)
expectType<Assertions.NotEqual>(tap.notStrictEquals)
expectType<Assertions.NotEqual>(tap.isNotEqual)
expectType<Assertions.NotEqual>(tap.isNot)
expectType<Assertions.NotEqual>(tap.doesNotEqual)
expectType<Assertions.NotEqual>(tap.isInequal)
expectType<Assertions.NotEqual>(tap.notSame)
expectType<Assertions.NotEqual>(tap.inequivalent)
expectType<Assertions.NotEqual>(tap.looseInequal)
expectType<Assertions.NotEqual>(tap.notDeep)
expectType<Assertions.NotEqual>(tap.deepInequal)
expectType<Assertions.NotEqual>(tap.notLoose)
expectType<Assertions.NotEqual>(tap.looseNot)
expectType<Assertions.NotEqual>(tap.strictNotSame)
expectType<Assertions.NotEqual>(tap.strictInequivalent)
expectType<Assertions.NotEqual>(tap.strictDeepInequal)
expectType<Assertions.NotEqual>(tap.strictDeepInequals)
expectType<Assertions.NotEqual>(tap.notSameStrict)
expectType<Assertions.NotEqual>(tap.deepNot)
expectType<Assertions.NotEqual>(tap.notDeeply)
expectType<Assertions.NotEqual>(tap.notStrictSame)
expectType<boolean>(tap.notEqual(1, 1))
expectType<boolean>(tap.notEqual(1, 1, 'message'))
expectType<boolean>(tap.notEqual(1, 1, 'message', { bail: true }))
// Assertions.Match
expectType<Assertions.Match>(tap.match)
expectType<Assertions.Match>(tap.has)
expectType<Assertions.Match>(tap.hasFields)
expectType<Assertions.Match>(tap.matches)
expectType<Assertions.Match>(tap.similar)
expectType<Assertions.Match>(tap.like)
expectType<Assertions.Match>(tap.isLike)
expectType<Assertions.Match>(tap.includes)
expectType<Assertions.Match>(tap.include)
expectType<Assertions.Match>(tap.contains)
expectType<Assertions.Match>(tap.notMatch)
expectType<Assertions.Match>(tap.dissimilar)
expectType<Assertions.Match>(tap.unsimilar)
expectType<Assertions.Match>(tap.notSimilar)
expectType<Assertions.Match>(tap.unlike)
expectType<Assertions.Match>(tap.isUnlike)
expectType<Assertions.Match>(tap.notLike)
expectType<Assertions.Match>(tap.isNotLike)
expectType<Assertions.Match>(tap.doesNotHave)
expectType<Assertions.Match>(tap.isNotSimilar)
expectType<Assertions.Match>(tap.isDissimilar)
expectType<boolean>(tap.match({}, {}))
expectType<boolean>(tap.match({}, {}, 'message'))
expectType<boolean>(tap.match({}, {}, 'message', { bail: true }))
// Assertions.Type
expectType<Assertions.Type>(tap.type)
expectType<Assertions.Type>(tap.isa)
expectType<Assertions.Type>(tap.isA)
expectType<boolean>(tap.type(true, 'boolean'))
expectType<boolean>(tap.type(true, 'boolean', 'message'))
expectType<boolean>(tap.type(true, 'boolean', 'message', { bail: true }))