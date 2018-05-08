/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/spawn.js TAP timeout KILL > undefined 1`] = `
SIGTERM

not ok 1 - timeout!
  ---
  expired: killa
  ...
1..1
# failed 1 test

`

exports[`test/spawn.js TAP skip stuff > undefined 1`] = `
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

exports[`test/spawn.js TAP using proc event > undefined 1`] = `
TAP version 13
ok
1..1

`

exports[`test/spawn.js TAP failure to spawn > undefined 1`] = `

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
  errno: ENOENT
  path: something that does not exist
  spawnargs: []
  stdio:
    - 0
    - pipe
    - 2
  syscall: spawn something that does not exist
  test: 'something that does not exist '
  ...
1..1
# failed 1 test

`
