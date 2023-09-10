# `@tapjs/fixture`

A default tap plugin providing `t.testdir()` and `t.fixture()`
methods, for creating temporary directories with stuff for tests
to operate on.

Fixtures created with this plugin live folders under
`./.tap/fixtures`, in the root of the project. The folder name is
based on the name of the test file, and the name of the test.

For example, if a file at `./src/foo.test.mjs` had this:

```js
import t from 'tap'
t.test('child test', async t => {
  t.testdir({ file: 'contents' })
})
```

Then a file would be created at
`.tap/fixtures/src-foo.test.mjs-child-test/file` containing
`'contents'`.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/fixture` to
bring it back.

### `t.testdir(contents?: FixtureDirContent): string`

Create a directory with some stuff in it.

If no contents provided, just creates an empty directory.

```ts
import t from 'tap'
import { lstatSync } from 'node:fs'

t.test('subtest that has a test directory', t => {
  const dir = t.testdir({
    // objects are subdirectories
    subdir: {
      // strings or buffers are files
      'file.txt': 'some contents',
      // to create links or symlinks, use the t.fixture() method
      symlink: t.fixture('symlink', 'file.txt'),
      hardlink: t.fixture('link', 'file.txt'),
    },
  })
  t.equal(lstatSync(dir + '/subdir/symlink').isSymbolicLink(), true)
  t.end()
})
// dir removed when test ends
```

If you do not provide a contents argument, then it will create an
empty directory.

Though it's called `t.testdir()` you can actually use it to
create files or links as well.

```ts
import t from 'tap'
import { readFileSync } from 'node:fs'
t.test('test "dir" is actually file', t => {
  const file = t.testdir('file contents')
  t.equal(readFileSync(file, 'utf8'), 'file contents')
  t.end()
})
```

### `t.testdirName: string`

This is a string that gives you the string path that
`t.testdir()` will write to.

### `saveFixture` test option, `t.saveFixture: boolean`

If set to `true`, then the test will not delete its fixtures when
it finishes.

If set on the test object, this must be set _before_ calling
`t.testdir()`, or it won't have any effect, since the deletion is
scheduled at the moment it's created.
