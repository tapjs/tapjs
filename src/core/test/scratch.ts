import { TAP } from '@tapjs/core'

const t = TAP()

t.test('hello', async t => {
  t.pass('spanning multiple lines', {
    diagnostic: true,
  })
  t.pass('next line indented weirdly', { diagnostic: true })
                  t.equal(2, 2, { todo: true })
})
