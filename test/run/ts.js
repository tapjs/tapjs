const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')

t.beforeEach(() => {
  delete process.env.TAP_TS
  delete process.env.TAP_JSX
})

t.test('via env', t => {
  t.test('ts', t => {
    process.env.TAP_TS = '1'
    const ok = tmpfile(t, 'ts/ok.ts', `
      import * as t from ${tap}
      t.pass('this is fine')
    `)
    run([ok], {}, (er, o) => {
      t.equal(er, null)
      t.matchSnapshot(o)
      t.end()
    })
  })

  t.test('no ts', t => {
    const ok = tmpfile(t, 'ts/ok.ts', `
      import * as t from ${tap}
      t.pass('this is fine')
    `)
    run([ok], {}, (er, o) => {
      t.ok(er)
      t.matchSnapshot(o)
      t.end()
    })
  })

  t.test('ts, but no tsx', t => {
    process.env.TAP_TS = '1'
    const ok = tmpfile(t, 'tsx/ok.tsx', `
      import * as React from 'react'
      import * as t from ${tap}
      const div = (<div>Hello</div>)
      t.pass('this is fine')
    `)
    run([ok], {}, (er, o) => {
      t.ok(er)
      t.matchSnapshot(o)
      t.end()
    })
  })

  t.test('tsx', t => {
    process.env.TAP_JSX = '1'
    process.env.TAP_TS = '1'
    const ok = tmpfile(t, 'tsx/ok.tsx', `
      import * as React from 'react'
      import * as t from ${tap}
      const div = (<div>Hello</div>)
      t.pass('this is fine')
    `)
    run([ok], {}, (er, o) => {
      t.equal(er, null)
      t.matchSnapshot(o)
      t.end()
    })
  })

  t.end()
})

t.test('via cli args', t => {
  t.test('ts', t => {
    const ok = tmpfile(t, 'ts/ok.ts', `
      import * as t from ${tap}
      t.pass('this is fine')
    `)
    run([ok, '--ts'], {}, (er, o) => {
      t.equal(er, null)
      t.matchSnapshot(o)
      t.end()
    })
  })

  t.test('ts, but no tsx', t => {
    const ok = tmpfile(t, 'tsx/ok.tsx', `
      import * as React from 'react'
      import * as t from ${tap}
      const div = (<div>Hello</div>)
      t.pass('this is fine')
    `)
    run([ok, '--ts'], {}, (er, o) => {
      t.ok(er)
      t.matchSnapshot(o)
      t.end()
    })
  })

  t.test('tsx', t => {
    const ok = tmpfile(t, 'tsx/ok.tsx', `
      import * as React from 'react'
      import * as t from ${tap}
      const div = (<div>Hello</div>)
      t.pass('this is fine')
    `)
    run([ok, '--ts', '--jsx'], {}, (er, o) => {
      t.equal(er, null)
      t.matchSnapshot(o)
      t.end()
    })
  })

  t.test('ts --after --before ok', t => {
    const ok = tmpfile(t, 'ts/ok.ts', `
      import * as t from ${tap}
      t.pass('this is ok')
    `)
    const before = tmpfile(t, 'ts/setup.ts', `
      console.log('setup')
    `)
    const after = tmpfile(t, 'ts/teardown.ts', `
      console.log('teardown')
    `)
    run([ok, `--before=${before}`, `--after=${after}`, '--ts'], {}, (er, o) => {
      t.equal(er, null)
      t.matchSnapshot(o)
      t.end()
    })
  })

  t.test('ts --before fail', t => {
    const ok = tmpfile(t, 'ts/ok.ts', `
      import * as t from ${tap}
      t.pass('this is ok')
    `)
    const before = tmpfile(t, 'ts/setup.ts', `
      throw new Error('fail')
    `)
    const after = tmpfile(t, 'ts/teardown.ts', `
      console.log('teardown')
    `)
    run([ok, `--before=${before}`, `--after=${after}`, '--ts'], {}, (er, o, e) => {
      t.not(er, null)
      t.matchSnapshot(o, 'stdout')
      t.matchSnapshot(e, 'stderr')
      t.end()
    })
  })

  t.test('ts --after fail', t => {
    const ok = tmpfile(t, 'ts/ok.ts', `
      import * as t from ${tap}
      t.pass('this is ok')
    `)
    const before = tmpfile(t, 'ts/setup.ts', `
      console.log('setup')
    `)
    const after = tmpfile(t, 'ts/teardown.ts', `
      throw new Error('fail')
    `)
    run([ok, `--before=${before}`, `--after=${after}`, '--ts'], {}, (er, o, e) => {
      t.not(er, null)
      t.matchSnapshot(o, 'stdout')
      t.matchSnapshot(e, 'stderr')
      t.end()
    })
  })

  t.end()
})

t.test('ts manually', t => {
  const ok = tmpfile(t, 'mixed/ok.js', `
    require('./foo.ts')
  `)
  const foots = tmpfile(t, 'mixed/foo.ts', `
    import * as t from ${tap}
    t.pass('this is fine')
  `)
  const args = [ok, foots, '--no-ts', '--node-arg=--require', '--node-arg=ts-node/register']
  run(args, {}, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o)
    t.end()
  })
})
