require('./')(
t => {
  t.options.autoend = false
  t.teardown(() => console.log('tear it down'))
  setTimeout(() => {
    t.pass('this is fine')
    t.end()
  }, 50)
}
)
