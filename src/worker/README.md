# `@tapjs/worker`

A default tap plugin providing `t.worker()`.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/worker` to
bring it back.

### Interface `WorkerOpts`

Options for `t.worker()`

All of the normal Base and Extra options are also allowed.

- `workerData` - Any data passed to the Worker thread.
  Shows up in the worker thread as `t.workerData` on the root
  `TAP` test.
- `env` - Environment variables provided to the worker thread
- `eval` - if set to `true`, then the `filename` will be treated
  as inline JavaScript code rather than a filename to run.

### `t.worker(filename, [options], [name]): PromiseWithWorker`

Arguments:

- `filename` `string` - The file to execute in the thread, or if
  `{ eval: true }` is in the options, a string of JavaScript code
  to run.
- `options` (optional) `WorkerOpts` object
- `name` (optional) `string` - name of the subtest

Starts a [Node.js
Worker](https://nodejs.org/api/worker_threads.html#class-worker)
thread when the test starts, parsing its standard output as a TAP
stream.

Returns a Promise that resolves when the test is complete. The
`subtest` member on the Promise is a
[`Worker`](https://tapjs.github.io/tapjs/classes/_tapjs_core.worker.Worker.html)
instance.
