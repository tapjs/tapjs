/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/spawn.js TAP childId via TAP_CHILD_ID env > must match snapshot 1`] = `
childId=69420
1..0 # no tests found

`

exports[`test/spawn.js TAP childId via childId option > must match snapshot 1`] = `
childId=69420
1..0 # no tests found

`

exports[`test/spawn.js TAP failure to spawn > must match snapshot 1`] = `

not ok 1 - spawn something that does not exist ENOENT
  ---
  args: []
  at:
    line: #
    column: #
    file: #INTERNAL#
  code: ENOENT
  command: something that does not exist
  cwd: {CWD}
  env: {}
  errno: ENOENT
  path: something that does not exist
  spawnargs: []
  stdio:
    - 0
    - pipe
    - 2
  syscall: spawn something that does not exist
  test: "something that does not exist "
  ...
1..1
# failed 1 test

`

exports[`test/spawn.js TAP skip stuff > must match snapshot 1`] = `
TAP version 13
ok 1 - skipper # SKIP {
    1..0
    # {time}
}

# Subtest: node ./test/spawn.js skip-reason
    1..0 # for no raisins
    # {time}
ok 2 - node ./test/spawn.js skip-reason # SKIP for no raisins


`

exports[`test/spawn.js TAP timeout KILL > must match snapshot 1`] = `
SIGTERM

not ok 1 - timeout!
  ---
  expired: killa
  ...
1..1
# failed 1 test

`

exports[`test/spawn.js TAP timeout update > must match snapshot 1`] = `
TAP version 13
# timeout=42069
ok 1 - this is fine
1..1
# {time}

`

exports[`test/spawn.js TAP using proc event > must match snapshot 1`] = `
TAP version 13
ok
1..1

`
