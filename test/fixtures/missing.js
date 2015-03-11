module.exports =
[ [ 'version', '13' ],
  [ 'plan', { start: 1, end: 6 } ],
  [ 'assert', { ok: true, id: 1 } ],
  [ 'assert', { ok: true, id: 2 } ],
  [ 'assert', { ok: true, id: 3 } ],
  [ 'assert', { ok: true, id: 4 } ],
  [ 'assert', { ok: true, id: 5 } ],
  [ 'complete',
    { ok: false, count: 5, pass: 5, plan: { start: 1, end: 6 } } ] ]
