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
  command: something that does not exist
  args: []
  stdio:
    - 0
    - pipe
    - 2
  cwd: {CWD}
  at:
    line: #
    column: #
    file: util.js
    function: _errnoException
  code: ENOENT
  errno: ENOENT
  syscall: spawn something that does not exist
  path: something that does not exist
  spawnargs: []
  test: 'something that does not exist '
  ...
1..1
# failed 1 test

`
