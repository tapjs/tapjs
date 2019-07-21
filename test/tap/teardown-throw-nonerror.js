require('./')(
t => {
  t.teardown(() => { throw 'poop' })
  t.pass('x')
}
)
