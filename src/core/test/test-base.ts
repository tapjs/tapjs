import t from 'tap'
import { TestBase, TestBaseOpts } from '../dist/cjs/test-base.js'

const clean = (s: string): string =>
  s.replace(/# time=[0-9\.]+m?s/g, '# time={TIME}')

t.test('TAP generation', t => {
  const tcb = t.cb
  if (!tcb) throw new Error('wat??')
  const tb = new TestBase({
    name: 'root',
    jobs: 2,
    cb: (rt: TestBase) => {
      t.equal(rt, tb, 'root test is tb object')
      // this is such an absurdly terrible interface for actually
      // writing tests lol
      tb.sub<TestBase, TestBaseOpts>(
        TestBase,
        {
          name: 'parent',
          cb: (tt: TestBase) => {
            if (!tt.cb) throw new Error('wat??')
            t.equal(tt.name, 'parent')
            t.equal(tt.fullname, tb.fullname + ' > parent')
            tt.pass('in parent')
            tt.sub<TestBase, TestBaseOpts>(
              TestBase,
              {
                name: 'child',
                cb: (ttt: TestBase) => {
                  t.equal(ttt.name, 'child')
                  t.equal(ttt.fullname, tt.fullname + ' > child')
                  ttt.pragma({ strict: true })
                  ttt.pass('in child')
                  ttt.end()
                },
              },
              tt.cb
            )
            tt.end()
          },
        },
        tcb
      )
      rt.end()
    },
  })

  t.equal(tb.name, 'root')
  t.equal(tb.fullname, 'test/test-base.ts > root')
  t.equal(tb.printedResult, false)
  t.equal(tb.printedOutput, false)
  t.equal(tb.occupied, false)
  t.equal(tb.jobs, 2)

  tb.main(async () => {
    t.equal(
      clean(String(await tb.concat())),
      `TAP version 14
# Subtest: parent
    ok 1 - in parent
    # Subtest: child
        pragma +strict
        ok 1 - in child
        1..1
    ok 2 - child # time={TIME}
    
    1..2
ok 1 - parent # time={TIME}

1..1
`
    )
    t.end()
  })
})
