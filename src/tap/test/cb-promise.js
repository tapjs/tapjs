const t = require('../')
const cbPromise = require('../lib/cb-promise.js')
t.test('promise resolved when cb called', async () => {
  const [cb, p] = cbPromise()
  cb()
  return p
})
t.test('promise rejects when cb failed', t => {
  const [cb, p] = cbPromise()
  const poop = new Error('poop')
  cb(poop)
  return t.rejects(p, poop)
})
