---
title: Upgrading to tap 18 from tap v16 and before
eleventyNavigation:
  order: 495
  key: Upgrading
---

Tap version 18 is a major overhaul, and some configuration needs to be
updated when upgrading from versions 16 and before.

The [changelog](./changelog.md) covers much of the details, but
this is intended to be a more deliberate guide for users
depending on features that have changed.

## `mochaGlobals`

In tap 16, a top-level function `tap.mochaGlobals()` would dump
the various mocha-like interfaces onto the global object.

In tap 18, these are provided by the optional [`@tapjs/mocha-globals`
plugin](./plugins/mocha-globals.md).

To use it, add the plugin:

```
$ tap plugin add @tapjs/mocha-globals
```

From there, you can either import the interfaces from the plugin
module itself:

```js
import { describe, it } from '@tapjs/mocha-globals'
```

Or have them deposited onto the global object by setting the
config:

```
$ tap config set mocha-globals=true
```

## Assertion Synonyms

Assertion synonyms (eg, `t.is_not_equal()` instead of `t.not()`)
were deprecated in v16. In v18, they are moved to the optional
[`@tapjs/synonyms` plugin](./plugins/synonyms.md).

## Disabling coverage

In tap v16, you could disable coverage by setting `--no-cov` on
the command line, or setting `cov: false` in the config. Coverage
would not be checked unless `--check-coverage` was set.

In tap v18, this interface has changed:

- Coverage is enabled by default, and checked
- Missing or incomplete coverage is treated as an error

You can get the v16 style `--no-cov` behavior by doing:

```
$ tap config set disable-coverage=true
$ tap config set allow-empty-coverage=true
```

To suppress the failure when coverage is _incomplete_, without
disabling it entirely, you can use:

```
$ tap config set allow-incomplete-coverage=true
```

## Coverage Reporting After the Fact

In tap v16, if there were no test file arguments, and the
`--coverage-report` option was set on the CLI, then it would
generate a coverage report _instead of_ running tests. This was a
wart, and it has been removed.

To generate a coverage report after the fact, you can run `tap
report [type]`.

To replay the entire previous test run without actually running
tests (ie, just report the results again), you can run `tap replay`.

## `test-regexp`, `test-ignore` RegExp -> `include`, `exclude` globs

Globs are usually a more ergonomic mechanism for specifying files
and folders, compared with regular expressions. Tap v18 now
conforms with the majority of build tools that use an array of
`include` and `exclude` glob patterns, rather than a regular
expression.

For example, this config setting in a `.taprc` file:

```yaml
# tap v16 config, including with a regexp string
test-regex: "^t\/.*.([mc]js|[jt]sx?)$"
```

Would be equivalent in tap v18 to:

```yaml
# tap v18 .taprc file, regexp converted to glob
include:
  - "t/*.@([mc][jt]s|[jt]s?(x))"
```

Tap v18 also provides the special token `__EXTENSIONS__` that can
be used in the `include` glob expressions, so that you can tell
it to automatically pull in any extension that tap knows how to
load. So our config could be simplified to the much more readable
and future-proof:

```yaml
# tap v18 .taprc file, using __EXTENSIONS__
include:
  - "t/**/*.__EXTENSIONS__"
```

## Using Alternative Config Files

In tap v16, you could specify the location of the `.taprc` file
by using the `--rcfile` option. You could also put something like
this in package.json:

```json
{
  "tap": {
    "rcfile": "my-tap-configs.yml"
  }
}
```

This got rather confusing and sometimes led to issues when it
wasn't clear where and how the `rcfile` config could be set.

In tap v18, the configuration is simpler and more strict, while
also more extensible than it was before.

1. If a `.taprc` file is in the project root, start with that.
   Otherwise, if a `package.json` file is present in the project
   root, use that, and look for a `"tap"` object.
2. Parse all the fields present in the config. If it has an
   `extends` field referencing a file or dependency, load the
   configuration from the `extends` target, and then apply the
   current config file on top of it. (If it's a dependency, look
   for a `package.json` or `.taprc` within the dep.)
3. Continue until no more `extends` left to resolve.

So, in the example above, you could put this in your package.json
instead:

```json
{
  "tap": {
    "extends": "my-tap-configs.yml"
  }
}
```

For cases where you need to set the initial root config file
dynamically, you can set the `TAP_RCFILE` environment variable to
either a `package.json` file or a yaml tap config file. Note that
in tap 18, this can _only_ be set in the environment, not on the
command line or in a config file.

```
$ TAP_RCFILE=/path/to/dynamic/config.yml npm test
```

## Other Config Stuff

The `jsx`, `flow`, and `ts` options are removed. To disable
TypeScript and JSX support, remove the `@tapjs/typescript`
plugin with `tap plugin rm @tapjs/typescript`.

The `passes` option is added, which will report on all passing
tests as well as failures.

Options related to `nyc` are removed, as nyc is no longer
used.

The options `--expose-gc`, `--harmony`, `--debug`, and
`--debug-brk` are remoed, as they are extraneous with
`--node-arg`.

The `--libtap-settings` option is removed, as libtap is no longer
used.

The `--nyc-version` and `--parser-version` options are removed,
in favor of the `tap versions` command, which prints all versions
of relevant modules.

Additional configuration options are added by plugins.
