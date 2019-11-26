/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/test.js TAP addAssert > using the custom isUrl assertion 1`] = `
TAP version 13
not ok 1 - expect a valid http/https url
  ---
  at:
    line: #
    column: #
    file: test/test.js
  diff: |
    --- expected
    +++ actual
    @@ -1,6 +1,6 @@
     Url {
    -  "protocol": /^https?:$/,
    -  "slashes": true,
    -  "host": Function String(),
    -  "path": /^\\/.*$/,
    +  "protocol": null,
    +  "slashes": null,
    +  "host": null,
    +  "path": "hello%20is%20not%20a%20url",
     }
  pattern:
    protocol: !re /^https?:$/
    slashes: true
    host: !function |-
      "String"
      function String() { [native code] }
    path: !re /^\\/.*$/
  source: |2
      })
      tt.isUrl('hello is not a url')
    --^
      tt.isUrl('http://x', 'x is a url!')
      tt.isUrl('https://skip:420/', { skip: 420 })
  stack: |
    {STACK}
  ...

ok 2 - x is a url!
ok 3 - expect a valid http/https url # SKIP
1..3
# failed 1 of 3 tests
# skip: 1

`

exports[`test/test.js TAP assertions and weird stuff autoEnd > output 1`] = `
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
  at:
    line: #
    column: #
    file: test/test.js
  autoend: true
  source: |2
            setTimeout(() => setTimeout(() => setTimeout(() =>
              t.test('st', t => setTimeout(() => t.end())))))
    --^
            t.autoend()
          })
  stack: |
    {STACK}
  test: autoend async limit
  ...

1..6
# failed 1 of 6 tests

`

exports[`test/test.js TAP assertions and weird stuff autoend(false) > output 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`test/test.js TAP assertions and weird stuff bailout in first buffered sub > output 1`] = `
TAP version 13
# Subtest: one
    not ok 1 - 1.5 # {time} {
        Bail out! bail me out
    }
Bail out! bail me out

`

exports[`test/test.js TAP assertions and weird stuff bailout in first sub > output 1`] = `
TAP version 13
# Subtest: one
    Bail out! bail me out
Bail out! bail me out

`

exports[`test/test.js TAP assertions and weird stuff bailout in nested sub > output 1`] = `
TAP version 13
# Subtest: one
    # Subtest: 1.5
        Bail out! bail me out
Bail out! bail me out

`

exports[`test/test.js TAP assertions and weird stuff bailout with buffered subs > output 1`] = `
TAP version 13
ok 1 - 1 # {time} {
    1..0
}

Bail out! whoops

`

exports[`test/test.js TAP assertions and weird stuff bailout with indented subs > output 1`] = `
TAP version 13
# Subtest: 1
    1..0
ok 1 - 1 # {time}

# Subtest: 2
Bail out! whoops

`

exports[`test/test.js TAP assertions and weird stuff beforeEach afterEach > output 1`] = `
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

exports[`test/test.js TAP assertions and weird stuff child breaks a promise > output 1`] = `
TAP version 13
# Subtest: child
    not ok 1 - poop
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |2
            'child breaks a promise': tt => {
              tt.test('child', () => new Promise((_, r) => r(new Error('poop'))))
        --^
              tt.end()
            },
      stack: |
        {STACK}
      tapCaught: returnedPromiseRejection
      test: child
      ...
    
    1..1
    # failed 1 test
not ok 1 - child # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP assertions and weird stuff child breaks a promise nonerror > output 1`] = `
TAP version 13
# Subtest: child
    not ok 1 - (unnamed test)
      ---
      at:
        line: #
        column: #
        file: test/test.js
      error: poop
      source: |2
            'child breaks a promise nonerror': tt => {
              tt.test('child', () => new Promise((_, r) => r('poop')))
        --^
              tt.end()
            },
      stack: |
        {STACK}
      tapCaught: returnedPromiseRejection
      test: child
      ...
    
    1..1
    # failed 1 test
not ok 1 - child # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP assertions and weird stuff child teardown throw > output 1`] = `
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
  source: |2
          tt.test('child', tt => {
            tt.teardown(() => { throw new Error('fail') })
    --^
            tt.end()
          })
  stack: |
    {STACK}
  tapCaught: teardown
  test: child
  ...

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff child teardown throw nonerror > output 1`] = `
TAP version 13
# Subtest: child
    1..0
ok 1 - child # {time}

not ok 2 - (unnamed test)
  ---
  error: fail
  tapCaught: teardown
  test: child
  ...

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff comment after end > output 1`] = `
TAP version 13
1..0
# this is fine

`

exports[`test/test.js TAP assertions and weird stuff doesNotThrow > output 1`] = `
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
  source: |2
          tt.doesNotThrow('fail', () => {
            throw new Error('ouch')
    --^
          })
          tt.end()
  stack: |
    {STACK}
  ...

1..5
# failed 1 of 5 tests
# todo: 2

`

exports[`test/test.js TAP assertions and weird stuff end multiple times > output 1`] = `
TAP version 13
1..1
ok 1 - yes
STDERR:
Error: test end() method called more than once
    {STACK}
{ test: '' }

`

exports[`test/test.js TAP assertions and weird stuff endAll with bailout > output 1`] = `
TAP version 13
# Subtest: child
    not ok 1 - not fine
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |2
              tt.test('child', { bail: true }, tt => {
                tt.fail('not fine')
        --^
                tt.end()
              })
      stack: |
        {STACK}
      ...
    
    Bail out! not fine
Bail out! not fine

`

exports[`test/test.js TAP assertions and weird stuff endAll with stdin > output 1`] = `
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

exports[`test/test.js TAP assertions and weird stuff endAll with test children > output 1`] = `
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
              source: |2
                          tt.pass('this is ok')
                          tt.test('misbehaving child', () => new Promise(()=>{}))
                --^
                        })
                        tt.pass('some queue stuff')
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

exports[`test/test.js TAP assertions and weird stuff endAll with unresolved t.resolveMatch > output 1`] = `
TAP version 13
# Subtest: this is the test that never ends
    # Subtest: it goes on and on my friend
        ok 1 - this is ok
        not ok 2 - expect resolving Promise
          ---
          at:
            line: #
            column: #
            file: test/test.js
          found:
            !error
            name: Error
            message: test unfinished
            stack: |
              {STACK}
          source: |2
                      tt.pass('this is ok')
                      tt.resolveMatch(() => new Promise(()=>{}), {})
            --^
                    })
                    tt.pass('some queue stuff')
          ...
        
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

exports[`test/test.js TAP assertions and weird stuff equal > output 1`] = `
TAP version 13
not ok 1 - should be equal
  ---
  at:
    line: #
    column: #
    file: test/test.js
  compare: ===
  diff: |
    --- expected
    +++ actual
    @@ -1,1 +1,1 @@
    -2
    +1
  source: |2
        equal: tt => {
          tt.equal(1, 2)
    --^
          tt.equal(1, '1', { skip: true })
          tt.equal(1, 1, 'one is one')
  stack: |
    {STACK}
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
  note: object identities differ
  source: |2
          // fails, but with the special note
          tt.equal({foo: 1}, {foo: 1})
    --^
          // fails, showing a diff
          tt.equal({foo: 1}, {foo: 2})
  stack: |
    {STACK}
  wanted:
    foo: 1
  ...

not ok 5 - should be equal
  ---
  at:
    line: #
    column: #
    file: test/test.js
  compare: ===
  diff: |
    --- expected
    +++ actual
    @@ -1,3 +1,3 @@
     Object {
    -  "foo": 2,
    +  "foo": 1,
     }
  source: |2
          // fails, showing a diff
          tt.equal({foo: 1}, {foo: 2})
    --^
          tt.end()
        },
  stack: |
    {STACK}
  ...

1..5
# failed 4 of 5 tests
# skip: 1

`

exports[`test/test.js TAP assertions and weird stuff error > output 1`] = `
TAP version 13
ok 1 - this is not an error
not ok 2 - this error is poop
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    !error
    name: Error
    message: "fail: poop"
    stack: |
      {STACK}
  origin:
    at:
      line: #
      column: #
      file: test/test.js
    stack: |
      {STACK}
    source: |2
            tt.error(null, 'this is not an error')
            tt.error(new Error('fail: poop'), 'this error is poop')
      --^
            tt.error(new Error('fail: poop'))
            tt.error('fail: poop', 'this error is "poop"')
  source: |2
          tt.error(null, 'this is not an error')
          tt.error(new Error('fail: poop'), 'this error is poop')
    --^
          tt.error(new Error('fail: poop'))
          tt.error('fail: poop', 'this error is "poop"')
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
    !error
    name: Error
    message: "fail: poop"
    stack: |
      {STACK}
  origin:
    at:
      line: #
      column: #
      file: test/test.js
    stack: |
      {STACK}
    source: |2
            tt.error(new Error('fail: poop'), 'this error is poop')
            tt.error(new Error('fail: poop'))
      --^
            tt.error('fail: poop', 'this error is "poop"')
            tt.error('fail: poop')
  source: |2
          tt.error(new Error('fail: poop'), 'this error is poop')
          tt.error(new Error('fail: poop'))
    --^
          tt.error('fail: poop', 'this error is "poop"')
          tt.error('fail: poop')
  stack: |
    {STACK}
  ...

not ok 4 - this error is "poop"
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found: "fail: poop"
  source: |2
          tt.error(new Error('fail: poop'))
          tt.error('fail: poop', 'this error is "poop"')
    --^
          tt.error('fail: poop')
          tt.error(null, { todo: true })
  stack: |
    {STACK}
  ...

not ok 5 - non-Error error encountered
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found: "fail: poop"
  source: |2
          tt.error('fail: poop', 'this error is "poop"')
          tt.error('fail: poop')
    --^
          tt.error(null, { todo: true })
          tt.error(null)
  stack: |
    {STACK}
  ...

ok 6 - should not error # TODO
ok 7 - should not error
1..7
# failed 4 of 7 tests
# todo: 1

`

exports[`test/test.js TAP assertions and weird stuff fullname without main > output 1`] = `
TAP version 13
# Subtest: child
    ok 1 - child
    1..1
ok 1 - child # {time}

ok 2
1..2

`

exports[`test/test.js TAP assertions and weird stuff grep > output 1`] = `
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

exports[`test/test.js TAP assertions and weird stuff grepInvert > output 1`] = `
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

exports[`test/test.js TAP assertions and weird stuff hasStrict > output 1`] = `
TAP version 13
not ok 1 - should fail
  ---
  at:
    line: #
    column: #
    file: test/test.js
  diff: |
    --- expected
    +++ actual
    @@ -1,4 +1,4 @@
     Object {
       "a": "b",
    -  "c": 1,
    +  "c": "1",
     }
  source: |2
        hasStrict: tt => {
          tt.hasStrict({ a: 'b', c: '1' }, { a: 'b', c: 1 }, 'should fail')
    --^
          tt.hasStrict({ a: 1, b: 2, c: 3 }, { b: 2 }, 'should pass')
          tt.hasStrict({ a: 'b', c: '1' }, { a: 'b', c: 1 }, { todo: true })
  stack: |
    {STACK}
  ...

ok 2 - should pass
not ok 3 - should contain all provided fields strictly # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  diff: |
    --- expected
    +++ actual
    @@ -1,4 +1,4 @@
     Object {
       "a": "b",
    -  "c": 1,
    +  "c": "1",
     }
  source: |2
          tt.hasStrict({ a: 1, b: 2, c: 3 }, { b: 2 }, 'should pass')
          tt.hasStrict({ a: 'b', c: '1' }, { a: 'b', c: 1 }, { todo: true })
    --^
          tt.end()
        },
  ...

1..3
# failed 2 of 3 tests
# todo: 1

`

exports[`test/test.js TAP assertions and weird stuff implicit bailout with parallel subs > output 1`] = `
TAP version 13
ok 1 - zro # {time} {
    1..0
}

ok 2 - one # {time} {
    1..0
}

not ok 3 - two # {time} {
    not ok 1 - two fail 0
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |2
              tests[1].end()
              tests[2].fail('two fail 0')
        --^
              tests[2].fail('two fail 1')
              tests[2].fail('two fail 2')
      stack: |
        {STACK}
      ...
    
    Bail out! two fail 0
}
Bail out! two fail 0

`

exports[`test/test.js TAP assertions and weird stuff implicit bailout without ending parent > output 1`] = `
TAP version 13
ok 1 - zro # {time} {
    1..0
}

ok 2 - one # {time} {
    1..0
}

ok 3 - two # {time} {
    1..0
}

not ok 4 - tre # {time} {
    not ok 1 - not fine
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |2
              tests[2].end()
              tests[3].fail('not fine')
        --^
              tests[1].end()
            },
      stack: |
        {STACK}
      ...
    
    Bail out! not fine
}
Bail out! not fine

`

exports[`test/test.js TAP assertions and weird stuff match > output 1`] = `
TAP version 13
ok 1 - should match pattern provided
not ok 2 - should match pattern provided
  ---
  at:
    line: #
    column: #
    file: test/test.js
  diff: |
    --- expected
    +++ actual
    @@ -1,4 +1,4 @@
     Object {
    -  "a": "asdf",
    -  "c": 1,
    +  "a": "b",
    +  "c": /asdf/,
     }
  pattern:
    a: asdf
    c: 1
  source: |2
          tt.match({ a: 'b', c: /asdf/ }, { a: String, c: RegExp })
          tt.match({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 })
    --^
          tt.match({ a: 'b', c: /asdf/ }, { a: String, c: RegExp },
                   'a message')
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
  diff: |
    --- expected
    +++ actual
    @@ -1,4 +1,4 @@
     Object {
    -  "a": "asdf",
    -  "c": 1,
    +  "a": "b",
    +  "c": /asdf/,
     }
  pattern:
    a: asdf
    c: 1
  source: |2
                   'a message')
          tt.match({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 },
    --^
                   { todo: true })
          tt.notMatch({ a: 'b', c: /asdf/ }, { a: String, c: RegExp })
  ...

not ok 5 - should not match pattern provided
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    a: b
    c: !re /asdf/
  pattern:
    a: !function |-
      "String"
      function String() { [native code] }
    c: !function |-
      "RegExp"
      function RegExp() { [native code] }
  source: |2
                   { todo: true })
          tt.notMatch({ a: 'b', c: /asdf/ }, { a: String, c: RegExp })
    --^
          tt.notMatch({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 })
          tt.notMatch({ a: 'b', c: /asdf/ }, { a: String, c: RegExp },
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
    c: !re /asdf/
  pattern:
    a: !function |-
      "String"
      function String() { [native code] }
    c: !function |-
      "RegExp"
      function RegExp() { [native code] }
  source: |2
          tt.notMatch({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 })
          tt.notMatch({ a: 'b', c: /asdf/ }, { a: String, c: RegExp },
    --^
                      'a message')
          tt.notMatch({ a: 'b', c: /asdf/ }, { a: 'asdf', c: 1 },
  stack: |
    {STACK}
  ...

ok 8 - should not match pattern provided # TODO
1..8
# failed 4 of 8 tests
# todo: 2

`

exports[`test/test.js TAP assertions and weird stuff not > output 1`] = `
TAP version 13
ok 1 - should not be equal
ok 2 - should not be equal # SKIP
not ok 3 - one is not one
  ---
  at:
    line: #
    column: #
    file: test/test.js
  compare: "!=="
  doNotWant: 1
  found: 1
  source: |2
          tt.not(1, '1', { skip: true })
          tt.not(1, 1, 'one is not one')
    --^
          tt.not({}, {})
          tt.end()
  stack: |
    {STACK}
  ...

ok 4 - should not be equal
1..4
# failed 1 of 4 tests
# skip: 1

`

exports[`test/test.js TAP assertions and weird stuff plan excess > output 1`] = `
TAP version 13
1..1
ok 1 - fine
STDERR:
Error: test count exceeds plan
    {STACK}
{ test: '', plan: 1 }

`

exports[`test/test.js TAP assertions and weird stuff plan excess, ignored when failing > output 1`] = `
TAP version 13
1..1
not ok 1 - expected fail
# failed 1 test

`

exports[`test/test.js TAP assertions and weird stuff plan, child test, explicit end > output 1`] = `
TAP version 13
1..1
# Subtest
    1..0
ok 1 # {time}


`

exports[`test/test.js TAP assertions and weird stuff printResult > output 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`test/test.js TAP assertions and weird stuff printResult after plan end > output 1`] = `
TAP version 13
1..0
STDERR:
Error: test after end() was called
    {STACK}
{ test: '', plan: 0 }

`

exports[`test/test.js TAP assertions and weird stuff rejects > output 1`] = `
TAP version 13
ok 1 - promise
ok 2 - fn returns promise
ok 3 - expect rejected Promise
ok 4 - expect rejected Promise
ok 5 - todo because no fn/promise # TODO
# next 2 also todo, no message
ok 6 - expect rejected Promise # TODO
ok 7 - expect rejected Promise # TODO
ok 8 - throws expected error: Error expected
ok 9 - throws expected error type
ok 10 - extra functions are no-ops
ok 11 - extra args are no-ops
ok 12 - expect rejected Promise: Error noent
ok 13 - expect rejected Promise: Error x
ok 14 - expect rejected Promise
ok 15 - expect rejected Promise
ok 16 - expect rejected Promise
not ok 17 - fail: no promise
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
    
          tt.rejects(() => {}, 'fail: no promise')
    --^
          tt.rejects(() => ({}), 'fail: no promise')
  stack: |
    {STACK}
  ...

not ok 18 - fail: no promise
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
          tt.rejects(() => {}, 'fail: no promise')
          tt.rejects(() => ({}), 'fail: no promise')
    --^
  
          tt.rejects(new Promise(r => r(420)), 'fail: passing promise')
  stack: |
    {STACK}
  ...

not ok 19 - fail: passing promise
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found: 420
  source: |2
    
          tt.rejects(new Promise(r => r(420)), 'fail: passing promise')
    --^
  
          tt.rejects(() => Promise.reject(), 'empty rejection')
  ...

ok 20 - empty rejection
1..20
# failed 3 of 20 tests
# todo: 3

`

exports[`test/test.js TAP assertions and weird stuff resolveMatch > output 1`] = `
TAP version 13
ok 1 - expect resolving Promise
not ok 2 - expect resolving Promise # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  diff: |
    --- expected
    +++ actual
    @@ -1,1 +1,1 @@
    -"asdf"
    +420
  found: 420
  pattern: asdf
  source: |2
          tt.resolveMatch(new Promise(r => r(420)), Number)
          tt.resolveMatch(new Promise(r => r(420)), 'asdf', { todo: true })
    --^
          tt.resolveMatch(new Promise(r => r(420)), 420, 'promise')
          tt.resolveMatch(() => new Promise(r => r(420)), 420, 'promise fn')
  ...

ok 3 - promise
ok 4 - promise fn
not ok 5 - fail: no promise
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
          tt.resolveMatch(() => new Promise(r => r(420)), 420, 'promise fn')
          tt.resolveMatch(() => {}, {}, 'fail: no promise')
    --^
          tt.resolveMatch(Promise.reject('n'), 'y', 'fail: rejected promise')
          tt.end()
  ...

not ok 6 - fail: rejected promise
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found: n
  source: |2
          tt.resolveMatch(() => {}, {}, 'fail: no promise')
          tt.resolveMatch(Promise.reject('n'), 'y', 'fail: rejected promise')
    --^
          tt.end()
        },
  ...

1..6
# failed 3 of 6 tests
# todo: 1

`

exports[`test/test.js TAP assertions and weird stuff resolves > output 1`] = `
TAP version 13
ok 1 - expect resolving Promise
ok 2 - expect resolving Promise # TODO
ok 3 - passing promise
ok 4 - passing promise fn
not ok 5 - fail: no promise
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
          tt.resolves(() => new Promise(r => r(420)), 'passing promise fn')
          tt.resolves(() => {}, 'fail: no promise')
    --^
          tt.end()
        },
  ...

1..5
# failed 1 of 5 tests
# todo: 1

`

exports[`test/test.js TAP assertions and weird stuff same > output 1`] = `
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
      bar: "2"
  found:
    foo:
      bar: 2
  source: |2
          tt.notSame({ foo: 2 }, { foo: 1 }, { skip: true })
          tt.notSame({ foo: { bar: 2 } }, { foo: { bar: '2' } },
    --^
                     'this one fails')
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
  diff: |
    --- expected
    +++ actual
    @@ -1,5 +1,5 @@
     Array [
    -  "1",
    -  "2",
    -  "3",
    +  1,
    +  2,
    +  3,
     ]
  source: |2
          tt.strictSame({ foo: 2 }, { foo: 1 }, { skip: true })
          tt.strictSame([1, 2, 3], ['1', '2', '3'])
    --^
          tt.strictSame(o, { foo: 1 })
          tt.strictSame(o, o)
  stack: |
    {STACK}
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
  source: |2
                           'this one passes')
          tt.strictNotSame({ foo: { bar: 2 } }, { foo: { bar: 2 } },
    --^
                           'this one fails')
  stack: |
    {STACK}
  ...

1..15
# failed 5 of 15 tests
# skip: 4

`

exports[`test/test.js TAP assertions and weird stuff silent subs > output 1`] = `
TAP version 13
# Subtest: child
    1..0
ok 1 - child # {time}

# Subtest: child 2
    1..0
ok 2 - child 2 # {time}

1..2

`

exports[`test/test.js TAP assertions and weird stuff stdinOnly > output 1`] = `
TAP version 13
1..8
# Subtest: the stdinOnly test
    
    # Subtest: child
        ok - this child is in a subtest
        1..1
    ok 1 - child
    ok 2 - just a normal assertion
    not ok 3 - this is not ok
    not ok 4 - this will be ok later # TODO
    1..4
    # failed 2 of 4 tests
    # todo: 1
not ok 1 - the stdinOnly test # {time}

ok 2 - expected to throw
ok 3 - expected to throw
ok 4 - expected to throw
ok 5 - expected to throw
ok 6 - expected to throw
ok 7 - got a sub
ok 8 - should be equivalent
# failed 1 of 8 tests

`

exports[`test/test.js TAP assertions and weird stuff t.emits > output 1`] = `
TAP version 13
not ok 1 - this one will fail
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
          const ee = new EE()
          t.emits(ee, 'fail', 'this one will fail')
    --^
          t.emits(ee, 'pass', { extra: 'some stuff' })
          ee.emit('pass')
  stack: |
    {STACK}
  ...

ok 2 - expect pass event to be emitted
1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff teardown promise > output 1`] = `
TAP version 13
# Subtest: parent
    ok 1 - this is fine
    1..1
ok 1 - parent # {time}

# parent teardown
1..1

`

exports[`test/test.js TAP assertions and weird stuff teardown promise fail > output 1`] = `
TAP version 13
# Subtest: parent
    ok 1 - this is fine
    1..1
ok 1 - parent # {time}

# parent teardown
not ok 2 - did not tear down proper
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
              tt.comment('parent teardown')
              rej(new Error('did not tear down proper'))
    --^
            }))
            tt.pass('this is fine')
  stack: |
    {STACK}
  tapCaught: teardown
  ...

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff teardown promise fail nonerror > output 1`] = `
TAP version 13
# Subtest: parent
    ok 1 - this is fine
    1..1
ok 1 - parent # {time}

# parent teardown
not ok 2 - (unnamed test)
  ---
  error: did not tear down proper
  stack: |
    {STACK}
  tapCaught: teardown
  ...

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff test after end fails > output 1`] = `
TAP version 13
1..0
STDERR:
Error: test after end() was called
    {STACK}
{ test: '', plan: 0 }

`

exports[`test/test.js TAP assertions and weird stuff throw in child beforeEach > output 1`] = `
TAP version 13
# Subtest: child
    # Subtest: grandkid
        not ok 1 - poop
          ---
          at:
            line: #
            column: #
            file: test/test.js
          source: |2
                    tt.beforeEach(async () => {
                      throw new Error('poop')
            --^
                    })
                    tt.test('grandkid', tt => Promise.resolve(console.error('in test')))
          stack: |
            {STACK}
          test: grandkid
          ...
        
        1..1
        # failed 1 test
    not ok 1 - grandkid # {time}
    
    1..1
    # failed 1 test
not ok 1 - child # {time}

# Subtest: next kid
    1..0
ok 2 - next kid # {time}

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff throw in root beforeEach > output 1`] = `
TAP version 13
# Subtest: child
    not ok 1 - poop
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |2
              tt.beforeEach(async cb => {
                throw new Error('poop')
        --^
              })
              tt.test('child', tt => {
      stack: |
        {STACK}
      test: child
      ...
    
    1..1
    # failed 1 test
not ok 1 - child # {time}

# Subtest: next kid
    not ok 1 - poop
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |2
              tt.beforeEach(async cb => {
                throw new Error('poop')
        --^
              })
              tt.test('child', tt => {
      stack: |
        {STACK}
      test: next kid
      ...
    
    1..1
    # failed 1 test
not ok 2 - next kid # {time}

1..2
# failed 2 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff thrower after end > output 1`] = `
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
  source: |2
            tt.pass('this is fine')
            tt.threw(new Error('catch it in the parent'))
    --^
          })
          tt.end()
  stack: |
    {STACK}
  test: child
  ...

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP assertions and weird stuff throws > output 1`] = `
TAP version 13
ok 1 - expected to throw
ok 2 - returns the error that was thrown
ok 3 - expected to throw
ok 4 - expected to throw: TypeError x
ok 5 - expected to throw
ok 6 - expected to throw: Error x
ok 7 - expected to throw
ok 8 - expected to throw
ok 9 - expected to throw
ok 10 - returns the error that was thrown
ok 11 - expected to throw: Error noent
not ok 12 - fail: does not throw actually
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
    
          tt.throws(() => 'doesnt tho', 'fail: does not throw actually')
    --^
  
          tt.throws(() => { throw new Error('x') }, {}, { skip: true })
  stack: |
    {STACK}
  ...

ok 13 - expected to throw # SKIP
ok 14 - expected to throw
ok 15 - extra functions are no-ops for bw comp
ok 16 - todo # TODO
1..16
# failed 1 of 16 tests
# todo: 1
# skip: 1

`

exports[`test/test.js TAP assertions and weird stuff timeout at the last tick > output 1`] = `
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

exports[`test/test.js TAP assertions and weird stuff timeout expiration > output 1`] = `
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

exports[`test/test.js TAP assertions and weird stuff timeout with subs > output 1`] = `
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

exports[`test/test.js TAP assertions and weird stuff type > output 1`] = `
TAP version 13
not ok 1 - this fails
  ---
  at:
    line: #
    column: #
    file: test/test.js
  compare: ===
  diff: |
    --- expected
    +++ actual
    @@ -1,1 +1,1 @@
    -object
    +null
  source: |2
          tt.type(null, 'object', 'this fails')
    --^
          tt.type(null, 'object', { expectFail: true })
          tt.type(1234, 'number')
  stack: |
    {STACK}
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
  diff: |
    --- expected
    +++ actual
    @@ -1,1 +1,1 @@
    -(anonymous constructor)
    +Object
  source: |2
          tt.type(tt, Test)
          tt.type({}, function () {}, 'fails, anonymously')
    --^
          const o = {}
          tt.type(o, o, 'a thing is a thing')
  stack: |
    {STACK}
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
  diff: |
    --- expected
    +++ actual
    @@ -1,1 +1,1 @@
    -Object
    +function
  source: |2
          tt.type(() => {}, Function, 'arrows are functions')
          tt.type(() => {}, Object, 'fail: arrows are not objects')
    --^
          tt.type({}, 'object')
          tt.type(tt, 'Test')
  stack: |
    {STACK}
  ...

ok 10 - type is object
ok 11 - type is Test
ok 12 - type is EventEmitter
1..12
# failed 3 of 12 tests

`

exports[`test/test.js TAP assertions and weird stuff using the assertAt field > output 1`] = `
TAP version 13
1..1
not ok 1 - expect fail
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
          const bar = () => foo()
          const baz = () => { tt.assertAt = stack.at(); bar() }
    --^
  
          tt.plan(1)
  ...

# failed 1 test

`

exports[`test/test.js TAP assertions and weird stuff using the assertStack field > output 1`] = `
TAP version 13
1..1
not ok 1 - expect fail
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
          const bar = () => foo()
          const baz = () => { tt.assertStack = stack.captureString(80); bar() }
    --^
  
          tt.plan(1)
  stack: |
    {STACK}
  ...

# failed 1 test

`

exports[`test/test.js TAP endAll direct while waiting on Promise rejection > result 1`] = `
TAP version 13
not ok 1 - expect rejected Promise
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    !error
    name: Error
    message: test unfinished
    stack: |
      {STACK}
  source: |2
      })
      tt.rejects(() => new Promise(() => {}), { message: 'never resolves' })
    --^
      setTimeout(() => tt.endAll())
    })
  ...

1..1
# failed 1 test

`

exports[`test/test.js TAP endAll direct while waiting on a resolving promise > result 1`] = `
TAP version 13
not ok 1 - expect resolving Promise
  ---
  at:
    line: #
    column: #
    file: test/test.js
  found:
    !error
    name: Error
    message: test unfinished
    stack: |
      {STACK}
  source: |2
      })
      tt.resolveMatch(() => new Promise(() => {}), 'never resolves')
    --^
      setTimeout(() => tt.endAll())
    })
  ...

1..1
# failed 1 test

`

exports[`test/test.js TAP endAll with sub while waiting on a resolving promise > result 1`] = `
TAP version 13
# Subtest
    not ok 1 - expect resolving Promise
      ---
      at:
        line: #
        column: #
        file: test/test.js
      found:
        !error
        name: Error
        message: test unfinished
        stack: |
          {STACK}
      source: |2
          })
          tt.test(t => t.resolveMatch(() => new Promise(() => {}), 'never resolves'))
        --^
          setTimeout(() => tt.endAll())
        })
      ...
    
    1..1
    # failed 1 test
not ok 1 # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks bailout after end bailout > bailout after end 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    1..1
Bail out! not fine
BAILOUT: "not fine"
`

exports[`test/test.js TAP short output checks bailout after end no options > bailout after end 1`] = `
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

exports[`test/test.js TAP short output checks child end event throw nonerror bailout > child end event throw nonerror 1`] = `
TAP version 13
# Subtest
    1..1
    ok 1 - should be equal
# end() event
ok 1 # {time}

not ok 2 - (unnamed test)
  ---
  at:
    line: #
    column: #
    file: test/test.js
  error: boop
  source: |2
        'child end event throw nonerror': tt => {
          tt.test(tt => {
    --^
            tt.plan(1)
  stack: |
    {STACK}
  tapCaught: testFunctionThrow
  ...

Bail out! (unnamed test)
BAILOUT: "(unnamed test)"
`

exports[`test/test.js TAP short output checks child end event throw nonerror no options > child end event throw nonerror 1`] = `
TAP version 13
# Subtest
    1..1
    ok 1 - should be equal
# end() event
ok 1 # {time}

not ok 2 - (unnamed test)
  ---
  at:
    line: #
    column: #
    file: test/test.js
  error: boop
  source: |2
        'child end event throw nonerror': tt => {
          tt.test(tt => {
    --^
            tt.plan(1)
  stack: |
    {STACK}
  tapCaught: testFunctionThrow
  ...

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP short output checks child end event throw nonerror runOnly > child end event throw nonerror 1`] = `
TAP version 13
ok 1 - (unnamed test) # SKIP filter: only
1..1
# skip: 1

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
  source: |2
              tt.comment('end() event')
              throw new Error('beep')
    --^
            })
  stack: |
    {STACK}
  tapCaught: testFunctionThrow
  ...

Bail out! beep
BAILOUT: "beep"
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
  source: |2
              tt.comment('end() event')
              throw new Error('beep')
    --^
            })
  stack: |
    {STACK}
  tapCaught: testFunctionThrow
  ...

1..2
# failed 1 of 2 tests

`

exports[`test/test.js TAP short output checks child end event thrower runOnly > child end event thrower 1`] = `
TAP version 13
ok 1 - (unnamed test) # SKIP filter: only
1..1
# skip: 1

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
      source: |2
            'child thrower': tt => tt.test('child test', tt =>
              tt.threw(new Error('ok'))).then(tt.end),
        --^
      
            'child thrower nonerror': tt => tt.test('child test', tt =>
      stack: |
        {STACK}
      test: child test
      ...
    
    Bail out! ok
BAILOUT: "ok"
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
      source: |2
            'child thrower': tt => tt.test('child test', tt =>
              tt.threw(new Error('ok'))).then(tt.end),
        --^
      
            'child thrower nonerror': tt => tt.test('child test', tt =>
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

exports[`test/test.js TAP short output checks child thrower nonerror bailout > child thrower nonerror 1`] = `
TAP version 13
# Subtest: child test
    not ok 1 - (unnamed test)
      ---
      at:
        line: #
        column: #
        file: test/test.js
      error: ok
      source: |2
        
            'child thrower nonerror': tt => tt.test('child test', tt =>
        --^
              tt.threw('ok')).then(tt.end),
      stack: |
        {STACK}
      test: child test
      ...
    
    Bail out! (unnamed test)
BAILOUT: "(unnamed test)"
`

exports[`test/test.js TAP short output checks child thrower nonerror no options > child thrower nonerror 1`] = `
TAP version 13
# Subtest: child test
    not ok 1 - (unnamed test)
      ---
      at:
        line: #
        column: #
        file: test/test.js
      error: ok
      source: |2
        
            'child thrower nonerror': tt => tt.test('child test', tt =>
        --^
              tt.threw('ok')).then(tt.end),
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

exports[`test/test.js TAP short output checks child thrower nonerror runOnly > child thrower nonerror 1`] = `
TAP version 13
ok 1 - child test # SKIP filter: only
1..1
# skip: 1

`

exports[`test/test.js TAP short output checks child thrower runOnly > child thrower 1`] = `
TAP version 13
ok 1 - child test # SKIP filter: only
1..1
# skip: 1

`

exports[`test/test.js TAP short output checks comment bailout > comment 1`] = `
TAP version 13
# this is fine
1..0

`

exports[`test/test.js TAP short output checks comment no options > comment 1`] = `
TAP version 13
# this is fine
1..0

`

exports[`test/test.js TAP short output checks comment runOnly > comment 1`] = `
TAP version 13
# this is fine
1..0

`

exports[`test/test.js TAP short output checks diags bailout > diags 1`] = `
TAP version 13
ok 1 - has diags
  ---
  foo: 1
  ...

not ok 2 - fails without diag
Bail out! fails without diag
BAILOUT: "fails without diag"
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

exports[`test/test.js TAP short output checks expect fail bailout > expect fail 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks expect fail no options > expect fail 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks expect fail runOnly > expect fail 1`] = `
TAP version 13
1..1
ok 1 - this is fine

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
      source: |2
              tt.test('child', tt => {
                tt.fail('this is not ok')
        --^
                tt.end()
              })
      stack: |
        {STACK}
      ...
    
    Bail out! this is not ok
BAILOUT: "this is not ok"
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
      source: |2
              tt.test('child', tt => {
                tt.fail('this is not ok')
        --^
                tt.end()
              })
      stack: |
        {STACK}
      ...
    
    1..1
    # failed 1 test
not ok 1 - child # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks fail then end runOnly > fail then end 1`] = `
TAP version 13
ok 1 - child # SKIP filter: only
1..1
# skip: 1

`

exports[`test/test.js TAP short output checks gentle thrower bailout > gentle thrower 1`] = `
TAP version 13
not ok 1 - ok
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
    
        'gentle thrower': tt => tt.threw(new Error('ok')),
    --^
        'gentle thrower nonerror': tt => tt.threw('ok'),
        'child thrower': tt => tt.test('child test', tt =>
  stack: |
    {STACK}
  ...

Bail out! ok
BAILOUT: "ok"
`

exports[`test/test.js TAP short output checks gentle thrower no options > gentle thrower 1`] = `
TAP version 13
not ok 1 - ok
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
    
        'gentle thrower': tt => tt.threw(new Error('ok')),
    --^
        'gentle thrower nonerror': tt => tt.threw('ok'),
        'child thrower': tt => tt.test('child test', tt =>
  stack: |
    {STACK}
  ...

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks gentle thrower nonerror bailout > gentle thrower nonerror 1`] = `
TAP version 13
not ok 1 - (unnamed test)
  ---
  error: ok
  stack: |
    {STACK}
  ...

Bail out! (unnamed test)
BAILOUT: "(unnamed test)"
`

exports[`test/test.js TAP short output checks gentle thrower nonerror no options > gentle thrower nonerror 1`] = `
TAP version 13
not ok 1 - (unnamed test)
  ---
  error: ok
  stack: |
    {STACK}
  ...

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks gentle thrower nonerror runOnly > gentle thrower nonerror 1`] = `
TAP version 13
not ok 1 - (unnamed test)
  ---
  error: ok
  runOnly: true
  stack: |
    {STACK}
  ...

1..1
# failed 1 test

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
  source: |2
    
        'gentle thrower': tt => tt.threw(new Error('ok')),
    --^
        'gentle thrower nonerror': tt => tt.threw('ok'),
        'child thrower': tt => tt.test('child test', tt =>
  stack: |
    {STACK}
  ...

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks multi-plan throws bailout > multi-plan throws 1`] = `
TAP version 13
1..1
ok 1 - expected to throw

`

exports[`test/test.js TAP short output checks multi-plan throws no options > multi-plan throws 1`] = `
TAP version 13
1..1
ok 1 - expected to throw

`

exports[`test/test.js TAP short output checks multi-plan throws runOnly > multi-plan throws 1`] = `
TAP version 13
1..1
ok 1 - expected to throw

`

exports[`test/test.js TAP short output checks negative plan throws bailout > negative plan throws 1`] = `
TAP version 13
ok 1 - expected to throw
1..1

`

exports[`test/test.js TAP short output checks negative plan throws no options > negative plan throws 1`] = `
TAP version 13
ok 1 - expected to throw
1..1

`

exports[`test/test.js TAP short output checks negative plan throws runOnly > negative plan throws 1`] = `
TAP version 13
ok 1 - expected to throw
1..1

`

exports[`test/test.js TAP short output checks no plan bailout > no plan 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`test/test.js TAP short output checks no plan fail bailout > no plan fail 1`] = `
TAP version 13
not ok 1 - this is fine
Bail out! this is fine
BAILOUT: "this is fine"
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
  source: |2
          tt.fail('this is fine', { diagnostic: false })
          tt.fail({ todo: true })
    --^
          tt.fail('this is fine')
          tt.end()
  ...

not ok 3 - this is fine
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
          tt.fail({ todo: true })
          tt.fail('this is fine')
    --^
          tt.end()
        },
  stack: |
    {STACK}
  ...

1..3
# failed 3 of 3 tests
# todo: 1

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
  source: |2
          tt.fail('this is fine', { diagnostic: false })
          tt.fail({ todo: true })
    --^
          tt.fail('this is fine')
          tt.end()
  ...

not ok 3 - this is fine
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
          tt.fail({ todo: true })
          tt.fail('this is fine')
    --^
          tt.end()
        },
  stack: |
    {STACK}
  ...

1..3
# failed 3 of 3 tests
# todo: 1

`

exports[`test/test.js TAP short output checks no plan no options > no plan 1`] = `
TAP version 13
ok 1 - this is fine
1..1

`

exports[`test/test.js TAP short output checks no plan runOnly > no plan 1`] = `
TAP version 13
ok 1 - this is fine
1..1

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

exports[`test/test.js TAP short output checks parallel sub runOnly > parallel sub 1`] = `
TAP version 13
1..2
ok 1 - slow child # SKIP filter: only
ok 2 - fast child # SKIP filter: only
# skip: 2

`

exports[`test/test.js TAP short output checks plan bailout > plan 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks plan fail bailout > plan fail 1`] = `
TAP version 13
1..1 # expect some failure here
not ok 1 - this is fine
Bail out! this is fine
BAILOUT: "this is fine"
`

exports[`test/test.js TAP short output checks plan fail no options > plan fail 1`] = `
TAP version 13
1..1 # expect some failure here
not ok 1 - this is fine
# failed 1 test

`

exports[`test/test.js TAP short output checks plan fail runOnly > plan fail 1`] = `
TAP version 13
1..1 # expect some failure here
not ok 1 - this is fine
# failed 1 test

`

exports[`test/test.js TAP short output checks plan no options > plan 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks plan runOnly > plan 1`] = `
TAP version 13
1..1
ok 1 - this is fine

`

exports[`test/test.js TAP short output checks planned skip bailout > planned skip 1`] = `
TAP version 13
1..0 # skip this one

`

exports[`test/test.js TAP short output checks planned skip no options > planned skip 1`] = `
TAP version 13
1..0 # skip this one

`

exports[`test/test.js TAP short output checks planned skip runOnly > planned skip 1`] = `
TAP version 13
1..0 # skip this one

`

exports[`test/test.js TAP short output checks pragma bailout > pragma 1`] = `
TAP version 13
pragma +strict
pragma -strict
1..0

`

exports[`test/test.js TAP short output checks pragma no options > pragma 1`] = `
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

exports[`test/test.js TAP short output checks reasoned bailout bailout > reasoned bailout 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    Bail out! not fine
BAILOUT: "not fine"
`

exports[`test/test.js TAP short output checks reasoned bailout no options > reasoned bailout 1`] = `
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

exports[`test/test.js TAP short output checks simulated uncaughtException throwing bailout > simulated uncaughtException throwing 1`] = `
TAP version 13
# Subtest: parent
    ok 1 - expect uncaughtException
    # Subtest: wrong error
        not ok 1 - expect uncaughtException
          ---
          diff: |
            --- expected
            +++ actual
            @@ -1,3 +1,3 @@
            -Object {
            -  "message": "bar",
            +Error: foo is not a bear {
            +  "tapCaught": "uncaughtException",
             }
          pattern:
            message: bar
          stack: |
            {STACK}
          ...
        
        Bail out! expect uncaughtException
BAILOUT: "expect uncaughtException"
`

exports[`test/test.js TAP short output checks simulated uncaughtException throwing no options > simulated uncaughtException throwing 1`] = `
TAP version 13
# Subtest: parent
    ok 1 - expect uncaughtException
    # Subtest: wrong error
        not ok 1 - expect uncaughtException
          ---
          diff: |
            --- expected
            +++ actual
            @@ -1,3 +1,3 @@
            -Object {
            -  "message": "bar",
            +Error: foo is not a bear {
            +  "tapCaught": "uncaughtException",
             }
          pattern:
            message: bar
          stack: |
            {STACK}
          ...
        
        1..1
        # failed 1 test
    not ok 2 - wrong error # {time}
    
    # Subtest: nothing uncaught
        ok 1 - expect uncaughtException
        1..1
    ok 3 - nothing uncaught # {time}
    
    not ok 4 - test end without expected uncaught exceptions
      ---
      stack: |
        {STACK}
      test: nothing uncaught
      wanted:
        - - !re /anotehr one/
          - expect a second one
          - {}
      ...
    
    1..4
    # failed 2 of 4 tests
not ok 1 - parent # {time}

1..1
# failed 1 test

`

exports[`test/test.js TAP short output checks simulated uncaughtException throwing runOnly > simulated uncaughtException throwing 1`] = `
TAP version 13
ok 1 - parent # SKIP filter: only
1..1
# skip: 1

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

exports[`test/test.js TAP short output checks sub runOnly > sub 1`] = `
TAP version 13
ok 1 - named child # SKIP filter: only
ok 2 - named_function # SKIP filter: only
ok 3 - promisey # SKIP filter: only
1..3
# skip: 3

`

exports[`test/test.js TAP short output checks todo bailout > todo 1`] = `
TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
        'todo': tt => {
          tt.notOk(true, 'i will do this later', { todo: true })
    --^
          tt.notOk(true, { todo: 'later' })
          tt.notOk(false)
  ...

not ok 2 - expect falsey value # TODO later
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
          tt.notOk(true, 'i will do this later', { todo: true })
          tt.notOk(true, { todo: 'later' })
    --^
          tt.notOk(false)
          tt.todo('i will do this later', tt => {
  ...

ok 3 - expect falsey value
ok 4 - i will do this later # TODO
not ok 5 - expect truthy value # SKIP
ok 6 - i did not do this later # SKIP
1..6
# todo: 3
# skip: 2

`

exports[`test/test.js TAP short output checks todo no options > todo 1`] = `
TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
        'todo': tt => {
          tt.notOk(true, 'i will do this later', { todo: true })
    --^
          tt.notOk(true, { todo: 'later' })
          tt.notOk(false)
  ...

not ok 2 - expect falsey value # TODO later
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
          tt.notOk(true, 'i will do this later', { todo: true })
          tt.notOk(true, { todo: 'later' })
    --^
          tt.notOk(false)
          tt.todo('i will do this later', tt => {
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
  source: |2
        'todo': tt => {
          tt.notOk(true, 'i will do this later', { todo: true })
    --^
          tt.notOk(true, { todo: 'later' })
          tt.notOk(false)
  ...

not ok 2 - expect falsey value # TODO later
  ---
  at:
    line: #
    column: #
    file: test/test.js
  source: |2
          tt.notOk(true, 'i will do this later', { todo: true })
          tt.notOk(true, { todo: 'later' })
    --^
          tt.notOk(false)
          tt.todo('i will do this later', tt => {
  ...

ok 3 - expect falsey value
ok 4 - i will do this later # SKIP filter: only
not ok 5 - expect truthy value # SKIP
ok 6 - i did not do this later # SKIP filter: only
1..6
# todo: 2
# skip: 3

`

exports[`test/test.js TAP short output checks unreasonable bailout bailout > unreasonable bailout 1`] = `
TAP version 13
# Subtest
    ok 1 - this is fine
    Bail out!

`

exports[`test/test.js TAP short output checks unreasonable bailout no options > unreasonable bailout 1`] = `
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

exports[`test/test.js TAP snapshots > saving the snapshot 1`] = `
TAP version 13
# Subtest: child test
    ok 1 - an object
    ok 2 - a jsonic object
    ok 3 - a mutated object
    ok 4 - string
    ok 5 - must match snapshot # TODO later
    ok 6 - expect resolving Promise # TODO later
    not ok 7 - message about promise
      ---
      at: {}
      ...
    
    not ok 8 - expect resolving Promise
      ---
      at: {}
      found: rejected promise
      ...
    
    ok 9 - promise fn
    ok 10 - modify the promise result
    1..10
    # failed 2 of 10 tests
    # todo: 2
not ok 1 - child test # {time}
  ---
  snapshot: true
  ...

1..1
# failed 1 test

`

exports[`test/test.js TAP snapshots > snapshot file 1`] = `
/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[\`test/test.js deleteme child test > a jsonic object 1\`] = \`
{
  "foo": "bar"
}
\`

exports[\`test/test.js deleteme child test > a mutated object 1\`] = \`
Object {
  "foo": "bar",
  "mutated": true,
}
\`

exports[\`test/test.js deleteme child test > an object 1\`] = \`
Object {
  "foo": "bar",
}
\`

exports[\`test/test.js deleteme child test > expect resolving Promise 1\`] = \`
true
\`

exports[\`test/test.js deleteme child test > modify the promise result 1\`] = \`
a: 1
\`

exports[\`test/test.js deleteme child test > must match snapshot 1\`] = \`
do this eventually
\`

exports[\`test/test.js deleteme child test > promise fn 1\`] = \`
420
\`

exports[\`test/test.js deleteme child test > string 1\`] = \`
some string \\\\ \\\` \\\${process.env.FOO}
\`

`

exports[`test/test.js TAP snapshots > verifying the snapshot 1`] = `
TAP version 13
# Subtest: child test
    ok 1 - an object
    ok 2 - a jsonic object
    ok 3 - a mutated object
    ok 4 - string
    ok 5 - must match snapshot # TODO later
    ok 6 - expect resolving Promise # TODO later
    not ok 7 - message about promise
      ---
      at: {}
      ...
    
    not ok 8 - expect resolving Promise
      ---
      at: {}
      found: rejected promise
      ...
    
    ok 9 - promise fn
    ok 10 - modify the promise result
    1..10
    # failed 2 of 10 tests
    # todo: 2
not ok 1 - child test # {time}
  ---
  snapshot: false
  ...

1..1
# failed 1 test

`

exports[`test/test.js TAP test dir name does not throw when no main module is present > stderr 1`] = `

`

exports[`test/test.js TAP test dir name does not throw when no main module is present > stdout 1`] = `
./TAP

`

exports[`test/test.js TAP throw while waiting on a resolving promise > result 1`] = `
TAP version 13
# Subtest
    not ok 1 - expect resolving Promise
      ---
      at:
        line: #
        column: #
        file: test/test.js
      found:
        !error
        name: Error
        message: error thrown while awaiting Promise
        stack: |
          {STACK}
        thrown:
          !error
          name: Error
          message: poop
          stack: |
            {STACK}
      source: |2
            setTimeout(() => t.threw(new Error('poop')))
            return t.resolveMatch(() => new Promise(() => {}), 'never resolves')
        --^
          })
          tt.end()
      ...
    
    not ok 2 - poop
      ---
      at:
        line: #
        column: #
        file: test/test.js
      source: |2
          tt.test(t => {
            setTimeout(() => t.threw(new Error('poop')))
        --^
            return t.resolveMatch(() => new Promise(() => {}), 'never resolves')
          })
      stack: |
        {STACK}
      ...
    
    1..2
    # failed 2 of 2 tests
not ok 1 # {time}

1..1
# failed 1 test

`
