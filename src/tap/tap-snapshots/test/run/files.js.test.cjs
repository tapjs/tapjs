/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/files.js TAP --files do not override explicit positional argument > must match snapshot 1`] = `
TAP version 13
# Subtest: cli-tests/two.js
    ok 1 - three
    1..1
    # {time}
ok 1 - cli-tests/two.js # {time}

1..1
# {time}

`

exports[`test/run/files.js TAP --files work like explicit positional argument > must match snapshot 1`] = `
TAP version 13
# Subtest: cli-tests/one.js
    ok 1 - one
    1..1
    # {time}
ok 1 - cli-tests/one.js # {time}

# Subtest: cli-tests/two.js
    ok 1 - three
    1..1
    # {time}
ok 2 - cli-tests/two.js # {time}

1..2
# {time}

`
