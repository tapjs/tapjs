---
title: Testing with Fixtures
section: 5.035
---
# Testing with Fixtures

Frequently, tests need to setup and then tear down some files and
directories.

Doing this manually can be very tedious.  For example:

```js
// tedious annoying way:
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const fs = require('fs')
const {resolve, basename} = require('path')
const t = require('tap')
const dir = resolve(__dirname, basename(__filename, '.js'))
rimraf.sync(dir)
mkdirp.sync(dir)
t.teardown(() => rimraf.sync(dir))
fs.writeFileSync(dir + '/some-file', 'some contents')
fs.symlinkSync(dir + '/link', 'some-file')

// ok, now we can finally run some tests!
```

With the [`t.testdir()`](/docs/api/#ttestdirfixtures) method, you can do
this:

```js
// awesome slick way
const dir = t.testdir({
  'some-file': 'some contents',
  // use t.fixture() to create links and symlinks
  link: t.fixture('symlink', 'some-file'),
  nested: {
    'README.md': 'nested dirs work, too!'
  }
})

// run tests!
```

## Keeping the Fixture Around

If you need to inspect the fixture directory after running your test, you
can either pass `{ saveFixture: true }` to the test creation, or add
`--save-fixture` to the command-line, or set `TAP_SAVE_FIXTURE=1` in the
environment.

Otherwise, the test fixture will be deleted when the test creating it is
finished.

## Fixture Arguments

The [`t.fixture(type, content)`](/docs/api/#tfixturetype-content) method
will create a `Fixture` object with the specified type and content.  The
supported types are:

* `link` - A hardlink to the file specified in `content`.
* `symlink` - A symbolic link to the path specified in `content`.
* `dir` - A directory, where the `content` is an object describing the
  children in that directory.
* `file` - A file, where the `content` is the file contents.

You can also pass in a plain JavaScript object to specify a `dir` type, or
a string or buffer to specify a `file` type.  For example, these two
styles produce identical results:

```js
// clunky style:
t.testdir(t.fixture('dir', {
  'filename': t.fixture('file', 'contents')
}))

// sugar style:
t.testdir({
  filename: 'contents'
})
```

## Fixture Directory Filename

The fixture directory is returned by the `t.testdir()` method.  It is also
available on the `t.testdirName` getter.

The name is determined by the filename and path of the `main` script.  If
no `main` script is available (for example, if running tap in a node repl),
then it defaults to the folder name `TAP` in the current working
directory.
