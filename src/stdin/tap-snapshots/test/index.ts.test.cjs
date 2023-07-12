/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.ts > TAP > basic behavior > must match snapshot 1`] = `
    TAP version 14
    # Subtest: consume stdin with just options
        # Subtest: /dev/stdin
            ok 1 - this is fine
            1..1
        ok 1 - /dev/stdin # time={TIME}
        
        1..1
    ok 1 - consume stdin with just options # time={TIME}
    
    # Subtest: consume stdin with a name
        # Subtest: standard input
            ok 1 - this is fine
            1..1
        ok 1 - standard input # time={TIME}
        
        1..1
    ok 2 - consume stdin with a name # time={TIME}
    
    # Subtest: consume process.stdin
        # Subtest: /dev/stdin
            ok 1 - this is fine
            1..1
        ok 1 - /dev/stdin # time={TIME}
        
        1..1
    ok 3 - consume process.stdin # time={TIME}
    
    # Subtest: consume process.stdin named
        # Subtest: standard input
            ok 1 - this is fine
            1..1
        ok 1 - standard input # time={TIME}
        
        1..1
    ok 4 - consume process.stdin named # time={TIME}
    
    1..4

`
