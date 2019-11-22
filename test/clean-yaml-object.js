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
      domain: { whosagooddomain: dom.whosagooddomain },
      todo: 'maybe',
      time: 'hours',
      _tapChild: 'blerg'
    },
    _tapChild: null
  }],
  [() => process.env.TAP_DEV_SHORTSTACK = '1', {
    at: {
      file: require.resolve('../lib/clean-yaml-object.js')
    }
  }, { at: null }],
  [() => {
    process.env.TAP_DEV_SHORTSTACK = '0'
    process.env.TAP_DEV_LONGSTACK = '1'
  }, {
    at: {
      file: require.resolve('../lib/clean-yaml-object.js'),
    }
  }, {
    at: {
      file: String,
    }
  }],
  [() => process.env.TAP_DEV_LONGSTACK = '0', {
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
  [{ stack: '' }, { stack: null }],
  [{ found: {}, wanted: {} }, { note: 'object identities differ' }],
  [{ found: dom, wanted: dom }, { note: undefined }],
]
cases.forEach(c => {
  if (typeof c[0] === 'function')
    c.shift()()
  t.match(cyo(c[0]), c[1])
})

t.test('string diffs', t => {
  t.matchSnapshot(cyo({
    found: 'hello\nworld',
    wanted: 'a big\nhello\nworld\nstring\n'
  }))
  t.end()
})

t.test('just whitespace, no source shown', t => {
  const fs = require('fs')
  const path = require('path')
  const ws = path.resolve('whitespace-file')
  fs.writeFileSync(ws, '   \n   \n   \n   \n')
  t.teardown(() => fs.unlinkSync(ws))
  t.match(cyo({
    at: {
      file: ws,
      line: 1,
      column: 0,
    }
  }), { source: undefined })
  t.end()
})

t.test('no arrow if column is bogus', t => {
  t.notMatch(cyo({
    at: {
      file: __filename,
      line: 63,
      column: 420420
    }
  }, { source: /^-+^$/m }))
  t.notMatch(cyo({
    at: {
      file: __filename,
      line: 63,
      column: null
    }
  }, { source: /^-+^$/m }))
  t.end()
})

t.test('diff stuff', t => {
  t.matchSnapshot(cyo({
    found: {a: 1},
    wanted: {a: '1'},
    comparator: '===',
  }), 'objects that do not strictly match')

  t.matchSnapshot(cyo({
    found: {a: 1},
    wanted: require('tcompare').format({a: 1}),
  }), 'this one is weird')

  t.matchSnapshot(cyo({
    wanted: {a: 1},
    found: require('tcompare').format({a: 1}),
  }), 'another weird one')

  t.matchSnapshot(cyo({
    found: 'hello',
    wanted: 'world',
    comparator: '===',
  }), 'string that differ')

  t.end()
})
