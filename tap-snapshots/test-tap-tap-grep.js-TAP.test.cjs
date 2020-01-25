/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tap/tap-grep.js TAP > exit status 1`] = `
Object {
  "code": 0,
  "signal": null,
}
`

exports[`test/tap/tap-grep.js TAP > stderr 1`] = `

`

exports[`test/tap/tap-grep.js TAP > stdout 1`] = `
TAP version 13
# Subtest: axo
    ok 1 - yellow # SKIP filter: /^y$/i
    # Subtest: Y
        1..0
    ok 2 - Y # {time}
    
    # Subtest: y
        # Subtest: this too
            1..0
        ok 1 - this too # {time}
        
        1..1
    ok 3 - y # {time}
    
    1..3
    # skip: 1
ok 1 - axo # {time}

ok 2 - nope # SKIP filter: /x/
1..2
# skip: 1
# {time}

`
