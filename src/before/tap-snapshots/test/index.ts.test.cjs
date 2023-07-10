/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.ts > TAP > basic before timing > must match snapshot 1`] = `
TAP version 14
# Subtest: child
    ok 1 - this is fine
    1..1
ok 1 - child # time={TIME}

# Subtest: second
    ok 1 - this is fine
    1..1
ok 2 - second # time={TIME}

1..2

`

exports[`test/index.ts > TAP > before awaits promise > must match snapshot 1`] = `
TAP version 14
ok 1 - first before
# Subtest: child test
    ok 1 - this is fine
    1..1
ok 2 - child test # time={TIME}

ok 3 - second before
1..3

`
