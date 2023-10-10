// Serialize the root TAP object, and output a node:test style
// serialized message stream.

import { Base, TAP } from '@tapjs/core'
import {
  TestStreamDeserialize,
  TestStreamSerialize,
} from '@tapjs/error-serdes'

import { proc } from '@tapjs/core'
import { inspect } from 'node:util'
import { commentMethod } from './comment.js'
import { onAddFn } from './on-add.js'
import { printMessagesFn } from './print-messages.js'
import { serializeStdio } from './stdio.js'
import { TestMap } from './test-map.js'

if (!proc) {
  throw new Error('Cannot serialize TAP stream, no process object')
}

const { stdout } = proc

export const serialize = (tap: TAP): void => {
  if (tap.registered) {
    throw new Error('Cannot serialize TAP stream, already registered')
  }
  tap.register?.()
  tap.options.passes = true

  const subsMap = new TestMap<Base[]>()
  const diagsMap = new TestMap<DiagnosticData[]>([[tap, []]])

  const stream = new TestStreamSerialize()
  // just for inspecting in dev.
  /* c8 ignore start */
  if (process.env.TAP_SERIALIZE_DEBUG === '1') {
    stream
      .pipe(new TestStreamDeserialize())
      .on('data', c =>
        stdout.write(
          inspect(JSON.parse(JSON.stringify(c)), {
            colors: true,
            depth: Infinity,
          }) + '\n'
        )
      )
  } else {
  /* c8 ignore stop */
    stream.pipe(stdout)
  }

  const comment = commentMethod(stream, diagsMap)

  // unpossible, we already checked on module load
  /* c8 ignore start */
  if (!proc) {
    throw new Error('Cannot serialize TAP stream, no process object')
  }
  /* c8 ignore stop */
  if (process.env.TAP_SERIALIZE_DEBUG !== '1') {
    serializeStdio(stream, proc, 'stderr')
    serializeStdio(stream, proc, 'stdout')
  }

  const onAdd = onAddFn(comment, diagsMap, subsMap)

  const printMessages = printMessagesFn(
    tap,
    stream,
    subsMap,
    diagsMap
  )

  onAdd(tap)
  tap.on('complete', () => {
    printMessages(tap)
    stream.end()
  })
}
