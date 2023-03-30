// TODO: parse eval origin as if it's a stack trace line
// That means that this.evalOrigin is a CallSiteLike, with file, type,
// name, line, generated origin, etc.
// When we toString, just toString() the eval origin.
// That way nested evals still get sourceMap treatment, without this
// weird ugly double-thingie.
import { findSourceMap, SourceMap } from 'module'
import { fileURLToPath } from 'url'
import {
  Compiled,
  isCompiledCallSiteLine,
  parseCallSiteLine,
} from './parse.js'

const methodRe = /^(.*?) \[as (.*?)\]$/

export interface GeneratedResult {
  fileName: ReturnType<NodeJS.CallSite['getFileName']>
  lineNumber: ReturnType<SourceMap['findEntry']>['generatedLine']
  columnNumber?: ReturnType<SourceMap['findEntry']>['generatedColumn']
}

const isCallSite = (c: any): c is NodeJS.CallSite =>
  !!c && typeof c === 'object' && c.constructor?.name === 'CallSite'

export class CallSiteLike {
  static prepareStackTrace(e: Error, c: NodeJS.CallSite[]) {
    return c.map(c => new CallSiteLike(e, c))
  }

  #fileName: ReturnType<NodeJS.CallSite['getFileName']>
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

  get cwd(): string | undefined {
    return this.#cwd
  }

  set cwd(cwd: string | undefined) {
    this.#cwd = cwd?.replace(/\\/g, '/')
    if (this.evalOrigin) this.evalOrigin.cwd = cwd
  }

  constructor(e: Error | null, c: NodeJS.CallSite | string | Compiled) {
    if (typeof c === 'string') {
      c = parseCallSiteLine(c)
    }

    if (isCallSite(c)) {
      this.#fileName = c.getFileName()
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

      this.lineNumber = c.lineNumber === undefined ? null : c.lineNumber
      this.columnNumber =
        c.columnNumber === undefined ? null : c.columnNumber
      this.#fileName = c.fileName === undefined ? null : c.fileName
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

    if (this.#fileName && e) {
      this.#sourceMap = findSourceMap(this.#fileName, e)
      if (this.#sourceMap && typeof this.lineNumber === 'number') {
        const payload = this.#sourceMap.findEntry(
          this.lineNumber,
          this.columnNumber || 0
        )
        if (payload) {
          this.generated = {
            fileName: this.#fileName,
            lineNumber: payload.generatedLine,
            columnNumber: payload.generatedColumn,
          }

          this.#fileName = payload.originalSource
          this.lineNumber = payload.originalLine
          this.columnNumber = payload.originalColumn
        }
      }
    }
  }

  #relativize(fileName?: string | null) {
    if (!fileName || this.#cwd === undefined) return fileName
    let f = fileName
    if (f.startsWith('file://')) f = fileURLToPath(f)
    else f = f.replace(/\\/g, '/')
    if (f.startsWith(`${this.#cwd}/`)) {
      return f.substring(this.#cwd.length + 1)
    }
    return fileName
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
    let ev = this.evalOrigin ? `eval at ${this.evalOrigin.toString()}` : ''
    if (ev) {
      ev = fname ? ` (${ev})` : ev
    }
    const nat = this.isNative ? 'native' : ''
    let file = this.fileName || ''
    const hasLC =
      this.lineNumber !== undefined &&
      this.lineNumber !== null &&
      this.columnNumber !== undefined &&
      this.columnNumber !== null
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
}
