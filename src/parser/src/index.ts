import { EventEmitter } from 'events'
import yaml from 'tap-yaml'

import { FinalResults } from './final-results.js'
import { lineType, lineTypes } from './line-type.js'
import { parseDirective } from './parse-directive.js'
import { Plan } from './plan.js'
import { Result, TapError } from './result.js'

export type { FinalPlan } from './final-plan.js'
export { FinalResults } from './final-results.js'
export { lineType, lineTypes } from './line-type.js'
export type { ParsedLine } from './line-type.js'
export { parseDirective } from './parse-directive.js'
export type { Directive } from './parse-directive.js'
export { Plan } from './plan.js'
export { Result } from './result.js'
export type { TapError } from './result.js'
export type { EventLog }

import type etoa from 'events-to-array'
import { parse, stringify } from './statics.js'
type EventLog = ReturnType<typeof etoa>

import { unesc } from './escape.js'

export interface ParserOptions {
  name?: string
  passes?: boolean
  parent?: Parser
  level?: number
  closingTestPoint?: Result
  bail?: boolean
  omitVersion?: boolean
  buffered?: boolean
  preserveWhitespace?: boolean
  strict?: boolean
  flat?: boolean
}

export interface Pragmas {
  [pragma: string]: boolean
}

// TODO: declare event signatures

export class Parser extends EventEmitter implements NodeJS.WritableStream {
  // TODO: make these actually #private
  private child: Parser | null = null
  private current: Result | null = null
  private extraQueue: [string, string][] = []
  private maybeChild: string | null = null
  private postPlan: boolean = false
  private previousChild: Parser | null = null
  private yamlish: string = ''
  private yind: string = ''

  public aborted: boolean = false
  public bail: boolean = false
  public bailedOut: boolean | string = false
  private bailingOut: boolean | string = false
  public braceLevel: number = 0
  public buffer: string = ''
  public buffered: boolean
  public closingTestPoint: Result | null = null
  public comments: string[] = []
  public count: number = 0
  public fail: number = 0
  public failures: TapError[] = []
  public skips: (Result & { skip: string | true })[] = []
  public todos: (Result & { todo: string | true })[] = []
  public level: number
  public name: string
  public ok: boolean = true
  public omitVersion: boolean
  public parent: Parser | null = null
  public pass: number = 0
  public passes: Result[] | null
  public planComment: string = ''
  public planEnd: number = -1
  public planStart: number = -1
  public pointsSeen: Map<number, Result> = new Map()
  public pragmas: Pragmas
  public preserveWhitespace: boolean
  public readonly readable: false = false
  public readonly writable: true = true
  public results: FinalResults | null = null
  public root: Parser
  public skip: number = 0
  public strict: boolean
  public syntheticBailout: boolean = false
  public syntheticPlan: boolean = false
  public time: number | null = null
  public todo: number = 0

  constructor(onComplete?: (results: FinalResults) => any)
  constructor(
    options?: ParserOptions,
    onComplete?: (results: FinalResults) => any
  )
  constructor(
    options?: ParserOptions | ((results: FinalResults) => any),
    onComplete?: (results: FinalResults) => any
  ) {
    if (typeof options === 'function') {
      onComplete = options
      options = {} as ParserOptions
    }

    options = options || {}
    super()

    if (onComplete) this.on('complete', onComplete)

    this.name = options.name || ''
    this.parent = options.parent || null
    this.closingTestPoint = (this.parent && options.closingTestPoint) || null
    this.root = options.parent ? options.parent.root : this
    this.passes = options.passes ? [] : null
    this.level = options.level || 0

    this.bail = !!options.bail
    this.omitVersion = !!options.omitVersion
    this.buffered = !!options.buffered
    this.preserveWhitespace = options.preserveWhitespace || false

    this.strict = !!options.strict
    this.pragmas = { strict: this.strict }
  }

  get fullname(): string {
    return (
      (this.parent ? this.parent.fullname + ' ' : '') + (this.name || '')
    ).trim()
  }

  tapError(
    error: Result | { tapError: string; [k: string]: any } | string,
    line: string
  ) {
    if (line) this.emit('line', line)
    this.ok = false
    this.fail++
    if (typeof error === 'string') {
      error = {
        tapError: error,
      }
    }
    this.failures.push(error)
  }

  parseTestPoint(testPoint: RegExpMatchArray, line: string) {
    // need to hold off on this when we have a child so we can
    // associate the closing test point with the test.
    if (!this.child) this.emitResult()

    if (this.bailedOut) return

    const resId = testPoint[2]
    const res = new Result(testPoint, this)

    if (resId && this.planStart !== -1) {
      const lessThanStart = res.id < this.planStart
      const greaterThanEnd = res.id > this.planEnd
      if (lessThanStart || greaterThanEnd) {
        if (lessThanStart) res.tapError = 'id less than plan start'
        else res.tapError = 'id greater than plan end'
        res.plan = new Plan(this.planStart, this.planEnd)
        this.tapError(res, line)
      }
    }

    if (resId && this.pointsSeen.has(res.id)) {
      res.tapError = 'test point id ' + resId + ' appears multiple times'
      /* c8 ignore start */
      res.previous = this.pointsSeen.get(res.id) || null
      /* c8 ignore stop */
      this.tapError(res, line)
    } else if (resId) {
      this.pointsSeen.set(res.id, res)
    }

    if (this.child) {
      if (!this.child.closingTestPoint) this.child.closingTestPoint = res
      this.emitResult()
      // can only bail out here in the case of a child with broken diags
      // anything else would have bailed out already.
      if (this.bailedOut) return
    }

    this.emit('line', line)

    if (!res.skip && !res.todo) this.ok = this.ok && res.ok

    // hold onto it, because we might get yamlish diagnostics
    this.current = res
  }

  nonTap(data: string, didLine: boolean = false) {
    if (this.bailingOut && /^( {4})*\}\n$/.test(data)) return

    if (this.strict) {
      const err = {
        tapError: 'Non-TAP data encountered in strict mode',
        data: data,
      }
      this.tapError(err, data)
      if (this.parent) this.parent.tapError(err, data)
    }

    // emit each line, then the extra as a whole
    if (!didLine)
      data
        .split('\n')
        .slice(0, -1)
        .forEach(line => {
          line += '\n'
          if (this.current || this.extraQueue.length)
            this.extraQueue.push(['line', line])
          else this.emit('line', line)
        })

    this.emitExtra(data)
  }

  emitExtra(data: string, fromChild: boolean = false) {
    if (this.parent)
      this.parent.emitExtra(
        data.replace(/\n$/, '').replace(/^/gm, '    ') + '\n',
        true
      )
    else if (!fromChild && (this.current || this.extraQueue.length))
      this.extraQueue.push(['extra', data])
    else this.emit('extra', data)
  }

  plan(start: number, end: number, comment: string, line: string) {
    // not allowed to have more than one plan
    if (this.planStart !== -1) {
      this.nonTap(line)
      return
    }

    // can't put a plan in a child.
    if (this.child || this.yind) {
      this.nonTap(line)
      return
    }

    this.emitResult()
    if (this.bailedOut) return

    // 1..0 is a special case. Otherwise, end must be >= start
    if (end < start && end !== 0 && start !== 1) {
      if (this.strict)
        this.tapError(
          {
            tapError: 'plan end cannot be less than plan start',
            plan: { start, end },
          },
          line
        )
      else this.nonTap(line)
      return
    }

    this.planStart = start
    this.planEnd = end
    const p: Plan = new Plan(start, end, comment)
    if (p.comment) this.planComment = p.comment = comment

    // This means that the plan is coming at the END of all the tests
    // Plans MUST be either at the beginning or the very end.  We treat
    // plans like '1..0' the same, since they indicate that no tests
    // will be coming.
    if (this.count !== 0 || this.planEnd === 0) {
      const seen = new Set()
      for (const [id, res] of this.pointsSeen.entries()) {
        const tapError =
          id < start
            ? 'id less than plan start'
            : id > end
            ? 'id greater than plan end'
            : null
        if (tapError) {
          seen.add(tapError)
          res.tapError = tapError
          res.plan = new Plan(start, end)
          this.tapError(res, line)
        }
      }
      this.postPlan = true
    }

    this.emit('line', line)
    this.emit('plan', p)
  }

  resetYamlish() {
    this.yind = ''
    this.yamlish = ''
  }

  // that moment when you realize it's not what you thought it was
  yamlGarbage() {
    const yamlGarbage = this.yind + '---\n' + this.yamlish
    this.emitResult()
    if (this.bailedOut) return
    this.nonTap(yamlGarbage, true)
  }

  yamlishLine(line: string) {
    if (line === this.yind + '...\n') {
      // end the yaml block
      this.processYamlish()
    } else {
      this.yamlish += line
    }
  }

  processYamlish() {
    /* c8 ignore start */
    if (!this.current) {
      throw new Error('called processYamlish without a current test point')
    }
    /* c8 ignore stop */
    const yamlish = this.yamlish
    this.resetYamlish()

    let diags: any
    try {
      diags = yaml.parse(yamlish)
    } catch (er) {
      this.nonTap(this.yind + '---\n' + yamlish + this.yind + '...\n', true)
      return
    }

    this.current.diag = diags
    // we still don't emit the result here yet, to support diags
    // that come ahead of buffered subtests.
  }

  write(chunk: string | Uint8Array | Buffer, cb?: (...x: any[]) => any): boolean
  write(chunk: string | Uint8Array | Buffer, encoding?: BufferEncoding): boolean
  write(
    chunk: string | Uint8Array | Buffer,
    encoding?: BufferEncoding,
    cb?: (...x: any[]) => any
  ): boolean
  write(
    chunk: string | Uint8Array | Buffer,
    encoding?: BufferEncoding | ((...a: any[]) => any),
    cb?: (...x: any[]) => any
  ): boolean {
    if (this.aborted) {
      return false
    }

    if (
      typeof encoding === 'string' &&
      encoding !== 'utf8' &&
      typeof chunk === 'string'
    ) {
      chunk = Buffer.from(chunk, encoding)
    }

    if (Buffer.isBuffer(chunk)) {
      chunk = chunk.toString('utf8')
    }

    if (typeof encoding === 'function') {
      cb = encoding
      encoding = undefined
    }

    this.buffer += chunk
    do {
      const match = this.buffer.match(/^.*\r?\n/)
      if (!match) break

      this.buffer = this.buffer.substring(match[0].length)
      this.parse(match[0])
    } while (this.buffer.length)

    if (cb) process.nextTick(cb)

    return true
  }

  end(
    chunk?: string | Buffer | Uint8Array,
    encoding?: BufferEncoding,
    cb?: (...a: any[]) => any
  ): this
  end(chunk?: string | Buffer | Uint8Array, cb?: (...a: any[]) => any): this
  end(cb?: (...a: any[]) => any): this
  end(
    chunk?: string | Buffer | Uint8Array | ((...a: any[]) => any),
    encoding?: BufferEncoding | ((...a: any[]) => any),
    cb?: (...a: any[]) => any
  ): this {
    if (chunk && typeof chunk !== 'function') {
      if (typeof encoding === 'function') {
        cb = encoding
        this.write(chunk)
      } else {
        this.write(chunk, encoding)
      }
    }

    if (this.buffer) {
      this.write('\n')
    }

    // if we have yamlish, means we didn't finish with a ...
    if (this.yamlish) this.yamlGarbage()

    this.emitResult()

    if (this.syntheticBailout && this.level === 0) {
      this.syntheticBailout = false
      const reason = this.bailedOut === true ? '' : ' ' + this.bailedOut
      this.emit('line', 'Bail out!' + reason + '\n')
    }

    let skipAll: boolean = false

    if (this.planEnd === 0 && this.planStart === 1) {
      skipAll = true
      if (this.count === 0) {
        this.ok = true
      } else {
        this.tapError('Plan of 1..0, but test points encountered', '')
      }
    } else if (!this.bailedOut && this.planStart === -1) {
      if (this.count === 0 && !this.syntheticPlan) {
        this.syntheticPlan = true
        if (this.buffered) {
          this.planStart = 1
          this.planEnd = 0
        } else this.plan(1, 0, 'no tests found', '1..0 # no tests found\n')
        skipAll = true
      } else {
        this.tapError('no plan', '')
      }
    } else if (this.ok && this.count !== this.planEnd - this.planStart + 1) {
      this.tapError('incorrect number of tests', '')
    }

    this.emitComplete(skipAll)
    if (cb) process.nextTick(cb)

    return this
  }

  emitComplete(skipAll: boolean) {
    if (!this.results) {
      const res = (this.results = new FinalResults(!!skipAll, this))

      if (!res.bailout) {
        // comment a bit at the end so we know what happened.
        // but don't repeat these comments if they're already present.
        if (res.plan.end !== res.count) {
          this.emitComment(
            'test count(' + res.count + ') != plan(' + res.plan.end + ')',
            false,
            true
          )
        }
      }

      this.emit('complete', this.results)
      this.emit('finish')
      this.emit('close')
    }
  }

  version(version: number, line: string) {
    // If version is specified, must be at the very beginning.
    if (
      version >= 13 &&
      this.planStart === -1 &&
      this.count === 0 &&
      !this.current
    ) {
      this.emit('line', line)
      this.emit('version', version)
    } else this.nonTap(line)
  }

  pragma(key: string, value: boolean, line: string) {
    // can't put a pragma in a child or yaml block
    if (this.child) {
      this.nonTap(line)
      return
    }

    this.emitResult()
    if (this.bailedOut) return
    // only the 'strict' pragma is currently relevant
    if (key === 'strict') {
      this.strict = value
    }
    this.pragmas[key] = value
    this.emit('line', line)
    this.emit('pragma', key, value)
  }

  bailout(reason: string, synthetic: boolean = false) {
    this.syntheticBailout = synthetic

    if (this.bailingOut) return

    // Guard because emitting a result can trigger a forced bailout
    // if the harness decides that failures should be bailouts.
    this.bailingOut = reason || true

    if (!synthetic) this.emitResult()
    else this.current = null

    this.bailedOut = this.bailingOut
    this.ok = false
    if (!synthetic) {
      // synthetic bailouts get emitted on end
      let line = 'Bail out!'
      if (reason) line += ' ' + reason
      this.emit('line', line + '\n')
    }
    this.emit('bailout', reason)
    if (this.parent) {
      this.end()
      this.parent.bailout(reason, true)
    }
  }

  clearExtraQueue() {
    for (let c = 0; c < this.extraQueue.length; c++) {
      this.emit(this.extraQueue[c][0], this.extraQueue[c][1])
    }
    this.extraQueue.length = 0
  }

  endChild() {
    if (this.child && (!this.bailingOut || this.child.count)) {
      if (this.child.closingTestPoint)
        this.child.time = this.child.closingTestPoint.time || null
      this.previousChild = this.child
      this.child.end()
      this.child = null
    }
  }

  emitResult() {
    if (this.bailedOut) return

    this.endChild()
    this.resetYamlish()

    if (!this.current) return this.clearExtraQueue()

    const res = this.current
    this.current = null

    this.count++
    if (res.ok) {
      this.pass++
      if (this.passes) this.passes.push(res)
      const { skip, todo } = res
      if (skip) this.skips.push({ ...res, skip })
      if (todo) this.todos.push({ ...res, todo })
    } else {
      this.fail++
      if (!res.todo && !res.skip) {
        this.ok = false
        this.failures.push(res)
      }
    }

    if (res.skip) this.skip++
    if (res.todo) this.todo++

    this.emitAssert(res)
    if (this.bail && !res.ok && !res.todo && !res.skip && !this.bailingOut) {
      this.maybeChild = null
      const ind = new Array(this.level + 1).join('    ')
      let p: Parser
      for (p = this; p.parent; p = p.parent);
      const bailName = res.name ? ' ' + res.name : ''
      p.parse(ind + 'Bail out!' + bailName + '\n')
    }
    this.clearExtraQueue()
  }

  // TODO: We COULD say that any "relevant tap" line that's indented
  // by 4 spaces starts a child test, and just call it 'unnamed' if
  // it does not have a prefix comment.  In that case, any number of
  // 4-space indents can be plucked off to try to find a relevant
  // TAP line type, and if so, start the unnamed child.
  startChild(line: string) {
    const maybeBuffered = this.current && this.current.buffered
    const unindentStream = !maybeBuffered && this.maybeChild
    const indentStream =
      !maybeBuffered && !unindentStream && lineTypes.subtestIndent.test(line)

    // If we have any other result waiting in the wings, we need to emit
    // that now.  A buffered test emits its test point at the *end* of
    // the child subtest block, so as to match streamed test semantics.
    if (!maybeBuffered) this.emitResult()

    if (this.bailedOut) return

    this.child = new Parser({
      bail: this.bail,
      parent: this,
      level: this.level + 1,
      buffered: maybeBuffered || undefined,
      closingTestPoint: (maybeBuffered && this.current) || undefined,
      preserveWhitespace: this.preserveWhitespace,
      omitVersion: true,
      strict: this.strict,
    })

    this.child.on('complete', results => {
      if (!results.ok) this.ok = false
    })

    this.child.on('line', l => {
      if (l.trim() || this.preserveWhitespace) l = '    ' + l
      this.emit('line', l)
    })

    // Canonicalize the parsing result of any kind of subtest
    // if it's a buffered subtest or a non-indented Subtest directive,
    // then synthetically emit the Subtest comment
    line = line.substring(4)
    let subtestComment: string
    if (indentStream) {
      subtestComment = line
      line = ''
    } else if (maybeBuffered && this.current) {
      subtestComment = '# Subtest: ' + this.current.name + '\n'
    } else {
      subtestComment = this.maybeChild || '# Subtest\n'
    }

    this.maybeChild = null
    this.child.name = subtestComment.substring('# Subtest: '.length).trim()

    // at some point, we may wish to move 100% to preferring
    // the Subtest comment on the parent level.  If so, uncomment
    // this line, and remove the child.emitComment below.
    // this.emit('comment', subtestComment)
    if (!this.child.buffered) this.emit('line', subtestComment)
    this.emit('child', this.child)
    this.child.emitComment(subtestComment, true)
    if (line) this.child.parse(line)
  }

  destroy(er?: Error) {
    this.abort('destroyed', er)
  }

  abort(message: string = '', extra?: any) {
    if (this.child) {
      const b = this.child.buffered
      this.child.abort(message, extra)
      extra = null
      if (b) this.write('\n}\n')
    }

    let dump: string = ''
    if (extra && Object.keys(extra).length) {
      try {
        dump = yaml.stringify(extra).trimEnd()
        /* c8 ignore start */
      } catch (er) {}
      /* c8 ignore stop */
    }

    const y: string = dump
      ? '  ---\n  ' + dump.split('\n').join('\n  ') + '\n  ...\n'
      : '\n'

    const n = (this.count || 0) + 1 + (this.current ? 1 : 0)

    if (this.planEnd !== -1 && this.planEnd < n && this.parent) {
      // skip it, let the parent do this.
      this.aborted = true
      return
    }

    message = message.replace(/[\n\r\s\t]/g, ' ')
    let point = '\nnot ok ' + n + ' - ' + message + '\n' + y

    if (this.planEnd === -1) point += '1..' + n + '\n'

    this.write(point)
    this.aborted = true
    this.end()
  }

  emitAssert(res: Result) {
    this.emit('assert', res)

    // see if we need to surface to the top level
    const c = this.child || this.previousChild
    if (c) {
      this.previousChild = null
      if (
        res.name === c.name &&
        c.results &&
        res.ok === c.results.ok &&
        c.results.count &&
        !res.todo &&
        !res.skip
      ) {
        // just procedural, ignore it
        return
      }
    }

    // surface result to the top level parser
    this.root.emit('result', res)
    if (res.skip) this.root.emit('skip', res)
    else if (res.todo) this.root.emit('todo', res)
    else if (!res.ok) this.root.emit('fail', res)
    else this.root.emit('pass', res)
  }

  emitComment(
    line: string,
    skipLine: boolean = false,
    noDuplicate: boolean = false
  ) {
    if (line.trim().charAt(0) !== '#') line = '# ' + line

    if (line.slice(-1) !== '\n') line += '\n'

    if (noDuplicate && this.comments.indexOf(line) !== -1) return

    this.comments.push(line)
    const dir = parseDirective(line.replace(/^\s*#\s*/, '').trim())
    if (dir && dir[0] === 'time' && typeof dir[1] === 'number')
      this.time = dir[1]

    if (this.current || this.extraQueue.length) {
      // no way to get here with skipLine being true
      this.extraQueue.push(['line', line])
      this.extraQueue.push(['comment', line])
    } else {
      if (!skipLine) this.emit('line', line)
      this.emit('comment', line)
    }
  }

  parse(line: string) {
    // normalize line endings
    line = line.replace(/\r\n$/, '\n')

    // sometimes empty lines get trimmed, but are still part of
    // a subtest or a yaml block.  Otherwise, nothing to parse!
    if (line === '\n') {
      if (this.child) line = '    ' + line
      else if (this.yind) line = this.yind + line
    }

    // If we're bailing out, then the only thing we want to see is the
    // end of a buffered child test.  Anything else should be ignored.
    // But!  if we're bailing out a nested child, and ANOTHER nested child
    // comes after that one, then we don't want the second child's } to
    // also show up, or it looks weird.
    if (this.bailingOut) {
      if (!/^\s*}\n$/.test(line)) return
      else if (!this.braceLevel || line.length < this.braceLevel)
        this.braceLevel = line.length
      else return
    }

    // This allows omitting even parsing the version if the test is
    // an indented child test.  Several parsers get upset when they
    // see an indented version field.
    if (this.omitVersion && lineTypes.version.test(line) && !this.yind) {
      return
    }

    // check to see if the line is indented.
    // if it is, then it's either a subtest, yaml, or garbage.
    const indent = line.match(/^[ \t]*/)
    if (indent && indent[0]) {
      this.parseIndent(line, indent[0])
      return
    }

    // In any case where we're going to emitResult, that can trigger
    // a bailout, so we need to only emit the line once we know that
    // isn't happening, to prevent cases where there's a bailout, and
    // then one more line of output.  That'll also prevent the case
    // where the test point is emitted AFTER the line that follows it.

    // buffered subtests must end with a }
    if (this.child && this.child.buffered && line === '}\n') {
      this.endChild()
      this.emit('line', line)
      this.emitResult()
      return
    }

    // just a \n, emit only if we care about whitespace
    const validLine = this.preserveWhitespace || line.trim() || this.yind
    if (line === '\n') return validLine && this.emit('line', line)

    // buffered subtest with diagnostics
    if (
      this.current &&
      line === '{\n' &&
      this.current.diag &&
      !this.current.buffered &&
      !this.child
    ) {
      this.emit('line', line)
      this.current.buffered = true
      return
    }

    // now we know it's not indented, so if it's either valid tap
    // or garbage.  Get the type of line.
    const type = lineType(line)
    if (!type) {
      this.nonTap(line)
      return
    }

    if (type[0] === 'comment') {
      this.emitComment(line)
      return
    }

    // if we have any yamlish, it's garbage now.  We tolerate non-TAP and
    // comments in the midst of yaml (though, perhaps, that's questionable
    // behavior), but any actual TAP means that the yaml block was just
    // not valid.
    if (this.yind) this.yamlGarbage()

    // If it's anything other than a comment or garbage, then any
    // maybeChild is just an unsatisfied promise.
    if (this.maybeChild) {
      this.emitComment(this.maybeChild)
      this.maybeChild = null
    }

    // nothing but comments can come after a trailing plan
    if (this.postPlan) {
      this.nonTap(line)
      return
    }

    // ok, now it's maybe a thing
    if (type[0] === 'bailout') {
      this.bailout(unesc(type[1][1].trim()), false)
      return
    }

    if (type[0] === 'pragma') {
      const pragma = type[1]
      this.pragma(pragma[2], pragma[1] === '+', line)
      return
    }

    if (type[0] === 'version') {
      const version = type[1]
      this.version(parseInt(version[1], 10), line)
      return
    }

    if (type[0] === 'plan') {
      const plan = type[1]
      this.plan(+plan[1], +plan[2], unesc(plan[3] || '').trim(), line)
      return
    }

    // streamed subtests will end when this test point is emitted
    if (type[0] === 'testPoint') {
      // note: it's weird, but possible, to have a testpoint ending in
      // { before a streamed subtest which ends with a test point
      // instead of a }.  In this case, the parser gets confused, but
      // also, even beginning to handle that means doing a much more
      // involved multi-line parse.  By that point, the subtest block
      // has already been emitted as a 'child' event, so it's too late
      // to really do the optimal thing.  The only way around would be
      // to buffer up everything and do a multi-line parse.  This is
      // rare and weird, and a multi-line parse would be a bigger
      // rewrite, so I'm allowing it as it currently is.
      this.parseTestPoint(type[1], line)
      return
    }

    // We already detected nontap up above, so the only case left
    // should be a `# Subtest:` comment.  Ignore for coverage, but
    // include the error here just for good measure.
    if (type[0] === 'subtest') {
      // this is potentially a subtest.  Not indented.
      // hold until later.
      this.maybeChild = line
      /* c8 ignore start */
    } else {
      throw new Error('Unhandled case: ' + type[0])
    }
    /* c8 ignore stop */
  }

  parseIndent(line: string, indent: string) {
    // still belongs to the child, so pass it along.
    if (this.child && line.substring(0, 4) === '    ') {
      line = line.substring(4)
      this.child.write(line)
      return
    }

    // one of:
    // - continuing yaml block
    // - starting yaml block
    // - ending yaml block
    // - body of a new child subtest that was previously introduced
    // - An indented subtest directive
    // - A comment, or garbage

    // continuing/ending yaml block
    if (this.yind) {
      if (line.indexOf(this.yind) === 0) {
        this.emit('line', line)
        this.yamlishLine(line)
        return
      } else {
        // oops!  that was not actually yamlish, I guess.
        // this is a case where the indent is shortened mid-yamlish block
        // treat existing yaml as garbage, continue parsing this line
        this.yamlGarbage()
      }
    }

    // start a yaml block under a test point
    if (this.current && !this.yind && line === indent + '---\n') {
      this.yind = indent
      this.emit('line', line)
      return
    }

    // at this point, not yamlish, and not an existing child test.
    // We may have already seen an unindented Subtest directive, or
    // a test point that ended in { indicating a buffered subtest
    // Child tests are always indented 4 spaces.
    if (line.substring(0, 4) === '    ') {
      if (
        this.maybeChild ||
        (this.current && this.current.buffered) ||
        lineTypes.subtestIndent.test(line)
      ) {
        this.startChild(line)
        return
      }

      // It's _something_ indented, if the indentation is divisible by
      // 4 spaces, and the result is actual TAP of some sort, then do
      // a child subtest for it as well.
      //
      // This will lead to some ambiguity in cases where there are multiple
      // levels of non-signaled subtests, but a Subtest comment in the
      // middle of them, which may or may not be considered "indented"
      // See the subtest-no-comment-mid-comment fixture for an example
      // of this.  As it happens, the preference is towards an indented
      // Subtest comment as the interpretation, which is the only possible
      // way to resolve this, since otherwise there's no way to distinguish
      // between an anonymous subtest with a non-indented Subtest comment,
      // and an indented Subtest comment.
      const s = line.match(/( {4})+(.*\n)$/)
      if (s && s[2].charAt(0) !== ' ') {
        // integer number of indentations.
        const type = lineType(s[2])
        if (type) {
          if (type[0] === 'comment') {
            this.emit('line', line)
            this.emitComment(line)
          } else {
            // it's relevant!  start as an "unnamed" child subtest
            this.startChild(line)
          }
          return
        }
      }
    }

    // at this point, it's either a non-subtest comment, or garbage.

    if (lineTypes.comment.test(line)) {
      this.emitComment(line)
      return
    }

    this.nonTap(line)
  }

  static parse(str: string, options: ParserOptions = {}): EventLog {
    return parse(str, options)
  }

  static stringify(msg: EventLog, options = {}): string {
    return stringify(msg, options)
  }
}
