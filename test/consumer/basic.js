module.exports =
[ [ 'child',
    [ [ 'plan', 6 ],
      [ 'result', { id: 0, ok: false } ],
      [ 'result', { id: 1, ok: true } ],
      [ 'result', { id: 2, ok: false } ],
      [ 'result', { id: 3, ok: true } ],
      [ 'result', { id: 4, ok: true } ],
      [ 'complete',
        { plan: 6, count: 5, pass: 3, ok: false, fail: 2 } ] ] ],
  [ 'complete', { plan: -1, count: 0, pass: 0, ok: false } ] ]
