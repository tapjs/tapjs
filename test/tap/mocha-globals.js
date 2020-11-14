require('./')(t => {
  t.mochaGlobals()
  t.equal(typeof describe, 'function')
})
