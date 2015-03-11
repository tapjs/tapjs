module.exports =
[ [ 'plan', { start: 1, end: 3 } ],
  [ 'assert',
    { ok: true,
      id: 1,
      name: 'callback happened',
      diag: 
       { ok: 
          [ 'I wished for a bailout!',
            'lots of other shapes here can look like valid tap' ] } } ],
  [ 'assert', { ok: true, id: 2, name: 'child test' } ],
  [ 'assert', { ok: true, id: 3, name: 'should come last' } ],
  [ 'complete',
    { ok: true, count: 3, pass: 3, plan: { start: 1, end: 3 } } ] ]
