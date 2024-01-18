import t, { Minimal } from 'tap'

t.test('serialize if env says to', async t => {
  let serializeCalled = false
  const mockSerialize = t.captureFn(() => {
    serializeCalled = true
  })

  const { plugin } = await t.mockImport<
    typeof import('../src/index.js')
  >('../src/index.js', {
    '../src/serialize.js': { serialize: mockSerialize },
  })

  delete process.env.NODE_TEST_CONTEXT
  plugin(new Minimal({ name: 'TAP' }))
  t.strictSame(serializeCalled, false, 'no env, not serialized')

  process.env.NODE_TEST_CONTEXT = 'child-v8'
  plugin(new Minimal({ name: 'not serialized' }))
  t.strictSame(serializeCalled, false, 'not TAP, not serialized')

  const s = new Minimal({ name: 'TAP' })
  plugin(s)
  t.strictSame(serializeCalled, true, 'has env, serialize')
  serializeCalled = false
  t.equal(process.env.NODE_TEST_CONTEXT, 'child', 'reset env')

  plugin(new Minimal({ name: 'TAP' }))
  t.strictSame(serializeCalled, false, 'only one serialized test')
})
