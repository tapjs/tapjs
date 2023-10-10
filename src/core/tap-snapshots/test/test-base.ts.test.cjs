/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
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

exports[`test/test-base.ts > TAP > cannot create subtest after promise resolves > must match snapshot 1`] = `
TAP version 14
# Subtest: parent
    # Subtest: child
        1..0
    ok 1 - child # time={TIME}
    
    not ok 2 - cannot create subtest after parent promise resolves
      ---
      stack: |
        Minimal.<anonymous> (test/test-base.ts:1664:13)
      at:
        fileName: test/test-base.ts
        lineNumber: ##
        columnNumber: ##
        typeName: Minimal
        methodName: <anonymous>
        functionName: Minimal.<anonymous>
      test: child
      source: |2
            if (!subtest) throw new Error('did not get subtest')
            await p
            subtest.test('this should not work', async () => {})
        ------------^
          })
          tb.end()
      ...
    
    1..2
not ok 1 - parent # time={TIME}

1..1

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
# oncomplete { world: true }
ok 1 - child # time={TIME}

1..1

`

exports[`test/test-base.ts > TAP > comments > before end > must match snapshot 1`] = `
# before end { world: true }
TAP version 14
1..0 # no tests found

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

exports[`test/test-base.ts > TAP > failing silent unbuffered subtest > must match snapshot 1`] = `
TAP version 14
# Subtest: one
    1..0
ok 1 - one # time={TIME}

# Subtest: silent fail
    not ok 1 - nope
    
    1..1
not ok 2 - silent fail # time={TIME}
  ---
  silent: true
  at:
    fileName: test/test-base.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Test
  source: |2
      const tb = new T({ name: 'parent' })
      tb.test('one', t => t.end())
      tb.test('silent fail', { silent: true, buffered: false }, t => {
    -----^
        t.fail('nope', { stack: '', at: null })
        t.end()
  ...

# Subtest: two
    1..0
ok 3 - two # time={TIME}

1..3

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

exports[`test/test-base.ts > TAP > plan plus promise > must match snapshot 1`] = `
TAP version 14
# Subtest: parent
    1..2
    # Subtest: child
        ok 1 - this is fine
        1..1
    ok 1 - child # time={TIME}
    
    # Subtest: sync child
        ok 1 - this is fine
        1..1
    ok 2 - sync child # time={TIME}
    
ok 1 - parent # time={TIME}

1..1

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

exports[`test/test-base.ts > TAP > subtest stuff > sub after end > must match snapshot 1`] = `
TAP version 14
# Subtest: extra subtest with plan
    1..1
    # Subtest: first subtest
        1..0
    ok 1 - first subtest # time={TIME}
    
not ok 1 - extra subtest with plan # time={TIME}
  ---
  at:
    fileName: test/test-base.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Test
  source: |2
      t.test('sub after end', async t => {
        const tb = new T({ name: 'root' })
        tb.test('extra subtest with plan', t => {
    -------^
          t.plan(1)
          t.test('first subtest', t => t.end())
  ...

not ok 2 - test count exceeds plan
  ---
  stack: {STACK}
  at:
    fileName: test/test-base.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Minimal
    methodName: <anonymous>
    functionName: Minimal.<anonymous>
  test: extra subtest with plan
  source: |2
          t.plan(1)
          t.test('first subtest', t => t.end())
          t.test('second subtest', t => t.end())
    --------^
        })
        tb.test('extra subtest with t.end()', t => {
  ...

# Subtest: extra subtest with t.end()
    # Subtest: first subtest
        1..0
    ok 1 - first subtest # time={TIME}
    
    1..1
not ok 3 - extra subtest with t.end() # time={TIME}
  ---
  at:
    fileName: test/test-base.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Test
  source: |2
          t.test('second subtest', t => t.end())
        })
        tb.test('extra subtest with t.end()', t => {
    -------^
          t.test('first subtest', t => t.end())
          t.end()
  ...

not ok 4 - subtest after parent test end()
  ---
  stack: {STACK}
  at:
    fileName: test/test-base.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Minimal
    methodName: <anonymous>
    functionName: Minimal.<anonymous>
  test: extra subtest with t.end()
  source: |2
          t.test('first subtest', t => t.end())
          t.end()
          t.test('second subtest', t => t.end())
    --------^
        })
        const p = tb.test('extra subtest with promise', async t => {
  ...

# Subtest: extra subtest with promise
    # Subtest: first subtest
        1..0
    ok 1 - first subtest # time={TIME}
    
    1..1
ok 5 - extra subtest with promise # time={TIME}

not ok 6 - cannot create subtest after parent promise resolves
  ---
  stack: {STACK}
  at:
    fileName: test/test-base.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Test
    methodName: <anonymous>
    functionName: Test.<anonymous>
  test: extra subtest with promise
  source: |2
        })
        await p
        p.subtest?.test('second subtest', t => t.end())
    ---------------^
        tb.end()
        const out = await tb.concat()
  ...

1..6

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

exports[`test/test-base.ts > TAP > unmet plan plus async and sync children > must match snapshot 1`] = `
TAP version 14
# Subtest: parent
    1..6
    # Subtest: asdfasdf child
        ok 1 - this is fine
        not ok 2 - test unfinished
          ---
          jobId: 1
          test: asdfasdf child
          ...
        
        1..2
    not ok 1 - asdfasdf child # time={TIME}
      ---
      jobId: 1
      ...
    
    # Subtest: buffered child
        ok 1 - this is fine
        1..1
    ok 2 - buffered child # time={TIME}
    
    # Subtest: sync child
        ok 1 - this is fine
        1..1
    ok 3 - sync child # time={TIME}
    
    not ok 4 - test count(2) != plan(6)
      ---
      at:
        fileName: test/test-base.ts
        lineNumber: ##
        columnNumber: ##
        typeName: Minimal
      source: |2
          // the root TAP object calling endAll on process exit.
          tb.test('parent', async t => {
            t.plan(6)
        ------^
            t.jobs = 2
            // suppress the stack trace for this test
      diff: |
        --- expected
        +++ actual
        @@ -1,1 +1,1 @@
        -6
        +2
      ...
    
    # test count(4) != plan(6)
not ok 1 - parent # time={TIME}
  ---
  at:
    fileName: test/test-base.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Test
  source: |2
      // simulate an async action that keeps the process open, then
      // the root TAP object calling endAll on process exit.
      tb.test('parent', async t => {
    -----^
        t.plan(6)
        t.jobs = 2
  ...

1..1

`

exports[`test/test-base.ts > TAP > unmet plan plus async children with delay > must match snapshot 1`] = `
TAP version 14
# Subtest: parent
    1..6
    # Subtest: unfinished child
        1..3
        ok 1 - this is fine
        not ok 2 - test unfinished
          ---
          jobId: 1
          test: unfinished child
          ...
        
        not ok 3 - test count(1) != plan(3)
          ---
          at:
            fileName: test/test-base.ts
            lineNumber: ##
            columnNumber: ##
            typeName: Minimal
          source: |2
                // suppress the stack trace for this test
                t.test('unfinished child', { at: null }, async t => {
                  t.plan(3)
            --------^
                  t.pass('this is fine')
                })
          diff: |
            --- expected
            +++ actual
            @@ -1,1 +1,1 @@
            -3
            +1
          ...
        
    not ok 1 - unfinished child # time={TIME}
      ---
      jobId: 1
      ...
    
    # Subtest: buffered child
        ok 1 - this is fine
        1..1
    ok 2 - buffered child # time={TIME}
    
    # Subtest: sync child
        ok 1 - this is fine
        1..1
    ok 3 - sync child # time={TIME}
    
    not ok 4 - test count(2) != plan(6)
      ---
      at:
        fileName: test/test-base.ts
        lineNumber: ##
        columnNumber: ##
        typeName: Minimal
      source: |2
          // the root TAP object calling endAll on process exit.
          tb.test('parent', async t => {
            t.plan(6)
        ------^
            t.jobs = 2
            // suppress the stack trace for this test
      diff: |
        --- expected
        +++ actual
        @@ -1,1 +1,1 @@
        -6
        +2
      ...
    
    # test count(4) != plan(6)
not ok 1 - parent # time={TIME}
  ---
  at:
    fileName: test/test-base.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Test
  source: |2
      // simulate an async action that keeps the process open, then
      // the root TAP object calling endAll on process exit.
      tb.test('parent', async t => {
    -----^
        t.plan(6)
        t.jobs = 2
  ...

1..1

`

exports[`test/test-base.ts > TAP > wait for waiters before entering subtests > log 1`] = `
Array [
  "start before",
  "end before",
  "start zro",
  "start one",
  "end zro",
  "end one",
  "start noparallel 12",
  "end noparallel 12",
  "start two",
  "start tre",
  "start fur",
  "start fiv",
  "end two",
  "end tre",
  "end fur",
  "end fiv",
  "start second before",
  "end second before",
  "start six",
  "start svn",
  "start eit",
  "start shhh",
  "start nin",
  "end six",
  "end svn",
  "end eit",
  "end shhh",
  "end nin",
]
`

exports[`test/test-base.ts > TAP > wait for waiters before entering subtests > output 1`] = `
TAP version 14
# Subtest: zro
    1..0
ok 1 - zro # time={TIME}

# Subtest: one
    1..0
ok 2 - one # time={TIME}

# Subtest: noparallel 12
    1..0
ok 3 - noparallel 12 # time={TIME}

# Subtest: two
    1..0
ok 4 - two # time={TIME}

# Subtest: tre
    1..0
ok 5 - tre # time={TIME}

# Subtest: fur
    1..0
ok 6 - fur # time={TIME}

# Subtest: fiv
    1..0
ok 7 - fiv # time={TIME}

# Subtest: six
    1..0
ok 8 - six # time={TIME}

# Subtest: svn
    1..0
ok 9 - svn # time={TIME}

# Subtest: eit
    1..0
ok 10 - eit # time={TIME}

# Subtest: nin
    1..0
ok 11 - nin # time={TIME}

1..11

`
