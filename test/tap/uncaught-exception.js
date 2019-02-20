require('./')(
t => {
  t.pass('this is fine')
  setTimeout(() => { throw new Error('poop') })
  t.pass('i am sure things are ok')
}
)
