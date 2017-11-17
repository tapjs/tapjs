'use strict'
exports[`test/run.js TAP basic > ok.js output 1`] = `
TAP version 13
# Subtest: test/cli-tests/ok.js
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - test/cli-tests/ok.js # {time}

1..1
# {time}

`

exports[`test/run.js TAP stdin with file > undefined 1`] = `
TAP version 13
ok 1 - test/cli-tests/foo.test.js # {time} {
    ok 1 - child # {time} {
        ok 1 - this is fine
        1..1
    }
    
    1..1
    # {time}
}

ok 2 - /dev/stdin # {time} {
    1..1
    ok
}

1..2
# {time}

`

exports[`run.js TAP coverage --100 pass > 100 pass 1`] = `
TAP version 13
# Subtest: 1.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 1 - 1.test.js # {time}

# Subtest: 2.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 2 - 2.test.js # {time}

# Subtest: 3.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 3 - 3.test.js # {time}

1..3
# {time}
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |      100 |      100 |      100 |      100 |                |
 ok.js    |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|

`

exports[`run.js TAP coverage --100 fail > 100 fail 1`] = `
TAP version 13
# Subtest: 1.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 1 - 1.test.js # {time}

# Subtest: 2.test.js
    ok 1 - should be equal
    1..1
    # {time}
ok 2 - 2.test.js # {time}

1..2
# {time}
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |       75 |       75 |      100 |       75 |                |
 ok.js    |       75 |       75 |      100 |       75 |              6 |
----------|----------|----------|----------|----------|----------------|

`

exports[`run.js TAP coverage report only > lcov output 1`] = `
TN:
SF:{CWD}/ok.js
FN:2,(anonymous_0)
FNF:1
FNH:1
FNDA:2,(anonymous_0)
DA:2,2
DA:3,2
DA:4,2
DA:6,0
LF:4
LH:3
BRDA:3,0,0,2
BRDA:3,0,1,0
BRDA:4,1,0,2
BRDA:4,1,1,1
BRF:4
BRH:3
end_of_record

`

exports[`run.js TAP coverage report with checks > lcov output and 100 check 1`] = `
TN:
SF:{CWD}/ok.js
FN:2,(anonymous_0)
FNF:1
FNH:1
FNDA:2,(anonymous_0)
DA:2,2
DA:3,2
DA:4,2
DA:6,0
LF:4
LH:3
BRDA:3,0,0,2
BRDA:3,0,1,0
BRDA:4,1,0,2
BRDA:4,1,1,1
BRF:4
BRH:3
end_of_record

`

exports[`run.js TAP coverage pipe to service > piped to coverage service cat 1`] = `
COVERAGE_SERVICE_TEST
TN:
SF:{CWD}/ok.js
FN:2,(anonymous_0)
FNF:1
FNH:1
FNDA:2,(anonymous_0)
DA:2,2
DA:3,2
DA:4,2
DA:6,0
LF:4
LH:3
BRDA:3,0,0,2
BRDA:3,0,1,0
BRDA:4,1,0,2
BRDA:4,1,1,1
BRF:4
BRH:3
end_of_record

`

exports[`run.js TAP save file with bailout, should save all untested > stdout 1`] = `
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
        require("{TAPDIR}/").fail('a/b')
      ...
    
    Bail out! # a/b
Bail out! # a/b

`

exports[`run.js TAP save file with bailout, should save all untested > savefile 1`] = `
a
x
a/b
x/y
a/b/f1.js
a/b/f2.js
x/y/1.js

`

exports[`run.js TAP save file without bailout, run untested, save failures > stdout 1`] = `
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
        require("{TAPDIR}/").fail('a/b')
      ...
    
    1..1
    # failed 1 test
    # {time}
not ok 2 - a/b/f1.js # {time}
  ---
  args:
    - a/b/f1.js
  command: /usr/local/bin/node
  cwd: {CWD}
  exitCode: 1
  file: a/b/f1.js
  stdio:
    - 0
    - pipe
    - 2  timeout: {default}
  ...

# Subtest: a/b/f2.js
    not ok 1 - c/d
      ---
      at:
        line: #
        column: #
        file: a/b/f2.js
      source: |
        require("{TAPDIR}/").fail('c/d')
      ...
    
    1..1
    # failed 1 test
    # {time}
not ok 3 - a/b/f2.js # {time}
  ---
  args:
    - a/b/f2.js
  command: /usr/local/bin/node
  cwd: {CWD}
  exitCode: 1
  file: a/b/f2.js
  stdio:
    - 0
    - pipe
    - 2  timeout: {default}
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

exports[`run.js TAP save file without bailout, run untested, save failures > savefile 1`] = `
a/b/f1.js
a/b/f2.js

`

exports[`run.js TAP save file pass, empty save file > stdout 1`] = `
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

# Subtest: a/b/f2.js
    ok 1 - fine now too
    1..1
    # {time}
ok 3 - a/b/f2.js # {time}

# Subtest: x/y/1.js
    ok 1 - one
    1..1
    # {time}
ok 4 - x/y/1.js # {time}

1..4
# {time}

`

exports[`run.js TAP save file empty save file, run all tests > stdout 1`] = `
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

# Subtest: a/b/f2.js
    ok 1 - fine now too
    1..1
    # {time}
ok 3 - a/b/f2.js # {time}

# Subtest: x/y/1.js
    ok 1 - one
    1..1
    # {time}
ok 4 - x/y/1.js # {time}

1..4
# {time}

`
