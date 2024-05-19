import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import { HangingIndent } from '../dist/esm/hanging-indent.js'

const str =
  'WHEN I WROTE the following pages, or rather the bulk of them, ' +
  'I lived alone, in the woods, a mile from any neighbor, in a ' +
  'house which I had built myself, on the shore of Walden Pond, ' +
  'in Concord, Massachusetts, and earned my living by the labor ' +
  'of my hands only. I lived there two years and two months. At ' +
  'present I am a sojourner in civilized life again. '

t.matchSnapshot(
  render(<HangingIndent>{str}</HangingIndent>).lastFrame(),
  'default settings',
)
t.matchSnapshot(
  render(<HangingIndent indent={3}>{str}</HangingIndent>).lastFrame(),
  '3 space hang',
)
