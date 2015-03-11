module.exports =
[ [ 'version', '13' ],
  [ 'plan', { start: 1, end: 573 } ],
  [ 'bailout', 'Couldn\'t connect to database.' ],
  [ 'assert', { ok: false, id: 1, name: 'database handle' } ],
  [ 'complete',
    { ok: false,
      count: 1,
      pass: 0,
      fail: 1,
      bailout: 'Couldn\'t connect to database.',
      plan: { start: 1, end: 573 } } ] ]
