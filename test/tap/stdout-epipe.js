require('./')(
t => {
  t.pass('this is fine')
  const er = new Error('fake pipe')
  er.code = 'EPIPE'
  process.stdout.emit('some other event')
  setTimeout(() => process.stdout.emit('error', er))
}
)
