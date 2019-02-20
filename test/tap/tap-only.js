require('./')(
() => process.env.TAP_ONLY = '1',t => {
    t.only('only this one', t => t.end())
    t.test('not this one', t => Promise.reject(new Error('no')))
  }
)
