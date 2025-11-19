import t from 'tap'
import { TestPoint } from '../dist/esm/test-point.js'

t.cleanSnapshot = s =>
  s
    .replace(/\n  at:[^\n]*(\n    [^\n]+)/g, '\n  at: {CALLSITE}')
    .replace(/\n  source: [^\n]*(\n    [^\n]+)/g, '\n  source: {SOURCE}')

for (const ok of [true, false]) {
  t.test(`ok=${ok}`, t => {
    t.matchSnapshot(new TestPoint(ok, 'name'), 'basic test point')
    t.matchSnapshot(
      new TestPoint(ok, 'name', { diagnostic: true, some: 'diags' }),
      'diags',
    )
    t.matchSnapshot(new TestPoint(ok, 'name', { time: 1234 }), 'time')
    t.matchSnapshot(new TestPoint(ok, 'name', { todo: true }), 'todo')
    t.matchSnapshot(new TestPoint(ok, 'name', { todo: 'msg' }), 'todo msg')
    t.matchSnapshot(new TestPoint(ok, 'name', { skip: true }), 'skip')
    t.matchSnapshot(new TestPoint(ok, 'name', { skip: 'msg' }), 'skip msg')
    t.matchSnapshot(new TestPoint(ok, '', { todo: true }), 'todo noname')
    t.matchSnapshot(
      new TestPoint(ok, '', { todo: 'msg' }),
      'todo msg noname',
    )
    t.matchSnapshot(new TestPoint(ok, '', { skip: true }), 'skip noname')
    t.matchSnapshot(
      new TestPoint(ok, '', { skip: 'msg' }),
      'skip msg noname',
    )
    t.matchSnapshot(new TestPoint(ok, '  a\nb\t# c \\  '), 'escape/trim')
    t.end()
  })
}
