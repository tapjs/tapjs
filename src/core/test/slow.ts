import { tap } from '@tapjs/core'
const t = tap()

console.log('scratch.ts test file running')

t.test('hello', async t => {
  t.pass('spanning multiple lines', {
    diagnostic: true,
  })
  t.pass('next line indented weirdly', { diagnostic: true })
                  t.equal(2, 2, { skip: true })
})

t.test('this takes a sec', t => {
  setTimeout(() => t.end(), 1000)
})

t.test('test with a skip', t => {
  t.fail('someday', { skip: 'do this eventually' })
  t.end()
})

t.test('this takes a sec', t => {
  setTimeout(() => t.end(), 1000)
})
