import { LoadedConfig } from '@tapjs/config'
import { render } from 'ink-testing-library'
import React from 'react'
import t, { Minimal } from 'tap'
import DummyReporter from '../dist/esm/reporter.js'

t.cleanSnapshot = s => s.replace(/# time=.*/g, '# time={TIME}')

const test = new Minimal({ name: 'dummy test' })
const app = render(
  <DummyReporter
    test={test}
    config={
      {
        projectRoot: '/some/path',
      } as unknown as LoadedConfig
    }
  />,
)

test.test('child test', async t => {
  t.pass('ok')
  t.pass('skip', { skip: true })
  t.pass('skip message', { skip: 'message' })
  t.pass('todo', { todo: true })
  t.pass('todo message', { todo: 'message' })
})

test.test('next subtest', async t => {
  t.pass('ok')
  t.pass('skip', { skip: true })
  t.pass('skip message', { skip: 'message' })
  t.pass('todo', { todo: true })
  t.pass('todo message', { todo: 'message' })
})

test.end()

t.matchSnapshot(await test.concat(), 'test output')
t.matchSnapshot(app.frames, 'reporter output')
