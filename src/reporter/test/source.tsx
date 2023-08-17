import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import './fixtures/chalk.js'

import { at, CallSiteLike } from '@tapjs/stack'
import { Source } from '../dist/source.js'

t.test('show source with callsite', t => {
  const app = render(<Source at={at()} source={'diag source'} />)
  t.matchSnapshot(app.lastFrame())
  t.end()
})

t.test('show source with callsite and origin callsite', t => {
  const originAt = at()
  // just a line here so it's clearly different
  const app = render(
    <Source
      at={at()}
      source={'diag source'}
      errorOrigin={{
        at: originAt,
        source: 'origin source',
      }}
    />
  )
  t.matchSnapshot(app.lastFrame())
  t.end()
})

t.test('show source if valid callsite', t => {
  const app = render(<Source at={at()} />)
  t.matchSnapshot(app.lastFrame())
  t.end()
})

t.test('show diag source if provided and callsite invalid', t => {
  const app = render(<Source source={'diag source'} />)
  t.matchSnapshot(app.lastFrame())
  t.end()
})

t.test('do not show caret if lineNumber invalid', t => {
  const cs = at()
  if (!cs) throw new Error('y u no callsite??')
  cs.columnNumber = -1
  const app = render(<Source at={cs} />)
  t.matchSnapshot(app.lastFrame())
  t.end()
})

t.test('no callsite, no source, no nothin', t => {
  t.equal(render(<Source />).lastFrame(), '')
  t.end()
})

t.test('file not readable, fall back to source', t => {
  const cs = at()
  const app = render(
    <Source
      at={
        {
          ...cs,
          fileName: '/this/is/not/a/file/that/exists',
        } as CallSiteLike
      }
      source={'diag source'}
    />
  )
  t.matchSnapshot(app.lastFrame())
  t.end()
})
