var t = require('../')
var P = require('bluebird')

var expect = [
  'sync plan cb',
  'sync promise kept',
  'async plan cb',
  'async timeout',
  'async promise kept',
  'sync end cb',
  'sync end promise kept',
  'async end cb',
  'sync end promise kept',
  'sync no promise',
  'sync end no promise'
]

var log = []

t.test('sync plan', function (t) {
  log.push('sync plan cb')
  t.plan(1)

  t.pass('this is fine')

  return new P(function (res, rej) {
    setTimeout(function () {
      log.push('sync promise kept')
      res('ok')
    }, 100)
  })
})

t.test('async plan', function (t) {
  log.push('async plan cb')

  t.plan(1)

  setTimeout(function () {
    log.push('async timeout')
    t.pass('this is fine')
  })

  return new P(function (res, rej) {
    setTimeout(function () {
      log.push('async promise kept')
      res('ok')
    }, 100)
  })
})

t.test('sync end', function (t) {
  log.push('sync end cb')
  t.pass('this is fine')
  t.end()
  return new P(function (res, rej) {
    setTimeout(function () {
      log.push('sync end promise kept')
      res('ok')
    })
  })
})

t.test('async end', function (t) {
  log.push('async end cb')
  t.pass('this is fine')
  setTimeout(function () {
    t.end()
  })
  return new P(function (res, rej) {
    setTimeout(function () {
      log.push('sync end promise kept')
      res('ok')
    }, 100)
  })
})


t.test('sync no promise', function (t) {
  log.push('sync no promise')
  t.plan(1)
  t.pass('this is fine')
})

t.test('sync end no promise', function (t) {
  log.push('sync end no promise')
  t.pass('this is fine')
  t.end()
})

t.test('results', function (t) {
  t.plan(1)
  t.same(log, expect)
  t.end()
})
