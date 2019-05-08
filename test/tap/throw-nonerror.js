require('./')(t => {
  t.pass('this is fine')
  throw 'not an error'
})
