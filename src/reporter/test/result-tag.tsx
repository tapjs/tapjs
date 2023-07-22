import './fixtures/chalk.js'
import { Base } from '@tapjs/core'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import { Result } from 'tap-parser'
import { ResultTag } from '../dist/result-tag.js'

import { at } from '@tapjs/stack'
import { createTwoFilesPatch } from 'diff'

const getRes = (opts: { [k: string]: any } = {}) =>
  Object.assign(
    {
      ok: true,
      name: 'fake result',
      id: 0,
      buffered: false,
      skip: false,
      todo: false,
      previous: null,
      plan: null,
      diag: null,
      time: null,
      fullname: 'test name > fake result',
    },
    opts
  ) as unknown as Result

t.test('pass, ', t => {
  t.matchSnapshot(
    render(
      <ResultTag
        test={{ name: 'test name' } as unknown as Base}
        result={getRes()}
      />
    ).lastFrame()
  )
  t.end()
})

t.test('fail, no diag', t => {
  t.matchSnapshot(
    render(
      <ResultTag
        test={{ name: 'test name' } as unknown as Base}
        result={getRes({ ok: false })}
      />
    ).lastFrame()
  )
  t.end()
})

t.test('fail, with diag', t => {
  t.matchSnapshot(
    render(
      <ResultTag
        test={{ name: 'test name' } as unknown as Base}
        result={getRes({
          ok: false,
          diag: {
            at: at(),
            diff: createTwoFilesPatch(
              'expected',
              'actual',
              JSON.stringify({ x: 1 }, null, 2),
              JSON.stringify({ x: 2, y: 1 }, null, 2)
            ),
          },
        })}
      />
    ).lastFrame()
  )
  t.end()
})

t.test('fail, with diag, no line/column numbers', t => {
  const cs = at()
  if (!cs) throw new Error('wat')
  t.matchSnapshot(
    render(
      <ResultTag
        test={{ name: 'test name' } as unknown as Base}
        result={getRes({
          ok: false,
          diag: {
            at: Object.assign(cs, {
              lineNumber: null,
              columnNumber: null,
            }),
            diff: createTwoFilesPatch(
              'expected',
              'actual',
              JSON.stringify({ x: 1 }, null, 2),
              JSON.stringify({ x: 2, y: 1 }, null, 2)
            ),
          },
        })}
      />
    ).lastFrame()
  )
  t.end()
})

t.test('fail, with diag and details', t => {
  const actual = render(
    <ResultTag
      details
      test={{ name: 'test name' } as unknown as Base}
      result={getRes({
        ok: false,
        diag: {
          at: at(),
          diff: createTwoFilesPatch(
            'expected',
            'actual',
            JSON.stringify({ x: 1 }, null, 2),
            JSON.stringify({ x: 2, y: 1 }, null, 2)
          ),
        },
      })}
    />
  ).lastFrame()

  t.matchSnapshot(actual)
  t.end()
})

t.test('skip no message', t => {
  t.matchSnapshot(
    render(
      <ResultTag
        test={{ name: 'test name' } as unknown as Base}
        result={getRes({ ok: true, skip: true })}
      />
    ).lastFrame()
  )
  t.end()
})

t.test('skip with message', t => {
  t.matchSnapshot(
    render(
      <ResultTag
        test={{ name: 'test name' } as unknown as Base}
        result={getRes({ ok: true, skip: 'skip message' })}
      />
    ).lastFrame()
  )
  t.end()
})

t.test('todo no message', t => {
  t.matchSnapshot(
    render(
      <ResultTag
        test={{ name: 'test name' } as unknown as Base}
        result={getRes({ ok: true, todo: true })}
      />
    ).lastFrame()
  )
  t.end()
})

t.test('todo with message', t => {
  t.matchSnapshot(
    render(
      <ResultTag
        test={{ name: 'test name' } as unknown as Base}
        result={getRes({ ok: true, todo: 'todo message' })}
      />
    ).lastFrame()
  )
  t.end()
})
