import t from 'tap'

// mock it so that the test can pass on versions that don't have it
const mock = {
  'node:module': {
    registerHooks: () => {
      console.error('mock!')
    },
  },
}

t.test('no sync hooks on v24.11.0', async t => {
  t.intercept(process, 'version', { value: 'v24.11.0' })
  const ush = await t.mockImport<
    typeof import('../src/use-sync-hooks.js')
  >('../src/use-sync-hooks.js', mock)
  t.equal(ush.registerHooks, undefined)
})

t.test('use sync hooks on v24.11.1', async t => {
  t.intercept(process, 'version', { value: 'v24.11.1' })
  const ush = await t.mockImport<
    typeof import('../src/use-sync-hooks.js')
  >('../src/use-sync-hooks.js', mock)
  t.equal(ush.registerHooks, mock['node:module'].registerHooks)
})

t.test('no use if not available, even if version ok', async t => {
  t.intercept(process, 'version', { value: 'v24.99.99' })
  const ush = await t.mockImport<
    typeof import('../src/use-sync-hooks.js')
  >('../src/use-sync-hooks.js', {
    'node:module': {
      registerHooks: undefined,
    },
  })
  t.equal(ush.registerHooks, undefined)
})
