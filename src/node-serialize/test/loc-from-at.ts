import { at } from '@tapjs/stack'
import { resolve } from 'path'
import t from 'tap'
import { locFromAt } from '../src/loc-from-at.js'

const foo = (): [
  ReturnType<typeof at>,
  ReturnType<typeof locFromAt>
] => {
  return [at(bar), locFromAt(bar)]
}

const bar = () => foo()
const baz = () => bar()

const [a, l] = baz()
t.matchOnly(l, {
  file: String,
  line: Number,
  column: Number,
})
t.strictSame(l, {
  file: resolve(String(a?.fileName)),
  line: a?.lineNumber,
  column: a?.columnNumber,
})

t.strictSame(
  foo(),
  [
    undefined,
    {
      file: undefined,
      line: undefined,
      column: undefined,
    },
  ],
  'empty object if callsite not found'
)
