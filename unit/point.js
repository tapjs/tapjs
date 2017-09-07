'use strict'
const t = require('../')
const TestPoint = require('../lib/point.js')

t.throws(_ => new TestPoint(99),
  new TypeError('ok must be boolean'))

t.throws(_ => new TestPoint(true, Math),
  new TypeError('message must be a string'))

const cases = [
  [true, 'this is fine', null, {
    ok: 'ok ',
    message: ' - this is fine'
  }],
  [false, 'this is fine', null, {
    ok: 'not ok ',
    message: ' - this is fine'
  }],
  [true, '     ', null, {
    ok: 'ok ',
    message: ''
  }],
  [false, '\n\r\t\n', null, {
    ok: 'not ok ',
    message: ''
  }],
  [true, 'this is fine        ', { skip: true }, {
    ok: 'ok ',
    message: ' - this is fine # SKIP'
  }],
  [true, 'this is fine', { skip: 'nope' }, {
    ok: 'ok ',
    message: ' - this is fine # SKIP nope'
  }],
  [true, 'this is fine', { todo: true }, {
    ok: 'ok ',
    message: ' - this is fine # TODO'
  }],
  [true, 'this is fine', { todo: 'later' }, {
    ok: 'ok ',
    message: ' - this is fine # TODO later'
  }],
  [true, 'time waits for no one', { time: '12345ms' }, {
    ok: 'ok ',
    message: 'time waits for no one # time=12345ms'
  }],
  [true, 'fine', { foo: 'bar', diagnostic: true }, {
    ok: 'ok ',
    message: ' - fine\n  ---\n  foo: bar\n  ...\n\n'
  }],
  [true, '', { foo: 'bar', diagnostic: true }, {
    ok: 'ok ',
    message: '\n  ---\n  foo: bar\n  ...\n\n'
  }],
  [false, 'x\ny\r\nz', {}, {
    ok: 'not ok ',
    message: 'x y  z'
  }],
  [true, '', {
    tapChildBuffer: 'child output',
    diagnostic: true,
    fluffer: 'nutter'
  }, {
    ok: 'ok ',
    message: '\n  ---\n  fluffer: nutter\n  ...\n{\nchild output\n}\n'
  }],
  [true, '', {
    tapChildBuffer: 'child output',
    fluffer: 'nutter'
  }, {
    ok: 'ok ',
    message: ' {\nchild output\n}\n'
  }],
]

cases.forEach(c => t.match(new TestPoint(c[0], c[1], c[2]), c[3]))
