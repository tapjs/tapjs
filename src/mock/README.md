# `@tapjs/mock`

A default tap plugin adding `t.mockRequire()`, `t.mockImport()`,
and `t.createMock()`

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/mock` to
bring it back.

This is the way to do dependency injection at the module level.
When the loaded module, or anything it loads, loads something
that you've mocked, it'll get your mock instead of the real
thing. Useful for getting into those hard to trigger code paths.

```ts
// test.mts
import t from 'tap'

t.test('handls stat failure by throwing', async t => {
  const mockStatSync = (p: string) => {
    t.equal(p, 'filename.txt')
    throw Object.assign(new Error('expected error'), {
      code: 'ENOENT',
    })
  }
  // supply type param so that TS knows what it returns
  const thingThatDoesStat = await t.mockImport<
    typeof import('../dist/my-statty-thing.js')
  >('../dist/my-statty-thing.js', {
    'node:fs': { statSync: mockStatSync },
  })

  t.throws(() => thingThatDoesStat('filename.txt'), {
    message: 'expected error',
    code: 'ENOENT',
  })
})
```

### `t.mockImport(module, [mocks]): Promise<any>`

Load the module with `import()`. If any mocks are provided, then
they'll override the module's imported deps. This works for both
ESM and CommonJS modules.

### `t.mockRequire(module, [mocks]): any`

Same as `t.mockImport()`, but synchronously using `require()`
instead. This only works with CommonJS, and only mocks CommonJS
modules loaded.

### `t.mockAll(mocks?: Record<string,any> | null): Record<string, any>`

Convenience method to set the mocks for all subsequent calls to
`t.mockRequire` or `t.mockImport` for the remainder of the test.

Mocks added with `mockAll` are overridden by any explicit mocks
set in the `t.mockRequire` or `t.mockImport` call.

Repeated calls to `t.mockAll()` will _add_ mocks to the set. If the same
name is used again, it will replace the previous value, not merge.

If a key is set to `undefined` or `null`, then it will be removed from
the `mockAll` set.

Reset by calling `t.mockAll(null)`

Call with no args to return the current `mockAll` object.

### `t.createMock(originalModule, mockOverrides): mockedModule`

Sometimes you only want to override one function or property,
perhaps buried deep within a module's exports, but leave all the
rest of it intact.

This function makes it easy to do that.

```ts
import * from 'tap'
import * as FS from 'node:fs'

t.test('situation where we get a bogus file descriptor', async t => {
  const { thing } = await t.mockImport<typeof import('../dist/my-thing.js')>(
    '../dist/my-thing.js',
    { 'node:fs': t.createMock(FS, { openSync: () => true }) }
  )
  t.throws(() => thing(), {
    // imagine this is the error we get for some reason
    message: 'got non-numeric file descriptor: true',
  })
})
```

## Loader

The `t.mockImport()` function relies on the `@tapjs/mock/loader`
loader being used, which this plugin adds to tap's set of
loaders.

If you run tests directly with node, and they use `t.mockImport`
then you'll have to include `--loader=@tapjs/mock/loader` to the
command line arguments ahead of the main script filename.
