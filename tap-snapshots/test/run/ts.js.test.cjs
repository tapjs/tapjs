/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/ts.js TAP ts manually > must match snapshot 1`] = `
TAP version 13
ok 1 - cli-tests/mixed/ok.js # {time} {
    ok 1 - this is fine
    1..1
    # {time}
}

ok 2 - cli-tests/mixed/foo.ts # {time} {
    ok 1 - this is fine
    1..1
    # {time}
}

1..2
# {time}

`

exports[`test/run/ts.js TAP via cli args ts > must match snapshot 1`] = `
TAP version 13
ok 1 - cli-tests/ts/ok.ts # {time} {
    ok 1 - this is fine
    1..1
    # {time}
}

1..1
# {time}

`

exports[`test/run/ts.js TAP via cli args ts, but no tsx > must match snapshot 1`] = `
TAP version 13
not ok 1 - cli-tests/tsx/ok.tsx # {time}
  ---
  args:
    - -r
    - {CWD}/node_modules/ts-node/register/index.js
    - cli-tests/tsx/ok.tsx
  command: {NODE}
  cwd: {CWD}
  env:
    TS_NODE_COMPILER_OPTIONS: "{}"
  exitCode: 1
  file: cli-tests/tsx/ok.tsx
  stdio:
    - 0
    - pipe
    - 2
  timeout: {default}
  ...
{
    1..0 # no tests found
}

1..1
# failed 1 test
# {time}

`

exports[`test/run/ts.js TAP via cli args tsx > must match snapshot 1`] = `
TAP version 13
ok 1 - cli-tests/tsx/ok.tsx # {time} {
    ok 1 - this is fine
    1..1
    # {time}
}

1..1
# {time}

`

exports[`test/run/ts.js TAP via env no ts > must match snapshot 1`] = `
TAP version 13
not ok 1 - cli-tests/ts/ok.ts # {time}
  ---
  args:
    - cli-tests/ts/ok.ts
  command: {NODE}
  cwd: {CWD}
  env: {}
  exitCode: 1
  file: cli-tests/ts/ok.ts
  stdio:
    - 0
    - pipe
    - 2
  timeout: {default}
  ...
{
    1..0 # no tests found
}

1..1
# failed 1 test
# {time}

`

exports[`test/run/ts.js TAP via env ts > must match snapshot 1`] = `
TAP version 13
ok 1 - cli-tests/ts/ok.ts # {time} {
    ok 1 - this is fine
    1..1
    # {time}
}

1..1
# {time}

`

exports[`test/run/ts.js TAP via env ts, but no tsx > must match snapshot 1`] = `
TAP version 13
not ok 1 - cli-tests/tsx/ok.tsx # {time}
  ---
  args:
    - -r
    - {CWD}/node_modules/ts-node/register/index.js
    - cli-tests/tsx/ok.tsx
  command: {NODE}
  cwd: {CWD}
  env:
    TS_NODE_COMPILER_OPTIONS: "{}"
  exitCode: 1
  file: cli-tests/tsx/ok.tsx
  stdio:
    - 0
    - pipe
    - 2
  timeout: {default}
  ...
{
    1..0 # no tests found
}

1..1
# failed 1 test
# {time}

`

exports[`test/run/ts.js TAP via env tsx > must match snapshot 1`] = `
TAP version 13
ok 1 - cli-tests/tsx/ok.tsx # {time} {
    ok 1 - this is fine
    1..1
    # {time}
}

1..1
# {time}

`
