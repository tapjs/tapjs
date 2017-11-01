'use strict'
exports[`no plan_0`] = `TAP version 13
ok 1 - this is fine
1..1
`

exports[`plan_0`] = `TAP version 13
1..1
ok 1 - this is fine
`

exports[`comment_0`] = `TAP version 13
# this is fine
1..0
`

exports[`pragma_0`] = `TAP version 13
pragma +strict
1..0
`

exports[`todo_0`] = `TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: 27
    column: 10
    file: unit/test.js
    function: todo
  source: |
    tt.notOk(true, 'i will do this later', { todo: true })
  ...

ok 2 - i will do this later # TODO
not ok 3 - expect truthy value # SKIP
ok 4 - i did not do this later # SKIP
1..4
# todo: 2
# skip: 2
`

exports[`only_0`] = `TAP version 13
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

exports[`no plan fail_0`] = `TAP version 13
not ok 1 - this is fine
1..1
# failed 1 test
`

exports[`plan fail_0`] = `TAP version 13
1..1
not ok 1 - this is fine
# failed 1 test
`

exports[`expect fail_0`] = `TAP version 13
1..1
ok 1 - this is fine
`

exports[`sub_0`] = `TAP version 13
# Subtest: named child
    ok 1 - this is fine
    1..1
ok 1 - named child # {time}

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

exports[`parallel sub_0`] = `TAP version 13
1..2
ok 1 - slow child # {time} {
    1..0
}

ok 2 - fast child # {time} {
    ok 1 - slow is going
    1..1
}

`
