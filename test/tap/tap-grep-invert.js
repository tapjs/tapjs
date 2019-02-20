require('./')(
() => {
    process.env.TAP_GREP = 'x\n/^y$/i'
    process.env.TAP_GREP_INVERT = 1
  },t => {
    t.test('yes this one', t => {
      t.test('Y', t => Promise.reject(new Error('no')))
      t.test('yellow', t => t.end())
      return t.test('apple', t => t.test('this too', t => t.end()))
    })
    t.test('axo', t => Promise.reject(new Error('no')))
  }
)
