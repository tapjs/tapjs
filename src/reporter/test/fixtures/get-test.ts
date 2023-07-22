import { Minimal } from '@tapjs/core'
import { sleep } from './sleep.js'

export const getTest = () => {
  const tb = new Minimal({ name: 'parent' })
  tb.jobs = 4
  sleep(64).then(async () => {
    // children end out of order
    const { subtest: zro } = tb.test('zro', () => {})
    const { subtest: one } = tb.test('one', () => {})
    const { subtest: two } = tb.test('two', () => {})
    const { subtest: tre } = tb.test('tre', () => {})
    const { subtest: fur } = tb.test('fur', () => {})
    const { subtest: fiv } = tb.test('fiv', () => {})
    const { subtest: six } = tb.test('six', () => {})
    const { subtest: svn } = tb.test('svn', () => {})
    const { subtest: eit } = tb.test('eit', () => {})
    const { subtest: nin } = tb.test('nin', () => {})
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
  })

  return tb
}
