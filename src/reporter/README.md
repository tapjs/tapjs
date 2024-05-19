# `@tapjs/reporter`

A set of [ink](https://github.com/vadimdemedes/ink) based
reporters for tap, and utilities you can use to write your own.

The modern reincarnation of [treport](http://npm.im/treport).

## Reporters in Node-Tap

The following reporters are built into this module, and always
available in node-tap.

### base

`--reporter=base` is the default. It provides a reasonable amount
of information about what's going on, without too much noise. If
you run tap with `--passes`, then it'll show all the passing
assertions, though that's often excessive, so it's off by
default.

### terse

As the name suggests, the `terse` report shows much less
information than `base`. But otherwise, they are very similar. If
tests pass, it shows a very brief summary. When tests fail, it
shows the same diffs, traces, and so on.

### min

More terse than `terse`. Shows information about failures and
`todo` items, but no summaries, counts, etc. For successful test
runs, this is equivalent to `silent`.

### silent

The `silent` report prints nothing at all to the terminal, but
still exits with an error status code if the tests did not pass.

### tap

The `--reporter=tap` option will output raw the `TAP` content,
similar to just running the test programs directly.

### junit

XML output format used by JUnit. The [testmoapp/junitxml
repo](https://github.com/testmoapp/junitxml) has a good
description of the format.

### json

A single JSON object, somewhat similar in shape to the XML produced by the
`junit` reporter.

`Suite` objects contain metadata about a test, and a list of
`suites` and `cases` (ie, test point assertions). Suites can
contain other suites.

### jsonstream

The same data as the `json` format, but streamed as
newline-delimited JSON.

Each line is an array with two members. The first is a string,
one of `'start'`, `'end'`, `'pass'`, `'fail'`, `'skip'` or
`'todo'`. The second is a data object, as follows:

- `start` Initial metadata about a suite, before it has loaded
  any sub-suites or test cases.
- `end` Final data about a suite, with counts and summary data.
- `pass`, `fail`, `skip`, `todo` A test point of the specified
  type.

### markdown

Similar data as shown by the `jsonstream` report, but formatted in
Markdown.

## Other Reporters

The `reporter` config option can also be set to:

- **Any executable program** - The TAP stream will be written
  to the program's standard input.
- **A module that exports a Stream class** - The class will be
  instantiated, and the TAP stream piped into it.
- **A module that exports a React component** - The component
  will be rendered using
  [Ink](https://github.com/vadimdemedes/ink), with the TAP object
  provided as the `test` prop, and the `LoadedConfig` as the
  `config` prop.

## Writing Custom Reporters

For streams and command-line reporters written in JavaScript, the
[tap-parser](https://tapjs.github.io/tapjs/modules/tap_parser.html)
module is the best way to parse the incoming TAP stream. For
other languages, there are [many other TAP consumer libraries
available](http://testanything.org/consumers.html).

For React component reporters, the components, hooks, and
utilities in this package are likely very useful.

The easiest way to write a custom React reporter is as an
ESM-only module that default exports its `Reporter` function on
the main package module. Then, users can do `--reporter
<package-name>` in their configs to use it.

Another way, if a reporter comes along with some other plugin
functionality, is to add it to the default set via the API
presented here. However, some care must be taken in that case,
because `@tapjs/reporter` is ESM-only, and plugins must be
compatible with both CommonJS and ESM. The [`@tapjs/dummy-plugin`
package](https://github.com/tapjs/tapjs/tree/main/src/dummy-plugin)
contains an example of this.

## `@tapjs/reporter` API

The API available at `import '@tapjs/reporter'`.

### interface `TapReportOpts`

The options provided to reports.

```ts
interface TapReportOpts {
  test: TestBase
  config: LoadedConfig
}
```

### type `Reporter`

Alias for `React.FC<TapReportOpts>`

### `types: Record<string, Reporter>`

A record of all the known reporters, indexed by their config name.

### `addType(name: string, reporter: Reporter)`

Add a reporter at the name provided, so that it can be used on
the `--reporter` config.

### `report(Type: string | Reporter, tap: TAP, config: LoadedConfig)`

Render the specified reporter with the `tap` object and loaded
config.

### Base

The `--reporter=base` implementation

### Terse

The `--reporter=terse` implementation

### hooks

Alias for the `@tapjs/reporter/hooks` module

### components

Alias for the `@tapjs/reporter/components` module

### utils

Alias for the `@tapjs/reporter/utils` module

## `@tapjs/reporter/components` API

This provides a collection of useful components for building tap
reports.

The relevant tags are listed here, but this module also exports
several types and interfaces that they use for their property
definitions.

### BailedOut

```jsx
<BailedOut test={tap} />
```

Print a bold red "Bailout!" message if the test bails out.

### Diff

```jsx
<Diff diff={diffString} />
```

Create a colorized diff from a patch string.

### HangingIndent

```jsx
<HangingIndent indent={4}>
  Some very long string, which might wrap to multiple lines. Every
  line after the first is indented.
</HangingIndent>
```

Indent every line after the first, useful when printing long
stack frame lines.

Any ink `Text` properties are allowed.

### Log

```jsx
<Log includeTests test={tap} config={loadedConfig} />
```

Creates an ink `<Static />` component containing console output,
standard output, and (if `includeTests` is set) tests as they
complete.

#### TestLogLine

The component used by `<Log />` to show lines for each test as it
completes.

#### ConsoleLogLine

The component used by `<Log />` to show `console` output in the
runner process.

#### StdioLogLine

The component used by `<Log />` to show `stdio` output from child
test processes.

### ResultDetailList

```jsx
<ResultDetailList
  test={tap}
  filter={t =>
    !!t.counts.fail ||
    !!t.counts.skip ||
    !!t.counts.todo ||
    !t.parser.ok
  }
  Banner={
    <Box>
      <Text>tests complete</Text>
    </Box>
  }
/>
```

When the test suite is completed, this prints the `Banner` if
provided, and then the detailed results of all tests that pass the filter.

By default, passing tests are excluded from this report.

### ResultDetails

```jsx
<ResultDetails result={result} />
```

Print detailed information about a test point's diagnostics.

### Runs

```jsx
<Runs test={tap} />
```

Print a line for each test in progress, removing the line when it
completes.

### Source

```jsx
<Source source={result.diag.source} at={result.diag.at} />
```

Pass in a test result.diag that has a source and callsite, and
it'll return a prettied up source line with the callsite
highlighted.

### Stack

```jsx
<Stack stack={stackString} />
```

Print a stack string nicely.

Long lines are given a hanging indent, and local filenames are
highlighted.

### SuiteSummary

```jsx
<SuiteSummary test={tap} />
```

The `10 pass  3 fail  2 skip  of 18 complete` lines at the bottom
of the test run.

Also prints `Bailout!` and `Timeout` messages.

### TestBadge

```jsx
<TestBadge test={subtest} />
```

The `PASS`, `FAIL`, etc. badges for a subtest.

### TestResultsList

```jsx
<TestResultsList test={subtest} details />
```

Show the list of results for a completed test. (Shows nothing if
the test is not yet complete.)

`details` is set in the display in the final test summary,
`false` when used in the log.

### TestSummary

```jsx
<TestSummary test={subtest} details omitPassing />
```

Show the summary for a completed test with its test badge, result
details, and so on.

The `details` flag will cause it to print the full diagnostic
output for failing test points. It is set false when printing in
the log, true when printing in the final test results report.

### TimedOut

```jsx
<TimedOut test={tap} />
```

Print a bold red `Timeout` message when the suite times out.

## `@tapjs/reporter/hooks` API

Hook functions that can be used in components providing helpful
test information that updates at the appropriate times.

### `useAssertTotals(test: TestBase)`

An up to date
[`test.assertTotals`](https://tapjs.github.io/tapjs/classes/_tapjs_core.test_base.TestBase.html#assertTotals)

### `useBailedOut(test: Base)`

`true` or the bailout reason if/when the test bails out. `false`
otherwise.

### `useCleanup(effect: CleanupEffect, deps: any[])`

The `CleanupEffect` type is a function that may take an array of
cleanup methods as its first argument, and a `doCleanup` function
as its second, and can optionally return a cleanup function as
well.

By pushing onto the array, or returning a cleanup function of
its own, the effect will be properly disposed as needed.

Useful in cases where you need to listen to multiple events, and
clean them all up at the appropriate time.

Example:

```js
import { useCleanup } from '@tapjs/reporter/hooks'
import { listenCleanup } from '@tapjs/reporter/utils'
const useMyHook = emitter => {
  const [firsts, updateFirsts] = useState([])
  const [seconds, updateSeconds] = useState([])
  useCleanup((list, doCleanup) => {
    // these event handlers will be cleaned up properly now
    list.push(
      listenCleanup(emitter, 'first', f =>
        updateFirsts(firsts.concat([f])),
      ),
    )
    list.push(
      listenCleanup(emitter, 'second', f =>
        updateSeconds(seconds.concat([f])),
      ),
    )
  }, emitter)

  return [firsts, seconds]
}
```

### `useComments(test: Base) => string[]`

Returns a list of the comments made by the test.

### `useCountsLists(test: Base) => [Counts, Lists]`

Up to date `t.counts` and `t.lists` properties.

### `useIsDone(test: Base)`

True if the test is done, false otherwise.

### `useLog(test: TestBase, config: LoadedConfig, includeTests: boolean)`

Returns an array of `LogEntry` items describing each entry in the
log.

### `useSubtests(test: TestBase, which: 'active'|'finished'|'all') => Base[]`

Return an array of all subtests meeting the `which` criteria.

- `active` Tests that have started, but not completed.
- `finished` Tests that have completed.
- `all` All of the above.

### `useSuiteTotals(test: Base) => Counts`

Return a
[`Counts`](https://tapjs.github.io/tapjs/classes/_tapjs_core.counts.Counts.html)
object describing the suites in the test run.

### `useTestTime(test: Base, interval: MILLISECONDS = 247) => number`

The time this test has taken to complete, updated every
`interval` milliseconds. `247` chosen as a default because it's
fast and un-round enough to feel organic, without taxing the
system with excessive time checks.

### `useTimedOut(t: Base): undefined | Extra`

If the test has not timed out, returns `undefined`.

Otherwise, returns the
[`Extra`](https://tapjs.github.io/tapjs/interfaces/_tapjs_core.index.Extra.html)
object describing the timeout failure. (Typically, `extra.signal`
is the thing to care about.)

## `@tapjs/reporter/utils` API

Some helpful utilities that are useful to have when creating
reports.

### `assertName(r: Result, t: Base)`

Returns the appropriate full result name, including the test
name, without repeating it.

### `listenCleanup(e: EventEmitter, ev: string, fn: Function) => cleanupMethod`

Add the function as an event listener, returning a function that
will remove the listener, for use with `useEffect` and
`useLayoutEffect` hooks.

### `ms(n: number)`

A slightly more granular form of the `ms` module from npm.

Very small float values are printed in µs, and only 3 digits of
precision are ever shown.
