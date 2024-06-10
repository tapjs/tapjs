# `@tapjs/chdir`

A default tap plugin for changing the working directory for the
context of a single test, and then returning to the original
working directory when the test is over.

## Usage

```js
import t from 'tap'

t.test('using t.chdir() example', t => {
  const dir = t.testdir({
    'some-file.txt': 'hello',
  })
  t.chdir(dir)
  t.equal(readFileSync('./some-file.txt', 'utf8'), 'hello')
  t.equal(process.cwd(), t.testdirName)
  // when the test ends, the original working dir is restored
  t.end()
})

// without this plugin, you'd have to do it this way:
t.test('without t.chdir() example', t => {
  const dir = t.testdir({
    'some-file.txt': 'hello',
  })
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir(dir)
  // run tests...
  t.end()
})
```

## API

- `t.chdir(dir: string)` Change the process working directory to
  the supplied path. When the test ends, the original dir is
  restored.
