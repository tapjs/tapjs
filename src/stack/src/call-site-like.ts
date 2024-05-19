import { findSourceMap, SourceMap } from 'module'
import { isAbsolute, relative, resolve } from 'path'
import { fileURLToPath } from 'url'
import {
  Compiled,
  isCompiledCallSiteLine,
  parseCallSiteLine,
} from './parse.js'

const methodRe = /^(.*?) \[as (.*?)\]$/

export interface CallSiteLikeJSON {
  fileName?: string
  lineNumber?: number
  columnNumber?: number
  evalOrigin?: CallSiteLikeJSON
  typeName?: string
  methodName?: string
  functionName?: string
  isEval?: true
  isNative?: true
  isToplevel?: true
  isConstructor?: true
  generated?: {
    fileName?: string
    lineNumber?: number
    columnNumber?: number
  }
}

export interface GeneratedResult {
  fileName?: string | null
  lineNumber?: number | null
  columnNumber?: number | null
}

const isCallSite = (c: any): c is NodeJS.CallSite =>
  !!c && typeof c === 'object' && c.constructor?.name === 'CallSite'

export class CallSiteLike {
  static prepareStackTrace(e: Error, c: NodeJS.CallSite[]) {
    return c.map(c => new CallSiteLike(e, c))
  }

  #fileName?: string | null
  #cwd?: string
  lineNumber: ReturnType<NodeJS.CallSite['getLineNumber']>
  columnNumber: ReturnType<NodeJS.CallSite['getColumnNumber']>
  this: ReturnType<NodeJS.CallSite['getThis']>
  evalOrigin?: CallSiteLike
  function: ReturnType<NodeJS.CallSite['getFunction']>
  typeName: ReturnType<NodeJS.CallSite['getTypeName']>
  methodName: ReturnType<NodeJS.CallSite['getMethodName']>
  functionName: ReturnType<NodeJS.CallSite['getFunctionName']>
  isEval: ReturnType<NodeJS.CallSite['isEval']>
  isNative: ReturnType<NodeJS.CallSite['isNative']>
  isToplevel: ReturnType<NodeJS.CallSite['isToplevel']>
  isConstructor: ReturnType<NodeJS.CallSite['isConstructor']>
  generated?: GeneratedResult
  #sourceMap?: SourceMap

  // normalize and relativize filename if cwd is set
  get fileName() {
    return this.#relativize(this.#fileName)
  }

  get absoluteFileName() {
    if (!this.#fileName) return this.#fileName
    else if (this.#fileName.startsWith('file://')) {
      return fileURLToPath(this.#fileName)
    } else {
      return this.#fileName
    }
  }

  get cwd(): string | undefined {
    return this.#cwd
  }

  set cwd(cwd: string | undefined) {
    if (cwd === undefined) {
      if (this.generated) {
        this.generated.fileName = this.#derelativize(
          this.generated?.fileName,
        )
      }
    }
    this.#cwd = cwd?.replace(/\\/g, '/')
    if (cwd !== undefined) {
      if (this.generated) {
        this.generated.fileName = this.#relativize(
          this.generated?.fileName,
        )
      }
    }
    if (this.evalOrigin) this.evalOrigin.cwd = cwd
  }

  constructor(
    e: Error | null,
    c: NodeJS.CallSite | string | Compiled,
  ) {
    if (typeof c === 'string') {
      c = parseCallSiteLine(c)
    }

    if (isCallSite(c)) {
      const fileName = c.getFileName()
      this.#fileName = typeof fileName === 'string' ? fileName : null
      this.lineNumber = c.getLineNumber()
      this.columnNumber = c.getColumnNumber()
      this.this = c.getThis()
      const evalOrigin = c.getEvalOrigin()
      if (evalOrigin) {
        this.evalOrigin = new CallSiteLike(e, evalOrigin)
      }
      this.function = c.getFunction()
      this.typeName = c.getTypeName()
      this.methodName = c.getMethodName()
      this.functionName = c.getFunctionName()
      this.isEval = c.isEval()
      this.isNative = c.isNative()
      this.isToplevel = c.isToplevel()
      this.isConstructor = c.isConstructor()
    } else if (isCompiledCallSiteLine(c)) {
      // compiled object from stack line
      this.isEval = !!c.isEval
      this.isToplevel = false
      if (c.evalOrigin) {
        this.evalOrigin = new CallSiteLike(e, c.evalOrigin)
      }

      this.lineNumber =
        c.lineNumber === undefined ? null : c.lineNumber
      this.columnNumber =
        c.columnNumber === undefined ? null : c.columnNumber
      const fileName = c.fileName
      this.#fileName = typeof fileName === 'string' ? fileName : null
      const { generated } = c
      if (generated) {
        this.generated = generated
        this.generated.fileName = this.#relativize(generated.fileName)
      }
      let fname = c.fname?.trim()
      let method: null | string = null
      this.isNative = !!c.isNative

      if (fname) {
        if (fname.startsWith('new ')) {
          this.isConstructor = true
          fname = fname.substring('new '.length).trim()
        } else {
          this.isConstructor = false
        }
        this.methodName = null
        const methodMatch = fname.match(methodRe) as [
          string,
          string,
          string,
        ]
        if (methodMatch) {
          fname = methodMatch[1]
          method = methodMatch[2]
        }
        const dots = fname.split('.')
        const m = dots.pop()
        if (m !== undefined) {
          this.typeName = dots.join('.').trim() || null
          this.methodName = method || m
          if (this.methodName.match(/^get |set /)) {
            this.methodName = this.methodName.substring(4)
          }
          this.functionName = m
          // we know it's not undefined, but TS is afraid of pop()
          /* c8 ignore start */
        } else {
          this.functionName = null
          this.typeName = null
        }
        /* c8 ignore stop */
      } else {
        this.isConstructor = false
        this.typeName = null
        this.functionName = null
        this.methodName = null
      }
    } else {
      throw new Error('invalid call site information provided')
    }

    // This is a slight deviation from the CallSite API, but it's very useful
    // to have a field that's the actual function with type and method name.
    if (
      this.typeName &&
      this.functionName &&
      !this.functionName.startsWith(this.typeName)
    ) {
      this.functionName = `${this.typeName}.${this.functionName}`
    } else if (this.functionName === this.methodName) {
      this.methodName = null
    }

    // We only do the sourcemap lookup if we're parsing from a CallSite
    // If we get it from an Error stack line, then Node has already done
    // the mapping for us, and when ts-node (and other in-place
    // transpilers) create JavaScript, they use the same filename, leading
    // to an incorrect double offset,.
    if (
      this.#fileName &&
      isCallSite(c) &&
      !this.#sourceMap &&
      !this.#fileName.startsWith('node:')
    ) {
      // Passing an object that isn't an actual Error object to
      // findSourceMap causes problems in node 16
      /* c8 ignore start */
      const sme = e && e instanceof Error ? e : undefined
      /* c8 ignore stop */
      this.#sourceMap = findSourceMap(this.#fileName, sme)
      if (this.#sourceMap && typeof this.lineNumber === 'number') {
        // SourceMap.findEntry doesn't actually return the line/column
        // number, despite the property names, but rather the zero-indexed
        // line/column start of a mapping range, and must be looked up
        // using the zero-indexed line and column.
        // To find the mapping, we look it up with the zero-indexed
        // line/col, then figure out how far our line/col is from the
        // mapping, and apply that same offset to the start of the origin
        // in the mapping.
        const payload = this.#sourceMap.findEntry(
          // safety bounds around numbers here, impossible to hit
          // if we're looking up actual call sites though.
          /* c8 ignore start */
          Math.max(0, this.lineNumber - 1),
          Math.max(0, (this.columnNumber || 0) - 1),
          /* c8 ignore stop */
        )
        if (payload) {
          const offset: [number, number] = [
            this.lineNumber - payload.generatedLine,
            /* c8 ignore start */
            (this.columnNumber || 1) - payload.generatedColumn,
            /* c8 ignore stop */
          ]
          const originalLine = payload.originalLine + offset[0]
          const originalColumn = payload.originalColumn + offset[1]
          const genFilename = this.#relativize(this.#fileName)
          this.generated = {
            /* c8 ignore start */
            fileName: this.#relativize(genFilename || null),
            /* c8 ignore stop */
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
          }

          this.#fileName = payload.originalSource
          this.lineNumber = originalLine
          this.columnNumber = originalColumn
        }
      }
    }
  }

  #relativize(fileName?: string | null) {
    let f = fileName
    if (!f) return f
    if (f.startsWith('node:')) return f
    if (f.startsWith('file://')) f = fileURLToPath(f)
    if (this.#cwd === undefined) return f
    else f = f.replace(/\\/g, '/')
    try {
      const rel = relative(this.#cwd, f)
      return rel.length < f.length ? rel : f
    } catch {
      return f
    }
  }
  #derelativize(fileName?: string | null) {
    let f = fileName
    if (!f) return f
    if (f.startsWith('node:')) return f
    if (f.startsWith('file://')) f = fileURLToPath(f)
    if (this.#cwd === undefined) return f
    try {
      return resolve(this.#cwd, f)
    } catch {
      return f
    }
  }

  toString(jsStyle = false): string {
    // in js style mode, use the origin source file if it is within
    // our cwd. Otherwise, use the generated source location.
    const useGen =
      jsStyle &&
      this.generated?.fileName &&
      this.fileName &&
      this.generated.fileName !== this.fileName &&
      (isAbsolute(this.fileName) || this.fileName.startsWith('..'))
    const { fileName, lineNumber, columnNumber, generated } =
      useGen && this.generated ?
        {
          fileName: this.#derelativize(this.generated.fileName),
          lineNumber: this.generated.lineNumber,
          columnNumber: this.generated.columnNumber,
          generated: undefined,
        }
      : jsStyle ?
        {
          fileName: this.#derelativize(this.fileName),
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          generated: undefined,
        }
      : this
    const loc = { fileName, lineNumber, columnNumber, generated }
    for (const l of [loc, loc.generated]) {
      if (l?.fileName) {
        l.fileName =
          jsStyle ?
            this.#derelativize(l.fileName)
          : this.#relativize(l.fileName)
      }
    }

    let fname = this.functionName || ''
    let tn = ''
    let tnGet = ''
    let tnSet = ''
    if (this.typeName) {
      const mn = this.methodName || '<anonymous>'
      tn = this.typeName + '.' + mn
      tnGet = this.typeName + '.get ' + mn
      tnSet = this.typeName + '.set ' + mn
    }
    if (!fname && tn) {
      fname = tn
    }
    const mn = this.methodName
    if (
      fname &&
      tn &&
      mn &&
      fname !== tn &&
      fname !== tnGet &&
      fname !== tnSet
    ) {
      fname += ` [as ${mn}]`
    }
    if (this.isConstructor && fname) {
      fname = `new ${fname}`
    }
    let ev = ''
    const nat = this.isNative ? 'native' : ''
    let file = loc.fileName || ''
    const hasLC = loc.lineNumber && loc.columnNumber
    if (this.evalOrigin) {
      ev = `eval at ${this.evalOrigin.toString(jsStyle)}`
      if (hasLC) {
        const f = loc.fileName || '<anonymous>'
        let lr = `${f}:${loc.lineNumber}:${loc.columnNumber}`
        if (loc.generated && loc.generated.fileName) {
          const f = loc.generated.fileName
          const { lineNumber: l, columnNumber: c } = loc.generated
          lr = `${f}:${l}:${c} (${lr})`
        }
        ev += `, ${lr}`
      }
      // should always have an fname at this point
      /* c8 ignore start */
      ev = fname ? ` (${ev})` : ev
      /* c8 ignore stop */
      return `${fname}${ev}`
    }

    if (file || hasLC) {
      if (hasLC) {
        /* c8 ignore start */
        file = file || '<anonymous>'
        /* c8 ignore stop */
        file += `:${loc.lineNumber}:${loc.columnNumber}`
      }
    } else if (nat) {
      file = 'native'
      // impossible in normal cases
      /* c8 ignore start */
    } else {
      file = ''
    }
    /* c8 ignore stop */
    let g = ''
    if (loc.generated && loc.generated.fileName) {
      const { fileName, lineNumber, columnNumber } = loc.generated
      g = fileName
      /* c8 ignore start */
      if (!g) g = ''
      /* c8 ignore stop */
      if (g === loc.fileName) g = ''
      if (g) {
        if (
          typeof lineNumber === 'number' &&
          typeof columnNumber === 'number'
        ) {
          g += `:${lineNumber}:${columnNumber}`
        }
        if (ev || fname) {
          g = ` (${g})`
        }
      }
    }
    if (file && (ev || fname || g)) {
      file = ` (${file})`
    }
    const pre = jsStyle ? '    at ' : ''
    return `${pre}${fname}${ev}${g}${file}`
  }

  toJSON(): CallSiteLikeJSON {
    const {
      fileName,
      lineNumber,
      columnNumber,
      evalOrigin,
      typeName,
      methodName,
      functionName,
      isEval,
      isNative,
      isToplevel,
      isConstructor,
      generated,
    } = this
    const json: CallSiteLikeJSON = {}
    if (fileName !== null) json.fileName = fileName
    if (lineNumber || lineNumber === 0) json.lineNumber = lineNumber
    if (columnNumber || columnNumber === 0)
      json.columnNumber = columnNumber
    if (evalOrigin) json.evalOrigin = evalOrigin.toJSON()

    if (typeName !== null) {
      json.typeName = typeName
    }

    if (methodName !== null) json.methodName = methodName
    if (functionName !== null) json.functionName = functionName
    if (isEval) json.isEval = isEval
    if (isNative) json.isNative = isNative
    if (isToplevel) json.isToplevel = isToplevel
    if (isConstructor) json.isConstructor = isConstructor
    if (generated && generated.fileName) {
      const f = this.#relativize(generated.fileName)
      if (
        f &&
        typeof f === 'string' &&
        (f !== json.fileName || f === '<anonymous>')
      ) {
        const gen: Record<string, string | number> = {}
        gen.fileName = f
        if (generated.lineNumber)
          gen.lineNumber = generated.lineNumber
        if (generated.columnNumber)
          gen.columnNumber = generated.columnNumber
        if (Object.keys(gen).length > 0) {
          json.generated = gen
        }
      }
    }
    return json
  }
}
