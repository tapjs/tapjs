require('./')(
t => {
  t.teardown(() => { throw new Error('poop') })
  t.pass('x')
}
)
