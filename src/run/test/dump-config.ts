import t from 'tap'

t.intercept(process, 'argv', {
  value: [
    ...process.argv.slice(0, 2),
    'dump-config',
    '--jobs=4',
    '--timeout=123',
    '--include=**',
  ],
})

const logs = t.capture(console, 'log')

await t.mockImport('../dist/index.js')

const calls = logs().map(({ args }) => args)
t.strictSame(calls[0], ['# v' + 'im: set filetype=yaml :'])
t.match(calls[1], ['timeout: 123\n'])
t.match(calls[1], ['include: "**"\n'])
t.match(calls[1], ['coverage-map: map.js\n'])
