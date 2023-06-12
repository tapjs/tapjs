// Take a line from a stack trace and pull out its relevant parts.

const isCompiled = Symbol('compiled call site line')

export interface LineRef {
  fileName: string
  lineNumber: number
  columnNumber: number
  [isCompiled]: true
}
export interface AnonLineRef {
  fileName: string
  [isCompiled]: true
}

export interface NativeLineRef {
  isNative: true
  [isCompiled]: true
}

export const isLineRef = (lr?: Compiled | undefined): lr is LineRef =>
  !!lr &&
  typeof (lr as LineRef).lineNumber === 'number' &&
  typeof (lr as LineRef).columnNumber === 'number'

export interface Compiled {
  fname?: string
  fileName?: string
  lineNumber?: number
  columnNumber?: number
  generated?: LineRef
  evalOrigin?: Compiled
  isEval?: boolean
  isNative?: boolean
  [isCompiled]: true
}

export const isCompiledCallSiteLine = (c: any) =>
  !!c && typeof c === 'object' && c[isCompiled] === true

const lineRef =
  '(?:([^:]+):([1-9][0-9]*):([1-9][0-9]*)|(<anonymous>|native))'
const bareLineRef = `^(?:${lineRef})$`
const bareLineRefRe = new RegExp(bareLineRef)
const parenLineRef = `\\(${lineRef}\\)`
const parenLineRefExec = new RegExp(parenLineRef, 'g')
const trailingLineRefs = `(?: (${parenLineRef}))+$`
const trailingLineRefsRe = new RegExp(trailingLineRefs)
// $1 - evalOrigin fname
// $2 - evalOrigin linerefs (origin src)
// $3 - lineref (generated if $4)
// $4 - src lineref ($3 is generated if present)
const evalOrigin = `eval at(.*?)((?: ${parenLineRef})+), (${lineRef}(?: \\((${lineRef})\\))?)`
const bareEvalOrigin = `^${evalOrigin}$`
const withEvalOrigin = `(.*?) \\((${evalOrigin})\\)$`
const withEvalOriginRe = new RegExp(withEvalOrigin)

export const parseCallSiteLine = (line: string): Compiled => {
  line = line.replace(/^\s+at /, '')

  // just a lineref, nothing else:
  const bm = line.match(bareLineRefRe)
  if (bm && bm[4] && !bm[1] && !bm[2] && !bm[3]) {
    return { fileName: bm[4], [isCompiled]: true }
  }
  if (bm) {
    return {
      fileName: bm[1],
      lineNumber: +bm[2],
      columnNumber: +bm[3],
      [isCompiled]: true,
    }
  }

  // an eval origin subsection
  const em = line.match(bareEvalOrigin)
  if (em) {
    // we ignore the part that comes after the `,` because that is part of
    // the parent's call site, not the evalOrigin
    return {
      ...parseLineRefs(em[2]),
      fname: em[1].trim(),
    }
  }

  const wem = line.match(withEvalOriginRe)
  if (wem) {
    const evalOrigin = parseCallSiteLine(wem[2])
    return {
      ...parseLineRefs(wem[9]),
      fname: wem[1].trim(),
      isEval: true,
      evalOrigin,
      [isCompiled]: true,
    }
  }

  // now we know it is either a lineref with fname, or multiple linerefs
  // if we have two linerefs, that meaks it's a toString of a callsite
  // with a sourcemap.
  // if it's one, it might be either a fname, or a fname-less callsite with
  // a sourcemap.
  return parseLineRefs(line)
}

const compileLineRefParse = (
  file: string | undefined,
  line: string | undefined,
  col: string | undefined,
  other: string | undefined
): LineRef | AnonLineRef | NativeLineRef | Compiled => {
  if (other === 'native') {
    return { isNative: true, [isCompiled]: true }
  } else if (other) {
    return { fileName: other, [isCompiled]: true }
  } else if (file && line && col) {
    return {
      fileName: file,
      lineNumber: +line,
      columnNumber: +col,
      [isCompiled]: true,
    }
  } else {
    return { fname: other || file, [isCompiled]: true }
  }
}

// parse a set of trailing line refs or a bare lineref and 1 or more trailing
const parseLineRefs = (line: string): Compiled => {
  const tm = line.match(trailingLineRefsRe)
  if (!tm) {
    const bm = line.match(bareLineRefRe)
    return bm
      ? compileLineRefParse(bm[1], bm[2], bm[3], bm[4])
      : { fname: line, [isCompiled]: true }
  }

  const lineRefs: Compiled[] = []
  const tms = tm[0].trim()
  let pre = line.substring(0, tm.index)
  let m: RegExpExecArray | null
  while ((m = parenLineRefExec.exec(tms))) {
    lineRefs.push(compileLineRefParse(m[1], m[2], m[3], m[4]))
  }
  // figure out if the bit before the paren linerefs was also a lineref
  if (lineRefs.length === 1) {
    const bm = pre.match(bareLineRefRe)
    if (bm && bm[1] && bm[2] && bm[3]) {
      pre = ''
      lineRefs.unshift({
        fileName: bm[1],
        lineNumber: +bm[2],
        columnNumber: +bm[3],
        [isCompiled]: true,
      })
    }
  }
  // at this point the LAST lineref is the one we care about, and any
  // that preceed it are the generated result.
  const lastLR = lineRefs.pop()
  /* c8 ignore start */
  // very impossible, but TS is afraid of pop()
  if (!lastLR) return { fname: line, [isCompiled]: true }
  /* c8 ignore stop */
  const generated = lineRefs.pop()
  // shouldn't be any left, but possible if you had a function name
  // that looked like a line ref, though V8 puts [] around those
  pre += lineRefs
    .map(lr =>
      isLineRef(lr)
        ? ` (${lr.fileName}:${lr.lineNumber}:${lr.columnNumber})`
        : lr.isNative
        ? ` (native)`
        : lr.fname
        ? ` (${lr.fname})`
        : lr.fileName
        ? ` (${lr.fileName})`
        : ''
    )
    .join('')

  const r = {
    fname: pre,
    generated: isLineRef(generated) ? generated : undefined,
    ...lastLR,
    [isCompiled]: true,
  } as Compiled
  return r
}
