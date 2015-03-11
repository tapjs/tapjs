module.exports =
[ [ 'plan', { start: 1, end: 6 } ],
  [ 'assert', { ok: false, id: 1 } ],
  [ 'assert', { ok: true, id: 2 } ],
  [ 'assert', { ok: false, id: 3 } ],
  [ 'assert', { ok: true, id: 4 } ],
  [ 'assert', { ok: true, id: 5 } ],
  [ 'complete',
    { ok: false,
      count: 5,
      pass: 3,
      fail: 2,
      plan: { start: 1, end: 6 } } ] ]
