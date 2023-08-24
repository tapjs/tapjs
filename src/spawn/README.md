# `@tapjs/spawn`

A default tap plugin providing `t.spawn()`.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/spawn` to
bring it back.

### Interface `SpawnOpts`

Options for `t.spawn()`

All of the normal Base and Extra options are also allowed.

- `cwd` - string, the current working directory of the subprocess
- `env` - Environment variables for the subprocess. Defaults to
  `process.env`
- `stdio` - ChildProcess `stdio` option. Standard output is
  always set to `'pipe'`, because that's how it communicates test
  results, and file descriptor 3 is set to an IPC channel for
  sending timeout signals.
- `command` (internal) - the command to run (set by first
  argument to t.spawn)
- `args` (internal) - arguments to subprocess (set by second
  argument to t.spawn)
- `exitCode` (internal) - Set on exit. The exit code of the
  process, or null if terminated with a signal.
- `signal` (internal) - Set on exit. Terminating signal, or null
  of not terminated with a signal.

### `t.spawn(cmd, [args], [options], [name]): PromiseWithSpawn`

Arguments:

- `cmd` `string` - The command to run
- `args` (optional) `string | string[]` - Arguments to pass to
  the command.
- `options` (optional) `SpawnOpts` object

Spawns a process when the test starts, parsing its standard
output as a TAP stream.

This is how the tap CLI runs test programs.

Returns a Promise that resolves when the test is complete. The
`subtest` member on the Promise is a
[`Spawn`](https://tapjs.github.io/tapjs/classes/_tapjs_core.spawn.Spawn.html)
instance.
