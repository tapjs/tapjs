/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/basic.js TAP --parser-version > output 1`] = `
11.0.2

`

exports[`test/run/basic.js TAP --versions > output 1`] = `
tap: {version}
libtap: {version}
tap-parser: {version}
nyc: {version}
tap-yaml: {version}
treport: {version}
tcompare: {version}


`

exports[`test/run/basic.js TAP basic test run > ok.js output 1`] = `
TAP version 13
# Subtest: cli-tests/ok.js
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - cli-tests/ok.js # {time}

1..1
# {time}

`

exports[`test/run/basic.js TAP ignored files > stdout 1`] = `
TAP version 13
# Subtest: test/ok.js
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - test/ok.js # {time}

1..1
# {time}

`

exports[`test/run/basic.js TAP ignored files > stdout 2`] = `

`

exports[`test/run/basic.js TAP nonexistent file > stderr 1`] = `

`

exports[`test/run/basic.js TAP nonexistent file > stdout 1`] = `
TAP version 13
# Subtest: does not exist
    not ok 1 - ENOENT: no such file or directory, stat 'does not exist'
      ---
      at:
        line: #
        column: #
        file: #INTERNAL#
      code: ENOENT
      errno: -2
      path: does not exist
      stack: |
        {STACK}
      syscall: stat
      test: does not exist
      ...
    
    1..1
    # failed 1 test
not ok 1 - does not exist # {time}

1..1
# failed 1 test
# {time}

`
