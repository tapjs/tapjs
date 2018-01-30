/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/test.js TAP short output checks no plan no options > no plan 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`test/test.js TAP short output checks no plan buffered > no plan 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`test/test.js TAP short output checks no plan bailout > no plan 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`test/test.js TAP short output checks no plan runOnly > no plan 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`test/test.js TAP short output checks plan no options > plan 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks plan buffered > plan 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks plan bailout > plan 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks plan runOnly > plan 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks comment no options > comment 1`] = `
TAP version 13
# this is fine
1..0

`

exports[`test/test.js TAP short output checks comment buffered > comment 1`] = `
TAP version 13
# this is fine
1..0

`

exports[`test/test.js TAP short output checks comment bailout > comment 1`] = `
TAP version 13
# this is fine
1..0

`

exports[`test/test.js TAP short output checks comment runOnly > comment 1`] = `
TAP version 13
# this is fine
1..0

`

exports[`test/test.js TAP short output checks pragma no options > pragma 1`] = `
TAP version 13
pragma +strict
pragma -strict
1..0

`

exports[`test/test.js TAP short output checks pragma buffered > pragma 1`] = `
TAP version 13
pragma +strict
pragma -strict
1..0

`

exports[`test/test.js TAP short output checks pragma bailout > pragma 1`] = `
TAP version 13
pragma +strict
pragma -strict
1..0

`

exports[`test/test.js TAP short output checks pragma runOnly > pragma 1`] = `
TAP version 13
pragma +strict
pragma -strict
1..0

`

exports[`test/test.js TAP short output checks todo no options > todo 1`] = `
TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.notOk(true, 'i will do this later', { todo: true })
  ...

not ok 2 - expect falsey value # TODO later
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.notOk(true, { todo: 'later' })
  ...

ok 3 - expect falsey value
ok 4 - i will do this later # TODO
not ok 5 - expect truthy value # SKIP
ok 6 - i did not do this later # SKIP
1..6
# todo: 3
# skip: 2

`

exports[`test/test.js TAP short output checks todo buffered > todo 1`] = `
TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.notOk(true, 'i will do this later', { todo: true })
  ...

not ok 2 - expect falsey value # TODO later
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.notOk(true, { todo: 'later' })
  ...

ok 3 - expect falsey value
ok 4 - i will do this later # TODO
not ok 5 - expect truthy value # SKIP
ok 6 - i did not do this later # SKIP
1..6
# todo: 3
# skip: 2

`

exports[`test/test.js TAP short output checks todo bailout > todo 1`] = `
TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.notOk(true, 'i will do this later', { todo: true })
  ...

not ok 2 - expect falsey value # TODO later
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.notOk(true, { todo: 'later' })
  ...

ok 3 - expect falsey value
ok 4 - i will do this later # TODO
not ok 5 - expect truthy value # SKIP
ok 6 - i did not do this later # SKIP
1..6
# todo: 3
# skip: 2

`

exports[`test/test.js TAP short output checks todo runOnly > todo 1`] = `
TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.notOk(true, 'i will do this later', { todo: true })
  ...

not ok 2 - expect falsey value # TODO later
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.notOk(true, { todo: 'later' })
  ...

ok 3 - expect falsey value
ok 4 - i will do this later # SKIP filter: only
not ok 5 - expect truthy value # SKIP
ok 6 - i did not do this later # SKIP filter: only
1..6
# todo: 2
# skip: 3

`

exports[`test/test.js TAP short output checks only no options > only 1`] = `
TAP version 13
# "run this with a comment" has \`only\` set but all tests run
# Subtest: run this with a comment
    1..0
ok 1 - run this with a comment # {time}

# Subtest: this is a child test
    1..0
ok 2 - this is a child test # {time}

# "run this with a comment" has \`only\` set but all tests run
# Subtest: run this with a comment
    1..0
ok 3 - run this with a comment # {time}

1..3

`

exports[`test/test.js TAP short output checks only buffered > only 1`] = `
TAP version 13
# "run this with a comment" has \`only\` set but all tests run
# Subtest: run this with a comment
    1..0
ok 1 - run this with a comment # {time}

# Subtest: this is a child test
    1..0
ok 2 - this is a child test # {time}

# "run this with a comment" has \`only\` set but all tests run
# Subtest: run this with a comment
    1..0
ok 3 - run this with a comment # {time}

1..3

`

exports[`test/test.js TAP short output checks only bailout > only 1`] = `
TAP version 13
# "run this with a comment" has \`only\` set but all tests run
# Subtest: run this with a comment
    1..0
ok 1 - run this with a comment # {time}

# Subtest: this is a child test
    1..0
ok 2 - this is a child test # {time}

# "run this with a comment" has \`only\` set but all tests run
# Subtest: run this with a comment
    1..0
ok 3 - run this with a comment # {time}

1..3

`

exports[`test/test.js TAP short output checks only runOnly > only 1`] = `
TAP version 13
# "run this with a comment" has \`only\` set but all tests run
# Subtest: run this with a comment
    1..0
ok 1 - run this with a comment # {time}

# Subtest: this is a child test
    1..0
ok 2 - this is a child test # {time}

# "run this with a comment" has \`only\` set but all tests run
# Subtest: run this with a comment
    1..0
ok 3 - run this with a comment # {time}

1..3

`

exports[`test/test.js TAP short output checks no plan fail no options > no plan fail 1`] = `
TAP version 13
not ok 1 - this is fine
not ok 2 - (unnamed test) # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.fail({ todo: true })
  ...

not ok 3 - this is fine
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.fail('this is fine')
  stack: |
    {STACK}
  ...

1..3
# failed 3 of 3 tests
# todo: 1

`

exports[`test/test.js TAP short output checks no plan fail buffered > no plan fail 1`] = `
TAP version 13
not ok 1 - this is fine
not ok 2 - (unnamed test) # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.fail({ todo: true })
  ...

not ok 3 - this is fine
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.fail('this is fine')
  stack: |
    {STACK}
  ...

1..3
# failed 3 of 3 tests
# todo: 1

`

exports[`test/test.js TAP short output checks no plan fail bailout > no plan fail 1`] = `
TAP version 13
not ok 1 - this is fine
Bail out! # this is fine
BAILOUT: "# this is fine"
`

exports[`test/test.js TAP short output checks no plan fail runOnly > no plan fail 1`] = `
TAP version 13
not ok 1 - this is fine
not ok 2 - (unnamed test) # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.fail({ todo: true })
  ...

not ok 3 - this is fine
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.fail('this is fine')
  stack: |
    {STACK}
  ...

1..3
# failed 3 of 3 tests
# todo: 1

`

exports[`test/test.js TAP short output checks plan fail no options > plan fail 1`] = `
TAP version 13
1..1 # expect some failure here
not ok 1 - this is fine
# failed 1 test

`

exports[`test/test.js TAP short output checks plan fail buffered > plan fail 1`] = `
TAP version 13
1..1 # expect some failure here
not ok 1 - this is fine
# failed 1 test

`

exports[`test/test.js TAP short output checks plan fail bailout > plan fail 1`] = `
TAP version 13
1..1 # expect some failure here
not ok 1 - this is fine
Bail out! # this is fine
BAILOUT: "# this is fine"
`

exports[`test/test.js TAP short output checks plan fail runOnly > plan fail 1`] = `
TAP version 13
1..1 # expect some failure here
not ok 1 - this is fine
# failed 1 test

`

exports[`test/test.js TAP short output checks fail then end no options > fail then end 1`] = `
TAP version 13
# Subtest: child
    not ok 1 - this is not ok
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |
        tt.fail('this is not ok')
      stack: |
        {STACK}
      ...
    
    1..1
    # failed 1 test
not ok 1 - child # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks fail then end buffered > fail then end 1`] = `
TAP version 13
# Subtest: child
    not ok 1 - this is not ok
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |
        tt.fail('this is not ok')
      stack: |
        {STACK}
      ...
    
    1..1
    # failed 1 test
not ok 1 - child # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks fail then end bailout > fail then end 1`] = `
TAP version 13
# Subtest: child
    not ok 1 - this is not ok
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |
        tt.fail('this is not ok')
      stack: |
        {STACK}
      ...
    
    Bail out! # this is not ok
BAILOUT: "# this is not ok"
`

exports[`test/test.js TAP short output checks fail then end runOnly > fail then end 1`] = `
TAP version 13
ok 1 - child # SKIP filter: only
1..1
# skip: 1

`

exports[`test/test.js TAP short output checks planned skip no options > planned skip 1`] = `
TAP version 13
1..0 # skip this one

`

exports[`test/test.js TAP short output checks planned skip buffered > planned skip 1`] = `
TAP version 13
1..0 # skip this one

`

exports[`test/test.js TAP short output checks planned skip bailout > planned skip 1`] = `
TAP version 13
1..0 # skip this one

`

exports[`test/test.js TAP short output checks planned skip runOnly > planned skip 1`] = `
TAP version 13
1..0 # skip this one

`

exports[`test/test.js TAP short output checks multi-plan throws no options > multi-plan throws 1`] = `
TAP version 13
1..1
ok 1 - expected to throw

`

exports[`test/test.js TAP short output checks multi-plan throws buffered > multi-plan throws 1`] = `
TAP version 13
1..1
ok 1 - expected to throw

`

exports[`test/test.js TAP short output checks multi-plan throws bailout > multi-plan throws 1`] = `
TAP version 13
1..1
ok 1 - expected to throw

`

exports[`test/test.js TAP short output checks multi-plan throws runOnly > multi-plan throws 1`] = `
TAP version 13
1..1
ok 1 - expected to throw

`

exports[`test/test.js TAP short output checks negative plan throws no options > negative plan throws 1`] = `
TAP version 13
ok 1 - expected to throw
1..1

`

exports[`test/test.js TAP short output checks negative plan throws buffered > negative plan throws 1`] = `
TAP version 13
ok 1 - expected to throw
1..1

`

exports[`test/test.js TAP short output checks negative plan throws bailout > negative plan throws 1`] = `
TAP version 13
ok 1 - expected to throw
1..1

`

exports[`test/test.js TAP short output checks negative plan throws runOnly > negative plan throws 1`] = `
TAP version 13
ok 1 - expected to throw
1..1

`

exports[`test/test.js TAP short output checks expect fail no options > expect fail 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks expect fail buffered > expect fail 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks expect fail bailout > expect fail 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks expect fail runOnly > expect fail 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks sub no options > sub 1`] = `
TAP version 13
ok 1 - named child # {time} {
    ok 1 - this is fine
    ok 2 - (unnamed test)
    ok 3 - (unnamed test) # TODO
    1..3
    # todo: 1
}

# Subtest: named_function
    1..1
    ok 1 - also fine
ok 2 - named_function # {time}

# Subtest: promisey
    ok 1 - i promise, it is fine
    1..1
ok 3 - promisey # {time}

1..3

`

exports[`test/test.js TAP short output checks sub buffered > sub 1`] = `
TAP version 13
ok 1 - named child # {time} {
    ok 1 - this is fine
    ok 2 - (unnamed test)
    ok 3 - (unnamed test) # TODO
    1..3
    # todo: 1
}

# Subtest: named_function
    1..1
    ok 1 - also fine
ok 2 - named_function # {time}

# Subtest: promisey
    ok 1 - i promise, it is fine
    1..1
ok 3 - promisey # {time}

1..3

`

exports[`test/test.js TAP short output checks sub bailout > sub 1`] = `
TAP version 13
ok 1 - named child # {time} {
    ok 1 - this is fine
    ok 2 - (unnamed test)
    ok 3 - (unnamed test) # TODO
    1..3
    # todo: 1
}

# Subtest: named_function
    1..1
    ok 1 - also fine
ok 2 - named_function # {time}

# Subtest: promisey
    ok 1 - i promise, it is fine
    1..1
ok 3 - promisey # {time}

1..3

`

exports[`test/test.js TAP short output checks sub runOnly > sub 1`] = `
TAP version 13
ok 1 - named child # SKIP filter: only
ok 2 - named_function # SKIP filter: only
ok 3 - promisey # SKIP filter: only
1..3
# skip: 3

`

exports[`test/test.js TAP short output checks parallel sub no options > parallel sub 1`] = `
TAP version 13
1..2
ok 1 - slow child # {time} {
    1..0
}

ok 2 - fast child # {time} {
    ok 1 - slow is going
    1..1
}


`

exports[`test/test.js TAP short output checks parallel sub buffered > parallel sub 1`] = `
TAP version 13
1..2
ok 1 - slow child # {time} {
    1..0
}

ok 2 - fast child # {time} {
    ok 1 - slow is going
    1..1
}


`

exports[`test/test.js TAP short output checks parallel sub bailout > parallel sub 1`] = `
TAP version 13
1..2
ok 1 - slow child # {time} {
    1..0
}

ok 2 - fast child # {time} {
    ok 1 - slow is going
    1..1
}


`

exports[`test/test.js TAP short output checks parallel sub runOnly > parallel sub 1`] = `
TAP version 13
1..2
ok 1 - slow child # SKIP filter: only
ok 2 - fast child # SKIP filter: only
# skip: 2

`

exports[`test/test.js TAP short output checks reasoned bailout no options > reasoned bailout 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    Bail out! not fine
BAILOUT: "not fine"
`

exports[`test/test.js TAP short output checks reasoned bailout buffered > reasoned bailout 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    Bail out! not fine
BAILOUT: "not fine"
`

exports[`test/test.js TAP short output checks reasoned bailout bailout > reasoned bailout 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    Bail out! not fine
BAILOUT: "not fine"
`

exports[`test/test.js TAP short output checks reasoned bailout runOnly > reasoned bailout 1`] = `
TAP version 13
ok 1 - (unnamed test) # SKIP filter: only
1..1
# skip: 1

`

exports[`test/test.js TAP short output checks unreasonable bailout no options > unreasonable bailout 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    Bail out!

`

exports[`test/test.js TAP short output checks unreasonable bailout buffered > unreasonable bailout 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    Bail out!

`

exports[`test/test.js TAP short output checks unreasonable bailout bailout > unreasonable bailout 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    Bail out!

`

exports[`test/test.js TAP short output checks unreasonable bailout runOnly > unreasonable bailout 1`] = `
TAP version 13
ok 1 - (unnamed test) # SKIP filter: only
1..1
# skip: 1

`

exports[`test/test.js TAP short output checks bailout after end no options > bailout after end 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    1..1
Bail out! not fine
BAILOUT: "not fine"
`

exports[`test/test.js TAP short output checks bailout after end buffered > bailout after end 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    1..1
Bail out! not fine
BAILOUT: "not fine"
`

exports[`test/test.js TAP short output checks bailout after end bailout > bailout after end 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    1..1
Bail out! not fine
BAILOUT: "not fine"
`

exports[`test/test.js TAP short output checks bailout after end runOnly > bailout after end 1`] = `
TAP version 13
ok 1 - (unnamed test) # SKIP filter: only
1..1
# skip: 1

`

exports[`test/test.js TAP short output checks diags no options > diags 1`] = `
TAP version 13
ok 1 - has diags
  ---
  foo: 1
  ...

not ok 2 - fails without diag
ok 3 - has diags
  ---
  foo: 1
  ...

not ok 4 - fails without diag
ok 5 - has diags
  ---
  foo: 1
  ...

not ok 6 - fails without diag
1..6
# failed 3 of 6 tests

`

exports[`test/test.js TAP short output checks diags buffered > diags 1`] = `
TAP version 13
ok 1 - has diags
  ---
  foo: 1
  ...

not ok 2 - fails without diag
ok 3 - has diags
  ---
  foo: 1
  ...

not ok 4 - fails without diag
ok 5 - has diags
  ---
  foo: 1
  ...

not ok 6 - fails without diag
1..6
# failed 3 of 6 tests

`

exports[`test/test.js TAP short output checks diags bailout > diags 1`] = `
TAP version 13
ok 1 - has diags
  ---
  foo: 1
  ...

not ok 2 - fails without diag
Bail out! # fails without diag
BAILOUT: "# fails without diag"
`

exports[`test/test.js TAP short output checks diags runOnly > diags 1`] = `
TAP version 13
ok 1 - has diags
  ---
  foo: 1
  ...

not ok 2 - fails without diag
ok 3 - has diags
  ---
  foo: 1
  ...

not ok 4 - fails without diag
ok 5 - has diags
  ---
  foo: 1
  ...

not ok 6 - fails without diag
1..6
# failed 3 of 6 tests

`

exports[`test/test.js TAP short output checks gentle thrower no options > gentle thrower 1`] = `
TAP version 13
not ok 1 - ok
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    'gentle thrower': tt => tt.threw(new Error('ok')),
  stack: |
    {STACK}
  ...

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks gentle thrower buffered > gentle thrower 1`] = `
TAP version 13
not ok 1 - ok
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    'gentle thrower': tt => tt.threw(new Error('ok')),
  stack: |
    {STACK}
  ...

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks gentle thrower bailout > gentle thrower 1`] = `
TAP version 13
not ok 1 - ok
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    'gentle thrower': tt => tt.threw(new Error('ok')),
  stack: |
    {STACK}
  ...

Bail out! # ok
BAILOUT: "# ok"
`

exports[`test/test.js TAP short output checks gentle thrower runOnly > gentle thrower 1`] = `
TAP version 13
not ok 1 - ok
  ---
  at:
    line: #
    column: #
    file: test/test.js
  runOnly: true
  source: |
    'gentle thrower': tt => tt.threw(new Error('ok')),
  stack: |
    {STACK}
  ...

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks child thrower no options > child thrower 1`] = `
TAP version 13
# Subtest: child test
    not ok 1 - ok
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |
        tt.threw(new Error('ok'))).then(tt.end),
      stack: |
        {STACK}
      test: child test
      ...
    
    1..1
    # failed 1 test
not ok 1 - child test # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks child thrower buffered > child thrower 1`] = `
TAP version 13
# Subtest: child test
    not ok 1 - ok
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |
        tt.threw(new Error('ok'))).then(tt.end),
      stack: |
        {STACK}
      test: child test
      ...
    
    1..1
    # failed 1 test
not ok 1 - child test # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks child thrower bailout > child thrower 1`] = `
TAP version 13
# Subtest: child test
    not ok 1 - ok
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |
        tt.threw(new Error('ok'))).then(tt.end),
      stack: |
        {STACK}
      test: child test
      ...
    
    Bail out! # ok
BAILOUT: "# ok"
`

exports[`test/test.js TAP short output checks child thrower runOnly > child thrower 1`] = `
TAP version 13
ok 1 - child test # SKIP filter: only
1..1
# skip: 1

`

exports[`test/test.js TAP short output checks child end event thrower no options > child end event thrower 1`] = `
TAP version 13
# Subtest
    1..1
    ok 1 - should be equal
# end() event
ok 1 # {time}

not ok 2 - beep
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    throw new Error('beep')
  stack: |
    {STACK}
  ...

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP short output checks child end event thrower buffered > child end event thrower 1`] = `
TAP version 13
# Subtest
    1..1
    ok 1 - should be equal
# end() event
ok 1 # {time}

not ok 2 - beep
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    throw new Error('beep')
  stack: |
    {STACK}
  ...

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP short output checks child end event thrower bailout > child end event thrower 1`] = `
TAP version 13
# Subtest
    1..1
    ok 1 - should be equal
# end() event
ok 1 # {time}

not ok 2 - beep
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    throw new Error('beep')
  stack: |
    {STACK}
  ...

Bail out! # beep
BAILOUT: "# beep"
`

exports[`test/test.js TAP short output checks child end event thrower runOnly > child end event thrower 1`] = `
TAP version 13
ok 1 - (unnamed test) # SKIP filter: only
1..1
# skip: 1

`

exports[`test/test.js TAP assertions and weird stuff error > error 1`] = `
TAP version 13
ok 1 - this is not an error
not ok 2 - this error is poop
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    name: Error
    stack: |
      {STACK}
    message: 'fail: poop'
  source: |
    tt.error(new Error('fail: poop'), 'this error is poop')
  stack: |
    {STACK}
  ...

not ok 3 - fail: poop
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    name: Error
    stack: |
      {STACK}
    message: 'fail: poop'
  source: |
    tt.error(new Error('fail: poop'))
  stack: |
    {STACK}
  ...

not ok 4 - this error is "poop"
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found: 'fail: poop'
  source: |
    tt.error('fail: poop', 'this error is "poop"')
  stack: |
    {STACK}
  ...

not ok 5 - non-Error error encountered
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found: 'fail: poop'
  source: |
    tt.error('fail: poop')
  stack: |
    {STACK}
  ...

ok 6 - should not error # TODO
ok 7 - should not error
1..7
# failed 4 of 7 tests
# todo: 1

`

exports[`test/test.js TAP assertions and weird stuff equal > equal 1`] = `
TAP version 13
not ok 1 - should be equal
  ---
  at:
    line: #
    column: #
    file: test/test.js
  compare: ===
  found: 1
  source: |
    tt.equal(1, 2)
  stack: |
    {STACK}
  wanted: 2
  ...

not ok 2 - should be equal # SKIP
ok 3 - one is one
not ok 4 - should be equal
  ---
  at:
    line: #
    column: #
    file: test/test.js
  compare: ===
  found:
    foo: 1
  note: Objects never === one another
  source: |
    tt.equal({foo: 1}, {foo: 1})
  stack: |
    {STACK}
  wanted:
    foo: 1
  ...

1..4
# failed 3 of 4 tests
# skip: 1

`

exports[`test/test.js TAP assertions and weird stuff not > not 1`] = `
TAP version 13
ok 1 - should not be equal
ok 2 - should not be equal # SKIP
not ok 3 - one is not one
  ---
  at:
    line: #
    column: #
    file: test/test.js
  compare: '!=='
  doNotWant: 1
  found: 1
  source: |
    tt.not(1, 1, 'one is not one')
  stack: |
    {STACK}
  ...

ok 4 - should not be equal
1..4
# failed 1 of 4 tests
# skip: 1

`

exports[`test/test.js TAP assertions and weird stuff same > same 1`] = `
TAP version 13
ok 1 - should be equivalent
ok 2 - should be equivalent
ok 3 - object exactness
not ok 4 - should be equivalent # SKIP
ok 5 - this one passes
ok 6 - should not be equivalent # SKIP
not ok 7 - this one fails
  ---
  at:
    line: #
    column: #
    file: test/test.js
  doNotWant:
    foo:
      bar: '2'
  found:
    foo:
      bar: 2
  source: |
    tt.notSame({ foo: { bar: 2 } }, { foo: { bar: '2' } },
  stack: |
    {STACK}
  ...

not ok 8 - should be equivalent strictly # SKIP
not ok 9 - should be equivalent strictly
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    - 1
    - 2
    - 3
  source: |
    tt.strictSame([1, 2, 3], ['1', '2', '3'])
  stack: |
    {STACK}
  wanted:
    - '1'
    - '2'
    - '3'
  ...

ok 10 - should be equivalent strictly
ok 11 - should be equivalent strictly
ok 12 - should not be equivalent strictly # SKIP
ok 13 - this one passes
ok 14 - this one passes
not ok 15 - this one fails
  ---
  at:
    line: #
    column: #
    file: test/test.js
  doNotWant:
    foo:
      bar: 2
  found:
    foo:
      bar: 2
  source: |
    tt.notStrictSame({ foo: { bar: 2 } }, { foo: { bar: 2 } },
  stack: |
    {STACK}
  ...

1..15
# failed 5 of 15 tests
# skip: 4

`

exports[`test/test.js TAP assertions and weird stuff match > match 1`] = `
TAP version 13
ok 1 - should match pattern provided
not ok 2 - should match pattern provided
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    a: b
    c: /asdf/
  pattern:
    a: asdf
    c: 1
  source: |
    tt.match({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 })
  stack: |
    {STACK}
  ...

ok 3 - a message
not ok 4 - should match pattern provided # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    a: b
    c: /asdf/
  pattern:
    a: asdf
    c: 1
  source: |
    tt.match({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 },
  ...

not ok 5 - should not match pattern provided
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    a: b
    c: /asdf/
  pattern:
    a: 'function String() { [native code] }'
    c: 'function RegExp() { [native code] }'
  source: |
    tt.notMatch({ a: 'b', c: /asdf/ }, { a: String, c: RegExp })
  stack: |
    {STACK}
  ...

ok 6 - should not match pattern provided
not ok 7 - a message
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    a: b
    c: /asdf/
  pattern:
    a: 'function String() { [native code] }'
    c: 'function RegExp() { [native code] }'
  source: |
    tt.notMatch({ a: 'b', c: /asdf/ }, { a: String, c: RegExp },
  stack: |
    {STACK}
  ...

ok 8 - should not match pattern provided # TODO
1..8
# failed 4 of 8 tests
# todo: 2

`

exports[`test/test.js TAP assertions and weird stuff type > type 1`] = `
TAP version 13
not ok 1 - this fails
  ---
  at:
    line: #
    column: #
    file: test/test.js
  compare: ===
  found: 'null'
  source: |
    tt.type(null, 'object', 'this fails')
  stack: |
    {STACK}
  wanted: object
  ...

ok 2 - type is object
ok 3 - type is number
ok 4 - type is Test
not ok 5 - fails, anonymously
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found: Object
  source: |
    tt.type({}, function () {}, 'fails, anonymously')
  stack: |
    {STACK}
  wanted: (anonymous constructor)
  ...

ok 6 - a thing is a thing
ok 7 - arrows are functions
ok 8 - arrows are functions
not ok 9 - fail: arrows are not objects
  ---
  at:
    line: #
    column: #
    file: test/test.js
  compare: ===
  found: function
  source: |
    tt.type(() => {}, Object, 'fail: arrows are not objects')
  stack: |
    {STACK}
  wanted: Object
  ...

ok 10 - type is object
ok 11 - type is Test
ok 12 - type is EventEmitter
1..12
# failed 3 of 12 tests

`

exports[`test/test.js TAP assertions and weird stuff throws > throws 1`] = `
TAP version 13
ok 1 - expected to throw
ok 2 - expected to throw
ok 3 - expected to throw: TypeError x
ok 4 - expected to throw
ok 5 - expected to throw: Error x
ok 6 - expected to throw
ok 7 - expected to throw
ok 8 - expected to throw
ok 9 - expected to throw: Error noent
not ok 10 - fail: does not throw actually
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.throws(() => 'doesnt tho', 'fail: does not throw actually')
  stack: |
    {STACK}
  ...

ok 11 - expected to throw # SKIP
ok 12 - expected to throw
ok 13 - extra functions are no-ops for bw comp
ok 14 - todo # TODO
1..14
# failed 1 of 14 tests
# todo: 1
# skip: 1

`

exports[`test/test.js TAP assertions and weird stuff doesNotThrow > doesNotThrow 1`] = `
TAP version 13
ok 1 - this is fine
ok 2 - expected to not throw # TODO
ok 3 - reverse args
ok 4 - this is todo # TODO
not ok 5 - fail
  ---
  at:
    line: #
    column: #
    file: test/test.js
  message: ouch
  source: |
    throw new Error('ouch')
  stack: |
    {STACK}
  ...

1..5
# failed 1 of 5 tests
# todo: 2

`

exports[`test/test.js TAP assertions and weird stuff rejects > rejects 1`] = `
TAP version 13
ok 1 - promise # {time} {
    ok 1 - promise
    1..1
}

ok 2 - fn returns promise # {time} {
    ok 1 - fn returns promise
    1..1
}

ok 3 - expect rejected Promise # {time} {
    ok 1 - expect rejected Promise
    1..1
}

ok 4 - expect rejected Promise # {time} {
    ok 1 - expect rejected Promise
    1..1
}

ok 5 - todo because no fn/promise # TODO
# next 2 also todo, no message
ok 6 - expect rejected Promise # TODO
ok 7 - expect rejected Promise # TODO
ok 8 - throws expected error: Error expected # {time} {
    ok 1 - throws expected error: Error expected
    1..1
}

ok 9 - throws expected error type # {time} {
    ok 1 - throws expected error type
    1..1
}

ok 10 - extra functions are no-ops # {time} {
    ok 1 - extra functions are no-ops
    1..1
}

ok 11 - extra args are no-ops # {time} {
    ok 1 - extra args are no-ops
    1..1
}

ok 12 - expect rejected Promise: Error noent # {time} {
    ok 1 - expect rejected Promise: Error noent
    1..1
}

ok 13 - expect rejected Promise: Error x # {time} {
    ok 1 - expect rejected Promise: Error x
    1..1
}

ok 14 - expect rejected Promise # {time} {
    ok 1 - expect rejected Promise
    1..1
}

ok 15 - expect rejected Promise # {time} {
    ok 1 - expect rejected Promise
    1..1
}

ok 16 - expect rejected Promise # {time} {
    ok 1 - expect rejected Promise
    1..1
}

not ok 17 - fail: no promise # {time} {
    not ok 1 - fail: no promise
      ---
      stack: |
        {STACK}
      ...
    
    1..1
    # failed 1 test
}

not ok 18 - fail: no promise # {time} {
    not ok 1 - fail: no promise
      ---
      stack: |
        {STACK}
      ...
    
    1..1
    # failed 1 test
}

not ok 19 - fail: passing promise # {time} {
    not ok 1 - fail: passing promise
      ---
      at:
        line: #
        column: #
        file: test/test.js
      found: 420
      source: |
        tt.rejects(new Promise(r => r(420)), 'fail: passing promise')
      ...
    
    1..1
    # failed 1 test
}

1..19
# failed 3 of 19 tests
# todo: 3

`

exports[`test/test.js TAP assertions and weird stuff resolves > resolves 1`] = `
TAP version 13
ok 1 - expect resolving Promise # {time} {
    ok 1 - expect resolving Promise
    1..1
}

ok 2 - expect resolving Promise # TODO
ok 3 - passing promise # {time} {
    ok 1 - passing promise
    1..1
}

ok 4 - passing promise fn # {time} {
    ok 1 - passing promise fn
    1..1
}

not ok 5 - fail: no promise # {time} {
    not ok 1 - fail: no promise
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |
        tt.resolves(() => {}, 'fail: no promise')
      ...
    
    1..1
    # failed 1 test
}

1..5
# failed 1 of 5 tests
# todo: 1

`

exports[`test/test.js TAP assertions and weird stuff resolveMatch > resolveMatch 1`] = `
TAP version 13
ok 1 - expect resolving Promise # {time} {
    ok 1 - should match pattern provided
    1..1
}

ok 2 - expect resolving Promise # TODO
ok 3 - promise # {time} {
    ok 1 - should match pattern provided
    1..1
}

not ok 4 - promise fn # {time} {
    not ok 1 - promise fn
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |
        tt.resolveMatch(() => new Promise(r => r(420)), 420, 'promise fn')
      ...
    
    1..1
    # failed 1 test
}

not ok 5 - fail: no promise # {time} {
    not ok 1 - fail: no promise
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |
        tt.resolveMatch(() => {}, {}, 'fail: no promise')
      ...
    
    1..1
    # failed 1 test
}

1..5
# failed 2 of 5 tests
# todo: 1

`

exports[`test/test.js TAP assertions and weird stuff test after end fails > test after end fails 1`] = `
TAP version 13
1..0
STDERR:
Error: test after end() was called
    {STACK}
{ test: '', plan: 0 }

`

exports[`test/test.js TAP assertions and weird stuff plan excess > plan excess 1`] = `
TAP version 13
1..1
ok 1 - fine
STDERR:
Error: test count exceeds plan
    {STACK}
{ test: '', plan: 1 }

`

exports[`test/test.js TAP assertions and weird stuff plan excess, ignored when failing > plan excess, ignored when failing 1`] = `
TAP version 13
1..1
not ok 1 - expected fail
# failed 1 test

`

exports[`test/test.js TAP assertions and weird stuff using the assertAt field > using the assertAt field 1`] = `
TAP version 13
1..1
not ok 1 - expect fail
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    const baz = () => { tt.assertAt = stack.at(); bar() }
  ...

# failed 1 test

`

exports[`test/test.js TAP assertions and weird stuff using the assertStack field > using the assertStack field 1`] = `
TAP version 13
1..1
not ok 1 - expect fail
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    const baz = () => { tt.assertStack = stack.captureString(80); bar() }
  stack: |
    {STACK}
  ...

# failed 1 test

`

exports[`test/test.js TAP assertions and weird stuff printResult > printResult 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`test/test.js TAP assertions and weird stuff printResult after plan end > printResult after plan end 1`] = `
TAP version 13
1..0
STDERR:
Error: test after end() was called
    {STACK}
{ test: '', plan: 0 }

`

exports[`test/test.js TAP assertions and weird stuff plan, child test, explicit end > plan, child test, explicit end 1`] = `
TAP version 13
1..1
# Subtest
    1..0
ok 1 # {time}


`

exports[`test/test.js TAP assertions and weird stuff end multiple times > end multiple times 1`] = `
TAP version 13
1..1
ok 1 - yes
STDERR:
Error: test end() method called more than once
    {STACK}
{ test: '' }

`

exports[`test/test.js TAP assertions and weird stuff error event with domainEmitter re-throws > error event with domainEmitter re-throws 1`] = `
TAP version 13
ok 1 - the better to this.threw you with
1..1

`

exports[`test/test.js TAP assertions and weird stuff thrower after end > thrower after end 1`] = `
TAP version 13
# Subtest: child
    1..1
    ok 1 - this is fine
ok 1 - child # {time}

not ok 2 - catch it in the parent
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.threw(new Error('catch it in the parent'))
  stack: |
    {STACK}
  test: child
  ...

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff child breaks a promise > child breaks a promise 1`] = `
TAP version 13
# Subtest: child
    not ok 1 - poop
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |
        tt.test('child', () => new Promise((_, r) => r(new Error('poop'))))
      stack: |
        {STACK}
      test: child
      ...
    
    1..1
    # failed 1 test
not ok 1 - child # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP assertions and weird stuff child teardown throw > child teardown throw 1`] = `
TAP version 13
# Subtest: child
    1..0
ok 1 - child # {time}

not ok 2 - fail
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |
    tt.teardown(() => { throw new Error('fail') })
  stack: |
    {STACK}
  test: child
  ...

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff fullname without main > fullname without main 1`] = `
TAP version 13
# Subtest: child
    ok 1 - child
    1..1
ok 1 - child # {time}

ok 2
1..2

`

exports[`test/test.js TAP assertions and weird stuff comment after end > comment after end 1`] = `
TAP version 13
1..0
# this is fine

`

exports[`test/test.js TAP assertions and weird stuff grep > grep 1`] = `
TAP version 13
# Subtest: parent
    ok 1 - do not run this # SKIP filter: /x$/
    # Subtest: but do run this x
        ok 1 - do not run this # SKIP filter: /y$/
        # Subtest: but do run this y
            # Subtest: grand kids
                1..0
            ok 1 - grand kids # {time}
            
            # Subtest: get all the
                1..0
            ok 2 - get all the # {time}
            
            # Subtest: goodies
                ok 1 - this is good
                1..1
            ok 3 - goodies # {time}
            
            1..3
        ok 2 - but do run this y # {time}
        
        1..2
        # skip: 1
    ok 2 - but do run this x # {time}
    
    1..2
    # skip: 1
ok 1 - parent # {time}

1..1

`

exports[`test/test.js TAP assertions and weird stuff grepInvert > grepInvert 1`] = `
TAP version 13
# Subtest: parent
    ok 1 - do not run this x # SKIP filter out: /x$/
    # Subtest: but do run this
        ok 1 - do not run this y # SKIP filter out: /y$/
        # Subtest: but do run this
            # Subtest: grand kids
                1..0
            ok 1 - grand kids # {time}
            
            # Subtest: get all the
                1..0
            ok 2 - get all the # {time}
            
            # Subtest: goodies
                ok 1 - this is good
                1..1
            ok 3 - goodies # {time}
            
            1..3
        ok 2 - but do run this # {time}
        
        1..2
        # skip: 1
    ok 2 - but do run this # {time}
    
    1..2
    # skip: 1
ok 1 - parent # {time}

1..1

`

exports[`test/test.js TAP assertions and weird stuff autoEnd > autoEnd 1`] = `
TAP version 13
# Subtest: this should automatically end
    ok 1 - this is fine
    ok 2 - also fine
    1..2
ok 1 - this should automatically end # {time}

# Subtest: this should also end
    ok 1 - this is fine
    ok 2 - also fine
    1..2
ok 2 - this should also end # {time}

# Subtest: autoend async 1
    # Subtest: st
        1..0
    ok 1 - st # {time}
    
    1..1
ok 3 - autoend async 1 # {time}

# Subtest: autoend async 2
    # Subtest: st
        1..0
    ok 1 - st # {time}
    
    1..1
ok 4 - autoend async 2 # {time}

# Subtest: autoend async limit
    1..0
ok 5 - autoend async limit # {time}

not ok 6 - cannot create subtest after parent test end # {time}
  ---
  autoend: true
  stack: |
    {STACK}
  test: autoend async limit
  ...

1..6
# failed 1 of 6 tests

`

exports[`test/test.js TAP assertions and weird stuff autoend(false) > autoend(false) 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`test/test.js TAP assertions and weird stuff endAll with test children > endAll with test children 1`] = `
TAP version 13
# Subtest: this is the test that never ends
    # Subtest: it goes on and on my friend
        ok 1 - this is ok
        # Subtest: misbehaving child
            not ok 1 - test unfinished
              ---
              at:
                line: #
                column: #
                file: test/test.js
              source: |
                tt.test('misbehaving child', () => new Promise(()=>{}))
              stack: |
                {STACK}
              test: misbehaving child
              ...
            
            1..1
            # failed 1 test
        not ok 2 - misbehaving child # {time}
        
        1..2
        # failed 1 of 2 tests
    not ok 1 - it goes on and on my friend # {time}
    
    ok 2 - some queue stuff
    1..2
    # failed 1 of 2 tests
not ok 1 - this is the test that never ends # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP assertions and weird stuff endAll with stdin > endAll with stdin 1`] = `
TAP version 13
# Subtest: /dev/stdin
    ok - but not ended
    
    not ok 2 - test unfinished
    
    1..2
    # failed 1 of 2 tests
not ok 1 - /dev/stdin # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP assertions and weird stuff endAll with bailout > endAll with bailout 1`] = `
TAP version 13
# Subtest: child
    not ok 1 - not fine
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |
        tt.fail('not fine')
      stack: |
        {STACK}
      ...
    
    Bail out! # not fine
Bail out! # not fine

`

exports[`test/test.js TAP assertions and weird stuff bailout with indented subs > bailout with indented subs 1`] = `
TAP version 13
# Subtest: 1
    1..0
ok 1 - 1 # {time}

# Subtest: 2
Bail out! whoops

`

exports[`test/test.js TAP assertions and weird stuff bailout with buffered subs > bailout with buffered subs 1`] = `
TAP version 13
ok 1 - 1 # {time} {
    1..0
}

Bail out! whoops

`

exports[`test/test.js TAP assertions and weird stuff silent subs > silent subs 1`] = `
TAP version 13
# Subtest: child
    1..0
ok 1 - child # {time}

# Subtest: child 2
    1..0
ok 2 - child 2 # {time}

1..2

`

exports[`test/test.js TAP assertions and weird stuff beforeEach afterEach > beforeEach afterEach 1`] = `
TAP version 13
# Subtest: child
    # Subtest: grandkid
        1..0
    ok 1 - grandkid # {time}
    
    1..1
ok 1 - child # {time}

1..1
STDERR:
parent be child
parent be grandkid
child be grandkid
in test
child ae grandkid
parent ae grandkid
parent ae child

`

exports[`test/test.js TAP assertions and weird stuff timeout expiration > timeout expiration 1`] = `
TAP version 13
# Subtest: get lost buf=false
    not ok 1 - timeout!
      ---
      expired: get lost buf=false
      stack: |
        {STACK}
      test: get lost buf=false
      timeout: 50
      ...
    
    1..1
    # failed 1 test
not ok 1 - get lost buf=false # {time}
  ---
  timeout: 50
  ...

not ok 2 - get lost buf=true # {time}
  ---
  timeout: 50
  ...
{
    not ok 1 - timeout!
      ---
      expired: get lost buf=true
      stack: |
        {STACK}
      test: get lost buf=true
      timeout: 50
      ...
    
    1..1
    # failed 1 test
}

1..2
# failed 2 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff timeout with subs > timeout with subs 1`] = `
TAP version 13
# Subtest: get lost buf=false
    # Subtest: carry on
        not ok 1 - timeout!
          ---
          expired: get lost buf=false
          stack: |
            {STACK}
          test: carry on
          ...
        
        1..1
        # failed 1 test
    not ok 1 - carry on # {time}
    
    1..1
    # failed 1 test
not ok 1 - get lost buf=false # {time}
  ---
  timeout: 50
  ...

not ok 2 - get lost buf=true # {time}
  ---
  timeout: 50
  ...
{
    # Subtest: carry on
        not ok 1 - timeout!
          ---
          expired: get lost buf=true
          stack: |
            {STACK}
          test: carry on
          ...
        
        1..1
        # failed 1 test
    not ok 1 - carry on # {time}
    
    1..1
    # failed 1 test
}

1..2
# failed 2 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff timeout at the last tick > timeout at the last tick 1`] = `
TAP version 13
# Subtest: work it harder buf=false
    1..1
    ok 1 - this is fine
ok 1 - work it harder buf=false # {time}

not ok 2 - timeout! # {time}
  ---
  expired: work it harder buf=false
  stack: |
    {STACK}
  test: work it harder buf=false
  timeout: 1
  ...

ok 3 - work it harder buf=true # {time} {
    1..1
    ok 1 - this is fine
}

not ok 4 - timeout!
  ---
  expired: work it harder buf=true
  stack: |
    {STACK}
  test: work it harder buf=true
  timeout: 1
  ...

1..4
# failed 2 of 4 tests

`

exports[`test/test.js TAP addAssert > using the custom isUrl assertion 1`] = `
TAP version 13
not ok 1 - expect a valid http/https url
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    protocol: null
    slashes: null
    auth: null
    host: null
    port: null
    hostname: null
    hash: null
    search: null
    query: null
    pathname: hello%20is%20not%20a%20url
    path: hello%20is%20not%20a%20url
    href: hello%20is%20not%20a%20url
  pattern:
    protocol: '/^https?:$/'
    slashes: true
    host: 'function String() { [native code] }'
    path: /^\\/.*$/
  source: |
    tt.isUrl('hello is not a url')
  stack: |
    {STACK}
  ...

ok 2 - x is a url!
ok 3 - expect a valid http/https url # SKIP
1..3
# failed 1 of 3 tests
# skip: 1

`

exports[`test/test.js TAP snapshots > saving the snapshot 1`] = `
TAP version 13
# Subtest: child test
    ok 1 - an object
    ok 2 - string
    ok 3 - must match snapshot # TODO later
    1..3
    # todo: 1
ok 1 - child test # {time}

1..1

`

exports[`test/test.js TAP snapshots > verifying the snapshot 1`] = `
TAP version 13
# Subtest: child test
    ok 1 - an object
    ok 2 - string
    ok 3 - must match snapshot # TODO later
    1..3
    # todo: 1
ok 1 - child test # {time}

1..1

`
