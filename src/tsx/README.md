# `@tapjs/tsx`

An alternative plugin to `@tapjs/typescript`. Load typescript
tests using [`tsx`](https://github.com/privatenumber/tsx) instead
of [`ts-node`](https://github.com/TypeStrong/ts-node).

## USAGE

This plugin is not installed by default. To use it in place of
`@tapjs/typescript`, run:

```
tap plugin rm @tapjs/typescript
tap plugin add @tapjs/tsx
```

If both plugins are active, this plugin prints a warning. Using
both can cause conflicts, and makes tests slower, because the
TypeScript is compiled twice.

When enabled, this plugin adds `ts`, `cts`, `mts`, `tsx`, and
`jsx` to the file extensions that tap will load, and adds the
`tsx` loader to the loader set.

## Configuration

Set these as command line flags, or in a `.taprc` or
`package.json`, or with the `tap config set <key>=<value>`
command.

- `tsx-tsconfig-path` Tell tsx where to find your `tsconfig.json`
  file. Sets the `TSX_TSCONFIG_PATH` environment variable.
- `tsx-disable-cache` Tell tsx not to use a cache. Sets the
  `TSX_DISABLE_CACHE` environment variable.
