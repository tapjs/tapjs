module.exports =
[ [ 'version', '13' ],
  [ 'assert',
    { ok: false,
      id: 1,
      name: 'Resolve address',
      diag: 
       { message: 'Failed with error \'hostname peebles.example.com not found\'',
         severity: 'fail',
         data: 
          { got: { hostname: 'peebles.example.com', address: null },
            expected: { hostname: 'peebles.example.com', address: '85.193.201.85' } } } } ],
  [ 'plan', { start: 1, end: 1 } ],
  [ 'complete',
    { ok: false,
      count: 1,
      pass: 0,
      fail: 1,
      plan: { start: 1, end: 1 } } ] ]
