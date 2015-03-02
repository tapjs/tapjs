module.exports=
[ [ 'version', '13' ],
  [ 'result',
    { id: 1,
      ok: false,
      name: 'Resolve address',
      diag:
       { message: 'Failed with error \'hostname peebles.example.com not found\'',
         severity: 'fail',
         data:
          { got: { hostname: 'peebles.example.com', address: null },
            expected: { hostname: 'peebles.example.com', address: '85.193.201.85' } } } } ],
  [ 'plan', 1 ],
  [ 'complete',
    { plan: 1, count: 1, pass: 0, ok: false, fail: 1 } ] ]
