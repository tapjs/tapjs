import { Minimal } from '@tapjs/core'
import './fixtures/chalk.js'

import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import { Runs } from '../dist/esm/runs.js'
import { sleep } from './fixtures/sleep.js'

const tb = new Minimal({ name: 'gump' })
tb.jobs = 5
const app = render(<Runs test={tb} />)
await sleep(64)
tb.test('zro', () => {})
tb.test('one', t => {
  t.pass('fine')
  t.fail('nope')
  t.pass('skip', { skip: true })
  t.fail('todo', { todo: 'message' })
})
tb.test('two', () => {})
tb.test('tre', () => {})
tb.test('fur', () => {})

t.matchSnapshot(app.lastFrame())
app.rerender(<></>)
app.unmount()
