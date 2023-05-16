---
title: Coverage Maps
section: 8.02
redirect_from:
  - /coverage-map/
  - /coverage-map
---
# Coverage Maps

If you specify a `--coverage-map=<file>` option, then you can be very precise
about _which_ files under test should be covered by a specific test.

A coverage map is a Node.js module that exports a single function.  This
function takes a test file as an argument, and returns a single filename or an
array of program files that should be covered by that test.

This is useful in cases where you want to have a part of your program at
`foo.js` which should be 100% covered by `foo.test.js`, for example.  Coverage
generated with a coverage map will help guarantee that you are actually testing
a piece of code directly, rather than "accidentally" adding lines of coverage
via integration.

When used with [`--changed`](/docs/save-failures-run-changed/) or
[`--watch`](/docs/watch/), this also means that you limit which file's changes will
trigger which test to re-run.  Also, because less of your program is
instrumented for each test, the overall suite can run significantly faster.

## Module Structure

The coverage map must export a single function.  This function takes a test filename as an argument, and returns one of the following values:

- A filename of a single program file that should be covered by this test.
- An array of filenames of program files that should be covered by this test.
- An empty array, indicating that all program files should be covered,
  following NYC's default coverage logic.
- Any falsey value, indicating that this test should not provide coverage.
  This is useful for regression tests that don't add coverage, but do verify
  some edge-case bug.

## Example

For example, you might have a file at `index.js` which is the main entry point
of your library or application, and exports a bunch of other functionality from
inside a `lib` folder.  If the file at `lib/foo.js` loads the index (perhaps
just for one or two things), then this effectively means that any test that
loads `lib/foo.js` _also_ loads everything else.

Now any change anywhere in the program triggers a full test suite run, so why
bother using `--changed` at all?

With a `--coverage-map` argument, you can specify that the test at
`foo.test.js` should only cover `foo.js`.

Here's an example coverage-map file, which maps `*.test.js` to the
corresponding `*.js`.

```js
// map.js
module.exports = testFile => testFile.replace(/\.test\.js$/, '.js')
```

To run tap with this coverage map, run this command:

```
tap --coverage-map=map.js
```

Or, you can add this config to your package.json file:

```json
{
  "tap": {
    "coverage-map": "map.js"
  }
}
```
