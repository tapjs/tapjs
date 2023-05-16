/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/before-after.js TAP basic > stderr 1`] = `

`

exports[`test/run/before-after.js TAP basic > stdout 1`] = `
this is fine
slow
TAP version 13
# Subtest: cli-tests/t1.js
    this is fine
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - cli-tests/t1.js # {time}

# Subtest: cli-tests/t2.js
    this is fine
    # Subtest: sub
        ok 1 - this is fine
        1..1
    ok 1 - sub # {time}
    
    1..1
    # {time}
ok 2 - cli-tests/t2.js # {time}

# Subtest: cli-tests/t3.js
    this is fine
    # Subtest: sub
        not ok 1 - not fine
          ---
          at:
            line: #
            column: #
            file: cli-tests/t3.js
          source: |
            const t = require("{CWD}/")
            t.test('sub', async t => t.fail('not fine'))
            --^
          stack: |
            {STACK}
          ...
        
        1..1
        # failed 1 test
    not ok 1 - sub # {time}
    
    1..1
    # failed 1 test
    # {time}
not ok 3 - cli-tests/t3.js # {time}
  ---
  args:
    - -r
    - ./cli-tests/loggy.js
    - cli-tests/t3.js
  command: {NODE}
  cwd: {CWD}
  env: {}
  exitCode: 1
  file: cli-tests/t3.js
  stdio:
    - 0
    - pipe
    - 2
  timeout: {default}
  ...

1..3
# failed 1 of 3 tests
# {time}
this is fine
ok

`

exports[`test/run/before-after.js TAP failing after > stderr 1`] = `
{CWD}/cli-tests/fail.js:2
  throw new Error('fail')
  ^

Error: fail
    {STACK}

# failed cli-tests/fail.js
# code=1 signal=null


`

exports[`test/run/before-after.js TAP failing after > stdout 1`] = `
TAP version 13
# Subtest: cli-tests/t1.js
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - cli-tests/t1.js # {time}

1..1
# {time}

`

exports[`test/run/before-after.js TAP failing before > stderr 1`] = `
{CWD}/cli-tests/fail.js:2
  throw new Error('fail')
  ^

Error: fail
    {STACK}

# failed cli-tests/fail.js
# code=1 signal=null


`

exports[`test/run/before-after.js TAP failing before > stdout 1`] = `

`

exports[`test/run/before-after.js TAP run after even on bailout > stderr 1`] = `

`

exports[`test/run/before-after.js TAP run after even on bailout > stdout 1`] = `
TAP version 13
# Subtest: cli-tests/t1.js
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - cli-tests/t1.js # {time}

# Subtest: cli-tests/t2.js
    # Subtest: sub
        ok 1 - this is fine
        1..1
    ok 1 - sub # {time}
    
    1..1
    # {time}
ok 2 - cli-tests/t2.js # {time}

# Subtest: cli-tests/t3.js
    # Subtest: sub
        not ok 1 - not fine
          ---
          at:
            line: #
            column: #
            file: cli-tests/t3.js
          source: |
            const t = require("{CWD}/")
            t.test('sub', async t => t.fail('not fine'))
            --^
          stack: |
            {STACK}
          ...
        
        Bail out! not fine
Bail out! not fine
ok

`

exports[`test/run/before-after.js TAP signal fail after > stderr 1`] = `

# failed cli-tests/sigfail.js
# code=null signal=SIGKILL


`

exports[`test/run/before-after.js TAP signal fail after > stdout 1`] = `

`

exports[`test/run/before-after.js TAP slow fail before > stderr 1`] = `
{CWD}/cli-tests/slow-fail.js:2
  throw new Error('slow fail')
  ^

Error: slow fail
    {STACK}

# failed cli-tests/slow-fail.js
# code=1 signal=null


`

exports[`test/run/before-after.js TAP slow fail before > stdout 1`] = `

`
