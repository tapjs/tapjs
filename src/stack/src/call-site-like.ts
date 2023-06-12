import { findSourceMap, SourceMap } from 'module'
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
  fileName: string | null
  lineNumber: number | null
  columnNumber?: number | null
}

const isCallSite = (c: any): c is NodeJS.CallSite =>
  !!c && typeof c === 'object' && c.constructor?.name === 'CallSite'

export class CallSiteLike {
  static prepareStackTrace(e: Error, c: NodeJS.CallSite[]) {
    return c.map(c => new CallSiteLike(e, c))
  }

  #fileName: string | null
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
    this.#cwd = cwd?.replace(/\\/g, '/')
    if (this.evalOrigin) this.evalOrigin.cwd = cwd
  }

  constructor(
    e: Error | null,
    c: NodeJS.CallSite | string | Compiled
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
      if (
        this.typeName &&
        this.functionName === this.methodName &&
        this.functionName &&
        !this.functionName.startsWith(this.typeName)
      ) {
        this.functionName = `${this.typeName}.${this.functionName}`
      }
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
      this.generated = c.generated
      let fname = c.fname
      let method: null | string = null
      this.isNative = !!c.isNative

      if (fname) {
        if (fname && fname.startsWith('new ')) {
          this.isConstructor = true
          fname = fname.substring('new '.length).trim()
        } else {
          this.isConstructor = false
        }
        const methodMatch = fname.match(methodRe)
        if (methodMatch) {
          fname = methodMatch[1]
          method = methodMatch[2]
        }
        const dots = fname.split('.')
        const m = dots.pop()
        if (m !== undefined) {
          this.typeName = dots.join('.') || null
        } else {
          this.typeName = null
        }
        if (fname) {
          this.functionName = fname
        } else {
          this.functionName = null
        }
        if (method && fname === method) {
          this.methodName = method
        } else {
          this.methodName = null
        }
      } else {
        this.isConstructor = false
        this.typeName = null
        this.functionName = null
        this.methodName = null
      }
    } else {
      throw new Error('invalid call site information provided')
    }

    // We only do the sourcemap lookup if we're parsing from a CallSite
    // If we get it from an Error stack line, then Node has already done
    // the mapping for us, and when ts-node (and other in-place
    // transpilers) create JavaScript, they use the same filename, leading
    // to an incorrect double offset,.
    if (this.#fileName && isCallSite(c) && !this.#sourceMap) {
      this.#sourceMap = findSourceMap(this.#fileName, e || undefined)
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
          Math.max(0, this.lineNumber - 1),
          Math.max(0, (this.columnNumber || 0) - 1)
        )
        if (payload) {
          const offset = [
            this.lineNumber - payload.generatedLine,
            (this.columnNumber || 1) - payload.generatedColumn,
          ]
          const originalLine = payload.originalLine + offset[0]
          const originalColumn = payload.originalColumn + offset[1]
          const genFilename = this.#relativize(this.#fileName)
          this.generated = {
            fileName:
              typeof genFilename === 'string' ? genFilename : null,
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
    if (f?.startsWith('file://')) f = fileURLToPath(f)
    if (!f || this.#cwd === undefined) return f
    else f = f.replace(/\\/g, '/')
    if (f.startsWith(`${this.#cwd}/`)) {
      return f.substring(this.#cwd.length + 1)
    }
    return f
  }

  toString(): string {
    let fname = this.functionName || ''
    const tn = this.typeName
      ? this.typeName + '.' + (this.methodName || '<anonymous>')
      : ''
    if (!fname && tn) {
      fname = tn
    }
    if (fname && this.methodName && fname !== tn) {
      fname += ` [as ${this.methodName}]`
    }
    if (this.isConstructor && fname) {
      fname = `new ${fname}`
    }
    let ev = ''
    const nat = this.isNative ? 'native' : ''
    let file = this.fileName || ''
    const hasLC = this.lineNumber && this.columnNumber
    if (this.evalOrigin) {
      ev = `eval at ${this.evalOrigin.toString()}`
      if (hasLC) {
        const f = this.fileName || '<anonymous>'
        let lr = `${f}:${this.lineNumber}:${this.columnNumber}`
        if (this.generated && this.generated.fileName) {
          const f = this.generated.fileName
          const { lineNumber: l, columnNumber: c } = this.generated
          lr = `${f}:${l}:${c} (${lr})`
        }
        ev += `, ${lr}`
      }
      ev = fname ? ` (${ev})` : ev
      return `${fname}${ev}`
    }

    if (!nat && (file || hasLC)) {
      if (hasLC) {
        file = file || '<anonymous>'
        file += `:${this.lineNumber}:${this.columnNumber}`
      }
    } else if (nat) {
      file = 'native'
    } else {
      file = ''
    }
    let g = ''
    if (this.generated && this.generated.fileName) {
      const { fileName, lineNumber, columnNumber } = this.generated
      g = this.#relativize(fileName) || ''
      if (g === this.fileName) g = ''
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
    return `${fname}${ev}${g}${file}`
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

    // These get hella noisy in most tests, just save the clutter
    /* c8 ignore start */
    if (
      typeName !== null &&
      typeName !== 'Object' &&
      typeName !== 'Test'
    ) {
      json.typeName = typeName
    }
    /* c8 ignore stop */

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
