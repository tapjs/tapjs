module.exports =
[ [ 'version', '13' ],
  [ 'comment', '# beep\n' ],
  [ 'assert', { ok: true, id: 8, name: 'should be equal' } ],
  [ 'comment', '# boop\n' ],
  [ 'assert', { ok: true, id: 9, name: 'should be equivalent' } ],
  [ 'assert', { ok: true, id: 10, name: 'should be equal' } ],
  [ 'assert', { ok: true, id: 11, name: '(unnamed assert)' } ],
  [ 'plan', { start: 1, end: 4 } ],
  [ 'comment', '# tests 4\n' ],
  [ 'comment', '# pass  4\n' ],
  [ 'comment', '# ok\n' ],
  [ 'complete',
    { ok: false, count: 4, pass: 4, plan: { start: 1, end: 4 } } ] ]
