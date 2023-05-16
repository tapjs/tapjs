/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/coverage.js TAP borked coverage map means no includes > output 1`] = `
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
-|-|-|-|-|-
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines 
-|-|-|-|-|-
All files | 0 | 0 | 0 | 0 | 
-|-|-|-|-|-

`

exports[`test/run/coverage.js TAP generate some coverage > output 1`] = `
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
-|-|-|-|-|-
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines 
-|-|-|-|-|-
All files | 75 | 75 | 100 | 75 | 
 ok.js | 75 | 75 | 100 | 75 | 6                 
-|-|-|-|-|-

`

exports[`test/run/coverage.js TAP in 100 mode, <100 is red, not yellow > text output and 100 check 1`] = `
-|-|-|-|-|-
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines 
-|-|-|-|-|-
[31;1mAll files[0m | [31;1m     75[0m | [31;1m      75[0m | [32;1m    100[0m | [31;1m     75[0m | [31;1m                 [0m 
[31;1m ok.js   [0m | [31;1m     75[0m | [31;1m      75[0m | [32;1m    100[0m | [31;1m     75[0m | [31;1m6                [0m 
-|-|-|-|-|-

`

exports[`test/run/coverage.js TAP pipe to service > human output 1`] = `
-|-|-|-|-|-
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines 
-|-|-|-|-|-
All files | 75 | 75 | 100 | 75 | 
 ok.js | 75 | 75 | 100 | 75 | 6                 
-|-|-|-|-|-

`

exports[`test/run/coverage.js TAP pipe to service > piped to coverage service cat 1`] = `
TN:
SF:ok.js
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

exports[`test/run/coverage.js TAP pipe to service along with tests > human output 1`] = `
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
-|-|-|-|-|-
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines 
-|-|-|-|-|-
All files | 75 | 75 | 100 | 75 | 
 ok.js | 75 | 75 | 100 | 75 | 6                 
-|-|-|-|-|-

`

exports[`test/run/coverage.js TAP pipe to service along with tests > piped to coverage service cat 1`] = `
TN:
SF:ok.js
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

exports[`test/run/coverage.js TAP report only > lcov output 1`] = `
TN:
SF:ok.js
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

exports[`test/run/coverage.js TAP report with checks > lcov output and 100 check 1`] = `
TN:
SF:ok.js
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

exports[`test/run/coverage.js TAP use a coverage map > output 1`] = `
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
-|-|-|-|-|-
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines 
-|-|-|-|-|-
All files | 75 | 75 | 100 | 75 | 
 ok.js | 75 | 75 | 100 | 75 | 6                 
-|-|-|-|-|-

`
