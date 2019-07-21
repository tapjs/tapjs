require('./')(
t => {
  t.pass('fine, i promise')
  Promise.reject(new Error('broken'))
}
)
