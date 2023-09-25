# `@tapjs/config`

This is the library that tap uses to manage configuration coming
from the command line options, environment variables, and config
files.

## Configuring Node Tap

If a `TAP_RCFILE` value is set in the process environment, then
that will be the initial location that tap looks for
configuration values.

If that's not set, then tap will look for configuration data
first in a .taprc file in the project root, and then in the "tap"
object in the project package.json file. ('Project root' means
the nearest folder at or above the current working directory
containing package.json, .taprc, or .git.)

The config object may set any of the following fields, as well as
the special "extends" field, which may specify either a package
name or file name, relative to the config file that references
it.

If the "extends" field resolves to a file on disk, then that will
be read as the base configuration object. (It may also extend yet
another config file, and so on.)

If the "extends" field specifies a package name, then it must be
resolveable in the `node_modules` folder of the file extending
it. That package must contain either a .taprc file, or a
package.json file with a "tap" object.

To see the format used in a .taprc file, run the `tap
dump-config` command with the desired options specified on the
command line.

Additionally, all config options that are modified from their
defaults will be set in the environment with the `TAP_` prefix,
and will be read from the environment if so specified. For
example, specifying `--omit-version` on the command line, or
`omit-version: true` in a .taprc file, will set
`TAP_OMIT_VERSION=1` in the environment.

Environment and CLI options take priority over any config files.

## Class `TapConfig`

This is the main interface for dealing with tap configuration.

The typical way to use this is by calling `await
TapConfig.load()` to get a
[`LoadedConfig`](https://tapjs.github.io/tapjs/interfaces/_tapjs_config.index.LoadedConfig.html)
object, which is an instance of `TapConfig` that has been fully
loaded with all relevant settings.

The full list of methods and properties are available in [the
typedocs](https://tapjs.github.io/tapjs/classes/_tapjs_config.index.TapConfig.html)
