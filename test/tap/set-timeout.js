require('./')(t => {
  t.setTimeout(1234)
  t.pass('fine')
})
