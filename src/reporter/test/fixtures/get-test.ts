import { Minimal } from '@tapjs/core'
import { sleep } from './sleep.js'

/**
 * Return an ended test with a bunch of subtests that
 * end all out of order.
 */
export const getTest = () => {
  const tb = new Minimal({ name: 'parent' })
  tb.jobs = 4
  tb.comment('before subtests')
  return Object.assign(tb, {
    go: async () => {
      await sleep(64)
      // children end out of order
      const { subtest: zro } = tb.test('zro', () => {})
      const { subtest: one } = tb.test('one', t => t.fail('nope'))
      const { subtest: two } = tb.test('two', t => {
        t.pass('skip', { skip: true })
        t.comment('comment in two')
      })
      const { subtest: tre } = tb.test('tre', t => t.pass('fine'))
      const { subtest: fur } = tb.test('fur', t =>
        t.pass('todo', { todo: true })
      )
      const { subtest: fiv } = tb.test('fiv', t => t.pass('fine'))
      const { subtest: six } = tb.test('six', t =>
        t.fail('nope', { skip: 'message' })
      )
      const { subtest: svn } = tb.test('svn', t => {
        t.comment('comment in svn')
        t.fail('todo', { todo: 'message' })
      })
      const { subtest: eit } = tb.test('eit', t => t.pass('fine'))
      const { subtest: nin } = tb.test('nin', t => t.pass('fine'))
      if (
        !zro ||
        !one ||
        !two ||
        !tre ||
        !fur ||
        !fiv ||
        !six ||
        !svn ||
        !eit ||
        !nin
      ) {
        throw new Error('failed to get one or more subtests')
      }

      tb.comment('subtests initiated, ending')

      tb.end()
      one.end()
      two.end()
      await sleep(10)
      fur.end()
      await sleep(10)
      fiv.end()
      await sleep(10)
      tre.end()
      svn.end()
      await sleep(10)
      eit.end()
      nin.end()
      await sleep(10)
      six.end()
      zro.end()
    },
  })
}
