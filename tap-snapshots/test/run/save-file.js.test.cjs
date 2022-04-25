/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/save-file.js TAP empty save file, run all tests > stdout 1`] = `
TAP version 13
# Subtest: a/b/2.js
    ok 1 - 2
    1..1
    # {time}
ok 1 - a/b/2.js # {time}

# Subtest: a/b/f1.js
    ok 1 - fine now
    1..1
    # {time}
ok 2 - a/b/f1.js # {time}

# Subtest: x/y/1.js
    ok 1 - one
    1..1
    # {time}
ok 3 - x/y/1.js # {time}

# Subtest: z.js
    ok 1 - fine now too
    1..1
    # {time}
ok 4 - z.js # {time}

1..4
# {time}

`

exports[`test/run/save-file.js TAP pass, empty save file > stdout 1`] = `
TAP version 13
# Subtest: a/b/f1.js
    ok 1 - fine now
    1..1
    # {time}
ok 1 - a/b/f1.js # {time}

# Subtest: z.js
    ok 1 - fine now too
    1..1
    # {time}
ok 2 - z.js # {time}

1..2
# {time}

`

exports[`test/run/save-file.js TAP with bailout, should save all untested > savefile 1`] = `
a/b/f1.js
x/y/1.js
z.js

`

exports[`test/run/save-file.js TAP with bailout, should save all untested > stdout 1`] = `
TAP version 13
# Subtest: a/b/2.js
    ok 1 - 2
    1..1
    # {time}
ok 1 - a/b/2.js # {time}

# Subtest: a/b/f1.js
    not ok 1 - a/b
      ---
      at:
        line: #
        column: #
        file: a/b/f1.js
      source: |
        //f1.js
          require("{CWD}/").fail('a/b')
        --^
      stack: |
        {STACK}
      ...
    
    Bail out! a/b
Bail out! a/b

`

exports[`test/run/save-file.js TAP without bailout, run untested, save failures > savefile 1`] = `
a/b/f1.js
z.js

`

exports[`test/run/save-file.js TAP without bailout, run untested, save failures > stdout 1`] = `
TAP version 13
# Subtest: a/b/f1.js
    not ok 1 - a/b
      ---
      at:
        line: #
        column: #
        file: a/b/f1.js
      source: |
        //f1.js
          require("{CWD}/").fail('a/b')
        --^
      stack: |
        {STACK}
      ...
    
    1..1
    # failed 1 test
    # {time}
not ok 1 - a/b/f1.js # {time}
  ---
  args:
    - a/b/f1.js
  command: {NODE}
  cwd: {CWD}/cli-tests
  env: {}
  exitCode: 1
  file: a/b/f1.js
  stdio:
    - 0
    - pipe
    - 2
  timeout: {default}
  ...

# Subtest: x/y/1.js
    ok 1 - one
    1..1
    # {time}
ok 2 - x/y/1.js # {time}

# Subtest: z.js
    not ok 1 - c/d
      ---
      at:
        line: #
        column: #
        file: z.js
      source: |
        //z.js
          require("{CWD}/").fail('c/d')
        --^
      stack: |
        {STACK}
      ...
    
    1..1
    # failed 1 test
    # {time}
not ok 3 - z.js # {time}
  ---
  args:
    - z.js
  command: {NODE}
  cwd: {CWD}/cli-tests
  env: {}
  exitCode: 1
  file: z.js
  stdio:
    - 0
    - pipe
    - 2
  timeout: {default}
  ...

1..3
# failed 2 of 3 tests
# {time}

`
