require('./')(
() => process.env.TAP_GREP = 'x\n/^y$/i',t => {
    t.test('axo', t => {
      t.test('yellow', t => Promise.reject(new Error('no')))
      t.test('Y', t => t.end())
      return t.test('y', t => t.test('this too', t => t.end()))
    })
    t.test('nope', t => Promise.reject(new Error('no')))
  }
)
