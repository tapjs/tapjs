/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/cmd.js TAP basic b w > error 1`] = `
0
`

exports[`test/cmd.js TAP basic b w > error 2`] = `
1
`

exports[`test/cmd.js TAP basic b w > error 3`] = `
1
`

exports[`test/cmd.js TAP basic b w > error 4`] = `
1
`

exports[`test/cmd.js TAP basic b w > output 1`] = `
[
  [ 'version', 13 ],
  [
    'assert',
    Result { ok: true, id: 1, name: 'this is fine', fullname: '' }
  ],
  [
    'child',
    [
      [ 'comment', '# Subtest: child\\n' ],
      [
        'assert',
        Result {
          ok: true,
          id: 1,
          name: 'this is fine',
          fullname: 'child'
        }
      ],
      [ 'pragma', 'strict', true ],
      [
        'assert',
        Result {
          ok: true,
          id: 2,
          name: 'also fine',
          fullname: 'child'
        }
      ],
      [ 'assert', Result { ok: true, id: 3, fullname: 'child' } ],
      [ 'comment', '# some comment\\n' ],
      [ 'plan', { start: 1, end: 3 } ],
      [
        'complete',
        FinalResults {
          ok: true,
          count: 3,
          pass: 3,
          fail: 0,
          bailout: false,
          todo: 0,
          skip: 0,
          plan: FinalPlan {
            start: 1,
            end: 3,
            skipAll: false,
            skipReason: '',
            comment: ''
          },
          failures: []
        }
      ]
    ]
  ],
  [ 'extra', '    blearajn9aefnzxrfoas\\n' ],
  [ 'extra', '               \\n' ],
  [
    'assert',
    Result {
      ok: true,
      id: 2,
      buffered: true,
      name: 'child',
      fullname: ''
    }
  ],
  [ 'plan', { start: 1, end: 2 } ],
  [
    'complete',
    FinalResults {
      ok: true,
      count: 2,
      pass: 2,
      fail: 0,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: 1,
        end: 2,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic b w > output 2`] = `
[
  [ 'version', 13 ],
  [
    'assert',
    Result { ok: true, id: 1, name: 'this is fine', fullname: '' }
  ],
  [
    'child',
    [
      [ 'comment', '# Subtest: child\\n' ],
      [
        'assert',
        Result {
          ok: false,
          id: 1,
          name: 'this is fine',
          diag: { not: 'ok', this: 'is fine' },
          fullname: 'child'
        }
      ],
      [ 'bailout', 'this is fine' ],
      [
        'complete',
        FinalResults {
          ok: false,
          count: 1,
          pass: 0,
          fail: 1,
          bailout: 'this is fine',
          todo: 0,
          skip: 0,
          plan: FinalPlan {
            start: null,
            end: null,
            skipAll: false,
            skipReason: '',
            comment: ''
          },
          failures: [
            Result {
              ok: false,
              id: 1,
              name: 'this is fine',
              diag: { not: 'ok', this: 'is fine' },
              fullname: 'child'
            }
          ]
        }
      ]
    ]
  ],
  [ 'extra', '    blearajn9aefnzxrfoas\\n' ],
  [ 'extra', '               \\n' ],
  [ 'bailout', 'this is fine' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 1,
      pass: 1,
      fail: 0,
      bailout: 'this is fine',
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: null,
        end: null,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic b w > output 3`] = `
[
  [ 'version', 13 ],
  [
    'assert',
    Result {
      ok: true,
      id: 1,
      name: "i'm sure this will be fine",
      fullname: ''
    }
  ],
  [ 'bailout', '' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 1,
      pass: 1,
      fail: 0,
      bailout: true,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: null,
        end: null,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic b w > output 4`] = `
[
  [ 'version', 13 ],
  [ 'bailout', '# i have my reasons' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 0,
      pass: 0,
      fail: 0,
      bailout: '# i have my reasons',
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: null,
        end: null,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic b w > stderr 1`] = `

`

exports[`test/cmd.js TAP basic b w > stderr 2`] = `

`

exports[`test/cmd.js TAP basic b w > stderr 3`] = `

`

exports[`test/cmd.js TAP basic b w > stderr 4`] = `

`

exports[`test/cmd.js TAP basic flat > error 1`] = `
0
`

exports[`test/cmd.js TAP basic flat > error 2`] = `
1
`

exports[`test/cmd.js TAP basic flat > error 3`] = `
1
`

exports[`test/cmd.js TAP basic flat > error 4`] = `
1
`

exports[`test/cmd.js TAP basic flat > output 1`] = `
[
  [
    'result',
    Result { ok: true, id: 1, name: 'this is fine', fullname: '' }
  ],
  [ 'extra', '    blearajn9aefnzxrfoas\\n' ],
  [ 'extra', '               \\n' ],
  [
    'result',
    Result { ok: true, id: 1, name: 'this is fine', fullname: 'child' }
  ],
  [
    'result',
    Result { ok: true, id: 2, name: 'also fine', fullname: 'child' }
  ],
  [ 'result', Result { ok: true, id: 3, fullname: 'child' } ],
  [ 'plan', { start: 1, end: 2 } ],
  [
    'complete',
    FinalResults {
      ok: true,
      count: 2,
      pass: 2,
      fail: 0,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: 1,
        end: 2,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic flat > output 2`] = `
[
  [
    'result',
    Result { ok: true, id: 1, name: 'this is fine', fullname: '' }
  ],
  [ 'extra', '    blearajn9aefnzxrfoas\\n' ],
  [ 'extra', '               \\n' ],
  [
    'result',
    Result {
      ok: false,
      id: 1,
      name: 'this is fine',
      diag: { not: 'ok', this: 'is fine' },
      fullname: 'child'
    }
  ],
  [
    'result',
    Result {
      ok: true,
      id: 2,
      todo: true,
      name: 'also fine',
      fullname: 'child'
    }
  ],
  [
    'result',
    Result {
      ok: true,
      id: 3,
      todo: 'later is never',
      name: 'do later',
      fullname: 'child'
    }
  ],
  [
    'result',
    Result {
      ok: true,
      id: 4,
      skip: true,
      name: 'rope',
      fullname: 'child'
    }
  ],
  [
    'result',
    Result {
      ok: true,
      id: 4,
      skip: 'is piks backward',
      name: 'piks',
      fullname: 'child'
    }
  ],
  [ 'plan', { start: 1, end: 2 } ],
  [ 'comment', '# failed 1 of 2 tests\\n' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 2,
      pass: 1,
      fail: 1,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: 1,
        end: 2,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: [
        Result {
          ok: false,
          id: 2,
          time: 420,
          name: 'child',
          fullname: ''
        }
      ]
    }
  ]
]

`

exports[`test/cmd.js TAP basic flat > output 3`] = `
[
  [
    'result',
    Result {
      ok: true,
      id: 1,
      name: "i'm sure this will be fine",
      fullname: ''
    }
  ],
  [ 'bailout', '' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 1,
      pass: 1,
      fail: 0,
      bailout: true,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: null,
        end: null,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic flat > output 4`] = `
[
  [ 'bailout', '# i have my reasons' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 0,
      pass: 0,
      fail: 0,
      bailout: '# i have my reasons',
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: null,
        end: null,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic flat > stderr 1`] = `

`

exports[`test/cmd.js TAP basic flat > stderr 2`] = `

`

exports[`test/cmd.js TAP basic flat > stderr 3`] = `

`

exports[`test/cmd.js TAP basic flat > stderr 4`] = `

`

exports[`test/cmd.js TAP basic flat tap > error 1`] = `
0
`

exports[`test/cmd.js TAP basic flat tap > error 2`] = `
1
`

exports[`test/cmd.js TAP basic flat tap > error 3`] = `
1
`

exports[`test/cmd.js TAP basic flat tap > error 4`] = `
1
`

exports[`test/cmd.js TAP basic flat tap > output 1`] = `
TAP version 13
ok 1 - > this is fine
    blearajn9aefnzxrfoas
               
ok 2 - child > this is fine
ok 3 - child > also fine
ok 4 - child >
1..4


`

exports[`test/cmd.js TAP basic flat tap > output 2`] = `
TAP version 13
ok 1 - > this is fine
    blearajn9aefnzxrfoas
               
not ok 2 - child > this is fine
  ---
  not: ok
  this: is fine
  ...
ok 3 - child > also fine # TODO
ok 4 - child > do later # TODO later is never
ok 5 - child > rope # SKIP
ok 6 - child > piks # SKIP is piks backward
1..6
# failed 1 of 2 tests


`

exports[`test/cmd.js TAP basic flat tap > output 3`] = `
TAP version 13
ok 1 - > i'm sure this will be fine
Bail out!


`

exports[`test/cmd.js TAP basic flat tap > output 4`] = `
TAP version 13
Bail out! # i have my reasons


`

exports[`test/cmd.js TAP basic flat tap > stderr 1`] = `

`

exports[`test/cmd.js TAP basic flat tap > stderr 2`] = `

`

exports[`test/cmd.js TAP basic flat tap > stderr 3`] = `

`

exports[`test/cmd.js TAP basic flat tap > stderr 4`] = `

`

exports[`test/cmd.js TAP basic lines > error 1`] = `
0
`

exports[`test/cmd.js TAP basic lines > error 2`] = `
1
`

exports[`test/cmd.js TAP basic lines > error 3`] = `
1
`

exports[`test/cmd.js TAP basic lines > error 4`] = `
1
`

exports[`test/cmd.js TAP basic lines > output 1`] = `
TAP version 13
ok 1 - this is fine
ok 2 - child {
    ok 1 - this is fine
    blearajn9aefnzxrfoas
               
    pragma +strict
    ok 2 - also fine
    ok
    # some comment
    1..3
}
1..2

`

exports[`test/cmd.js TAP basic lines > output 2`] = `
TAP version 13
ok 1 - this is fine
# Subtest: child
    not ok 1 - this is fine
      ---
      not: ok
      this: is fine
      ...
    blearajn9aefnzxrfoas
               
    pragma +strict
    pragma -blerg
    ok 2 - also fine # TODO
    ok 3 - do later # TODO later is never
    ok 4 - rope # SKIP
    ok 4 - piks # SKIP is piks backward
    # some comment
    1..4 # plan comment
    # test count(5) != plan(4)
    # failed 1 of 5 tests
    # todo: 2
    # skip: 2
not ok 2 - child # time=420ms
1..2
# failed 1 of 2 tests

`

exports[`test/cmd.js TAP basic lines > output 3`] = `
TAP version 13
ok 1 - i'm sure this will be fine
Bail out!

`

exports[`test/cmd.js TAP basic lines > output 4`] = `
TAP version 13
Bail out! # i have my reasons

`

exports[`test/cmd.js TAP basic lines > stderr 1`] = `

`

exports[`test/cmd.js TAP basic lines > stderr 2`] = `

`

exports[`test/cmd.js TAP basic lines > stderr 3`] = `

`

exports[`test/cmd.js TAP basic lines > stderr 4`] = `

`

exports[`test/cmd.js TAP basic no args > error 1`] = `
0
`

exports[`test/cmd.js TAP basic no args > error 2`] = `
1
`

exports[`test/cmd.js TAP basic no args > error 3`] = `
1
`

exports[`test/cmd.js TAP basic no args > error 4`] = `
1
`

exports[`test/cmd.js TAP basic no args > output 1`] = `
[
  [ 'version', 13 ],
  [
    'assert',
    Result { ok: true, id: 1, name: 'this is fine', fullname: '' }
  ],
  [
    'child',
    [
      [ 'comment', '# Subtest: child\\n' ],
      [
        'assert',
        Result {
          ok: true,
          id: 1,
          name: 'this is fine',
          fullname: 'child'
        }
      ],
      [ 'pragma', 'strict', true ],
      [
        'assert',
        Result {
          ok: true,
          id: 2,
          name: 'also fine',
          fullname: 'child'
        }
      ],
      [ 'assert', Result { ok: true, id: 3, fullname: 'child' } ],
      [ 'comment', '# some comment\\n' ],
      [ 'plan', { start: 1, end: 3 } ],
      [
        'complete',
        FinalResults {
          ok: true,
          count: 3,
          pass: 3,
          fail: 0,
          bailout: false,
          todo: 0,
          skip: 0,
          plan: FinalPlan {
            start: 1,
            end: 3,
            skipAll: false,
            skipReason: '',
            comment: ''
          },
          failures: []
        }
      ]
    ]
  ],
  [ 'extra', '    blearajn9aefnzxrfoas\\n' ],
  [ 'extra', '               \\n' ],
  [
    'assert',
    Result {
      ok: true,
      id: 2,
      buffered: true,
      name: 'child',
      fullname: ''
    }
  ],
  [ 'plan', { start: 1, end: 2 } ],
  [
    'complete',
    FinalResults {
      ok: true,
      count: 2,
      pass: 2,
      fail: 0,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: 1,
        end: 2,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic no args > output 2`] = `
[
  [ 'version', 13 ],
  [
    'assert',
    Result { ok: true, id: 1, name: 'this is fine', fullname: '' }
  ],
  [
    'child',
    [
      [ 'comment', '# Subtest: child\\n' ],
      [
        'assert',
        Result {
          ok: false,
          id: 1,
          name: 'this is fine',
          diag: { not: 'ok', this: 'is fine' },
          fullname: 'child'
        }
      ],
      [ 'pragma', 'strict', true ],
      [ 'pragma', 'blerg', false ],
      [
        'assert',
        Result {
          ok: true,
          id: 2,
          todo: true,
          name: 'also fine',
          fullname: 'child'
        }
      ],
      [
        'assert',
        Result {
          ok: true,
          id: 3,
          todo: 'later is never',
          name: 'do later',
          fullname: 'child'
        }
      ],
      [
        'assert',
        Result {
          ok: true,
          id: 4,
          skip: true,
          name: 'rope',
          fullname: 'child'
        }
      ],
      [
        'assert',
        Result {
          ok: true,
          id: 4,
          skip: 'is piks backward',
          name: 'piks',
          fullname: 'child'
        }
      ],
      [ 'comment', '# some comment\\n' ],
      [ 'plan', { start: 1, end: 4, comment: 'plan comment' } ],
      [ 'comment', '# test count(5) != plan(4)\\n' ],
      [ 'comment', '# failed 1 of 5 tests\\n' ],
      [ 'comment', '# todo: 2\\n' ],
      [ 'comment', '# skip: 2\\n' ],
      [
        'complete',
        FinalResults {
          ok: false,
          count: 5,
          pass: 4,
          fail: 1,
          bailout: false,
          todo: 2,
          skip: 2,
          plan: FinalPlan {
            start: 1,
            end: 4,
            skipAll: false,
            skipReason: '',
            comment: 'plan comment'
          },
          failures: [
            Result {
              ok: false,
              id: 1,
              name: 'this is fine',
              diag: { not: 'ok', this: 'is fine' },
              fullname: 'child'
            }
          ]
        }
      ]
    ]
  ],
  [ 'extra', '    blearajn9aefnzxrfoas\\n' ],
  [ 'extra', '               \\n' ],
  [
    'assert',
    Result { ok: false, id: 2, time: 420, name: 'child', fullname: '' }
  ],
  [ 'plan', { start: 1, end: 2 } ],
  [ 'comment', '# failed 1 of 2 tests\\n' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 2,
      pass: 1,
      fail: 1,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: 1,
        end: 2,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: [
        Result {
          ok: false,
          id: 2,
          time: 420,
          name: 'child',
          fullname: ''
        }
      ]
    }
  ]
]

`

exports[`test/cmd.js TAP basic no args > output 3`] = `
[
  [ 'version', 13 ],
  [
    'assert',
    Result {
      ok: true,
      id: 1,
      name: "i'm sure this will be fine",
      fullname: ''
    }
  ],
  [ 'bailout', '' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 1,
      pass: 1,
      fail: 0,
      bailout: true,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: null,
        end: null,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic no args > output 4`] = `
[
  [ 'version', 13 ],
  [ 'bailout', '# i have my reasons' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 0,
      pass: 0,
      fail: 0,
      bailout: '# i have my reasons',
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: null,
        end: null,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic no args > stderr 1`] = `

`

exports[`test/cmd.js TAP basic no args > stderr 2`] = `

`

exports[`test/cmd.js TAP basic no args > stderr 3`] = `

`

exports[`test/cmd.js TAP basic no args > stderr 4`] = `

`

exports[`test/cmd.js TAP basic silent > error 1`] = `
0
`

exports[`test/cmd.js TAP basic silent > error 2`] = `
1
`

exports[`test/cmd.js TAP basic silent > error 3`] = `
1
`

exports[`test/cmd.js TAP basic silent > error 4`] = `
1
`

exports[`test/cmd.js TAP basic silent > output 1`] = `

`

exports[`test/cmd.js TAP basic silent > output 2`] = `

`

exports[`test/cmd.js TAP basic silent > output 3`] = `

`

exports[`test/cmd.js TAP basic silent > output 4`] = `

`

exports[`test/cmd.js TAP basic silent > stderr 1`] = `

`

exports[`test/cmd.js TAP basic silent > stderr 2`] = `

`

exports[`test/cmd.js TAP basic silent > stderr 3`] = `

`

exports[`test/cmd.js TAP basic silent > stderr 4`] = `

`

exports[`test/cmd.js TAP basic silent strict > error 1`] = `
1
`

exports[`test/cmd.js TAP basic silent strict > error 2`] = `
1
`

exports[`test/cmd.js TAP basic silent strict > error 3`] = `
1
`

exports[`test/cmd.js TAP basic silent strict > error 4`] = `
1
`

exports[`test/cmd.js TAP basic silent strict > output 1`] = `

`

exports[`test/cmd.js TAP basic silent strict > output 2`] = `

`

exports[`test/cmd.js TAP basic silent strict > output 3`] = `

`

exports[`test/cmd.js TAP basic silent strict > output 4`] = `

`

exports[`test/cmd.js TAP basic silent strict > stderr 1`] = `

`

exports[`test/cmd.js TAP basic silent strict > stderr 2`] = `

`

exports[`test/cmd.js TAP basic silent strict > stderr 3`] = `

`

exports[`test/cmd.js TAP basic silent strict > stderr 4`] = `

`

exports[`test/cmd.js TAP basic strict > error 1`] = `
1
`

exports[`test/cmd.js TAP basic strict > error 2`] = `
1
`

exports[`test/cmd.js TAP basic strict > error 3`] = `
1
`

exports[`test/cmd.js TAP basic strict > error 4`] = `
1
`

exports[`test/cmd.js TAP basic strict > output 1`] = `
[
  [ 'version', 13 ],
  [
    'assert',
    Result { ok: true, id: 1, name: 'this is fine', fullname: '' }
  ],
  [
    'child',
    [
      [ 'comment', '# Subtest: child\\n' ],
      [
        'assert',
        Result {
          ok: true,
          id: 1,
          name: 'this is fine',
          fullname: 'child'
        }
      ],
      [ 'pragma', 'strict', true ],
      [
        'assert',
        Result {
          ok: true,
          id: 2,
          name: 'also fine',
          fullname: 'child'
        }
      ],
      [ 'assert', Result { ok: true, id: 3, fullname: 'child' } ],
      [ 'comment', '# some comment\\n' ],
      [ 'plan', { start: 1, end: 3 } ],
      [ 'comment', '# failed 2 of 3 tests\\n' ],
      [
        'complete',
        FinalResults {
          ok: false,
          count: 3,
          pass: 3,
          fail: 2,
          bailout: false,
          todo: 0,
          skip: 0,
          plan: FinalPlan {
            start: 1,
            end: 3,
            skipAll: false,
            skipReason: '',
            comment: ''
          },
          failures: [
            {
              tapError: 'Non-TAP data encountered in strict mode',
              data: 'blearajn9aefnzxrfoas\\n'
            },
            {
              tapError: 'Non-TAP data encountered in strict mode',
              data: '           \\n'
            }
          ]
        }
      ]
    ]
  ],
  [ 'extra', '    blearajn9aefnzxrfoas\\n' ],
  [ 'extra', '               \\n' ],
  [
    'assert',
    Result {
      ok: true,
      id: 2,
      buffered: true,
      name: 'child',
      fullname: ''
    }
  ],
  [ 'plan', { start: 1, end: 2 } ],
  [ 'comment', '# failed 2 of 2 tests\\n' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 2,
      pass: 2,
      fail: 2,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: 1,
        end: 2,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: [
        {
          tapError: 'Non-TAP data encountered in strict mode',
          data: 'blearajn9aefnzxrfoas\\n'
        },
        {
          tapError: 'Non-TAP data encountered in strict mode',
          data: '           \\n'
        }
      ]
    }
  ]
]

`

exports[`test/cmd.js TAP basic strict > output 2`] = `
[
  [ 'version', 13 ],
  [
    'assert',
    Result { ok: true, id: 1, name: 'this is fine', fullname: '' }
  ],
  [
    'child',
    [
      [ 'comment', '# Subtest: child\\n' ],
      [
        'assert',
        Result {
          ok: false,
          id: 1,
          name: 'this is fine',
          diag: { not: 'ok', this: 'is fine' },
          fullname: 'child'
        }
      ],
      [ 'pragma', 'strict', true ],
      [ 'pragma', 'blerg', false ],
      [
        'assert',
        Result {
          ok: true,
          id: 2,
          todo: true,
          name: 'also fine',
          fullname: 'child'
        }
      ],
      [
        'assert',
        Result {
          ok: true,
          id: 3,
          todo: 'later is never',
          name: 'do later',
          fullname: 'child'
        }
      ],
      [
        'assert',
        Result {
          ok: true,
          id: 4,
          skip: true,
          name: 'rope',
          fullname: 'child'
        }
      ],
      [
        'assert',
        Result {
          ok: true,
          id: 4,
          skip: 'is piks backward',
          name: 'piks',
          fullname: 'child'
        }
      ],
      [ 'comment', '# some comment\\n' ],
      [ 'plan', { start: 1, end: 4, comment: 'plan comment' } ],
      [ 'comment', '# test count(5) != plan(4)\\n' ],
      [ 'comment', '# failed 3 of 5 tests\\n' ],
      [ 'comment', '# todo: 2\\n' ],
      [ 'comment', '# skip: 2\\n' ],
      [
        'complete',
        FinalResults {
          ok: false,
          count: 5,
          pass: 4,
          fail: 3,
          bailout: false,
          todo: 2,
          skip: 2,
          plan: FinalPlan {
            start: 1,
            end: 4,
            skipAll: false,
            skipReason: '',
            comment: 'plan comment'
          },
          failures: [
            {
              tapError: 'Non-TAP data encountered in strict mode',
              data: 'blearajn9aefnzxrfoas\\n'
            },
            {
              tapError: 'Non-TAP data encountered in strict mode',
              data: '           \\n'
            },
            Result {
              ok: false,
              id: 1,
              name: 'this is fine',
              diag: { not: 'ok', this: 'is fine' },
              fullname: 'child'
            }
          ]
        }
      ]
    ]
  ],
  [ 'extra', '    blearajn9aefnzxrfoas\\n' ],
  [ 'extra', '               \\n' ],
  [
    'assert',
    Result { ok: false, id: 2, time: 420, name: 'child', fullname: '' }
  ],
  [ 'plan', { start: 1, end: 2 } ],
  [ 'comment', '# failed 3 of 2 tests\\n' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 2,
      pass: 1,
      fail: 3,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: 1,
        end: 2,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: [
        {
          tapError: 'Non-TAP data encountered in strict mode',
          data: 'blearajn9aefnzxrfoas\\n'
        },
        {
          tapError: 'Non-TAP data encountered in strict mode',
          data: '           \\n'
        },
        Result {
          ok: false,
          id: 2,
          time: 420,
          name: 'child',
          fullname: ''
        }
      ]
    }
  ]
]

`

exports[`test/cmd.js TAP basic strict > output 3`] = `
[
  [ 'version', 13 ],
  [
    'assert',
    Result {
      ok: true,
      id: 1,
      name: "i'm sure this will be fine",
      fullname: ''
    }
  ],
  [ 'bailout', '' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 1,
      pass: 1,
      fail: 0,
      bailout: true,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: null,
        end: null,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic strict > output 4`] = `
[
  [ 'version', 13 ],
  [ 'bailout', '# i have my reasons' ],
  [
    'complete',
    FinalResults {
      ok: false,
      count: 0,
      pass: 0,
      fail: 0,
      bailout: '# i have my reasons',
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: null,
        end: null,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP basic strict > stderr 1`] = `

`

exports[`test/cmd.js TAP basic strict > stderr 2`] = `

`

exports[`test/cmd.js TAP basic strict > stderr 3`] = `

`

exports[`test/cmd.js TAP basic strict > stderr 4`] = `

`

exports[`test/cmd.js TAP basic t > error 1`] = `
0
`

exports[`test/cmd.js TAP basic t > error 2`] = `
1
`

exports[`test/cmd.js TAP basic t > error 3`] = `
1
`

exports[`test/cmd.js TAP basic t > error 4`] = `
1
`

exports[`test/cmd.js TAP basic t > output 1`] = `
TAP version 13
ok 1 - this is fine
# Subtest: child
    ok 1 - this is fine
    pragma +strict
    ok 2 - also fine
    ok 3
    # some comment
    1..3
    blearajn9aefnzxrfoas
               
ok 2 - child
1..2


`

exports[`test/cmd.js TAP basic t > output 2`] = `
TAP version 13
ok 1 - this is fine
# Subtest: child
    not ok 1 - this is fine
      ---
      not: ok
      this: is fine
      ...
    pragma +strict
    pragma -blerg
    ok 2 - also fine # TODO
    ok 3 - do later # TODO later is never
    ok 4 - rope # SKIP
    ok 4 - piks # SKIP is piks backward
    # some comment
    1..4 # plan comment
    # test count(5) != plan(4)
    # failed 1 of 5 tests
    # todo: 2
    # skip: 2
    blearajn9aefnzxrfoas
               
not ok 2 - child # time=420ms
1..2
# failed 1 of 2 tests


`

exports[`test/cmd.js TAP basic t > output 3`] = `
TAP version 13
ok 1 - i'm sure this will be fine
Bail out!


`

exports[`test/cmd.js TAP basic t > output 4`] = `
TAP version 13
Bail out! # i have my reasons


`

exports[`test/cmd.js TAP basic t > stderr 1`] = `

`

exports[`test/cmd.js TAP basic t > stderr 2`] = `

`

exports[`test/cmd.js TAP basic t > stderr 3`] = `

`

exports[`test/cmd.js TAP basic t > stderr 4`] = `

`

exports[`test/cmd.js TAP help > error 1`] = `
undefined
`

exports[`test/cmd.js TAP help > output 1`] = `
Usage:
  tap-parser <options>

Parses TAP data from stdin, and outputs the parsed result
in the format specified by the options.  Default output is
uses node's \`util.inspect()\` method.

Options:

  -j [<indent>] | --json[=indent]
    Output event data as JSON with the specified indentation (default=2)

  -t | --tap
    Output data as reconstituted TAP based on parsed results

  -l | --lines
    Output each parsed line as it is recognized by the parser

  -b | --bail
    Emit a \`Bail out!\` at the first failed test point encountered

  -B | --no-bail
    Do not bail out at the first failed test point encountered
    (Default)

  -f | --flat
    Flatten all assertions to the top level parser

  -F | --no-flat
    Do not flatten all assertions to the top level parser
    (Default)

  -w | --ignore-all-whitespace
    Skip over blank lines outside of YAML blocks

  -o | --omit-version
    Ignore the \`TAP version 13\` line at the start of tests

  --strict
    Run the parser in strict mode

  --no-strict
    Do not run the parser in strict mode

  -s | --silent
    Do not print output, just exit success/failure based on TAP stream


`

exports[`test/cmd.js TAP help > stderr 1`] = `

`

exports[`test/cmd.js TAP json output formatting --json -f > error 1`] = `
0
`

exports[`test/cmd.js TAP json output formatting --json -f > output 1`] = `
[
  [
    "version",
    13
  ],
  [
    "result",
    {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "fullname": "child"
    }
  ],
  [
    "plan",
    {
      "start": 1,
      "end": 1
    }
  ],
  [
    "complete",
    {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": ""
      },
      "failures": []
    }
  ]
]

`

exports[`test/cmd.js TAP json output formatting --json -f > stderr 1`] = `

`

exports[`test/cmd.js TAP json output formatting --json 1 > error 1`] = `
0
`

exports[`test/cmd.js TAP json output formatting --json 1 > output 1`] = `
[
 [
  "version",
  13
 ],
 [
  "child",
  [
   [
    "comment",
    "# Subtest: child\\n"
   ],
   [
    "assert",
    {
     "ok": true,
     "id": 1,
     "name": "this is fine",
     "fullname": "child"
    }
   ],
   [
    "plan",
    {
     "start": 1,
     "end": 1
    }
   ],
   [
    "complete",
    {
     "ok": true,
     "count": 1,
     "pass": 1,
     "fail": 0,
     "bailout": false,
     "todo": 0,
     "skip": 0,
     "plan": {
      "start": 1,
      "end": 1,
      "skipAll": false,
      "skipReason": "",
      "comment": ""
     },
     "failures": []
    }
   ]
  ]
 ],
 [
  "assert",
  {
   "ok": true,
   "id": 1,
   "name": "child",
   "fullname": ""
  }
 ],
 [
  "plan",
  {
   "start": 1,
   "end": 1
  }
 ],
 [
  "complete",
  {
   "ok": true,
   "count": 1,
   "pass": 1,
   "fail": 0,
   "bailout": false,
   "todo": 0,
   "skip": 0,
   "plan": {
    "start": 1,
    "end": 1,
    "skipAll": false,
    "skipReason": "",
    "comment": ""
   },
   "failures": []
  }
 ]
]

`

exports[`test/cmd.js TAP json output formatting --json 1 > stderr 1`] = `

`

exports[`test/cmd.js TAP json output formatting --json=1 > error 1`] = `
0
`

exports[`test/cmd.js TAP json output formatting --json=1 > output 1`] = `
[
 [
  "version",
  13
 ],
 [
  "child",
  [
   [
    "comment",
    "# Subtest: child\\n"
   ],
   [
    "assert",
    {
     "ok": true,
     "id": 1,
     "name": "this is fine",
     "fullname": "child"
    }
   ],
   [
    "plan",
    {
     "start": 1,
     "end": 1
    }
   ],
   [
    "complete",
    {
     "ok": true,
     "count": 1,
     "pass": 1,
     "fail": 0,
     "bailout": false,
     "todo": 0,
     "skip": 0,
     "plan": {
      "start": 1,
      "end": 1,
      "skipAll": false,
      "skipReason": "",
      "comment": ""
     },
     "failures": []
    }
   ]
  ]
 ],
 [
  "assert",
  {
   "ok": true,
   "id": 1,
   "name": "child",
   "fullname": ""
  }
 ],
 [
  "plan",
  {
   "start": 1,
   "end": 1
  }
 ],
 [
  "complete",
  {
   "ok": true,
   "count": 1,
   "pass": 1,
   "fail": 0,
   "bailout": false,
   "todo": 0,
   "skip": 0,
   "plan": {
    "start": 1,
    "end": 1,
    "skipAll": false,
    "skipReason": "",
    "comment": ""
   },
   "failures": []
  }
 ]
]

`

exports[`test/cmd.js TAP json output formatting --json=1 > stderr 1`] = `

`

exports[`test/cmd.js TAP json output formatting -j 1 > error 1`] = `
0
`

exports[`test/cmd.js TAP json output formatting -j 1 > output 1`] = `
[
 [
  "version",
  13
 ],
 [
  "child",
  [
   [
    "comment",
    "# Subtest: child\\n"
   ],
   [
    "assert",
    {
     "ok": true,
     "id": 1,
     "name": "this is fine",
     "fullname": "child"
    }
   ],
   [
    "plan",
    {
     "start": 1,
     "end": 1
    }
   ],
   [
    "complete",
    {
     "ok": true,
     "count": 1,
     "pass": 1,
     "fail": 0,
     "bailout": false,
     "todo": 0,
     "skip": 0,
     "plan": {
      "start": 1,
      "end": 1,
      "skipAll": false,
      "skipReason": "",
      "comment": ""
     },
     "failures": []
    }
   ]
  ]
 ],
 [
  "assert",
  {
   "ok": true,
   "id": 1,
   "name": "child",
   "fullname": ""
  }
 ],
 [
  "plan",
  {
   "start": 1,
   "end": 1
  }
 ],
 [
  "complete",
  {
   "ok": true,
   "count": 1,
   "pass": 1,
   "fail": 0,
   "bailout": false,
   "todo": 0,
   "skip": 0,
   "plan": {
    "start": 1,
    "end": 1,
    "skipAll": false,
    "skipReason": "",
    "comment": ""
   },
   "failures": []
  }
 ]
]

`

exports[`test/cmd.js TAP json output formatting -j 1 > stderr 1`] = `

`

exports[`test/cmd.js TAP json output formatting -j > error 1`] = `
0
`

exports[`test/cmd.js TAP json output formatting -j > output 1`] = `
[
  [
    "version",
    13
  ],
  [
    "child",
    [
      [
        "comment",
        "# Subtest: child\\n"
      ],
      [
        "assert",
        {
          "ok": true,
          "id": 1,
          "name": "this is fine",
          "fullname": "child"
        }
      ],
      [
        "plan",
        {
          "start": 1,
          "end": 1
        }
      ],
      [
        "complete",
        {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": ""
          },
          "failures": []
        }
      ]
    ]
  ],
  [
    "assert",
    {
      "ok": true,
      "id": 1,
      "name": "child",
      "fullname": ""
    }
  ],
  [
    "plan",
    {
      "start": 1,
      "end": 1
    }
  ],
  [
    "complete",
    {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": ""
      },
      "failures": []
    }
  ]
]

`

exports[`test/cmd.js TAP json output formatting -j > stderr 1`] = `

`

exports[`test/cmd.js TAP unrecognized arg > error 1`] = `
0
`

exports[`test/cmd.js TAP unrecognized arg > output 1`] = `
[
  [ 'plan', { start: 1, end: 0, comment: 'no tests found' } ],
  [
    'complete',
    FinalResults {
      ok: true,
      count: 0,
      pass: 0,
      fail: 0,
      bailout: false,
      todo: 0,
      skip: 0,
      plan: FinalPlan {
        start: 1,
        end: 0,
        skipAll: true,
        skipReason: 'no tests found',
        comment: 'no tests found'
      },
      failures: []
    }
  ]
]

`

exports[`test/cmd.js TAP unrecognized arg > stderr 1`] = `
Unrecognized arg: %j

`
