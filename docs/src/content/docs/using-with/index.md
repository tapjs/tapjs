---
title: "Using tap with..."
section: 3
redirect_from:
  - /using-with/
  - /using-with
---

# Using tap with ESM

ES-Modules are supported by default, using the [esm](http://npm.im/esm) module.
If your test file ends in `.mjs`, then this will automatically use Node's
built-in experimental module system.

Although, if you are using ES-modules with `.js` extension & `type: module` pattern
on Node.js v12.13+, you will face warnings and/or crashes while running tests. 
In this case it is advised to turn "esm" support off & use native Node.js 
module loader.

To turn _off_ ES-Module support, run your tests with `--no-esm`.

In future releases (v15+) "esm" module will not be provided by tap.

# Using tap with TypeScript

Name your test files `.ts` and they'll be loaded as TypeScript.

For TypeScript with JSX (ie, TSX), name your files with a `.tsx` extension.

If you want to provide your own TypeScript configs or version, disable tap's
built-in TypeScript support, and use the `--node-arg` argument to load your
TypeScript loader.  For example:

```
tap --no-ts --node-arg=--require=my-ts-node/register
```

This is useful in some cases where you might have a mix of JavaScript and
TypeScript in your tests and modules, and want to ensure that the correct
TypeScript compiler is used.

# Using tap with JSX

Name your test files `.jsx` and they'll be loaded as JSX.

To provide your own JSX handling preloader instead of tap's built-in use of
[`import-jsx`](http://npm.im/import-jsx), disable tap's built-in JSX handling,
and provide your own loader via the `--node-arg` option.  For example:

```
tap --no-jsx --node-arg=--require=my-jsx-preloader
```

This is useful in some cases where you might have a mix of JavaScript and
JSX in your tests and modules, and want to ensure that the correct JSX
compiler is used.

# Using tap with Flow

Pass the `--flow` argument on the command line, or set `flow: true` in
`.taprc`, or `{ "tap": { "flow": true } }` in `package.json`, and tap will
automatically remove flow annotations from tests and code.
