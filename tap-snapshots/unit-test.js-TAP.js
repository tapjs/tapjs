'use strict'
exports[`unit/test.js TAP short output checks no plan no options > no plan 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`unit/test.js TAP short output checks no plan buffered > no plan 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`unit/test.js TAP short output checks no plan bailout > no plan 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`unit/test.js TAP short output checks no plan runOnly > no plan 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`unit/test.js TAP short output checks plan no options > plan 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`unit/test.js TAP short output checks plan buffered > plan 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`unit/test.js TAP short output checks plan bailout > plan 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`unit/test.js TAP short output checks plan runOnly > plan 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`unit/test.js TAP short output checks comment no options > comment 1`] = `
TAP version 13
# this is fine
1..0

`

exports[`unit/test.js TAP short output checks comment buffered > comment 1`] = `
TAP version 13
# this is fine
1..0

`

exports[`unit/test.js TAP short output checks comment bailout > comment 1`] = `
TAP version 13
# this is fine
1..0

`

exports[`unit/test.js TAP short output checks comment runOnly > comment 1`] = `
TAP version 13
# this is fine
1..0

`

exports[`unit/test.js TAP short output checks pragma no options > pragma 1`] = `
TAP version 13
pragma +strict
1..0

`

exports[`unit/test.js TAP short output checks pragma buffered > pragma 1`] = `
TAP version 13
pragma +strict
1..0

`

exports[`unit/test.js TAP short output checks pragma bailout > pragma 1`] = `
TAP version 13
pragma +strict
1..0

`

exports[`unit/test.js TAP short output checks pragma runOnly > pragma 1`] = `
TAP version 13
pragma +strict
1..0

`

exports[`unit/test.js TAP short output checks todo no options > todo 1`] = `
TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: #
    column: #
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

exports[`unit/test.js TAP short output checks todo buffered > todo 1`] = `
TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: #
    column: #
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

exports[`unit/test.js TAP short output checks todo bailout > todo 1`] = `
TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: #
    column: #
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

exports[`unit/test.js TAP short output checks todo runOnly > todo 1`] = `
TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: #
    column: #
    file: unit/test.js
    function: todo
  source: |
    tt.notOk(true, 'i will do this later', { todo: true })
  ...

ok 2 - i will do this later # SKIP filter: only
not ok 3 - expect truthy value # SKIP
ok 4 - i did not do this later # SKIP filter: only
1..4
# todo: 1
# skip: 3

`

exports[`unit/test.js TAP short output checks only no options > only 1`] = `
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

exports[`unit/test.js TAP short output checks only buffered > only 1`] = `
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

exports[`unit/test.js TAP short output checks only bailout > only 1`] = `
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

exports[`unit/test.js TAP short output checks only runOnly > only 1`] = `
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

exports[`unit/test.js TAP short output checks no plan fail no options > no plan fail 1`] = `
TAP version 13
not ok 1 - this is fine
1..1
# failed 1 test

`

exports[`unit/test.js TAP short output checks no plan fail buffered > no plan fail 1`] = `
TAP version 13
not ok 1 - this is fine
1..1
# failed 1 test

`

exports[`unit/test.js TAP short output checks no plan fail bailout > no plan fail 1`] = `
TAP version 13
not ok 1 - this is fine
Bail out! # this is fine
"# this is fine"
`

exports[`unit/test.js TAP short output checks no plan fail runOnly > no plan fail 1`] = `
TAP version 13
not ok 1 - this is fine
1..1
# failed 1 test

`

exports[`unit/test.js TAP short output checks plan fail no options > plan fail 1`] = `
TAP version 13
1..1
not ok 1 - this is fine
# failed 1 test

`

exports[`unit/test.js TAP short output checks plan fail buffered > plan fail 1`] = `
TAP version 13
1..1
not ok 1 - this is fine
# failed 1 test

`

exports[`unit/test.js TAP short output checks plan fail bailout > plan fail 1`] = `
TAP version 13
1..1
not ok 1 - this is fine
Bail out! # this is fine
"# this is fine"
`

exports[`unit/test.js TAP short output checks plan fail runOnly > plan fail 1`] = `
TAP version 13
1..1
not ok 1 - this is fine
# failed 1 test

`

exports[`unit/test.js TAP short output checks expect fail no options > expect fail 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`unit/test.js TAP short output checks expect fail buffered > expect fail 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`unit/test.js TAP short output checks expect fail bailout > expect fail 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`unit/test.js TAP short output checks expect fail runOnly > expect fail 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`unit/test.js TAP short output checks sub no options > sub 1`] = `
TAP version 13
ok 1 - named child # {time} {
    ok 1 - this is fine
    1..1
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

exports[`unit/test.js TAP short output checks sub buffered > sub 1`] = `
TAP version 13
ok 1 - named child # {time} {
    ok 1 - this is fine
    1..1
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

exports[`unit/test.js TAP short output checks sub bailout > sub 1`] = `
TAP version 13
ok 1 - named child # {time} {
    ok 1 - this is fine
    1..1
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

exports[`unit/test.js TAP short output checks sub runOnly > sub 1`] = `
TAP version 13
ok 1 - named child # SKIP filter: only
ok 2 - named_function # SKIP filter: only
ok 3 - promisey # SKIP filter: only
1..3
# skip: 3

`

exports[`unit/test.js TAP short output checks parallel sub no options > parallel sub 1`] = `
TAP version 13
1..2
# Subtest: slow child
    1..0
ok 1 - slow child # {time}

# Subtest: fast child
    not ok 1 - slow is going
      ---
      at:
        line: #
        column: #
        file: unit/test.js
        type: Timeout
        function: _
        method: _onTimeout
  stack: |
{STACK}
not ok 2 - fast child # {time}

# failed 1 of 2 tests

`

exports[`unit/test.js TAP short output checks parallel sub buffered > parallel sub 1`] = `
TAP version 13
1..2
# Subtest: slow child
    1..0
ok 1 - slow child # {time}

# Subtest: fast child
    not ok 1 - slow is going
      ---
      at:
        line: #
        column: #
        file: unit/test.js
        type: Timeout
        function: _
        method: _onTimeout
  stack: |
{STACK}
not ok 2 - fast child # {time}

# failed 1 of 2 tests

`

exports[`unit/test.js TAP short output checks parallel sub bailout > parallel sub 1`] = `
TAP version 13
1..2
# Subtest: slow child
    1..0
ok 1 - slow child # {time}

# Subtest: fast child
    not ok 1 - slow is going
      ---
      at:
        line: #
        column: #
        file: unit/test.js
        type: Timeout
        function: _
        method: _onTimeout
  stack: |
{STACK}
"# slow is going"
`

exports[`unit/test.js TAP short output checks parallel sub runOnly > parallel sub 1`] = `
TAP version 13
1..2
ok 1 - slow child # SKIP filter: only
ok 2 - fast child # SKIP filter: only
# skip: 2

`

exports[`unit/test.js TAP short output checks reasoned bailout no options > reasoned bailout 1`] = `
TAP version 13
# Subtest: (unnamed test)
    ok 1 - this is fine
    Bail out! not fine
"not fine"
`

exports[`unit/test.js TAP short output checks reasoned bailout buffered > reasoned bailout 1`] = `
TAP version 13
# Subtest: (unnamed test)
    ok 1 - this is fine
    Bail out! not fine
"not fine"
`

exports[`unit/test.js TAP short output checks reasoned bailout bailout > reasoned bailout 1`] = `
TAP version 13
# Subtest: (unnamed test)
    ok 1 - this is fine
    Bail out! not fine
"not fine"
`

exports[`unit/test.js TAP short output checks reasoned bailout runOnly > reasoned bailout 1`] = `
TAP version 13
ok 1 - (unnamed test) # SKIP filter: only
1..1
# skip: 1

`

exports[`unit/test.js TAP short output checks unreasonable bailout no options > unreasonable bailout 1`] = `
TAP version 13
# Subtest: (unnamed test)
    ok 1 - this is fine
    Bail out!

`

exports[`unit/test.js TAP short output checks unreasonable bailout buffered > unreasonable bailout 1`] = `
TAP version 13
# Subtest: (unnamed test)
    ok 1 - this is fine
    Bail out!

`

exports[`unit/test.js TAP short output checks unreasonable bailout bailout > unreasonable bailout 1`] = `
TAP version 13
# Subtest: (unnamed test)
    ok 1 - this is fine
    Bail out!

`

exports[`unit/test.js TAP short output checks unreasonable bailout runOnly > unreasonable bailout 1`] = `
TAP version 13
ok 1 - (unnamed test) # SKIP filter: only
1..1
# skip: 1

`

exports[`unit/test.js TAP short output checks bailout after end no options > bailout after end 1`] = `
TAP version 13
# Subtest: (unnamed test)
    ok 1 - this is fine
    1..1
Bail out! not fine
"not fine"
`

exports[`unit/test.js TAP short output checks bailout after end buffered > bailout after end 1`] = `
TAP version 13
# Subtest: (unnamed test)
    ok 1 - this is fine
    1..1
Bail out! not fine
"not fine"
`

exports[`unit/test.js TAP short output checks bailout after end bailout > bailout after end 1`] = `
TAP version 13
# Subtest: (unnamed test)
    ok 1 - this is fine
    1..1
Bail out! not fine
"not fine"
`

exports[`unit/test.js TAP short output checks bailout after end runOnly > bailout after end 1`] = `
TAP version 13
ok 1 - (unnamed test) # SKIP filter: only
1..1
# skip: 1

`

exports[`unit/test.js TAP short output checks gentle thrower no options > gentle thrower 1`] = `
TAP version 13
not ok 1 - ok
  ---
  at:
    line: #
    column: #
    file: unit/test.js
    function: Object.gentle thrower
  stack: |
{STACK}
  source: |
    'gentle thrower': tt => tt.threw(new Error('ok')),
  ...

1..1
# failed 1 test

`

exports[`unit/test.js TAP short output checks gentle thrower buffered > gentle thrower 1`] = `
TAP version 13
not ok 1 - ok
  ---
  at:
    line: #
    column: #
    file: unit/test.js
    function: Object.gentle thrower
  stack: |
{STACK}
  source: |
    'gentle thrower': tt => tt.threw(new Error('ok')),
  ...

1..1
# failed 1 test

`

exports[`unit/test.js TAP short output checks gentle thrower bailout > gentle thrower 1`] = `
TAP version 13
not ok 1 - ok
  ---
  at:
    line: #
    column: #
    file: unit/test.js
    function: Object.gentle thrower
  stack: |
{STACK}
  source: |
    'gentle thrower': tt => tt.threw(new Error('ok')),
  ...

Bail out! # ok
"# ok"
`

exports[`unit/test.js TAP short output checks gentle thrower runOnly > gentle thrower 1`] = `
TAP version 13
not ok 1 - ok
  ---
  runOnly: true
  at:
    line: #
    column: #
    file: unit/test.js
    function: Object.gentle thrower
  stack: |
{STACK}
  source: |
    'gentle thrower': tt => tt.threw(new Error('ok')),
  ...

1..1
# failed 1 test

`

exports[`unit/test.js TAP assertion checks error > error 1`] = `
TAP version 13
ok 1 - this is not an error
not ok 2 - this error is poop
  ---
  found:
    name: Error
  stack: |
{STACK}
  at:
    line: #
    column: #
    file: unit/test.js
    function: error
  stack: |
{STACK}
  source: |
    tt.error(new Error('poop'), 'this error is poop')
  ...

not ok 3 - this error is "poop"
  ---
  found: poop
  at:
    line: #
    column: #
    file: unit/test.js
    function: error
  stack: |
{STACK}
  source: |
    tt.error('poop', 'this error is "poop"')
  ...

1..3
# failed 2 of 3 tests

`

exports[`unit/test.js TAP assertion checks equal > equal 1`] = `
TAP version 13
not ok 1 - should be equal
  ---
  found: 1
  wanted: 2
  compare: ===
  at:
    line: #
    column: #
    file: unit/test.js
    function: equal
  stack: |
{STACK}
  source: |
    tt.equal(1, 2)
  ...

not ok 2 - should be equal # SKIP
ok 3 - one is one
not ok 4 - should be equal
  ---
  found:
    foo: 1
  wanted:
    foo: 1
  compare: ===
  note: Objects never === one another
  at:
    line: #
    column: #
    file: unit/test.js
    function: equal
  stack: |
{STACK}
  source: |
    tt.equal({foo: 1}, {foo: 1})
  ...

1..4
# failed 3 of 4 tests
# skip: 1

`

exports[`unit/test.js TAP assertion checks not > not 1`] = `
TAP version 13
ok 1 - should not be equal
ok 2 - should not be equal # SKIP
not ok 3 - one is not one
  ---
  found: 1
  doNotWant: 1
  compare: '!=='
  at:
    line: #
    column: #
    file: unit/test.js
    function: not
  stack: |
{STACK}
  source: |
    tt.not(1, 1, 'one is not one')
  ...

ok 4 - should not be equal
1..4
# failed 1 of 4 tests
# skip: 1

`

exports[`unit/test.js TAP assertion checks same > same 1`] = `
TAP version 13
ok 1 - should be equivalent
ok 2 - should be equivalent
ok 3 - object exactness
not ok 4 - should be equivalent # SKIP
ok 5 - this one passes
ok 6 - should not be equivalent # SKIP
not ok 7 - this one fails
  ---
  found:
    foo:
      bar: 2
  doNotWant:
    foo:
      bar: '2'
  at:
    line: #
    column: #
    file: unit/test.js
    function: same
  stack: |
{STACK}
  source: |
    tt.notSame({ foo: { bar: 2 } }, { foo: { bar: '2' } },
  ...

not ok 8 - should be equivalent strictly # SKIP
not ok 9 - should be equivalent strictly
  ---
  found:
    - 1
    - 2
    - 3
  wanted:
    - '1'
    - '2'
    - '3'
  at:
    line: #
    column: #
    file: unit/test.js
    function: same
  stack: |
{STACK}
  source: |
    tt.strictSame([1, 2, 3], ['1', '2', '3'])
  ...

ok 10 - should be equivalent strictly
ok 11 - should be equivalent strictly
ok 12 - should be equivalent strictly # SKIP
ok 13 - this one passes
ok 14 - this one passes
not ok 15 - this one fails
  ---
  found:
    foo:
      bar: 2
  doNotWant:
    foo:
      bar: 2
  at:
    line: #
    column: #
    file: unit/test.js
    function: same
  stack: |
{STACK}
  source: |
    tt.notStrictSame({ foo: { bar: 2 } }, { foo: { bar: 2 } },
  ...

1..15
# failed 5 of 15 tests
# skip: 4

`

exports[`unit/test.js TAP assertion checks match > match 1`] = `
TAP version 13
ok 1 - should match pattern provided
not ok 2 - should match pattern provided
  ---
  found:
    a: b
    c: /asdf/
  pattern:
    a: asdf
    c: 1
  at:
    line: #
    column: #
    file: unit/test.js
    function: match
  stack: |
{STACK}
  source: |
    tt.match({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 })
  ...

ok 3 - a message
not ok 4 - should match pattern provided # TODO
  ---
  found:
    a: b
    c: /asdf/
  pattern:
    a: asdf
    c: 1
  at:
    line: #
    column: #
    file: unit/test.js
    function: match
  source: |
    tt.match({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 },
  ...

not ok 5 - should not match pattern provided
  ---
  found:
    a: b
    c: /asdf/
  pattern:
    a: 'function String() { [native code] }'
    c: 'function RegExp() { [native code] }'
  at:
    line: #
    column: #
    file: unit/test.js
    function: match
  stack: |
{STACK}
  source: |
    tt.notMatch({ a: 'b', c: /asdf/ }, { a: String, c: RegExp })
  ...

ok 6 - should not match pattern provided
not ok 7 - a message
  ---
  found:
    a: b
    c: /asdf/
  pattern:
    a: 'function String() { [native code] }'
    c: 'function RegExp() { [native code] }'
  at:
    line: #
    column: #
    file: unit/test.js
    function: match
  stack: |
{STACK}
  source: |
    tt.notMatch({ a: 'b', c: /asdf/ }, { a: String, c: RegExp },
  ...

ok 8 - should not match pattern provided # TODO
1..8
# failed 4 of 8 tests
# todo: 2

`

exports[`unit/test.js TAP assertion checks type > type 1`] = `
TAP version 13
not ok 1 - this fails
  ---
  found: 'null'
  wanted: object
  compare: ===
  at:
    line: #
    column: #
    file: unit/test.js
    function: type
  stack: |
{STACK}
  source: |
    tt.type(null, 'object', 'this fails')
  ...

ok 2 - type is object
ok 3 - type is number
ok 4 - type is Test
not ok 5 - fails, anonymously
  ---
  found: Object
  wanted: (anonymous constructor)
  at:
    line: #
    column: #
    file: unit/test.js
    function: type
  stack: |
{STACK}
  source: |
    tt.type({}, function () {}, 'fails, anonymously')
  ...

ok 6 - a thing is a thing
ok 7 - arrows are functions
ok 8 - arrows are functions
not ok 9 - fail: arrows are not objects
  ---
  found: function
  wanted: Object
  compare: ===
  at:
    line: #
    column: #
    file: unit/test.js
    function: type
  stack: |
{STACK}
  source: |
    tt.type(() => {}, Object, 'fail: arrows are not objects')
  ...

ok 10 - type is object
ok 11 - type is Test
ok 12 - type is EventEmitter
1..12
# failed 3 of 12 tests

`

exports[`unit/test.js TAP assertion checks throws > throws 1`] = `
TAP version 13
ok 1 - expected to throw
ok 2 - expected to throw
ok 3 - expected to throw: TypeError x
ok 4 - expected to throw
not ok 5 - expected to throw: Error x
  ---
  wanted:
    message: x
    name: ''
  found:
  stack: |
{STACK}
  pattern:
    message: x
    name: ''
  at:
    line: #
    column: #
    file: unit/test.js
    function: throws
  stack: |
{STACK}
  source: |
    tt.throws(() => { throw new Error('x') }, nameless)
  ...

ok 6 - expected to throw
ok 7 - expected to throw
ok 8 - expected to throw
ok 9 - expected to throw # SKIP
ok 10 - expected to throw
not ok 11 - extra functions are no-ops for bw comp
  ---
  at:
    line: #
    column: #
    file: unit/test.js
    function: throws
  stack: |
{STACK}
  source: |
    tt.throws(() => {}, () => {}, () => {}, () => {},
  ...

ok 12 - todo # TODO
1..12
# failed 2 of 12 tests
# todo: 1
# skip: 1

`
