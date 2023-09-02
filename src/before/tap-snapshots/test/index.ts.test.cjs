/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.ts > TAP > all parallel tests wait for async t.before() > log 1`] = `
Array [
  "start before",
  "end before",
  "start zro",
  "start one",
  "end zro",
  "end one",
  "start noparallel 12",
  "end noparallel 12",
  "start two",
  "start tre",
  "start fur",
  "start fiv",
  "end two",
  "end tre",
  "end fur",
  "end fiv",
  "start second before",
  "end second before",
  "start six",
  "start svn",
  "start eit",
  "start shhh",
  "start nin",
  "end six",
  "end svn",
  "end eit",
  "end shhh",
  "end nin",
]
`

exports[`test/index.ts > TAP > all parallel tests wait for async t.before() > output 1`] = `
TAP version 14
# Subtest: zro
    1..0
ok 1 - zro # time={TIME}

# Subtest: one
    1..0
ok 2 - one # time={TIME}

# Subtest: noparallel 12
    1..0
ok 3 - noparallel 12 # time={TIME}

# Subtest: two
    1..0
ok 4 - two # time={TIME}

# Subtest: tre
    1..0
ok 5 - tre # time={TIME}

# Subtest: fur
    1..0
ok 6 - fur # time={TIME}

# Subtest: fiv
    1..0
ok 7 - fiv # time={TIME}

# Subtest: six
    1..0
ok 8 - six # time={TIME}

# Subtest: svn
    1..0
ok 9 - svn # time={TIME}

# Subtest: eit
    1..0
ok 10 - eit # time={TIME}

# Subtest: nin
    1..0
ok 11 - nin # time={TIME}

1..11

`

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
