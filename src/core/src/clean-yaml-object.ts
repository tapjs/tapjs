import { createTwoFilesPatch } from 'diff'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { format, strict } from 'tcompare'
import stack from './stack.js'
import type { TestBaseOpts } from './test-base.js'

import { tapDir } from './tap-dir.js'

const tryReadFile = (path: string) => {
  try {
    return readFileSync(path, 'utf8')
  } catch (_) {
    return
  }
}

const hasOwn = (obj: { [k: string]: any }, key: string) =>
  Object.prototype.hasOwnProperty.call(obj, key)

export const cleanYamlObject = (
  object: { [k: string]: any },
  options: TestBaseOpts
) => {
  const res = { ...object }
  if (hasOwn(res, 'stack') && !hasOwn(res, 'at')) {
    res.at = stack.parseLine(res.stack.split('\n')[0])
  }

  const file = res.at && res.at.file && resolve(res.at.file)
  if (
    !options.stackIncludesTap &&
    file &&
    file.includes(tapDir)
  ) {
    // don't print locations in tap itself, that's almost never useful
    delete res.at
  }

  if (
    file &&
    res.at &&
    res.at.file &&
    res.at.line &&
    !res.source
  ) {
    const content = tryReadFile(file)
    if (content) {
      const lines = content.split('\n')
      if (res.at.line <= lines.length) {
        const startLine = Math.max(res.at.line - 2, 0)
        const endLine = Math.min(
          res.at.line + 2,
          lines.length
        )
        const caret =
          res.at.column &&
          res.at.column <= lines[res.at.line - 1].length
            ? [new Array(res.at.column).join('-') + '^']
            : []
        const context = lines
          .slice(startLine, res.at.line)
          .concat(caret)
          .concat(lines.slice(res.at.line, endLine))
        const csplit = context.join('\n').trimEnd()
        if (csplit) res.source = csplit + '\n'
      }
    }
  }

  // show a line by line string diff
  // diff the yaml, to make it more humane, especially
  // when strings or buffers are very large or multi-line
  // the shipped compare methods will generally supply
  // their own diff, which is much nicer.
  if (
    res.found &&
    res.wanted &&
    res.found !== res.wanted &&
    !res.diff
  ) {
    const f = res.found
    const w = res.wanted
    if (typeof f === 'string' && typeof w === 'string')
      res.diff = createTwoFilesPatch(
        'expected',
        'actual',
        w + '\n',
        f + '\n'
      ).replace(/^=+\n/, '')
    else if (
      f &&
      w &&
      typeof f === 'object' &&
      typeof w === 'object'
    ) {
      const s = strict(f, w)
      if (!s.match) {
        res.diff = s.diff
      } else {
        res.note = 'object identities differ'
      }
    } else {
      // some mixed stringly bits
      // XXX tcompare needs better string diffs
      const ff = format(f)
      const fw = format(w)
      const fs = (typeof f === 'string' ? f : ff) + '\n'
      const ws = (typeof w === 'string' ? w : fw) + '\n'
      /* istanbul ignore else - impossible without bug in tcompare */
      if (fw !== ff) {
        res.diff = createTwoFilesPatch(
          'expected',
          'actual',
          ws,
          fs
        ).replace(/^=+\n/, '')
      } else {
        res.note = 'object identities differ'
      }
    }
    if (res.diff === '--- expected\n+++ actual\n') {
      delete res.diff
    }
    if (res.diff) {
      delete res.found
      delete res.wanted
    }
  }

  for (const [key, value] of Object.entries(res)) {
    if (shouldDeleteKey(key, value)) {
      delete res[key]
    }
  }

  return res
}

export const deleteAlways = new Set([
  'todo',
  'time',
  'childId',
  'cb',
  'name',
  'indent',
  'skip',
  'bail',
  'grep',
  'grepInvert',
  'only',
  'diagnostic',
  'buffered',
  'parent',
  'domainEmitter',
  'domainThrew',
  'domain',
  'saveFixture',
])
export const deleteIfEmpty = new Set([
  'at',
  'stack',
  'compareOptions',
])
export const deleteIfMatch = [
  /^_?tapChild/,
  /^tapStream/,
  /^tapMochaTest/,
]
const shouldDeleteKey = (key: string, value: any) =>
  deleteAlways.has(key) ||
  (deleteIfEmpty.has(key) && isEmpty(value)) ||
  deleteIfMatch.some(r => r.test(key))

// return true if object is empty, including inherited properties
const isEmpty = (obj: any): obj is {} => {
  if (!obj) {
    return true
  }
  if (typeof obj !== 'object') {
    return false
  }
  for (const _ in obj) {
    return false
  }
  return true
}
