/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/config.ts > TAP > dump > must match snapshot 1`] = `
# vim: set filetype=yaml :
a: true
full:
  - 1
  - 2
  - 3
`

exports[`test/config.ts > TAP > edit > .taprc > edit resume fails without a file there already > must match snapshot 1`] = `
[31mno prior editing session to resume[39m
`

exports[`test/config.ts > TAP > edit > .taprc > edit without an existing config > config edited 1`] = `
a:
  - 1
  - 2
x: true

`

exports[`test/config.ts > TAP > edit > .taprc > edit without an existing config > must match snapshot 1`] = `

`

exports[`test/config.ts > TAP > edit > .taprc > edit without an existing config > must match snapshot 2`] = `
wrote changes to .taprc
`

exports[`test/config.ts > TAP > edit > .taprc > fail if the edit fails > code > must match snapshot 1`] = `
[31medit command failed, no changes made[39m
run \`tap config edit resume\` to continue making changes
{ signal: null, status: 1 }
`

exports[`test/config.ts > TAP > edit > .taprc > fail if the edit fails > signal > must match snapshot 1`] = `
[31medit command failed, no changes made[39m
run \`tap config edit resume\` to continue making changes
{ signal: 'SIGTERM', status: 0 }
`

exports[`test/config.ts > TAP > edit > .taprc > make actual changes > config edited 1`] = `
a:
  - 1
  - 2
x: true

`

exports[`test/config.ts > TAP > edit > .taprc > make actual changes > must match snapshot 1`] = `

`

exports[`test/config.ts > TAP > edit > .taprc > make actual changes > must match snapshot 2`] = `
wrote changes to .taprc
`

exports[`test/config.ts > TAP > edit > .taprc > no changes > must match snapshot 1`] = `
no changes made to config data
run \`tap config edit resume\` to continue making changes
`

exports[`test/config.ts > TAP > edit > .taprc > validate changes > must match snapshot 1`] = `
[31minvalid configuration[39m
jack validation error
run \`tap config edit resume\` to continue making changes
`

exports[`test/config.ts > TAP > edit > package.json > edit resume fails without a file there already > must match snapshot 1`] = `
[31mno prior editing session to resume[39m
`

exports[`test/config.ts > TAP > edit > package.json > edit without an existing config > config edited 1`] = `
{"name":"tap-config-edit-test","tap":{"a":[1,2],"x":true}}
`

exports[`test/config.ts > TAP > edit > package.json > edit without an existing config > must match snapshot 1`] = `

`

exports[`test/config.ts > TAP > edit > package.json > edit without an existing config > must match snapshot 2`] = `
wrote changes to package.json
`

exports[`test/config.ts > TAP > edit > package.json > fail if the edit fails > code > must match snapshot 1`] = `
[31medit command failed, no changes made[39m
run \`tap config edit resume\` to continue making changes
{ signal: null, status: 1 }
`

exports[`test/config.ts > TAP > edit > package.json > fail if the edit fails > signal > must match snapshot 1`] = `
[31medit command failed, no changes made[39m
run \`tap config edit resume\` to continue making changes
{ signal: 'SIGTERM', status: 0 }
`

exports[`test/config.ts > TAP > edit > package.json > make actual changes > config edited 1`] = `
{"name":"tap-config-edit-test","tap":{"a":[1,2],"x":true}}
`

exports[`test/config.ts > TAP > edit > package.json > make actual changes > must match snapshot 1`] = `

`

exports[`test/config.ts > TAP > edit > package.json > make actual changes > must match snapshot 2`] = `
wrote changes to package.json
`

exports[`test/config.ts > TAP > edit > package.json > no changes > must match snapshot 1`] = `
no changes made to config data
run \`tap config edit resume\` to continue making changes
`

exports[`test/config.ts > TAP > edit > package.json > validate changes > must match snapshot 1`] = `
[31minvalid configuration[39m
jack validation error
run \`tap config edit resume\` to continue making changes
`

exports[`test/config.ts > TAP > get > get needs args > must match snapshot 1`] = `
[31mno keys provided[39m
Usage: tap config get <key> [<key> ...]
`

exports[`test/config.ts > TAP > get > known with unknown field > must match snapshot 1`] = `
d: e
`

exports[`test/config.ts > TAP > get > known with unknown field > must match snapshot 2`] = `
[31munknown config field: asdf[39m
`

exports[`test/config.ts > TAP > get > unknown field > must match snapshot 1`] = `
[31munknown config field: asdf[39m
`

exports[`test/config.ts > TAP > list > has stuff in configFile > no configFile fields 1`] = `
[2m# vim: set filetype=yaml :[22m
[1mb[22m: 2
`

exports[`test/config.ts > TAP > list > has stuff in configFile > one 1`] = `
[2m# vim: set filetype=yaml :[22m
[1mc[22m:
  - x
  - y
`

exports[`test/config.ts > TAP > list > has stuff in configFile > two 1`] = `
[2m# vim: set filetype=yaml :[22m

[2m# from package.json[22m
[1md[22m: e

[2m# env, cli, and defaults[22m
[1mc[22m:
  - x
  - y
`

exports[`test/config.ts > TAP > list > has stuff in configFile > unfiltered, default sub cmd 1`] = `
[2m# vim: set filetype=yaml :[22m

[2m# from package.json[22m
[1ma[22m: true
[1md[22m: e

[2m# env, cli, and defaults[22m
[1mb[22m: 2
[1mc[22m:
  - x
  - y
`

exports[`test/config.ts > TAP > list > nothing in configFile > one 1`] = `
[2m# vim: set filetype=yaml :[22m
[1mc[22m:
  - x
  - y
`

exports[`test/config.ts > TAP > list > nothing in configFile > two 1`] = `
[2m# vim: set filetype=yaml :[22m
[1mc[22m:
  - x
  - y
[1md[22m: e
`

exports[`test/config.ts > TAP > list > nothing in configFile > unfiltered 1`] = `
[2m# vim: set filetype=yaml :[22m
[1ma[22m: true
[1mb[22m: 2
[1mc[22m:
  - x
  - y
[1md[22m: e
`

exports[`test/config.ts > TAP > set > bool must be "true" or "false" > must match snapshot 1`] = `
[31mx must be 'true' or 'false'[39m
`

exports[`test/config.ts > TAP > set > invalid data > must match snapshot 1`] = `
[31minvalid configuration[39m
nope
`

exports[`test/config.ts > TAP > set > no value provided > must match snapshot 1`] = `
[31mno value provided for y[39m
Usage: tap config set <key=[val]> [<key=[val]> ...]
`

exports[`test/config.ts > TAP > set > nothing to set > must match snapshot 1`] = `
no changes made to config data
`

exports[`test/config.ts > TAP > set > save something > must match snapshot 1`] = `
[31mUnknown config key: unknown[39m
`

exports[`test/config.ts > TAP > set > save something > must match snapshot 2`] = `
wrote changes to .taprc
`

exports[`test/config.ts > TAP > set > save something > saves 1`] = `
Array [
  Array [
    Object {
      "a": Array [
        1,
        2,
      ],
      "x": false,
      "y": "z",
    },
    undefined,
    true,
  ],
]
`

exports[`test/config.ts > TAP > set > set needs args > must match snapshot 1`] = `
[31mmust provide key=value arguments[39m
Usage: tap config set <key=[val]> [<key=[val]> ...]
`

exports[`test/config.ts > TAP > unknown cmd > must match snapshot 1`] = `
[31minvalid tap config command[39m
must be one of: get list dump set edit
`
