module.exports =
[ [ 'plan', { start: 1, end: 3 } ],
  [ 'assert', { ok: true, id: 1, name: 'we are good' } ],
  [ 'assert', { ok: false, id: 2, name: 'we are bad' } ],
  [ 'assert', { ok: true, id: 3, name: 'we are zesty!' } ],
  [ 'complete',
    { ok: false,
      count: 3,
      pass: 2,
      fail: 1,
      plan: { start: 1, end: 3 } } ] ]
