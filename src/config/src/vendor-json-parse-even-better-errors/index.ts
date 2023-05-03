// vendored while awaiting resolution:
// https://github.com/npm/json-parse-even-better-errors/pull/17

/**
 * Copyright 2017 Kat Marchán
 * Copyright npm, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 * ---
 *
 * This library is a fork of 'better-json-errors' by Kat Marchán, extended and
 * distributed under the terms of the MIT license above.
 */

'use strict'

const hexify = (char: string) => {
  const h = char.charCodeAt(0).toString(16).toUpperCase()
  return '0x' + (h.length % 2 ? '0' : '') + h
}

const parseError = (e: Error, txt: string, context: number) => {
  if (!txt) {
    return {
      message: e.message + ' while parsing empty string',
      position: 0,
    }
  }
  const badToken = e.message.match(
    /^Unexpected token (.) .*position\s+(\d+)/i
  )
  const errIdx = badToken
    ? +badToken[2]
    : e.message.match(/^Unexpected end of JSON.*/i)
    ? txt.length - 1
    : null

  const msg = badToken
    ? e.message.replace(
        /^Unexpected token ./,
        `Unexpected token ${JSON.stringify(badToken[1])} (${hexify(
          badToken[1]
        )})`
      )
    : e.message

  if (errIdx !== null && errIdx !== undefined) {
    const start = errIdx <= context ? 0 : errIdx - context

    const end =
      errIdx + context >= txt.length ? txt.length : errIdx + context

    const slice =
      (start === 0 ? '' : '...') +
      txt.slice(start, end) +
      (end === txt.length ? '' : '...')

    const near = txt === slice ? '' : 'near '

    return {
      message: msg + ` while parsing ${near}${JSON.stringify(slice)}`,
      position: errIdx,
    }
  } else {
    return {
      message: msg + ` while parsing '${txt.slice(0, context * 2)}'`,
      position: 0,
    }
  }
}

class JSONParseError extends SyntaxError {
  code: 'EJSONPARSE'
  systemError: Error
  constructor(
    er: Error,
    txt: string,
    context: number,
    caller: Function | ((...a: any[]) => any)
  ) {
    context = context || 20
    const metadata = parseError(er, txt, context)
    super(metadata.message)
    Object.assign(this, metadata)
    this.code = 'EJSONPARSE'
    this.systemError = er
    Error.captureStackTrace(this, caller || this.constructor)
  }
  get name() {
    return this.constructor.name
  }
  set name(_) {}
  get [Symbol.toStringTag]() {
    return this.constructor.name
  }
}

const kIndent = Symbol.for('indent')
const kNewline = Symbol.for('newline')
// only respect indentation if we got a line break, otherwise squash it
// things other than objects and arrays aren't indented, so ignore those
// Important: in both of these regexps, the $1 capture group is the newline
// or undefined, and the $2 capture group is the indent, or undefined.
const formatRE = /^\s*[{\[]((?:\r?\n)+)([\s\t]*)/
const emptyRE = /^(?:\{\}|\[\])((?:\r?\n)+)?$/

type Reviver = (this: any, key: string, value: any) => any
type Replacer =
  | ((this: any, key: string, value: any) => any)
  | (string | number)[]
  | null
type Scalar = string | number | null
type JSONResult = { [k: string]: JSONResult } | JSONResult[] | Scalar

export const parseJson = (
  txt: string,
  reviver?: Reviver,
  context?: number
): JSONResult => {
  const parseText = stripBOM(txt)
  context = context || 20
  try {
    // get the indentation so that we can save it back nicely
    // if the file starts with {" then we have an indent of '', ie, none
    // otherwise, pick the indentation of the next line after the first \n
    // If the pattern doesn't match, then it means no indentation.
    // JSON.stringify ignores symbols, so this is reasonably safe.
    // if the string is '{}' or '[]', then use the default 2-space indent.
    const [, newline = '\n', indent = '  '] = parseText.match(emptyRE) ||
      parseText.match(formatRE) || [, '', '']

    const result = JSON.parse(parseText, reviver)
    if (result && typeof result === 'object') {
      result[kNewline] = newline
      result[kIndent] = indent
    }
    return result
  } catch (e) {
    if (typeof txt !== 'string' && !Buffer.isBuffer(txt)) {
      const isEmptyArray =
        Array.isArray(txt) && (txt as Array<any>).length === 0
      throw Object.assign(
        new TypeError(
          `Cannot parse ${isEmptyArray ? 'an empty array' : String(txt)}`
        ),
        {
          code: 'EJSONPARSE',
          systemError: e,
        }
      )
    }

    throw new JSONParseError(e as Error, parseText, context, parseJson)
  }
}

// Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
// because the buffer-to-string conversion in `fs.readFileSync()`
// translates it to FEFF, the UTF-16 BOM.
const stripBOM = (txt: string) => String(txt).replace(/^\uFEFF/, '')

parseJson.JSONParseError = JSONParseError

parseJson.noExceptions = (txt: string, reviver?: Reviver) => {
  try {
    return JSON.parse(stripBOM(txt), reviver)
  } catch (e) {}
}

parseJson.stringify = (
  obj: any,
  replacer?: Replacer,
  indent?: string | number
) => {
  const space = indent === undefined ? obj[kIndent] : indent
  //@ts-ignore - TS borks on function overloads sometimes
  const res = JSON.stringify(obj, replacer, space)
  const nl = obj[kNewline] || '\n'
  return space ? (nl === '\n' ? res : res.split('\n').join(nl)) + nl : res
}
