module.exports =
[ [ 'line', '# TAP emitted by Test::More 0.98\n' ],
  [ 'comment', '# TAP emitted by Test::More 0.98\n' ],
  [ 'line', '1..1 # SKIP Insufficient positron flux\n' ],
  [ 'plan',
    { start: 1, end: 1, comment: 'SKIP Insufficient positron flux' } ],
  [ 'line', 'ok 1 found some spare flux in bottom drawer\n' ],
  [ 'assert',
    { ok: true,
      id: 1,
      name: 'found some spare flux in bottom drawer' } ],
  [ 'complete',
    { ok: true, count: 1, pass: 1, plan: { start: 1, end: 1 } } ] ]
