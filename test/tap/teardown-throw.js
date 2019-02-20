require('./')(
t => {
  t.on('teardown', () => { throw new Error('poop') })
  t.pass('x')
}
)
