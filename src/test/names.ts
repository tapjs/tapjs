import t from 'tap'

t.test('child test', t => {
  for (const i in t) console.error(i)
  console.error(Object.getOwnPropertyNames(t))
  console.error(Object.keys(t))
  console.error(String(t))
  t.end()
})
