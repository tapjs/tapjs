# Package map

Folder in `src/` to package name and purpose. For the current
version of each, read its `package.json`.

## Core and runner

| Folder | Package | Purpose |
| --- | --- | --- |
| `tap` | `tap` | Main entry point and CLI alias |
| `core` | `@tapjs/core` | Base parts of tap |
| `test` | `@tapjs/test` | Builds the plugin-based `Test` class |
| `run` | `@tapjs/run` | CLI runner |
| `config` | `@tapjs/config` | Config files, CLI args, env vars |
| `reporter` | `@tapjs/reporter` | Output reporters (uses React and Ink) |
| `parser` | `tap-parser` | Parses TAP |
| `yaml` | `tap-yaml` | YAML handling for TAP diagnostics |
| `tcompare` | `tcompare` | Deep compare and object formatting |
| `stack` | `@tapjs/stack` | Stack trace capture |
| `error-serdes` | `@tapjs/error-serdes` | Port of node's `error_serdes.js` |

## Default plugins

The source of truth is `scripts/default-plugins.txt`. As of
2026-11-04: `after`, `after-each`, `asserts`, `before`,
`before-each`, `chdir`, `filter`, `fixture`, `intercept`, `mock`,
`node-serialize`, `snapshot`, `spawn`, `stdin`, `typescript`,
`worker`.

The root `README.md` list of default plugins leaves out `chdir`,
`node-serialize`, and `worker`.

## Optional plugins

`clock`, `nock`, `sinon`, `esbuild-kit`, `tsx`, `synonyms`,
`mocha-globals`.

## Other

| Folder | Package | Purpose |
| --- | --- | --- |
| `docs` | `@tapjs/docs` | The node-tap.org site (Eleventy) |
| `dummy-plugin` | `@tapjs/dummy-plugin` | Example plugin for tap's own tests |
| `create-plugin` | `@tapjs/create-plugin` | `npm init @tapjs/plugin` |
| `npm-init-template` | `npm-init-template` | Helper for `npm init` packages |
