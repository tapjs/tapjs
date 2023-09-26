import t from 'tap'

t.test('passing suite', t => {
  t.pass('test point before subtest')
  t.test('subtest', t => {
    t.pass('test point in subtest')
    t.pass('second test point in subtest')
    t.end()
  })
  t.pass('test point after subtest')
  t.end()
})

t.test('failing suite', t => {
  t.fail('this fails')
  t.strictSame(
    {
      a: {
        b: '1',
      },
    },
    {
      b: {
        a: 1,
      },
    },
    'has a diff',
    {
      extra: 'diags',
    }
  )

  t.end()
})

t.test('suite with todo: true', { todo: true }, t => t.end())
t.test('suite with skip: true', { skip: true }, t => t.end())
t.test('suite with todo message', { todo: 'msg' }, t => t.end())
t.test('suite with skip message', { skip: 'msg' }, t => t.end())
t.test('suite with skipAll', t => t.plan(0, 'no tests found'))
t.test('suite with skipAll, no msg', t => t.plan(0))
t.test('suite with no points', t => t.end())

t.test('suite with todo/skip test points', t => {
  t.pass('pass with todo: true', { todo: true })
  t.pass('pass with skip: true', { skip: true })
  t.pass('pass with todo message', { todo: 'msg' })
  t.pass('pass with skip message', { skip: 'msg' })
  t.fail('fail with todo: true', { todo: true })
  t.fail('fail with skip: true', { skip: true })
  t.fail('fail with todo message', { todo: 'msg' })
  t.fail('fail with skip message', { skip: 'msg' })
  t.end()
})

t.test('excessive test', t => {
  t.plan(1)
  t.pass('this is fine')
  t.pass('this is not')
})

t.test('unfinished test', t => {
  t.plan(3)
  t.pass('going to fail')
  t.end()
})
