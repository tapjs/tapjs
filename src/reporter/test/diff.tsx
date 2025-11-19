import { createTwoFilesPatch } from 'diff'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import { format } from 'tcompare'
import { Diff } from '../dist/esm/diff.js'
import './fixtures/chalk.js'

t.test('diff some stuff', async t => {
  const found = {
    a: {
      b: {
        c: {
          d: {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5,
          },
        },
      },
    },
  }
  const wanted = {
    a: {
      b: {
        x: {
          d: {
            a: 1,
            b: 2,
            x: 3,
            d: 5,
            y: 5,
          },
        },
      },
    },
  }
  const diff = createTwoFilesPatch(
    'expected',
    'actual',
    JSON.stringify(wanted, null, 2) + '\n',
    JSON.stringify(found, null, 2) + '\n',
  )
  const app = render(<Diff diff={diff} />)
  t.matchSnapshot(app.lastFrame())
})

t.test('weird ctx line', async t => {
  const found = {
    a: {
      b: {
        c: {
          d: {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5,
          },
        },
      },
    },
  }
  const wanted = {
    a: {
      b: {
        x: {
          d: {
            a: 1,
            b: 2,
            x: 3,
            d: 5,
            y: 5,
          },
        },
      },
    },
  }
  const diff = createTwoFilesPatch(
    'expected',
    'actual',
    JSON.stringify(wanted, null, 2) + '\n',
    JSON.stringify(found, null, 2) + '\n',
  ).replace(/^@.*$/m, '@apple is a fruit@')
  const app = render(<Diff diff={diff} />)
  t.matchSnapshot(app.lastFrame())
})

t.test('no diff actually', async t => {
  const app = render(<Diff diff={''} />)
  t.matchSnapshot(app.lastFrame())
})

t.test('long lines', async t => {
  const expected = `
WHEN I WROTE the following pages, or rather the bulk of them, I lived alone,
in the woods, a mile from any neighbor, in a house which I had built myself,
on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by
the labor of my hands only. I lived there two years and two months. At present
I am a sojourner in civilized life again.`

  const actual = `
WHEN I WROTE the following pages, or rather the bulk of them, I lived alone,
in the woods, a mile from any neighbor, in a house which I had inherited,
on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by
handouts from my in-laws. I lived there two years and two months. At present
I am a sojourner in civilized life again.`

  const app = render(
    <Diff
      diff={createTwoFilesPatch('expected', 'actual', expected, actual)}
    />,
  )
  t.matchSnapshot(app.lastFrame())
})

t.test('ansi escape codes', async t => {
  const expected = new Error(`Oh \x1b[1mdeary \x1b[2mdeary \x1b[0mdear.`, {
    cause: 'foo',
  })
  const actual = new Error(`Oh deary deary dear.`, { cause: 'bar' })

  const app = render(
    <Diff
      diff={createTwoFilesPatch(
        'expected',
        'actual',
        format(expected),
        format(actual),
      )}
    />,
  )
  t.matchSnapshot(app.lastFrame())
})
