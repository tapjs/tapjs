'use strict'
const t = require('../')
const extraFromError = require('../lib/extra-from-error.js')
const assert = require('assert')
const messageGetter = {
  get message () {
    return 'this is your message'
  },
  foo: 'bar',
}

const messageNonConfig = {
  foo: 'bar',
}
Object.defineProperty(messageNonConfig, 'message', {
  value: 'this is your message',
  configurable: false,
  enumerable: false,
  writable: false
})

const cases = [
  [new Error('ok'), null, null, {
    at: { file: 'test/extra-from-error.js' },
    message: null
  }],

  [new Error('ok'), { foo: 'bar' }, null, {
    at: { file: 'test/extra-from-error.js' },
    foo: 'bar'
  }],

  [new Error('ok'), null, { foo: 'bar', tapChild: 1234 }, {
    at: { file: 'test/extra-from-error.js' },
    foo: 'bar',
    tapChild: null
  }],

  [new Error('ok'), { foo: 'bar' }, { foo: 'XXX', tapChild: 1234 }, {
    at: { file: 'test/extra-from-error.js' },
    foo: 'bar',
    tapChild: null
  }],

  ['not an error', null, null, { error: 'not an error' }],

  [new Error(''), null, null, {
    at: { file: 'test/extra-from-error.js' },
    message: null
  }],

  [{stack: null, foo: 'baz', message: 'this is fine'}, null, null, {
    stack: null,
    foo: 'baz',
    message: null
  }],

  [{ name: 'asdf' }, null, null, {
    type: 'asdf',
    message: null
  }],

  [messageGetter, null, null, {
    foo: 'bar',
  }],

  [messageNonConfig, null, null, {
    foo: 'bar',
  }],
]

cases.forEach(c => t.match(extraFromError(c[0], c[1], c[2]), c[3]))
