module.exports =
[ [ 'version', '13' ],
  [ 'comment', '# beep\n' ],
  [ 'assert', { ok: true, id: 1, name: 'should be equal' } ],
  [ 'comment', '# boop\n' ],
  [ 'assert', { ok: true, id: 2, name: 'should be equivalent' } ],
  [ 'assert', { ok: true, id: 3, name: 'should be equal' } ],
  [ 'assert', { ok: true, id: 4, name: '(unnamed assert)' } ],
  [ 'complete', { ok: false, count: 4, pass: 4 } ] ]
