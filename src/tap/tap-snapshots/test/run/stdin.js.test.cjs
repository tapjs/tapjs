/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/stdin.js TAP with file > must match snapshot 1`] = `
TAP version 13
# Subtest: cli-tests/foo.test.js
    # Subtest: child
        ok 1 - this is fine
        1..1
    ok 1 - child # {time}
    
    1..1
    # {time}
ok 1 - cli-tests/foo.test.js # {time}

# Subtest: /dev/stdin
    1..1
    ok
ok 2 - /dev/stdin # {time}

1..2
# {time}

`
