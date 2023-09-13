import { Minimal } from '@tapjs/core'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import { BailedOut } from '../dist/esm/bailed-out.js'
import './fixtures/chalk.js'

t.test('bail out with message', async t => {
  const test = new Minimal({ name: 'timeout' })
  const app = render(<BailedOut test={test} />)
  t.equal(app.lastFrame(), '')
  test.emit('bailout', 'some sort of raisin')
  t.matchSnapshot(app.lastFrame())
})

t.test('bail out for no raisin', async t => {
  const test = new Minimal({ name: 'timeout' })
  const app = render(<BailedOut test={test} />)
  t.equal(app.lastFrame(), '')
  test.emit('bailout')
  t.matchSnapshot(app.lastFrame())
})
