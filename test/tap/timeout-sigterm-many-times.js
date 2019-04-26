require('./')(
t => {
  const fs = require('fs')
  fs.readFile(__filename, (er, data) => {})
  t.pass('fine')
  process.kill(process.pid, 'SIGTERM')
  process.kill(process.pid, 'SIGTERM')
  process.kill(process.pid, 'SIGTERM')
  process.kill(process.pid, 'SIGTERM')
  process.kill(process.pid, 'SIGTERM')
  process.kill(process.pid, 'SIGTERM')
}
)
