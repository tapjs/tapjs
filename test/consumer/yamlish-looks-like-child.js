module.exports=
[ [ 'plan', 3 ],
  [ 'result',
    { id: 1,
      ok: true,
      name: 'callback happened',
      diag: 
       { ok: 
          [ 'I wished for a bailout!',
            'lots of other shapes here can look like valid tap' ] } } ],
  [ 'result', { id: 2, ok: true, name: 'child test' } ],
  [ 'result', { id: 3, ok: true, name: 'should come last' } ],
  [ 'complete', { plan: 3, count: 3, pass: 3, ok: true } ] ]
