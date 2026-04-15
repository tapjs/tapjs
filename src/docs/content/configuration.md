---
title: TAP Configuration
eleventyNavigation:
  key: Config
  parent: Docs
  order: 10
---
This document explains how tap loads configuration, what it uses
configuration data for, and how this process can be extended or
modified to suit your test needs.

## Project Root

Tap will define a "project root" by walking up the directory
hierarchy until it finds one of:

- a `package.json` file
- a `.git` file or directory
- a valid config file (described below).

Once it finds that location, that's where it will load plugins,
store its fixtures, search for tests to run, and so on.

## Configuration Locations

Tap will attempt to load configuration data from the following
locations:

- The `TAP_RCFILE` environment variable, if this refers to a file
  on disk.
- A `.taprc` file in the local directory. (That is, `./.taprc`.)
- A `taprc` file (no dot) in the local `./config` directory.
  (That is, `./config/taprc`.)
- A `"tap": { ... }` section in `package.json`.

If a config file is found, but not used, then a warning will be
printed, to prevent confusing situations where editing an
apparent config file has no effect.

## Config Data

In a `package.json` file, obviously the data will be expected to
be in JSON format. In any other kind of file, tap will read the
data as YAML.

The full list of configuration options are listed in the [cli
docs](./cli.11ty.js). Note that these should be set in
configuration files in "css-case", the same as they are on the
command line.

Config data will also be read from the environment, as
capitalized `SNAKE_CASE` values prefixed with `TAP_`. For
example, the `--coverage-reporter=html` cli argument can also be
set by the environment variable `TAP_COVERAGE_REPORTER=html`.
Additionally, config values are set in the [test
environment](./environment.md) in the same fashion. Environment
variables take priority over configuration file values.

Config data can be set on the command line, in some cases using
shorthand aliases. Boolean flags can be set by specifying just
the key to set them as true, or `--no-{key}` to set them as
false. For example, the equivalent of `"bail": false` in a config
file would be `--no-bail` on the command line. Command line flags
and options are the highest priority, and override environment
variables and config file values.

## Config Command

The tap [runner](./cli.11ty.js) includes a [`tap config`
command](./cli.11ty.js#tap-config-%5Bget-%7C-list-%7C-dump-%7C-set-%7C-edit%5D),
which can be used to inspect or edit configuration values stored
in tap config files.

## Extending Configuration

The special config key `extends` can be used in configuration
files to base the config on another config file.

The value of `extends` can be either a path to a file on disk
(relative to the config file doing the extending) or a package
name that is resolveable in a `node_modules` folder visible to
the extending file. If it resolves to a package dependency, then
it must either have a `"tap"` section in its package.json file,
or contain a `.taprc` file with configuration data.

## Plugin Configs

Any tap plugin can [export a `config`
object](./plugins/index.md#config), which is an object that can
be passed to the
[Jack#addFields method](https://isaacs.github.io/jackspeak/classes/Jack.html#addfields) of JackSpeak (the config manager that tap uses).

These configs are added to the set that tap knows about, and can
be used in any config files where those plugins are in use.

## Examples

To specify the tap config file as some arbitrary location:

```
TAP_RCFILE=/path/to/my/config tap
```

If you want to have a single devDependency that is the source of
the tap configuration for all your projects, then you can create
it like this:

```json
{
  "name": "@my-namespace/my-tap-config",
  "version": "1.2.3",
  "tap": {
    "color": true,
    "bail": true,
    "reporter": "spec"
  }
}
```

then, in all your project package.json files, you can add this:

```json
{
  "devDependencies": {
    "@my-namespace/my-tap-config": "^1.2.3"
  },
  "tap": {
    "extends": "@my-namespace/my-tap-config"
  }
}
```

If you just want configs to be local, you can put them in
`.taprc` or `config/taprc`, and then use `tap config edit` to
edit them.
