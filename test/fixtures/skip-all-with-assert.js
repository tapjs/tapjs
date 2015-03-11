module.exports =
[ [ 'comment', '# TAP emitted by Test::More 0.98\n' ],
  [ 'plan',
    { start: 1, end: 0, comment: 'SKIP Insufficient skipping' } ],
  [ 'extra', 'ok 1 - should not be asserting\n' ],
  [ 'complete',
    { ok: true,
      count: 0,
      pass: 0,
      plan: 
       { start: 1,
         end: 0,
         skipAll: true,
         skipReason: 'SKIP Insufficient skipping' } } ] ]
