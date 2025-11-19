import t from 'tap'
const { fileCompleter } = await t.mockImport<
  typeof import('../../dist/esm/repl/file-completer.js')
>('../../dist/esm/repl/file-completer.js', {
  path: t.createMock(await import('node:path'), { sep: '/' }),
})

t.test('file completions', t => {
  const dir = t.testdir({
    cat: {
      dog: {
        barbie: '',
        banana: '',
      },
      doop: '',
    },
    chat: {
      dharma: {
        bargle: '',
      },
    },
  })
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir(dir)

  t.strictSame(fileCompleter([], 'x '), [['x cat/', 'x chat/'], 'x '])
  t.strictSame(fileCompleter(['ca'], 'x ca'), [['x cat/'], 'x ca'])
  t.strictSame(fileCompleter(['ch'], 'x  ch'), [['x  chat/'], 'x  ch'])
  t.strictSame(fileCompleter(['cat/d'], 'x  cat/d'), [
    ['x  cat/dog/', 'x  cat/doop'],
    'x  cat/d',
  ])
  t.strictSame(fileCompleter(['cat/dog/'], 'x  cat/dog/'), [
    ['x  cat/dog/banana', 'x  cat/dog/barbie'],
    'x  cat/dog/',
  ])
  t.strictSame(fileCompleter(['cat/dog/bar'], 'x  cat/dog/bar'), [
    ['x  cat/dog/barbie '],
    'x  cat/dog/bar',
  ])
  t.strictSame(fileCompleter(['cat/dog'], 'x  cat/dog'), [
    ['x  cat/dog/'],
    'x  cat/dog',
  ])
  t.strictSame(fileCompleter(['x'], 'x x'), [['x cat/', 'x chat/'], 'x x'])
  t.strictSame(fileCompleter(['x/y/z/a/b/c'], 'x x/y/z/a/b/c'), [
    [],
    'x x/y/z/a/b/c',
  ])

  t.end()
})
