/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/repl/index.ts > TAP > parse some tap > must match snapshot 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": String(
    parse
    Parsing TAP from stdin. Press ^D to finish.
    
    [
      [ 'version', 14 ],
      [ 'plan', Plan { start: 1, end: 0, comment: 'no tests found' } ],
      [
        'complete',
        FinalResults {
          ok: true,
          count: 0,
          pass: 0,
          fail: 0,
          bailout: false,
          todo: 0,
          skip: 0,
          failures: [],
          time: null,
          passes: undefined,
          plan: FinalPlan {
            start: 1,
            end: 0,
            skipAll: true,
            skipReason: 'no tests found',
            comment: 'no tests found'
          },
          skips: [],
          todos: []
        }
      ],
      [ 'finish' ],
      [ 'close' ]
    ]
    
  ),
}
`

exports[`test/repl/index.ts > TAP > run the suite > get processinfo > no data found 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": String(
    i not-a-valid-id
    not-a-valid-id: no data found
    
    
  ),
}
`

exports[`test/repl/index.ts > TAP > run the suite > get processinfo > no id provided 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": String(
    i
    Provide a test id to get information:
      - foo.test.mjs
    
    
  ),
}
`

exports[`test/repl/index.ts > TAP > run the suite > kill tests with ^C > must match snapshot 1`] = `
r
TAP version 14
1..1

code: null
signal: {SIGNAL}

list
foo.test.mjs
code: 0
signal: null


`

exports[`test/repl/index.ts > TAP > run the suite > normal run > must match snapshot 1`] = `
r
TAP version 14
1..1
# Subtest: foo.test.mjs
    ok 1 - should be equal
    1..1
ok 1 - foo.test.mjs # time={TIME}

# { total: 1, pass: 1 }
# time={TIME}
code: 0
signal: null


`

exports[`test/repl/index.ts > TAP > run the suite > run changed > must match snapshot 1`] = `
Object {
  "changed": String(
    n
    TAP version 14
    1..1
    # Subtest: foo.test.mjs
        ok 1 - should be equal
        1..1
    ok 1 - foo.test.mjs # time={TIME}
    
    # { total: 1, pass: 1 }
    # time={TIME}
    code: 0
    signal: null
    
    
  ),
  "unchanged": String(
    n
    No new tests to run
    code: 0
    signal: null
    
    
  ),
}
`

exports[`test/repl/index.ts > TAP > run the suite > run failed > must match snapshot 1`] = `
f?
f
- foo.test.mjs

TAP version 14
1..1
# Subtest: foo.test.mjs
    ok 1 - should be equal
    1..1
ok 1 - foo.test.mjs # time={TIME}

# { total: 1, pass: 1 }
# time={TIME}
code: 0
signal: null


`

exports[`test/repl/index.ts > TAP > run the suite > show watch > must match snapshot 1`] = `
TAP> w
w
w?
w on
w on
w?
w off
w?
not watching files for changes
TAP> 3 local files being watched:
  - cp.test.mjs
  - foo.mjs
  - foo.test.mjs
{DEP FILES}

TAP> not watching files for changes
TAP> 3 local files being watched:
  - cp.test.mjs
  - foo.mjs
  - foo.test.mjs
{DEP FILES}

TAP> not watching files for changes
TAP> 3 local files being watched:
  - cp.test.mjs
  - foo.mjs
  - foo.test.mjs
{DEP FILES}

TAP> 3 local files being watched:
  - cp.test.mjs
  - foo.mjs
  - foo.test.mjs
{DEP FILES}

TAP> not watching files for changes
TAP> [?25h[?25h
`

exports[`test/repl/index.ts > TAP > show help > must match snapshot 1`] = `
TAP Repl Commands

r [<filename>]
  run the test suite, or just the specified test

u [<filename>]
  update snapshots in the suite, or just the specified test

n
  run files changed since the last run

f
  run tests that previously failed, or all tests if there are no
  failures from any previous runs

f?
  show the list of tests that failed in the previous run

c [<style>]
  run a coverage report for the most recent test run

i [<filename | uuid>]
  print process info for the specified test file in the last run, or
  show a list of process info keys if no id provided

w [ on | off ]
  toggle the file watcher on/off

w?
  show information about file watch status

cls
  clear the screen

parse [<options>]
  parse TAP from stdin and print results
  see 'parse -h' for options

plugin [add <plugin> | rm <plugin> | list]
  manage tap plugins (see tap --help for details)

build
  build the tap Test class with the configured plugins

version
  print the version of tap in use

versions
  print the version of tap and all components and plugins

list
  print the list of test files that will be run by default

config
  show the config options currently in use

tap [<args>]
  run any other arbitrary tap command (run 'tap help' for details)
  ('tap repl' is not allowed)

`
