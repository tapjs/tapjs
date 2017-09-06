'use strict'
const t = require('../')
const cyo = require('../lib/clean-yaml-object.js')
const Domain = require('domain').Domain
const dom = new Domain()
dom.whosagooddomain = 'yes you are a good dog'

const cases = [
  [{
    domain: { some: 'object' },
    stack: 'this\nis\na\nstack\n',
    at: {
      file: __filename,
      line: 2,
      column: 4
    },
    foo: {
      domain: dom,
      todo: 'maybe',
      time: 'hours',
      _tapChild: 'blerg'
    },
    _tapChild: 'asdfasdf'
  }, {
    stack: 'this\nis\na\nstack\n',
    at: {
      file: __filename,
      line: 2,
      column: 4
    },
    source: 'const t = require(\'../\')\n',
    foo: {
      domain: { whosagooddomain: null },
      todo: 'maybe',
      time: 'hours',
      _tapChild: 'blerg'
    },
    _tapChild: null
  }],
  [{
    at: {
      file: require.resolve('../lib/clean-yaml-object.js')
    }
  }, { at: null }],
  [{
    stack: '    at Foo.bar (/dev/fire/pwn:420:69)\n'
  }, {
    stack: '    at Foo.bar (/dev/fire/pwn:420:69)\n',
    at: {
      line: 420,
      column: 69,
      file: '/dev/fire/pwn',
      function: 'Foo.bar'
    }
  }],
  [{
    at: {
      file: __filename,
      line: 696969,
      column: 420420
    }
  }, { source: null }],
  [{ stack: '' }, { stack: null }]
]

cases.forEach(c => t.match(cyo(c[0]), c[1]))
