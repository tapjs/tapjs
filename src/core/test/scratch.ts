import { tap } from '@tapjs/core'
const t = tap()

export interface ignoreme {
  a: true
  b: true
  c: true
  d: true
  e: true
  f: true
  g: true
  h: true
  i: true
  a1: true
  b1: true
  c1: true
  d1: true
  e1: true
  f1: true
  g1: true
  h1: true
  i1: true
  a11: true
  b11: true
  c11: true
  d11: true
  e11: true
  f11: true
  g11: true
  h11: true
  i11: true
}

t.test('wrong plan sync', t => {
  t.plan(1)
  t.pass('this is fine')
  t.pass('this is not')
})

// console.log('scratch.ts test file running')

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
  t.test('nested fail', async t => {
    t.test('way down in there', async t => {
      await new Promise<void>(r => setTimeout(r, 100))
      t.match({
        a: 1,
        b: 2,
        c: 3,
      }, {
        a: 2,
        b: 2,
        c: 2,
      }, 'nope')
    })
  })
  t.end()
})

t.test('wrong plan with timeout', t => {
  t.plan(1)
  t.pass('this is fine')
  setTimeout(() => t.pass('this is not'))
})

t.test('test after promise resolution', async t => {
  t.pass('this is fine')
  setTimeout(() => t.pass('this is not'))
})
