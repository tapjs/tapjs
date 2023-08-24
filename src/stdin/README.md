# `@tapjs/stdin`

A default tap plugin providing `t.stdin()`.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/stdin` to
bring it back.

### Interface `StdinOpts`

Options for `t.stdin()`

All of the normal Base and Extra options are also allowed.

- `tapStream` - a
  [`Minipass<Buffer|string>`](https://isaacs.github.io/minipass/)
  stream or Node.js `ReadableStream`. If provided, this will be
  the source of TAP data. Defaults to `process.stdin`.

### `t.stdin([name], [options]): PromiseWithSpawn`

Arguments:

- `name` (optional) `string` - Name for the subtest, defaults to
  `/dev/stdin`
- `options` (optional) `StdinOpts` object

Processes standard input as a TAP stream.

Returns a Promise that resolves when the test is complete. The
`subtest` member on the Promise is a
[`Stdin`](https://tapjs.github.io/tapjs/classes/_tapjs_core.stdin.Stdin.html)
instance.
