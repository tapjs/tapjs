/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/test-base.ts > TAP > asserts while occupied and ended > must match snapshot 1`] = `
TAP version 14
# Subtest: parent
    # Subtest: child
        ok 1 - this is fine
        ok 2 - this is fine
        1..2
    ok 1 - child # time={TIME}
    
    # Subtest: child 2
        ok 1 - this is fine
        ok 2 - this is fine
        1..2
    ok 2 - child 2 # time={TIME}
    
    1..2
ok 1 - parent # time={TIME}

ok 2 - should be equal
ok 3 - should be equal
ok 4 - should be equal
ok 5 - should be equal
1..5

`

exports[`test/test-base.ts > TAP > bailout > bail no message > bailout no message 1`] = `
TAP version 14
Bail out!

`

exports[`test/test-base.ts > TAP > bailout > bail passed to parent, child ended, no results yet > child 1`] = `
TAP version 14
ok 1 - pass
1..1

`

exports[`test/test-base.ts > TAP > bailout > bail passed to parent, child ended, no results yet > parent 1`] = `
TAP version 14
Bail out!

`

exports[`test/test-base.ts > TAP > bailout > bail passed to parent, child has results > child 1`] = `
TAP version 14
ok 1 - pass
1..1

`

exports[`test/test-base.ts > TAP > bailout > bail passed to parent, child has results > parent 1`] = `
TAP version 14
Bail out!

`

exports[`test/test-base.ts > TAP > bailout > bail with message > bailout with message 1`] = `
TAP version 14
Bail out! bail message

`

exports[`test/test-base.ts > TAP > capture at/stack for assertions > at:null to suppress callsite capture > must match snapshot 1`] = `
TAP version 14
not ok 1 - no callsite
  ---
  other: diags
  ...

1..1

`

exports[`test/test-base.ts > TAP > capture at/stack for assertions > diagnostic defaults false for skip/todo > must match snapshot 1`] = `
TAP version 14
not ok 1 - skip this # SKIP
1..1

`

exports[`test/test-base.ts > TAP > comments > after end, comment at parent > must match snapshot 1`] = `
TAP version 14
# Subtest: child
    # Subtest: fast
        1..0
    ok 1 - fast # time={TIME}
    
    1..1
ok 1 - child # time={TIME}

# after end { world: true }
1..1

`

exports[`test/test-base.ts > TAP > comments > after getting results, write to parent > must match snapshot 1`] = `
TAP version 14
# Subtest: child
    # Subtest: fast
        1..0
    ok 1 - fast # time={TIME}
    
    1..1
ok 1 - child # time={TIME}

# oncomplete { world: true }
1..1

`

exports[`test/test-base.ts > TAP > comments > before end > must match snapshot 1`] = `
# before end { world: true }
TAP version 14
1..0

`

exports[`test/test-base.ts > TAP > comments > nowhere to go, writes to console > must match snapshot 1`] = `
TAP version 14
ok 1 - this is fine
1..1

`

exports[`test/test-base.ts > TAP > comments > oncomplete, no parent, write to stream > must match snapshot 1`] = `
TAP version 14
ok 1 - this is fine
1..1
# oncomplete { world: true }

`

exports[`test/test-base.ts > TAP > comments > while occupied, wait until clear > must match snapshot 1`] = `
TAP version 14
# Subtest: (unnamed test)
    1..0
ok 1 - (unnamed test) # time={TIME}

# while occupied { a: 1 }
1..1

`

exports[`test/test-base.ts > TAP > end stuff > onbeforeend awaits promise > must match snapshot 1`] = `
TAP version 14
ok 1 - this is fine
1..1

`

exports[`test/test-base.ts > TAP > end stuff > onEOF awaits promise > must match snapshot 1`] = `
TAP version 14
ok 1 - this is fine
1..1

`

exports[`test/test-base.ts > TAP > expect fail assertion > must match snapshot 1`] = `
TAP version 14
ok 1 - double reverse fail
1..1

`

exports[`test/test-base.ts > TAP > plan > leading plan sets end count > must match snapshot 1`] = `
TAP version 14
1..2
ok 1 - this is fine
ok 2 - also ok

`

exports[`test/test-base.ts > TAP > plan > no op after bailout > must match snapshot 1`] = `
TAP version 14
Bail out!

`

exports[`test/test-base.ts > TAP > plan > plan 0 triggers end > must match snapshot 1`] = `
TAP version 14
1..0 # skip everything

`

exports[`test/test-base.ts > TAP > plan > trailing plan triggers end > must match snapshot 1`] = `
TAP version 14
ok 1 - this is fine
ok 2 - also ok
1..2

`

exports[`test/test-base.ts > TAP > processing edge cases > async method gets awaited > must match snapshot 1`] = `
TAP version 14
ok 1 - this is fine
# write in async method
# comment in async method
ok 2 - after pushing async method on queue
1..2

`

exports[`test/test-base.ts > TAP > processing edge cases > await async function > must match snapshot 1`] = `
TAP version 14
ok 1 - this is fine
# write in async function
# comment in async function
ok 2 - after pushing async function on queue
1..2

`

exports[`test/test-base.ts > TAP > processing edge cases > multiple parallel buffered tests > must match snapshot 1`] = `
TAP version 14
# Subtest: one
    1..0
ok 1 - one # time={TIME}

# Subtest: two
    1..0
ok 2 - two # time={TIME}

# Subtest: tre
    1..0
ok 3 - tre # time={TIME}

# Subtest: for
    1..0
ok 4 - for # time={TIME}

1..4

`

exports[`test/test-base.ts > TAP > processing edge cases > multiple parallel buffered tests, then bailout > must match snapshot 1`] = `
TAP version 14
Bail out!

`

exports[`test/test-base.ts > TAP > processing edge cases > test point with tapChildBuffer > must match snapshot 1`] = `
TAP version 14
# Subtest: this is fine
    1..1
    ok 1 - child test ok
ok 1 - this is fine
1..1

`

exports[`test/test-base.ts > TAP > processing edge cases > unknown method in queue is ignored > must match snapshot 1`] = `
TAP version 14
ok 1 - this is fine
ok 2 - after pushing unknown method on queue
1..2

`

exports[`test/test-base.ts > TAP > push awaited assertion to top if ended implicitly > must match snapshot 1`] = `
TAP version 14
# Subtest: child test
    ok 1 - this is fine
    1..1
ok 1 - child test # time={TIME}

1..1

`

exports[`test/test-base.ts > TAP > stdinOnly mode > basic stdinOnly mode > must match snapshot 1`] = `
TAP version 14
1..2
ok 1
# Subtest: child
    1..1
    ok 1 - this is fine
ok 2 - child

`

exports[`test/test-base.ts > TAP > subtest stuff > skipped sub > must match snapshot 1`] = `
TAP version 14
ok 1 - blah # SKIP
1..1

`

exports[`test/test-base.ts > TAP > subtest stuff > skipped sub, no name > must match snapshot 1`] = `
TAP version 14
ok 1 - (unnamed test) # SKIP
1..1

`

exports[`test/test-base.ts > TAP > subtest stuff > sub after bailout > must match snapshot 1`] = `
TAP version 14
Bail out!

`

exports[`test/test-base.ts > TAP > throw an error with entirely internal frames > must match snapshot 1`] = `
TAP version 14
# Subtest: child
    ok 1 - about to throw
    not ok 2 - internal stuff
      ---
      tapCaught: testFunctionThrow
      ...
    
    1..2
not ok 1 - child # time={TIME}
  ---
  at:
    fileName: test/test-base.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Test
  source: |2
      })
      const tb = new T({ name: 'internal thrower' })
      tb.test('child', t => {
    -----^
        t.pass('about to throw')
        throw er
  ...

1..1

`

exports[`test/test-base.ts > TAP > timeouts > occupied > must match snapshot 1`] = `
TAP version 14
# Subtest: child
    not ok 1 - timeout!
      ---
      a: 1
      expired: timeout
      ...
    
    1..1
not ok 1 - child # time={TIME}
  ---
  at:
    fileName: test/test-base.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Test
  source: |2
      t.test('occupied', async t => {
        const tb = new T({ name: 'timeout' })
        tb.test('child', t => setTimeout(() => t.end()))
    -------^
        tb.timeout({ a: 1 })
        t.matchSnapshot(await tb.concat())
  ...

1..1

`

exports[`test/test-base.ts > TAP > timeouts > unoccupied > must match snapshot 1`] = `
TAP version 14
not ok 1 - timeout!
  ---
  expired: timeout
  test: timeout
  ...

1..1

`
