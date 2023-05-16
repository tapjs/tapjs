/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/ts.js TAP ts manually > must match snapshot 1`] = `
TAP version 13
# Subtest: cli-tests/mixed/ok.js
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - cli-tests/mixed/ok.js # {time}

# Subtest: cli-tests/mixed/foo.ts
    ok 1 - this is fine
    1..1
    # {time}
ok 2 - cli-tests/mixed/foo.ts # {time}

1..2
# {time}

`

exports[`test/run/ts.js TAP via cli args ts --after --before ok > must match snapshot 1`] = `
setup
TAP version 13
# Subtest: cli-tests/ts/ok.ts
    ok 1 - this is ok
    1..1
    # {time}
ok 1 - cli-tests/ts/ok.ts # {time}

1..1
# {time}
teardown

`

exports[`test/run/ts.js TAP via cli args ts --after fail > stderr 1`] = `

{CWD}/cli-tests/ts/teardown.ts:2
      throw new Error('fail')
            ^
Error: fail
    {STACK}

# failed cli-tests/ts/teardown.ts
# code=1 signal=null


`

exports[`test/run/ts.js TAP via cli args ts --after fail > stdout 1`] = `
setup
TAP version 13
# Subtest: cli-tests/ts/ok.ts
    ok 1 - this is ok
    1..1
    # {time}
ok 1 - cli-tests/ts/ok.ts # {time}

1..1
# {time}

`

exports[`test/run/ts.js TAP via cli args ts --before fail > stderr 1`] = `

{CWD}/cli-tests/ts/setup.ts:2
      throw new Error('fail')
            ^
Error: fail
    {STACK}

# failed cli-tests/ts/setup.ts
# code=1 signal=null


`

exports[`test/run/ts.js TAP via cli args ts --before fail > stdout 1`] = `

`

exports[`test/run/ts.js TAP via cli args ts > must match snapshot 1`] = `
TAP version 13
# Subtest: cli-tests/ts/ok.ts
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - cli-tests/ts/ok.ts # {time}

1..1
# {time}

`

exports[`test/run/ts.js TAP via cli args ts, but no tsx > must match snapshot 1`] = `
TAP version 13
# Subtest: cli-tests/tsx/ok.tsx
    1..0 # no tests found
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

1..1
# failed 1 test
# {time}

`

exports[`test/run/ts.js TAP via cli args tsx > must match snapshot 1`] = `
TAP version 13
# Subtest: cli-tests/tsx/ok.tsx
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - cli-tests/tsx/ok.tsx # {time}

1..1
# {time}

`

exports[`test/run/ts.js TAP via env no ts > must match snapshot 1`] = `
TAP version 13
# Subtest: cli-tests/ts/ok.ts
    1..0 # no tests found
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

1..1
# failed 1 test
# {time}

`

exports[`test/run/ts.js TAP via env ts > must match snapshot 1`] = `
TAP version 13
# Subtest: cli-tests/ts/ok.ts
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - cli-tests/ts/ok.ts # {time}

1..1
# {time}

`

exports[`test/run/ts.js TAP via env ts, but no tsx > must match snapshot 1`] = `
TAP version 13
# Subtest: cli-tests/tsx/ok.tsx
    1..0 # no tests found
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

1..1
# failed 1 test
# {time}

`

exports[`test/run/ts.js TAP via env tsx > must match snapshot 1`] = `
TAP version 13
# Subtest: cli-tests/tsx/ok.tsx
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - cli-tests/tsx/ok.tsx # {time}

1..1
# {time}

`
