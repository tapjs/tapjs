/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run.ts > TAP > fail to find all named test files > must match snapshot 1`] = `
No valid test files found matching "blah.test.js"

`

exports[`test/run.ts > TAP > run stdin only > must match snapshot 1`] = `
TAP version 14
1..1
ok 1 - this is standard input
# { total: 1, pass: 1 }
# time={TIME}

`

exports[`test/run.ts > TAP > run stdin with a file > must match snapshot 1`] = `
TAP version 14
1..2
# Subtest: /dev/stdin
    1..1
    ok 1 - this is standard input
ok 1 - /dev/stdin # time={TIME}

# Subtest: env.test.js
    ok 1 - should match pattern
    1..1
ok 2 - env.test.js # time={TIME}

# { total: 2, pass: 2 }
# time={TIME}

`

exports[`test/run.ts > TAP > run with --before and --after > must match snapshot 1`] = `
TAP version 14
before
1..1
# Subtest: test.js
    1..1
    ok
ok 1 - test.js # time={TIME}

# No coverage generated
after
# { total: 1, pass: 1 }
# time={TIME}

`

exports[`test/run.ts > TAP > run with --coverage-exclude > must match snapshot 1`] = `
TAP version 14
1..1
# Subtest: test.js
    before
    1..1
    ok
    after
ok 1 - test.js # time={TIME}

# No coverage generated
# { total: 1, pass: 1 }
# time={TIME}

`

exports[`test/run.ts > TAP > save test failures > fix the failure > must match snapshot 1`] = `
TAP version 14
1..1
# Subtest: failer.test.js
    ok 1 - this is fine
    1..1
ok 1 - failer.test.js # time={TIME}

# { total: 1, pass: 1 }
# time={TIME}

`

exports[`test/run.ts > TAP > set test envs > must match snapshot 1`] = `
TAP version 14
1..1
# Subtest: env.test.js
    ok 1 - should match pattern
    1..1
ok 1 - env.test.js # time={TIME}

# { total: 1, pass: 1 }
# time={TIME}

`
