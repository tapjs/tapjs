---
layout: layout
title: "Using tap with..."
---

# Using tap with ESM

ES-Modules are supported by default, using the [esm](http://npm.im/esm) module.
If your test file ends in `.mjs`, then this will automatically use Node's
built-in experimental module system.

To turn _off_ ES-Module support (as may be required in some edge cases), run
your tests with `--no-esm`.

# Using tap with TypeScript

Name your test files `.ts` and they'll be loaded as TypeScript.

For TypeScript with JSX (ie, TSX), name your files with a `.tsx` extension.

# Using tap with JSX

Name your test files `.jsx` and they'll be loaded as JSX.
