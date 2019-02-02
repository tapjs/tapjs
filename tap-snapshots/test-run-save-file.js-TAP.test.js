/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/save-file.js TAP with bailout, should save all untested > stdout 1`] = `
TAP version 13
# Subtest: z.js
    not ok 1 - c/d
      ---
      at:
        line: #
        column: #
        file: z.js
      source: |
        require("{CWD}/").fail('c/d')
      stack: |
        {STACK}
      ...
    
    Bail out! # c/d
Bail out! # c/d

`

exports[`test/run/save-file.js TAP with bailout, should save all untested > savefile 1`] = `
a
x
z.js
a/b
x/y
a/b/2.js
a/b/f1.js
x/y/1.js

`

exports[`test/run/save-file.js TAP without bailout, run untested, save failures > stdout 1`] = `
TAP version 13
# Subtest: z.js
    not ok 1 - c/d
      ---
      at:
        line: #
        column: #
        file: z.js
      source: |
        require("{CWD}/").fail('c/d')
      stack: |
        {STACK}
      ...
    
    1..1
    # failed 1 test
    # {time}
not ok 1 - z.js # {time}
  ---
  args:
    - '-r'
    - esm
    - z.js
  childId: 2
  command: {NODE}
  cwd: {CWD}/cli-tests
  exitCode: 1
  file: z.js
  stdio:
    - 0
    - pipe
    - 2
  timeout: {default}
  ...

# Subtest: a/b/2.js
    ok 1 - 2
    1..1
    # {time}
ok 2 - a/b/2.js # {time}

# Subtest: a/b/f1.js
    not ok 1 - a/b
      ---
      at:
        line: #
        column: #
        file: a/b/f1.js
      source: |
        require("{CWD}/").fail('a/b')
      stack: |
        {STACK}
      ...
    
    1..1
    # failed 1 test
    # {time}
not ok 3 - a/b/f1.js # {time}
  ---
  args:
    - '-r'
    - esm
    - a/b/f1.js
  childId: 6
  command: {NODE}
  cwd: {CWD}/cli-tests
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
ok 4 - x/y/1.js # {time}

1..4
# failed 2 of 4 tests
# {time}

`

exports[`test/run/save-file.js TAP without bailout, run untested, save failures > savefile 1`] = `
z.js
a/b/f1.js

`

exports[`test/run/save-file.js TAP pass, empty save file > stdout 1`] = `
TAP version 13
# Subtest: z.js
    ok 1 - fine now too
    1..1
    # {time}
ok 1 - z.js # {time}

# Subtest: a/b/f1.js
    ok 1 - fine now
    1..1
    # {time}
ok 2 - a/b/f1.js # {time}

1..2
# {time}

`

exports[`test/run/save-file.js TAP empty save file, run all tests > stdout 1`] = `
TAP version 13
# Subtest: z.js
    ok 1 - fine now too
    1..1
    # {time}
ok 1 - z.js # {time}

# Subtest: a/b/2.js
    ok 1 - 2
    1..1
    # {time}
ok 2 - a/b/2.js # {time}

# Subtest: a/b/f1.js
    ok 1 - fine now
    1..1
    # {time}
ok 3 - a/b/f1.js # {time}

# Subtest: x/y/1.js
    ok 1 - one
    1..1
    # {time}
ok 4 - x/y/1.js # {time}

1..4
# {time}

`
