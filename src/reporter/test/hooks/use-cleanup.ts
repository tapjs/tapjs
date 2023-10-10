import t from 'tap'
const { useCleanup } = (await t.mockImport(
  '../../dist/esm/hooks/use-cleanup.js',
  {
    react: {
      // mock returns the value so we can call the cleanup fn
      useLayoutEffect: (fn: Function) => fn(),
    },
  }
)) as typeof import('../../dist/esm/hooks/use-cleanup.js')

t.test('do a thing and then clean it up', t => {
  let effectCalled = false
  let cleanupCalled = false
  const doCleanup = useCleanup(cleanup => {
    effectCalled = true
    cleanup.push(() => (cleanupCalled = true))
  }, [])
  t.equal(effectCalled, true)
  t.equal(cleanupCalled, false)
  ;(doCleanup as unknown as Function)()
  t.equal(cleanupCalled, true)
  t.end()
})

t.test('do a thing and then clean it up, return cleanup', t => {
  let effectCalled = false
  let cleanupCalled = false
  let directCleanupCalled = false
  const doCleanup = useCleanup(cleanup => {
    effectCalled = true
    cleanup.push(() => (cleanupCalled = true))
    return () => (directCleanupCalled = true)
  }, [])
  t.equal(effectCalled, true)
  t.equal(cleanupCalled, false)
  t.equal(directCleanupCalled, false)
  ;(doCleanup as unknown as Function)()
  t.equal(cleanupCalled, true)
  t.equal(directCleanupCalled, true)
  t.end()
})
