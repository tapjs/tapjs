# node-tap

A <abbr title="Test Anything Protocol">TAP</abbr> test framework
for Node.js.

_Just wanna see some code? [Get
started!](http://www.node-tap.org/basics/)_

It includes a command line test runner for consuming
TAP-generating test scripts, and a JavaScript framework for
writing such scripts.

<!-- TODO: update with new website docs links -->

- [Getting started guide](http://node-tap.org/basics/)
- Built-in [test coverage](http://node-tap.org/coverage/)
- Many [reporter formats](http://node-tap.org/reporter/)
- Extensive [API](http://node-tap.org/api/)
- [Command-line interface](http://node-tap.org/cli/) for
  running tests (whether they use node-tap or not)
- [Machine-generated API docs](https://tapjs.github.io/tapjs)

See [the changelog](http://node-tap.org/changelog/) for recent
updates, or just get started with [the
basics](http://www.node-tap.org/basics/).

All this is too much to manage in a single README file, so head
over to [the website](http://node-tap.org/) to learn more.

## Why TAP?

Why should you use this thing!? **LET ME TELL YOU!**

Just kidding.

Most frameworks spend a lot of their documentation telling you
why they're the greatest. This isn't that.

### <i lang="it" title="all tastes are tastes">tutti i gusti sono gusti</i>

Software testing is a software and user experience design
challenge that balances on the intersection of many conflicting
demands.

Node-tap is based on [my](http://izs.me) opinions about how a
test framework should work, and what it should let you do. I do
_not_ have any opinion about whether or not you share those
opinions. If you do share them, you will probably enjoy this test
library.

Here are the design principles that shape this test framework.

### Test files are "normal" programs

Any TAP test can be run directly as a plain old JavaScript
program. Of course, if it's written in TypeScript, you'll
have to run it with a TypeScript loader, but otherwise, they
should be just like normal programs that run in a normal
environment.

But there's no runner required to run tests, they don't
execute in a special simulated memory space with injected
globals, and so on. Because each test runs in its own process,
there's no chance of tests becoming dependent on one another's
leaked globals or causing other confusing situations.

### Tests should help, not get in the way

The goal of tests is to help you write code. They add reliability
to your program by adding a layer of "yes, this does what I think
it does". Whether you're doing strict Red-Green-Refactor style
TDD, or just finger-painting until it feels right and then
writing tests to verify what it actually does, writing the tests
should feel empowering and straightforward, _reducing_ cognitive
load rather than increasing it.

### All types must be accurate and complete

This is simply not reasonable to do with a hand-edited type
definition in `.d.ts` file.

TAP's exported types are built up from its set of plugins and
internal classes, assembled into the `Test` class that your test
programs interact with. When a plugin is added or removed, the
`t` in your editor can accurately tell you its new shape.

If you have to look at the docs too often, that's a bug in my
opinion. Lean into the beautiful power of code completion.

### TypeScript, ESM, and CommonJS supported out of the box

With the changes to the module system in Node.js over the
last several years, TAP fell down on this requirement in
versions prior to v18. As of version 18, the entire system has
been rewritten in TypeScript, and built as hybrid ESM/CommonJS
packages.

Your tests should be written just like your program, with as few
barriers as possible. If you can do it in CommonJS, you can do it
in ESM, and vice versa (at least as far as TAP is concerned).
Whatever is in your `tsconfig.json` or `package.json`, it should
Just Work.

### Anything that _can_ be a plugin _is_ a plugin

The plugin system is leveraged for anything that does not
absolutely need to be included in the core.

Basic [TAP](https://testanything.org) generation and flow
control, error handling, config loading, process management and
so on, are all included in the core. But TypeScript support,
mocking, almost all assertion methods, method and property
interception and spying, spawning/forking subtests, creating
fixtures, snapshots, and attaching lifecycle methods (among
others) are all relegated to plugins.

This means that features can be switched on or off or extended
very easily.

### Plugins must be powerful and trivial to write correctly

The plugin interface is extremely simple. Export a `plugin`
function that returns an object. That's it, that's a plugin.

Plugins can also export configuration definitions, which are
folded into the set of fields that TAP knows how to parse from
the command line or from your `.taprc` file, or export a `loader`
string, which will be invoked when spawning test processes.

### High Signal, Low Noise

It is important to give a lot of information about test failures,
throws, and so on, so that you can easily jump straight to the
appropriate place in the code to fix the problem. And, it's
usually helpful to see which tests are actually running.

However, a screen full of green checkmarks and `100% Covered!`
isn't very useful. It should be just enough to know what happened
and easily diagnose any problems, and otherwise fairly quiet.

Low information output has been trimmed down as much as possible
from the default reporters. Coverage information is only shown
when it has something relevant to say. TAP tries to show you
exactly what you need to see, and nothing else. Stack traces have
noisy internals trimmed out, so it's easier to see exactly where
in _your_ code the problem happened. Source maps are always
enabled, because you need to know where the actual code is, not
just which built artifact failed.

If the default reporter isn't terse enough for your liking, try
`tap -Rterse`.

### Assertions don't throw (but throws are handled nicely)

I frequently write programs that have many hundreds of assertions
based on some list of test cases. If the first failure throws,
then I don't know if I've failed 100 tests or 1, without wrapping
everything in a try-catch. Furthermore, I usually want to see
some kind of output or reporting to verify that each one actually
ran.

Basically, it should be your decision whether you want to throw
or not. The test framework shouldn't force that on you, and
should make either case easy.

### Test reporting should be useful, extensible, and accessible

The [raw test output](https://www.node-tap.org/tap-format/)
is machine-parseable and human-intelligible, a separate component
consumes test output and turns it into a [pretty summarized
report](https://www.node-tap.org/reporting/). This means that
test data can be stored and parsed later, dug into for additional
details, and so on.

Red and green are the conventional colors meaning "removed" and
"added", but they're also exactly the same color for many people.
All of the color choices in the reporter are tested rigorously
against simulators for protanopia, deuteranopia, tritanopia, and
monochromicity.

### Test coverage is always on

Running tests with coverage changes the way that you think
about your programs, and provides much deeper insight.
TAP uses V8's internal coverage mechanisms directly, and verifies
that tests provide 100% coverage of all lines, branches,
functions, and statements in the system under test. It uses
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

Software testing should help you build software. It should be a
security blanket and a quality ratchet, giving you the support to
undertake massive refactoring and fix bugs without worrying. It
shouldn't be a purification rite or a hazing ritual. It should be
fun, because making stuff is fun, and it helps you make better
stuff.

There are many opinions left off of this list! Reasonable people
can disagree. But if you find yourself nodding along, [maybe tap
is for you](https://www.node-tap.org/basics/).
