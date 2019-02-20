require('./')(
t => {
  setTimeout(() => {}, 10000)
  t.pass('fine')
  process.kill(process.pid, 'SIGTERM')
}
)
