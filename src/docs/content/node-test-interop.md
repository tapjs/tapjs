---
title: Interoperability with the Node.js Built-in Test Runner
eleventyNavigation:
  key: Node Test Interop
  parent: Docs
  order: 45
---

> *tl;dr* - Use the `tap` runner to run tests written with
> `node:test` or run `tap` tests with `node --test` and it Just
> Works with full interoperability. Mix and match how you see
> fit.

The best way to appreciate how these two things work together is
with an example. The [`tapjs/node-test-example`
repo](https://github.com:tapjs/node-test-example) is a module
with a shocking number of bugs for how little code it is, with a
test written using `node:test` and effectively the same test
written using `tap`.

When you run `npm test`, it'll run with both `tap` and `node
--test`.

```bash
git clone git@github.com:tapjs/node-test-example.git
cd node-test-example
npm install
npm test # run both with tap, and both with node --test
```

* `npm run test:node` Executes both test suite files with the
  `node --test` runner.
* `npm run test:tap` Execute both test suite files with the
  `tap` runner.
* `npm run test:mix` Run the node test with node, the tap test
  with tap, sharing a coverage folder.
* `npm run test:cross` Run the node test with tap, the tap test
  with node, sharing a coverage folder.

The `test:mix` and `test:cross` show using the `node --test` and
`tap` runners so that they dump coverage into the same folder.
Then you can use `tap report` to report on it.

In all cases, you can see that the results are pretty similar.

## Differences

- When running with the `tap` runner, they're almost identical.
  The main thing is that the `node:test` doesn't provide
  per-assertion reporting, so you only see a report on the test
  block, and possibly the first failure, not all the assertions
  within it.
- When running with the `node --test` runner, the `tap` test
  provides diffs and source callsite printing, while the
  `node:test` test shows a `console.log()` of the thrown Error.

Of course, the two runners produce very different output overall,
but they should both be pretty sensible.

Personally, I think the tap runner is a lot more useful, and
certainly if you write tests in TypeScript (or use tap's `import`
mocking) it's nice to not have to specify the `--loader` and
`--import` arguments explicitly.

But on the flip side, that fanciness comes with a cost. With
TypeScript disabled, `tap` runs these two tests in about 450ms on
my system (350ms or so with coverage disabled), while `node
--test` does it in around 170ms. In both cases, the
`test/tap.test.js` test takes around 150ms to run, and the
`test/node.test.js` takes under 10ms.

Real world tests doing complicated stuff would show a less
dramatic difference, so this is in no way a representative
benchmark, but as always, performance and features are
fundamentally opposed, because features require running code, and
not running code is always faster.

## You Do You

The goal of the `node:test` interoperability in node-tap is to
make it possible for you to get the best of both worlds. You
could have part of your test suite written as `node:test` tests,
if they don't need `t.mockImport` or TypeScript, and other tests
written in `tap` that are just more convenient to run with a
runner that knows which loaders to apply.
