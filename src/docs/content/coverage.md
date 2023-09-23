---
title: tap Code Coverage
eleventyNavigation:
  key: Coverage
  parent: Docs
  order: 30
---

Code coverage is an essential element of any software testing
strategy. Without verifiable and complete coverage of the system
under test, it is significantly more difficult to have confidence
that the tests are in fact testing what we think.

Empirical evidence has shown that human intuition is a poor
judge of test completeness. Code coverage is thus the "test for
the tests", verifying that the tests are in fact testing the
code. Nothing is perfect, and it is of course possible to write
bad tests with full code coverage, but _lacking_ test coverage
virtually gaurantees that tests are inadequate.

As the saying goes, seatbelts don't make you immortal, but
they're still a good idea.

A module with 99% code coverage can be considered as two modules;
a large one that is tested, and a smaller one with no tests at
all. If code is worth testing, it's worth testing completely.

For that reason, the tap runner instruments code using the built
in V8 coverage API, and considers incomplete coverage to be a
test failure. If code coverage is complete, no coverage report is
generated. If it is incomplete, or if no coverage is generated at
all, then a report is printed and the process exits with an error
status code.

## Reporting Coverage

Tap uses essentially the same strategy as
[C8](https://www.npmjs.com/package/c8), but instead of
generating coverage information for _all_ JavaScript that passes
through the interpreter, it only saves coverage for the files
that are part of your program. This saves a considerable amount
of disk space and, more importantly, processing time.

To generate coverage reports, tap uses the C8 `Reporter` class.
Thus, any [istanbul
reporters](https://istanbul.js.org/docs/advanced/alternative-reporters/)
can be used with tap, either with the `tap report` command or
with the `--coverage-report`. See [the CLI
documentation](./cli.11ty.js) for more information about these
commands and options.

By default when running tests and using the `text` reporter,
coverage information is only reported to the terminal if it is
lacking, and then only for the files that are lacking coverage,
since a list of green `100%` doesn't give you much useful
information. To show _all_ coverage, you can use the
`--show-full-coverage` configuration option.

## Coverage Maps

In order to get even more benefit from code coverage analysis, it
is often useful to limit the coverage provided by a given test to
just a single module in your codebase. This prevents "accidental
coverage", where a section of code is covered by integrations,
but lacks explicit unit test verification.

To use a coverage map, create a module that default exports
(either with `export default` in ESM, or `module.exports = ...`
in CommonJS) a function that maps a test file to a file in the
program. If using TypeScript or some other transpiled JavaScript
dialect, the coverage map should return the path to the _source_
file, not the built artifact. Then, set that module path as the
`--coverage-map` config value.

For example, you might have source in `src/foo.ts` and
`src/bar.ts`, with corresponding tests in `test/foo.ts` and
`test/bar.ts`.  A coverage map might look like this:

```js
// map.mjs
export default (testFile) => testFile.replace(/^test/, 'src')
```

Then, if you put this in your `.taprc` file, it will ensure that
_only_ the test for a given unit will provide coverage for that
module, gauranteeing that you are not relying on accidental
coverage:

```yaml
# .taprc
coverage-map: map.mjs
```

The coverage map can return null, a string, an array of strings,
or an empty array.

If it returns null, then no coverage will be generated for the
test in question.

If it returns a string or string array, then it will only
generate coverage for the file(s) listed.

If it returns an empty array, then it will generate coverage for
any source files loaded. (This is the default behavior if no
coverage map is used.)

To extend the previous example, consider if we have a set of
integration tests at `test/integration/*.ts`. We want to ensure
that our unit tests are complete, and use the integration tests
only to verify certain edge cases or smoke tests, without regard
for coverage.

In that case, we could create a coverage map like this:

```js
// map.mjs
export default (testFile) =>
  /^test\/integration/.test(testFile) ? null
  : testFile.replace(/^test/, 'src')
```

## Handling Impossible Cases

There may be cases where a code path is actually impossible, but
rather than delete it, we may want to keep it as a defensive
measure. For example, we might have a limited set of enumerated
values, and a `switch` statement that handles all of them.

```js
switch (enumValue) {
  case firstValue: return handleFirstValue()
  case secondValue: return handleSecondValue()
  // ... all other possible values ...
  default:
    throw new Error('invalid enumValue: ' + enumValue)
}
```

This is good defensive code, but if the value is coming from
elsewhere in our program, it might not be possible to trigger
this case.

Because tap uses C8 for its coverage generation, you can use [`/*
c8 ignore ...`
comments](https://github.com/bcoe/c8#ignoring-uncovered-lines-functions-and-blocks)
to exclude lines or blocks from coverage consideration.

```js
switch (enumValue) {
  case firstValue: return handleFirstValue()
  case secondValue: return handleSecondValue()
  // ... all other possible values ...
  /* c8 ignore start */
  default:
    throw new Error('invalid enumValue: ' + enumValue)
  /* c8 ignore stop */
}
```

## Is it _actually_ impossible to cover? Or just annoying?

It is worth thinking carefully about whether it really is
impossible to test an "impossible" edge case. A common policy is
to require that every `c8 ignore` comment includes a
justification for _why_ that section of code is untestable. (A
common justification is "TypeScript thinks this might be
undefined" around excessively defensive type checks.)

By carefully splitting a program into modules, and using the
[`t.mockRequire` or `t.mockImport`](./plugins/mock.md) methods to
inject dependencies, or the [`t.intercept` and
`t.capture`](./plugins/intercept.md) methods to override methods
and properties of objects, it is often possible to provide
coverage for "impossible" edge cases quite easily. Of course, if
you mock your whole program, you aren't testing much, but it's a
useful tool for getting into many tricky corners.

The
[`@tapjs/clock`](https://tapjs.github.io/tapjs/modules/_tapjs_clock.html)
plugin can also be added to handle subtle timing edge cases.

If you find yourself using `c8 ignore` for things like error
conditions and platform-specific behaviors, it should be treated
as a code smell indicating that the code can likely be more
effectively factored and tested.

## Disabling Coverage, Accepting Missing/Incomplete Coverage

**WARNING: This is almost always a bad idea. It reduces the value
of your tests.**

In some cases, you may need to tell the test runner to _not_ fail
if the coverage is missing or incomplete. For example, you may be
in the process of transitioning a legacy codebase to proper test
coverage, or using `tap` along with another tool to test other
parts of your program.

You can use the following options to facilitate this unusual
situation:

* `--disable-coverage` Prevent tap from generating code coverage.
  This will make the test run fail unless
  `--allow-missing-coverage` is set, because the coverage will
  always be missing.
* `--allow-missing-coverage` Do not fail if no coverage was
  generated. Note that it _will_ still fail if _incomplete_
  coverage is generated, unless `--allow-incomplete-coverage` is
  also set.
* `--allow-incomplete-coverage` Do not fail if the generated
  coverage was incomplete. Note that it _will_ still fail if _no_
  coverage was generated, unless `--allow-empty-coverage` is also
  set.
