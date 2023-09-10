---
title: tap REPL
eleventyNavigation:
  key: REPL
  parent: Docs
  order: 45
---

Node-tap includes a <abbr title="Read Evaluate Print
Loop">REPL</abbr> that can be used to do various things.

## Starting the REPL

To start the REPL, run `tap repl`.

You can have it immediately execute a command by running `tap
repl <command>`.

For example, `tap repl help` will print the list of commands and
descriptions.

## Running Tests

To run tests normally, like doing `tap run` or `tap run <file>`,
type `r` or `r <filename>`.

To run the tests and update snapshots (assuming the
[`@tapjs/snapshot` plugin](./plugins/snapshot.md) is enabled),
type `u` or `u <filename>`.

To run tests that have changed since the last test run, type `n`.

To run tests that failed in the last test run, type `f`. If there
are no prior failures, then this runs all tests.

## Watching for Changes

To automatically run affected tests any time files change, type
`w`. This toggles the watcher on or off, and prints an update
about the current watch status. You can run `w on` or `w off` to
set it explicitly.

## Managing Plugins

You can use `plugin [add <plugin> | rm <plugin> | list]` to
interact with tap plugins, just like the [`tap
plugin`](./cli.11ty.js#tap-plugin-%5Badd-%3Cplugin%3E-%7C-rm-%3Cplugin%3E-%7C-list%5D)
command.

## Displaying Stuff

To get a list of the tests that failed the previous run, type
`f?`.

To get the current watch status, type `w?`.

To get a coverage report for the most recent test run, type `c`.
You can also specify the style with `c <style>`, for example, `c
html` to open the HTML report in a browser.

You can inspect tap's process info database using the `i`
command. For example, `i test/foo.ts` will show information
about the most recent run of the `test/foo.ts` test process. You
can also provide a uuid to the `i` command to get information
about parent and child processes.

`version` prints the current tap version, and `versions` prints
the version of tap and all submodules and plugins.

`list` will print a list of the test files that will be included
in the test run.

`config` will show the configuration currently in use. You can
also use `config set`, `config get`, and `config edit` the same as the [`tap
config`
command](./cli.11ty.js#tap-config-%5Bget-%7C-list-%7C-dump-%7C-set-%7C-edit%5D)

## Other Stuff

The `parse` command will let you type in [`TAP`
data](./tap-format.md) and then print information about how it
was parsed.

Any `tap <command ...>` will run the [`tap` CLI](./cli.11ty.js)
in a subprocess and print the exit status, so if anything is
missing here but provided in the CLI, you can use it that way.
