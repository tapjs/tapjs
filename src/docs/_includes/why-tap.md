## Why TAP?

Why should you use this thing!? **LET ME TELL YOU!**

Just kidding.

Most frameworks spend a lot of their documentation telling you
why they're the greatest. This isn't that. It's good, but it is
opinionated.

### <i lang="it" title="all tastes are tastes">tutti i gusti sono gusti</i>

Software testing is a software and user experience design
challenge that balances on the intersection of many conflicting
demands.

Node-tap is based on [my opinions about how a test framework
should
work](https://blog.izs.me/2023/09/software-testing-assertion-styles/),
and what it should empower you to do. I do _not_ have any opinion
about whether or not you share those opinions. If you do share
them, you will probably enjoy this test library.

Here are the design principles that shape this test framework.

### Test files are "normal" programs (mostly)

Any TAP test can be run directly as a plain old JavaScript
program [(with some caveats)](/environment/).

Of course, if the test is written in
[TypeScript](/plugins/typescript/), or if it relies on [mocking
imports](/plugins/mock/), then you may have to run it with a
loader because that's the only way to do certain things in Node.
But otherwise, they should be just like normal programs that run
in a normal environment, to the greatest degree possible. The
more tests diverge from the real platform, the more difficult
they are to reason about.

The [runner](/cli) is a good way to run tests, but it's optional.
Tests don't execute in a special simulated memory space with
injected globals, and so on. Because each test runs in its own
process, there's no chance of tests becoming dependent on one
another's leaked globals or causing other confusing situations.
The runner is essentially just looking at the output, and
summarizing it in a report.

### Tests should fun and helpful

The goal of tests is to help you write code. They add reliability
to your program by adding a layer of "yes, this does what I think
it does". Whether you're doing strict Red-Green-Refactor style
TDD, or just finger-painting until it feels right and then
writing tests to verify what you did, writing the tests should
feel empowering and straightforward, _reducing_ cognitive load
rather than increasing it.

Software tests should be a security blanket and a quality
ratchet, giving you the support to undertake massive refactoring
and fix bugs without worrying. It shouldn't be a purification
rite or a hazing ritual. It should be fun, because making stuff
is fun, and it helps you make better stuff.

### Type information must be accurate and complete

This is simply not reasonable to do with a hand-edited type
definitions in `.d.ts` files.

TAP's exported types are built up from its set of plugins and
internal classes, assembled into the [`Test` class](/api) that
your test programs interact with. When a plugin is added or
removed, the `t` in your editor can accurately tell you its new
shape.

If you have to look at the docs too often, that's a bug. Lean
into the beautiful power of code completion.

### TypeScript, ESM, and CommonJS supported out of the box

Your tests should be written just like your program, with as few
barriers as possible. If you can do it in CommonJS, you can do it
in ESM, and vice versa (at least as far as TAP is concerned).
Whatever is in your `tsconfig.json` or `package.json`, it should
Just Work.

### Anything that _can_ be a plugin _is_ a plugin

The plugin system is leveraged for anything that does not
absolutely need to be included in the core.

Basic [TAP](/tap-format) generation and flow control, error
handling, config loading, and process management are all included
in the core. But [TypeScript support](/plugins/typescript),
[mocking](/plugins/mock), almost all [assertion
methods](/plugins/asserts), [method and property
spying](/plugins/intercept),
[spawning](/plugins/spawn)/[forking](/plugins/worker) subtests,
creating [fixtures](/plugins/fixture),
[snapshots](/plugins/snapshot), and attaching [lifecycle
methods](/plugins/lifecycle) (among others) are all relegated to
plugins.

This means that features can be switched on or off or extended
very easily.

### Plugins must be powerful and trivial to write correctly

The [plugin interface](/plugins) is extremely simple. Export a
`plugin` function that returns an object. That's it, that's a
plugin.

Plugins _can_ also export configuration definitions, which are
folded into the set of fields that TAP knows how to parse from
the command line or from your `.taprc` file, or export a `loader`
string, which will be invoked when spawning test processes,
making them an extremely powerful way to make your test framework
work for you.

### High Signal, Low Noise

It is important to give a lot of information about test failures,
throws, and so on, so that you can easily jump straight to the
appropriate place in the code to fix the problem. And, it's
usually helpful to see which tests are actually running.

However, a screen full of green checkmarks and `100% Covered!`
isn't very useful. It should be just enough to know what happened
and easily diagnose any problems, and otherwise fairly quiet.

TAP tries to show you exactly what you need to see, and nothing
else. Low information output has been trimmed down as much as
possible. Coverage information is only shown when it has
something relevant to say. Stack traces have noisy internals
trimmed out, so it's easier to see exactly where in _your_ code
the problem happened. Source maps are always enabled, because you
need to know where the actual code is, not just which built
artifact failed.

And if the default reporter isn't terse enough for your liking,
try `tap -Rterse`.

### Assertions don't throw (but throws are handled nicely)

I frequently write programs that have many hundreds of assertions
based on some list of test cases. If the first failure throws,
then I don't know if I've failed 100 tests or 1, without wrapping
everything in a try-catch.

Basically, it should be your decision whether you want to throw
or not. The test framework shouldn't force that on you, and
should make either case easy.

### Test reporting should be useful, extensible, and accessible

The [raw test output](./tap-format.md) is machine-parseable and
human-intelligible, and the reporter consumes that test output to
turn it into a [pretty summarized report](/reporter.md). This
means that test data can be stored and parsed later, dug into for
additional details, and so on.

Red and green are the conventional colors meaning "removed" and
"added", but they're also exactly the same color for many people.
All of the color choices in the reporter are tested rigorously
against simulators for protanopia, deuteranopia, tritanopia, and
monochromicity.

### Test coverage is always on

Running tests with coverage changes the way that you think about
your programs, and provides much deeper insight. TAP uses V8's
internal coverage mechanisms directly, and verifies that tests
provide 100% coverage of all lines, branches, functions, and
statements in the system under test. It uses
[C8](https://npmjs.com/c8) to analyze the V8 coverage data and
generate coverage reports.

Missing coverage means that you are relying on untested code, so
this is treated as a test failure. If you have some bit of code
which is actually _impossible_ to test for some reason, wrap it
in the appropriate `/* c8 ignore start */` / `/* c8 ignore end
*/` comments to exclude those lines from the analysis. But think
carefully about whether that's really the case. Usually, if you
have to coverage-ignore something, it's a sign that you need to
either delete that code or refactor it into a more easily tested
module.

---

There are many opinions left off of this list! Reasonable people
can disagree. But if you find yourself nodding along, [maybe tap
is for you](./basics.md).
