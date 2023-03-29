// Take a line from a stack trace and pull out its relevant parts.

export const parseCallSiteLine = (line: string) => {
  return compile(tokenize(line))
}

interface LineRef {
  fileName: string
  lineNumber: number
  columnNumber: number
}

export interface Compiled {
  fname?: string
  fileName?: string
  lineNumber?: number
  columnNumber?: number
  generated?: LineRef
  evalOrigin?: Compiled
  isEval?: boolean
  isNative?: boolean
}

const compile = (sexpr: Sexpr): Compiled => {
  // each entry in the sexpr tree is one of the following:
  // just a lineref
  // a lineref followed by 0 or more [lineref] entries
  // a function name followed by 1 or 2 [lineref] entries
  // a function name followed by an eval origin and a [lineref] (usually <anonymous>)
  // An eval origin is an entry starting with 'eval at', followed by either
  // another eval origin, or 1 or 2 [lineref]s
  const lrMatch = parseLineRef(sexpr[0])
  if (lrMatch) {
    const src = sexpr[1] && sexpr[1][0] ? parseLineRef(sexpr[1][0]) : null
    if (!src) {
      // just a single lineref, parse and return
      return {
        fileName: lrMatch[1],
        lineNumber: +lrMatch[2],
        columnNumber: +lrMatch[3],
      }
    } else {
      // subsequent linerefs are the actual source, this is the generated
      // result
      return {
        fileName: src[1],
        lineNumber: +src[2],
        columnNumber: +src[3],
        generated: {
          fileName: lrMatch[1],
          lineNumber: +lrMatch[2],
          columnNumber: +lrMatch[3],
        },
      }
    }
  }

  const isEvalOrigin = sexpr[0].startsWith('eval at ')
  if (isEvalOrigin) {
    const fname = sexpr[0].substring('eval at '.length).trim()
    if (!sexpr[1]) return { fname }
    if (sexpr.length === 2 && sexpr[1][0].startsWith('eval at ')) {
      return {
        fname,
        evalOrigin: compile(sexpr[1]),
      }
    }
    const srcMatch = parseLineRef(sexpr[sexpr.length - 1][0])
    const genMatch = sexpr.length > 2 && parseLineRef(sexpr[1][0])
    const generated = !genMatch
      ? undefined
      : {
          fileName: genMatch[1],
          lineNumber: +genMatch[2],
          columnNumber: +genMatch[3],
        }
    return srcMatch
      ? {
          fname,
          fileName: srcMatch[1],
          lineNumber: +srcMatch[2],
          columnNumber: +srcMatch[3],
          generated,
        }
      : { fname, ...(generated || {}) }
  }

  // not a lineref or eval origin, has some kind of function name.
  const fname = sexpr[0].replace(/^\s*at /, '')
  if (!sexpr[1]) return { fname }
  const isNative = sexpr[sexpr.length - 1][0] === 'native'
  const src = !isNative && parseLineRef(sexpr[sexpr.length - 1][0])
  const source = !src
    ? { isNative }
    : { fileName: src[1], lineNumber: +src[2], columnNumber: +src[3] }
  if (sexpr.length === 2) {
    return { fname, ...source }
  }
  const gen = parseLineRef(sexpr[1][0])
  const generated = !gen
    ? undefined
    : {
        fileName: gen[1],
        lineNumber: +gen[2],
        columnNumber: +gen[3],
      }
  if (gen) {
    return src
      ? { fname, ...source, generated }
      : { fname, ...(generated || {}) }
  }

  // at this point we must have an eval origin
  if (sexpr[1][0].startsWith('eval at')) {
    return {
      fname,
      isEval: true,
      evalOrigin: compile(sexpr[1]),
      ...source,
    }
  }

  // something weird??
  return { fname, ...source }
}

const parseLineRef = (s: string) =>
  s.match(/(.+):([1-9][0-9]*):([1-9][0-9]*)$/)

type Sexpr = [token: string, ...children: Sexpr[]]
type Token = [string, number]
const tokenize = (line: string): Sexpr => {
  let depth = 0
  let toks: Token[] = []
  for (let i = 0; i < line.length; i++) {
    const nextOpen = line.indexOf('(', i)
    const nextClose = line.indexOf(')', i)
    const nextComma = line.indexOf(',', i)
    if (nextOpen === -1 && nextClose === -1 && nextComma === -1) {
      toks.push([line.substring(i + 1), depth])
      i = line.length
    }
    const op = nextOpen === -1 ? Infinity : nextOpen
    const cl = nextClose === -1 ? Infinity : nextClose
    const co = nextComma === -1 ? Infinity : nextComma
    const next = Math.min(op, cl, co)
    const tok = line.substring(i, next).trim()
    if (tok) toks.push([tok, depth])
    i = next
    if (next === op) {
      depth++
    } else if (next === cl) {
      depth--
    }
  }
  return slurp(toks)
}

const slurp = (toks: Token[]): Sexpr => {
  const head = toks.shift()
  if (!head) throw new Error('should be impossible')
  const hs: Sexpr = [head[0]]
  while (toks.length) {
    const next = toks[0]
    if (next[1] === head[1] + 1) {
      const child = slurp(toks)
      if (child) hs.push(child)
    } else break
  }
  return hs
}
