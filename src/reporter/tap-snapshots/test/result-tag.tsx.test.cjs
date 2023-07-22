/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/result-tag.tsx > TAP > fail, no diag > must match snapshot 1`] = `
 [1m[31m✖[39m[22m fake result
`

exports[`test/result-tag.tsx > TAP > fail, with diag > must match snapshot 1`] = `
 [1m[31m✖[39m[22m fake result [2mtest/result-tag.tsx:63:17[22m
`

exports[`test/result-tag.tsx > TAP > fail, with diag and details > must match snapshot 1`] = `
 [1m[31m✖[39m[22m fake result
    [48;2;172;62;163m[38;2;255;229;241m--- expected                                                       [39m[49m
    [48;2;58;117;0m[38;2;242;255;229m+++ actual                                                         [39m[49m
    [1m[48;2;34;34;34m[38;2;117;158;239m@@ -1,3 +1,4 @@[38;2;229;153;255m                                                    [39m[49m[22m
    [48;2;51;51;51m[38;2;204;204;204m {                                                                 [39m[49m
    [48;2;172;62;163m[38;2;255;229;241m-  "x": 1                                                          [39m[49m
    [48;2;58;117;0m[38;2;242;255;229m+  "x": 2,                                                         [39m[49m
    [48;2;58;117;0m[38;2;242;255;229m+  "y": 1                                                          [39m[49m
    [48;2;51;51;51m[38;2;204;204;204m }                                                                 [39m[49m
    [48;5;234m[2mtest/result-tag.tsx                                            [22m[49m
    [48;5;234m[37m112 [38;5;252m        result=[97m{[38;5;252mgetRes[97m({[38;5;252m                                   [39m[49m
    [48;5;234m[37m113 [38;5;252m          ok: [38;5;113mfalse[97m,[38;5;252m                                       [39m[49m
    [48;5;234m[37m114 [38;5;252m          diag: [97m{[38;5;252m                                          [39m[49m
    [48;5;234m[37m115 [38;5;252m            at: at[97m(),[38;5;252m                                      [39m[49m
    [48;5;234m[31m━━━━━━━━━━━━━━━━━━━━[1m┛[22m                                           [39m[49m
    [48;5;234m[37m116 [38;5;252m            diff: createTwoFilesPatch[97m([38;5;252m                     [39m[49m
    [48;5;234m[37m117 [38;5;252m              [38;5;113m'expected'[97m,[38;5;252m                                  [39m[49m
    [48;5;234m[37m118 [38;5;252m              [38;5;113m'actual'[97m,[38;5;252m                                    [39m[49m
    [48;5;234m[37m119 [38;5;252m              JSON[97m.[38;5;252mstringify[97m({[38;5;252m x: [38;5;113m1[38;5;252m [97m},[38;5;252m [96mnull[97m,[38;5;252m [38;5;113m2[97m),[38;5;252m           [39m[49m
`

exports[`test/result-tag.tsx > TAP > fail, with diag, no line/column numbers > must match snapshot 1`] = `
 [1m[31m✖[39m[22m fake result [2mtest/result-tag.tsx[22m
`

exports[`test/result-tag.tsx > TAP > pass, > must match snapshot 1`] = `
 [1m[32m✓[39m[22m fake result
`

exports[`test/result-tag.tsx > TAP > skip no message > must match snapshot 1`] = `
 [1m[36m~[39m[22m fake result
`

exports[`test/result-tag.tsx > TAP > skip with message > must match snapshot 1`] = `
 [1m[36m~[39m[22m fake result [36mskip message[39m
`

exports[`test/result-tag.tsx > TAP > todo no message > must match snapshot 1`] = `
 [1m[35m☐[39m[22m fake result
`

exports[`test/result-tag.tsx > TAP > todo with message > must match snapshot 1`] = `
 [1m[35m☐[39m[22m fake result [35mtodo message[39m
`
