---
title: "Using tap with..."
section: 3
redirect_from:
  - /using-with/
  - /using-with
---

# Using tap with ESM

As of tap v15, ES Modules are supported by default using Node.js's built in
ES Modules support.  You can load tap via either `import` or `require()` as
is appropriate to your program.

# Using tap with TypeScript

First, install `typescript` and `ts-node`.

Name your test files `.ts` and they'll be loaded as TypeScript if you have
both `typescript` and `ts-node` modules installed in your project, and enable the `--ts`
flag.

For TypeScript with JSX (ie, TSX), name your files with a `.tsx` extension.

If you want to provide your own TypeScript configs or version, use the
`--node-arg` argument to load your TypeScript loader.  For example:

```
tap --node-arg=--require=my-ts-node/register
```

This is useful in some cases where you might have a mix of JavaScript and
TypeScript in your tests and modules, and want to ensure that the correct
TypeScript compiler is used.

# Using tap with JSX

Name your test files `.jsx` and they'll be loaded as JSX, if the `--jsx`
configuration flag is set.

To provide your own JSX handling preloader instead of tap's built-in use of
[`import-jsx`](http://npm.im/import-jsx), provide your own loader via the
`--node-arg` option.  For example:

```
tap --node-arg=--require=my-jsx-preloader
```

This is useful in some cases where you might have a mix of JavaScript and
JSX in your tests and modules, and want to ensure that the correct JSX
compiler is used.

# Using tap with Flow

First install `flow-remove-types` in your project.

Then, pass the `--flow` argument on the command line, or set `flow: true`
in `.taprc`, or `{ "tap": { "flow": true } }` in `package.json`, and tap
will automatically remove flow annotations from tests and code.
