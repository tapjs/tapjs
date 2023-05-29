import { tap } from '@tapjs/core'
const t = tap()

console.log('scratch.ts test file running')

t.test('hello', async t => {
  t.pass('spanning multiple lines', {
    diagnostic: true,
  })
  t.comment('nested comment')
  t.pass('next line indented weirdly', { diagnostic: true })
                  t.equal(2, 2, { todo: true })
})

t.comment('this is a comment')

t.test('test with a todo', t => {
  t.todo('do this eventually')
  t.end()
})
