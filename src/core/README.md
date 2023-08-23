# `@tapjs/core`

This is the pluggable core of node-tap.

The `TestBase` class has the basic flow-control aspects of a tap
`Test` object, but only the `t.pass()` and `t.fail()` assertions.

All other assertions and features are added via plugins.

Full documentation available in [the
typedocs](https://tapjs.github.io/tapjs/modules/_tapjs_core.html).

## Class `Base`

This is the base class of all sorts of test objects. It inherits
from [minipass](https://isaacs.github.io/minipass/).

## Class `TestBase`

This provides the core flow control and `TAP` generation
facilities. The `Test` class inherits from this.

## Class `Spawn`

A child test class representing a child process that emits `TAP`
on its standard output.

## Class `Worker`

A child test class representing a worker thread that emits `TAP`
on its standard output.

## Class `Stdin`

A child test class representing `TAP` parsed from standard input.

## Class `TapFile`

A child test class representing a file containing `TAP` data.

## Class `Counts`

An object used to count pass, fail, todo, skip, total,
and completed tests.

## Class `Lists`

An object containing lists of test results.

## Class `TestPoint`

An object representing a single `ok`/`not ok` test point.

## Class `Minimal`

A very minimal Test class with no plugins, which can be used in
tap internal tests.

It is essentially just the TestBase class, but automatically
starting in the constructor, and with a .test() method so that it
can be used somewhat like a "normal" Test instance.

The reason that this method does not live on TestBase itself is
that it would make it more awkward to define on the Test class,
with all its plugins and extensions.

Only useful if you want a Test without any plugins, for some
reason.

## `proc`, `argv`, `cwd`, `env`

Captured values of `process`, `process.argv`, `process.cwd()`,
and `process.env` at the start of the process, in case they
change later on or are not available for some other reason.

## `tapDir`

The string path to the location of `@tapjs/core`.

## `mainScript(defaultName = 'TAP'): string`

The path to the main module that node ran.

## `TapPlugin<PluginValue, OptionsValue>`

The type of a plugin function which returns `PluginValue` and
optionally which takes `OptionsValue` as options.

## `Extra`

The extra info passed to assertions.

Extended by BaseOpts, TestBaseOpts, and ultimately TestOpts,
since any subtest is also an assertion, and can take all the same
assertion options.
