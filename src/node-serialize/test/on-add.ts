import { at } from '@tapjs/stack'
import t, { Base, Minimal } from 'tap'
import { setTimeout } from 'timers/promises'
import { onAddFn } from '../src/on-add.js'
import { TestMap } from '../src/test-map.js'

t.test('track the things', async t => {
  const diags: [string, any[]][] = []
  const comment = (...args: any[]) => {
    diags.push(['comment via commentMethod', args])
  }

  const root = new Minimal({
    name: 'TAP',
    at: at(),
  })
  const diagsMap = new TestMap<DiagnosticData[]>()
  const subsMap = new TestMap<Base[]>()
  const onAdd = onAddFn(comment, diagsMap, subsMap)
  // kill the comment method on the root test so that we use
  // the parser as the source of diagnostics.
  Object.assign(root, { comment: null })
  onAdd(root)

  Minimal.prototype.comment.call(root, 'hello', { world: true })
  // make them run interleaved, then verify they get into the
  // expected assignment order in the map.
  root.jobs = 2
  root.test('suite 1', async t => {
    t.jobs = 2
    t.comment('suite 1 comment')
    t.test('test 1', async () => setTimeout(20))
    t.test('test 2', async () => {})
    t.end()
  })
  root.test('suite a', async t => {
    t.jobs = 2
    t.comment('suite a comment')
    t.test('test b', async () => setTimeout(10))
    t.test('test c', async () => {})
    t.end()
  })
  root.end()
  await root.concat()

  t.matchOnly(
    {
      diags,
      subsMap: [...subsMap.values()].map(subs =>
        subs.map(s => s.name),
      ),
      diagsMap: [...diagsMap.values()],
    },
    {
      diags: [
        ['comment via commentMethod', ['suite 1 comment']],
        ['comment via commentMethod', ['suite a comment']],
      ],
      subsMap: [
        ['suite 1', 'suite a'],
        ['test 1', 'test 2'],
        [],
        [],
        ['test b', 'test c'],
        [],
        [],
      ],
      diagsMap: [
        [
          {
            file: String,
            line: Number,
            column: Number,
            nesting: 0,
            message: 'hello { world: true }',
          },
        ],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
    },
  )
})
