import { Minimal } from '@tapjs/core'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import * as tapParser from 'tap-parser'
import chalk from './fixtures/chalk.js'
import { sleep } from './fixtures/sleep.js'

const { TestResultsList } = (await t.mockImport(
  '../dist/test-results-list.js',
  {
    '../dist/stack.js': {
      Stack: () => (
        <Box>
          <Text>STACK</Text>
        </Box>
      ),
    },
    '../dist/source.js': {
      Source: () => (
        <Box>
          <Text>SOURCE</Text>
        </Box>
      ),
    },
    'tap-parser': tapParser,
    chalk,
  }
)) as typeof import('../dist/test-results-list.js')

t.test('passing test results, details, no callsite', async t => {
  const tb = new Minimal({ name: 'passer' })
  tb.pass('this is fine')
  const notFinished = render(
    <TestResultsList test={tb} lists={tb.lists} />
  )
  t.equal(
    notFinished.lastFrame(),
    '',
    'no output if test not finished'
  )
  notFinished.unmount()
  tb.end()
  await tb.concat()
  const app = render(
    <TestResultsList test={tb} lists={tb.lists} details />
  )
  await sleep(64)
  t.equal(app.lastFrame(), '', 'empty, just a passing test')
  app.unmount()
})

t.test('show passing test result', async t => {
  const tb = new Minimal({ name: 'passer', passes: true })
  tb.pass('this is fine')
  const notFinished = render(
    <TestResultsList test={tb} lists={tb.lists} />
  )
  t.equal(
    notFinished.lastFrame(),
    '',
    'no output if test not finished'
  )
  notFinished.unmount()
  tb.end()
  await tb.concat()
  const app = render(
    <TestResultsList test={tb} lists={tb.lists} details />
  )
  t.matchSnapshot(app.lastFrame(), 'show passing test')
  app.unmount()
})

t.test('test with other types of points', async t => {
  const tb = new Minimal({ name: 'all the things' })
  tb.pass('this is fine')
  tb.fail('not so fine')
  tb.fail('fail, but todo', { todo: true })
  tb.pass('pass, todo message', { todo: 'do it some day' })
  tb.pass('pass, skip', { skip: true })
  tb.fail('fail, skip message', { skip: 'dont worry about it' })
  tb.end()
  await tb.concat()
  const app = render(
    <TestResultsList test={tb} lists={tb.lists} details />
  )
  t.matchSnapshot(app.lastFrame())
  app.unmount()
})

t.test('skipAll no message', async t => {
  const tb = new Minimal({ name: 'skipAll quiet' })
  tb.plan(0)
  await tb.concat()
  const app = render(
    <TestResultsList test={tb} lists={tb.lists} details />
  )
  t.matchSnapshot(app.lastFrame())
  app.unmount()
})

t.test('skipAll custom message', async t => {
  const tb = new Minimal({ name: 'skipAll custom' })
  tb.plan(0, 'skip it all')
  await tb.concat()
  const app = render(
    <TestResultsList test={tb} lists={tb.lists} details />
  )
  t.matchSnapshot(app.lastFrame())
  app.unmount()
})

t.test('skipAll default no tests found message', async t => {
  const tb = new Minimal({ name: 'skipAll no tests' })
  tb.plan(0, 'no tests found')
  await tb.concat()
  const app = render(
    <TestResultsList test={tb} lists={tb.lists} details />
  )
  t.matchSnapshot(app.lastFrame())
  app.unmount()
})

t.test('exit signal', async t => {
  const tb = new Minimal({ name: 'signalista' })
  tb.pass('this is fine')
  tb.pass('do later', { todo: 'i promise i will' })
  tb.fail('skippy', { skip: 'choosey moms choose gif' })
  tb.options.signal = 'SIGNOOOOOOPE'
  tb.end()
  await tb.concat()
  const app = render(
    <TestResultsList test={tb} lists={tb.lists} details />
  )
  t.matchSnapshot(app.lastFrame())
  app.unmount()
})

t.test('bailout for no raisin', async t => {
  const tb = new Minimal({ name: 'bailer' })
  tb.pass('this is fine')
  tb.fail('nope')
  tb.bailout()
  await tb.concat()
  const app = render(<TestResultsList test={tb} lists={tb.lists} />)
  t.matchSnapshot(app.lastFrame())
  app.unmount()
})

t.test('bailout with raisin', async t => {
  const tb = new Minimal({ name: 'bailer' })
  tb.pass('this is fine')
  tb.fail('nope')
  tb.bailout('i have my raisins')
  await tb.concat()
  const app = render(<TestResultsList test={tb} lists={tb.lists} />)
  t.matchSnapshot(app.lastFrame())
  app.unmount()
})
