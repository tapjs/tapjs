import t from 'tap'

t.test('not windows', t => {
  const { isRelativeRequire } = t.mockRequire(
    '../dist/cjs/is-relative-require.js',
    {
      '../dist/cjs/is-windows.js': {
        isWindows: false,
      },
    }
  )
  t.equal(isRelativeRequire('./x'), true)
  t.equal(isRelativeRequire('../x'), true)
  t.equal(isRelativeRequire('../../x'), true)
  t.equal(isRelativeRequire('x'), false)
  t.equal(isRelativeRequire('/x'), false)

  t.equal(isRelativeRequire('.\\x'), false)
  t.equal(isRelativeRequire('..\\x'), false)
  t.equal(isRelativeRequire('..\\..\\x'), false)
  t.end()
})

t.test('yes windows', t => {
  const { isRelativeRequire } = t.mockRequire(
    '../dist/cjs/is-relative-require.js',
    {
      '../dist/cjs/is-windows.js': {
        isWindows: true,
      },
    }
  )
  t.equal(isRelativeRequire('./x'), true)
  t.equal(isRelativeRequire('../x'), true)
  t.equal(isRelativeRequire('../../x'), true)
  t.equal(isRelativeRequire('x'), false)
  t.equal(isRelativeRequire('/x'), false)

  t.equal(isRelativeRequire('.\\x'), true)
  t.equal(isRelativeRequire('..\\x'), true)
  t.equal(isRelativeRequire('..\\..\\x'), true)
  t.end()
})
