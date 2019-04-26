require('./')(
t => {
  process.on('exit', (code) => process.exit(code))
  t.pass('make sure, really')
}
)
