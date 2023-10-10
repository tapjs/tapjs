import t from 'tap'
import { Base } from '../dist/esm/base.js'
import { throwToParser } from '../dist/esm/throw-to-parser.js'

t.test('already proxied', async t =>
  t.equal(throwToParser(t.parser, undefined), undefined)
)

t.test('emit TAP failure and close out plan', async t => {
  const tb = new Base({ name: 'thrower' })
  tb.parser.write('ok 1 - this is fine\n')
  throwToParser(tb.parser, {
    expect: true,
    actual: false,
  })
  t.equal(
    await tb.concat(),
    `ok 1 - this is fine
not ok 2 - unhandled error
  ---
  expect: true
  actual: false
  ...

1..2
`
  )
})

t.test(
  'emit TAP failure and close out plan, with message',
  async t => {
    const tb = new Base({ name: 'thrower' })
    tb.parser.write('ok 1 - this is fine\n')
    throwToParser(tb.parser, {
      message: 'thrown to parser',
      expect: true,
      actual: false,
    })
    t.equal(
      await tb.concat(),
      `ok 1 - this is fine
not ok 2 - thrown to parser
  ---
  expect: true
  actual: false
  ...

1..2
`
    )
  }
)

t.test('emit TAP failure, have plan already', async t => {
  const tb = new Base({ name: 'thrower' })
  tb.parser.write('TAP version 14\n1..3\n')
  tb.parser.write('ok 1 - this is fine\n')
  throwToParser(tb.parser, {
    expect: true,
    actual: false,
  })
  t.equal(
    await tb.concat(),
    `TAP version 14
1..3
ok 1 - this is fine
not ok 2 - unhandled error
  ---
  expect: true
  actual: false
  ...
# test count(2) != plan(3)
`
  )
})

t.test(
  'emit TAP failure, have plan already, with message',
  async t => {
    const tb = new Base({ name: 'thrower' })
    tb.parser.write('TAP version 14\n1..3\n')
    tb.parser.write('ok 1 - this is fine\n')
    throwToParser(tb.parser, {
      message: 'hoopie doopie',
    })
    t.equal(
      await tb.concat(),
      `TAP version 14
1..3
ok 1 - this is fine
not ok 2 - hoopie doopie
# test count(2) != plan(3)
`
    )
  }
)
