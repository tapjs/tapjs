require('./')(
t => {
  t.pass('fine')
  process.kill(process.pid, 'SIGTERM')
  setTimeout(() => {}, 1000)
}
)
