import t from 'tap'
//@ts-ignore
console.log(String(t), t, t[Symbol.toStringTag])

t.test('stack trace test', t => {
  const er = new Error('trace')
  console.error(er.stack)
  throw er
  t.end()
})
