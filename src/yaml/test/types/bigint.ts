import t from 'tap'
import { parse, stringify } from '../..'

t.test('parse with n', t => {
  const res: bigint = parse(`!bigint 123n`)
  t.type(res, 'bigint')
  t.equal(Number(res), 123)
  t.equal(res, 123n)
  t.end()
})

t.test('parse without n', t => {
  const res: bigint = parse(`!bigint 123`)
  t.type(res, 'bigint')
  t.equal(Number(res), 123)
  t.equal(res, 123n)
  t.end()
})

t.test('parse hex, octal, binary', t => {
  const cases = [
    '0b11011110101011011011111011101111',
    '0b11011110101011011011111011101111n',
    '0o33653337357',
    '0o33653337357n',
    '3735928559',
    '3735928559n',
    '0xDeAdBeEf',
    '0xDeAdBeEfn',
    '0xDEADBEEF',
    '0xDEADBEEFn',
    '0xdeadbeef',
    '0xdeadbeefn',
  ]
  for (const c of cases) {
    const res: bigint = parse(`!bigint ${c}`)
    t.equal(res, 0xdeadbeefn, `${c} value`)
    t.type(res, 'bigint', `${c} typeof`)
  }
  t.end()
})

t.test('parse invalid', t => {
  t.throws(() => parse('!bigint not a number\n'))
  t.throws(() => parse('!bigint 123.456\n'))
  t.throws(() => parse('!bigint 123x\n'))
  t.throws(() => parse('!bigint 0Xbad1dea\n'))
  t.throws(() => parse('!bigint 0xBAD1DEAN\n'))
  t.throws(() => parse('!bigint 0b012'), '2 is invalid binary digit')
  t.throws(() => parse('!bigint 0o018'), '8 is invalid octal digit')
  t.end()
})

t.test('stringify', t => {
  t.equal(
    stringify([123, 123n, BigInt('123'), Object(123n), Object(BigInt(123))]),
    `- 123
- !bigint 123n
- !bigint 123n
- !bigint 123n
- !bigint 123n
`
  )

  t.end()
})
