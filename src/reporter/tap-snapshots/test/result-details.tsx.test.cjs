/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/result-details.tsx > TAP > diff > diags and details 1`] = `
    AT {"mock":"callsite"}
    SOURCE mock source
    DIFF mock diff
    [2mcompare: ===[22m
    [2msome:[22m
    [2m  other:[22m
    [2m    diags: true[22m
    STACK mock stack
`

exports[`test/result-details.tsx > TAP > error that is not a string > diags and details 1`] = `
    AT {"mock":"callsite"}
    SOURCE mock source
    DIFF mock diff
    [2merror:[22m
      number: 42069
      msg: lolz
    STACK mock stack
`

exports[`test/result-details.tsx > TAP > error without code > diags and details 1`] = `
    AT {"mock":"callsite"}
    SOURCE mock source
    DIFF mock diff
    [2merror:[22m message
    STACK mock stack
`

exports[`test/result-details.tsx > TAP > no diff, but expected and actual > generated diff 1`] = `
    AT {"mock":"callsite"}
    SOURCE mock source
    DIFF --- expected
    +++ actual
    @@ -1,3 +1,5 @@
     Object {
    -  "something": true,
    +  "some": Object {
    +    "thing": true,
    +  },
     }

    [2moperator: deepEqual[22m
    STACK mock stack
`

exports[`test/result-details.tsx > TAP > result with only known diags > diags and details 1`] = `
    AT {"mock":"callsite"}
    SOURCE mock source
    DIFF mock diff
    [2merror:[22m message
    [2mcode:[22m ERR_EXPECTED
    STACK mock stack
`
