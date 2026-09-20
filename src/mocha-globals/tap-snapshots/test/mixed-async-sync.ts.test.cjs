/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/mixed-async-sync.ts > TAP > must match snapshot 1`] = `
TAP version 14
# Subtest: test mixed
    # Subtest: async first
        1..0
    ok 1 - async first # time={TIME}
    
    # Subtest: sync second
        1..0
    ok 2 - sync second # time={TIME}
    
    1..2
ok 1 - test mixed # time={TIME}

# Subtest: test multiple async
    # Subtest: async one
        1..0
    ok 1 - async one # time={TIME}
    
    # Subtest: async two
        1..0
    ok 2 - async two # time={TIME}
    
    1..2
ok 2 - test multiple async # time={TIME}

# Subtest: nested mixed
    # Subtest: inner
        # Subtest: async inner
            1..0
        ok 1 - async inner # time={TIME}
        
        # Subtest: sync inner
            1..0
        ok 2 - sync inner # time={TIME}
        
        1..2
    ok 1 - inner # time={TIME}
    
    1..1
ok 3 - nested mixed # time={TIME}

# Subtest: async then done-callback
    # Subtest: async then done
        1..0
    ok 1 - async then done # time={TIME}
    
    # Subtest: done cb
        1..0
    ok 2 - done cb # time={TIME}
    
    1..2
ok 4 - async then done-callback # time={TIME}

1..4

`
