/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tap/tap-grep-invert.js TAP > exit status 1`] = `
Object {
  "code": 0,
  "signal": null,
}
`

exports[`test/tap/tap-grep-invert.js TAP > stderr 1`] = `

`

exports[`test/tap/tap-grep-invert.js TAP > stdout 1`] = `
TAP version 13
# Subtest: yes this one
    ok 1 - Y # SKIP filter out: /^y$/i
    # Subtest: yellow
        1..0
    ok 2 - yellow # {time}
    
    # Subtest: apple
        # Subtest: this too
            1..0
        ok 1 - this too # {time}
        
        1..1
    ok 3 - apple # {time}
    
    1..3
    # skip: 1
ok 1 - yes this one # {time}

ok 2 - axo # SKIP filter out: /x/
1..2
# skip: 1
# {time}

`
