import t from 'tap'
import { Deferred } from 'trivial-deferred'
import { Waiter } from '../dist/cjs/waiter.js'

t.test('passing promise', async t => {
  const d = new Deferred<string>()
  const { promise } = d
  const w = new Waiter(promise, waiter => {
    t.equal(w, waiter)
    t.equal(w.value, 'hello')
  })
  d.resolve('hello')
  w.ready = true
  w.finish()
  await w.promise
  t.equal(w.value, 'hello')
  t.equal(w.rejected, false)
  t.equal(w.done, true)
})

t.test('ready early', async t => {
  const d = new Deferred<string>()
  const { promise } = d
  const w = new Waiter(promise, waiter => {
    t.equal(w, waiter)
    t.equal(w.value, 'hello')
  })
  w.ready = true
  w.finish()
  t.equal(w.done, false)
  t.equal(w.value, undefined)
  d.resolve('hello')
  await w.promise
  t.equal(w.value, 'hello')
  t.equal(w.rejected, false)
  t.equal(w.done, true)
})

t.test('failing promise', async t => {
  const d = new Deferred<string>()
  const { promise } = d
  const w = new Waiter(promise, waiter => {
    t.equal(w, waiter)
    t.equal(w.value, 'hello')
  })
  d.reject('hello')
  w.ready = true
  w.finish()
  await w.promise
  t.equal(w.value, 'hello')
  t.equal(w.rejected, true)
  t.equal(w.done, true)
})

t.test('abort waiter', async t => {
  const d = new Deferred<string>()
  const { promise } = d
  const er = new Error('hello')
  const w = new Waiter(promise, waiter => {
    t.equal(w, waiter)
    t.equal(w.value, er)
  })
  w.abort(er)
  w.ready = true
  w.abort(er)
  await w.promise
  t.equal(w.value, er)
  t.equal(w.rejected, true)
  t.equal(w.done, true)
})
