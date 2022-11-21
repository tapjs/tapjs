// Same is the base class for all comparators
//
// We walk through both of the expect and actual objects,
// creating a Same node for each field in common, based on
// their similarity:
// - true (they're a match) omit from the result (the child node is discarded)
// - false (they're simply nonmatching) format both expect and object
// - COMPLEX - walk through child nodes
//   - if match: child node is discarded
//   - else, child node is retained (along with its non-matching children)
//
// We 'discard' by just having the print method return ''
//
// When walking child nodes, we use the shouldCompare(key) method to determine
// whether to check a given field.  In this class, this is always true (because
// we are testing for full deep sameness), but in Has classes, it's more
// complicated (only test nodes that exist in the expect object).

import { createTwoFilesPatch } from 'diff'

import { Format, FormatOptions } from './format'

const { hasOwnProperty } = Object.prototype
const { defineProperty } = Object

export interface SameOptions extends FormatOptions {
  expect: any
  parent?: Same
  key?: any
  expectKey?: any
  diffContext?: number
}

export class Same extends Format {
  provisional: boolean
  expect: any
  parent: Same | null
  simple: boolean | 'COMPLEX' | null = null
  match: boolean = true
  diffContext: number = 10

  memoExpect: string | null = null

  constructor(obj: any, options: SameOptions) {
    super(obj, options)
    this.parent = options.parent || null
    this.expect = options.expect
    if (!this.style.diffable) {
      throw new Error(
        `"${options.style}" style not appropriate for diffs`
      )
    }

    if (options.diffContext) {
      this.diffContext = options.diffContext
    }
    this.provisional = !!options.provisional
    this.simpleMatch()
  }

  simpleMatch() {
    this.simple = this.test()
    if (!this.simple) {
      this.unmatch()
    }
  }

  test() {
    const a = this.object
    const b = this.expect
    return typeof a === 'function' &&
      typeof b === 'function'
      ? a === b ||
          (a.name === b.name &&
            a.toString() === b.toString())
      : typeof a === 'symbol' || typeof b === 'symbol'
      ? typeof a === typeof b &&
        a.toString() === b.toString()
      : typeof a !== 'object' &&
        typeof b !== 'object' &&
        a == b
      ? true
      : a === b
      ? true
      : a === null || b === null
      ? a == b
      : a !== a
      ? b !== b
      : typeof a !== 'object' || typeof b !== 'object'
      ? false
      : !this.isError() && b instanceof Error
      ? false
      : this.isError() &&
        ((b.message && b.message !== a.message) ||
          (b.name && b.name !== a.name))
      ? false
      : this.isSet() && !new Format(b).isSet()
      ? false
      : this.isMap() && !new Format(b).isMap()
      ? false
      : this.isArray() && !new Format(b).isArray()
      ? false
      : Buffer.isBuffer(a) && Buffer.isBuffer(b)
      ? a.equals(b)
      : a instanceof Date && b instanceof Date
      ? a.getTime() === b.getTime()
      : a instanceof RegExp && b instanceof RegExp
      ? this.regexpSame(a, b)
      : 'COMPLEX' // might still be a deeper mismatch, of course
  }

  regexpSame(a: RegExp, b: RegExp) {
    return (
      a.source === b.source &&
      a.global === b.global &&
      a.multiline === b.multiline &&
      a.lastIndex === b.lastIndex &&
      a.ignoreCase === b.ignoreCase
    )
  }

  unmatch() {
    if (this.match) {
      this.match = false
      if (!this.provisional) {
        this.parent && this.parent.unmatch()
      }
    }
  }

  // just print the thing as-is
  simplePrint(obj: any, options: FormatOptions = {}) {
    return new Format(obj, {
      ...this.options,
      ...options,
    }).print()
  }

  seenExpect() {
    if (!this.expect || typeof this.expect !== 'object') {
      return false
    }

    for (let p = this.parent; p; p = p.parent) {
      if (p.expect === this.expect) {
        p.id = p.id || p.getId()
        return p
      }
    }
    return false
  }

  // if it's the root, then we do the diff
  // otherwise, we do the dual-walk of both trees,
  // building up the object and expect memos
  // this actually returns '' for any non-root node.
  print(): string {
    if (this.memo === null && this.memoExpect === null) {
      this.memo = ''
      this.memoExpect = ''
      if (!this.simple) {
        this.unmatch()
        this.memo += this.simplePrint(this.object)
        this.memoExpect += this.simplePrint(this.expect)
      } else if (this.simple === true) {
        this.memo = ''
        this.memoExpect = ''
      } else {
        // complex case
        const seen = this.seen()
        const seenExpect = this.seenExpect()
        if (seen !== seenExpect) {
          this.unmatch()
        }
        this.printCollection()
      }
    }
    return this.diff()
  }

  diff(): string {
    if (this.memoExpect === null || this.memo === null) {
      throw new TypeError('called diff() prior to print()')
    }

    if (
      this.parent ||
      this.match ||
      this.memoExpect === this.memo
    ) {
      return ''
    }

    return createTwoFilesPatch(
      'expected',
      'actual',
      this.memoExpect + '\n',
      this.memo + '\n',
      undefined,
      undefined,
      { context: this.diffContext }
    ).replace(/^\=+\n/, '')
  }

  child(
    obj: any,
    options: FormatOptions | SameOptions,
    cls?: typeof Same
  ) {
    const expectKey = hasOwnProperty.call(
      options,
      'expectKey'
    )
      ? (options as SameOptions).expectKey
      : options.key
    return super.child(
      obj,
      {
        ...options,
        expect: this.childExpect(expectKey),
      },
      cls
    )
  }

  childExpect(key: any) {
    // if we get here, we know that both expect and actual
    // are collections of the same type.  Otherwise they
    // would have gotten the simple printed diff.
    return this.isSet()
      ? key
      : this.isMap()
      ? this.expect.get(key)
      : this.isArray()
      ? (this.expectAsArray as any[])[key]
      : this.expect[key]
  }

  get expectAsArray() {
    const value = Array.isArray(this.expect)
      ? this.expect
      : this.isArray()
      ? Array.from(this.expect)
      : null

    defineProperty(this, 'expectAsArray', { value })
    return value
  }

  printStart(): void {
    if (!this.parent) {
      return
    }
    const indent = this.isKey ? '' : this.indentLevel()
    const key = this.isKeyless() ? '' : this.getKey()
    const sep = !key
      ? ''
      : this.parent && this.parent.isMap()
      ? this.style.mapKeyValSep()
      : this.style.pojoKeyValSep()
    const start = this.style.start(indent, key, sep)
    this.memo = start + this.memo
    this.memoExpect = start + this.memoExpect
  }

  printEnd(): void {
    if (!this.parent) {
      return
    }
    const end =
      this.isKey || !this.parent
        ? ''
        : this.parent.isMap()
        ? this.style.mapEntrySep()
        : this.parent.isBuffer()
        ? ''
        : this.parent.isArray()
        ? this.style.arrayEntrySep()
        : this.parent.isSet()
        ? this.style.setEntrySep()
        : this.parent.isString()
        ? ''
        : this.style.pojoEntrySep()
    this.memo += end
    this.memoExpect += end
  }

  printPojo() {
    // even though it's not a simple mismatch, it's possible that
    // a child entry will cause a mismatch, so we have to print
    // the body *before* doing the head.  If we still aren't unmatched
    // after walking the graph, then nothing to do.
    if (this.pojoIsEmpty()) {
      this.printPojoEmpty()
    } else {
      this.printPojoBody()
      if (!this.match) {
        this.printPojoHead()
        this.printStart()
        this.printPojoTail()
        this.printEnd()
      }
    }
  }
  pojoIsEmpty() {
    return super.pojoIsEmpty() && this.pojoExpectIsEmpty()
  }
  pojoExpectIsEmpty() {
    return super.pojoIsEmpty(this.expect)
  }
  printPojoEmpty() {
    // both are empty and not a simple mismatch, nothing to do
  }
  printPojoHead() {
    const h =
      this.nodeId() + this.style.pojoHead(this.getClass())

    this.memo = h + this.memo
    this.memoExpect = h + this.memoExpect
  }
  printPojoTail() {
    const t = this.style.pojoTail(this.indentLevel())
    this.memo += t
    this.memoExpect += t
  }
  printPojoBody() {
    const objEnt = new Map(this.getPojoEntries(this.object))
    const expEnt = new Map(this.getPojoEntries(this.expect))
    for (const [key, val] of objEnt.entries()) {
      if (!expEnt.has(key)) {
        this.unmatch()
      }
      this.printPojoEntry(key, val, false)
    }
    for (const key of expEnt.keys()) {
      if (objEnt.has(key)) {
        continue
      }
      this.printPojoEntry(key, undefined, true)
    }
  }
  printPojoEntry(key: any, val: any, notFound?: boolean) {
    const child = this.child(val, { key })
    child.print()
    if (!notFound) {
      this.memo += child.memo
    }
    if (notFound || hasOwnProperty.call(this.expect, key)) {
      this.memoExpect += child.memoExpect
    }
  }

  // error is just a pojo with some fancy styling
  printError() {
    if (this.errorIsEmpty()) {
      return this.printErrorEmpty()
    } else {
      this.printErrorBody()
      if (!this.match) {
        this.printErrorHead()
        this.printStart()
        this.printErrorTail()
        this.printEnd()
      }
    }
  }
  printErrorEmpty() {
    // nothing to do
  }
  printErrorHead() {
    const headObj = this.style.errorHead(
      this.object,
      this.getClass()
    )
    this.memo = this.nodeId() + headObj + this.memo
    const headExp = this.style.errorHead(
      this.expect,
      this.getClass()
    )
    this.memoExpect =
      this.nodeId() + headExp + this.memoExpect
  }
  printErrorTail() {
    const t = this.style.errorTail(this.indentLevel())
    this.memo += t
    this.memoExpect += t
  }

  // maps are like pojos with fancier keys
  printMap(): void {
    if (this.mapIsEmpty()) {
      this.printMapEmpty()
    } else {
      this.printMapBody()
      if (!this.match) {
        this.printMapHead()
        this.printStart()
        this.printMapTail()
        this.printEnd()
      }
    }
  }
  printMapHead() {
    const h =
      this.nodeId() + this.style.mapHead(this.getClass())
    this.memo = h + this.memo
    this.memoExpect = h + this.memoExpect
  }
  printMapTail(): void {
    const t = this.style.mapTail(this.indentLevel())
    this.memo += t
    this.memoExpect += t
  }
  printMapBody(): void {
    // new Map([{}:1]) matches another new Map([{}:1])
    // so we can't rely on key identity.
    const seen = new Set()
    // first pass to get any that are key identity matches
    for (const [key, val] of this.object.entries()) {
      if (this.expect.has(key)) {
        seen.add(key)
        this.printMapEntry(key, val)
        continue
      }
    }
    for (const [key, val] of this.object.entries()) {
      if (seen.has(key)) {
        continue
      }
      // try to find a matching key not yet seen
      for (const [
        expectKey,
        expect,
      ] of this.expect.entries()) {
        if (seen.has(expectKey)) {
          continue
        }
        const s = this.child(key, {
          expect: expectKey,
          provisional: true,
        })
        s.print()
        if (s.match) {
          // it's a match!  test against this one.
          seen.add(key)
          seen.add(expectKey)
          const v = this.child(val, {
            expect,
            expectKey,
          })
          v.print()
          this.memo += v.memo
          this.memoExpect += v.memoExpect
          break
        }
      }
    }
  }
  printMapEntry(key: any, val: any) {
    const child = this.child(val, { key })
    child.print()
    this.memo += child.memo
    this.memoExpect += child.memoExpect
  }

  // arrays and sets don't have useful keys, so it's really hard to see
  // where the mismatch occurs with only the path context. For example,
  // if you have an array of objects with many keys, that mismatches on
  // only one key in one object, we would get a diff that looks like:
  //  [
  // +  {key: value},
  // -  {key: otherValue},
  // ]
  // which isn't super helpful, since you don't know which index it failed
  // on, or even have the other properties of the object or key path to
  // use to find it.
  // So, if it's not a match, we simplePrint both the expected and object,
  // and let the diff sort it out, since it does a pretty good job of that
  // anyway.
  // This can be somewhat noisy, if you have an array with a single large
  // object, of course. An alternative approach to consider is to do the
  // full simplePrint for Sets, but include the Array index in the array
  // print, so it's at least clear where it deviated.
  printArray(): void {
    if (this.arrayIsEmpty()) {
      this.printArrayEmpty()
    } else {
      this.printArrayBody()
    }
  }
  arrayIsEmpty() {
    return super.arrayIsEmpty() && this.arrayExpectIsEmpty()
  }
  arrayExpectIsEmpty(): boolean {
    const a = this.expectAsArray
    return !!a && a.length === 0
  }
  printArrayEmpty() {
    // nothing to do
  }
  printArrayHead() {
    const h =
      this.nodeId() + this.style.arrayHead(this.getClass())
    this.memo = h + this.memo
    this.memoExpect = h + this.memoExpect
  }
  printArrayTail() {
    const t = this.style.arrayTail(this.indentLevel())
    this.memo += t
    this.memoExpect += t
  }
  printArrayBody() {
    // we know that they're both arrays if we got this far
    const obj = this.objectAsArray as any[]
    const exp = this.expectAsArray as any[]
    // if lengths match, just call printArrayEntry() for each of them
    if (obj.length === exp.length) {
      super.printArrayBody()
    } else {
      this.unmatch()
    }
    if (!this.match) {
      this.memo += this.simplePrint(this.object)
      this.memoExpect += this.simplePrint(this.expect)
    }
  }
  printArrayEntry(key: number, val: any) {
    const child = this.child(val, { key })
    child.print()
  }

  printSet() {
    if (this.setIsEmpty()) {
      this.printSetEmpty()
    } else {
      this.printSetBody()
    }
  }
  setExpectIsEmpty() {
    return this.expect.size === 0
  }
  setIsEmpty() {
    return super.setIsEmpty() && this.setExpectIsEmpty()
  }
  printSetHead() {
    const h =
      this.nodeId() + this.style.setHead(this.getClass())
    this.memo = h + this.memo
    this.memoExpect = h + this.memoExpect
  }
  printSetTail() {
    const t = this.style.setTail(this.indentLevel())
    this.memo += t
    this.memoExpect += t
  }
  printSetBody() {
    if (this.expect.size !== this.object.size) {
      this.unmatch()
      this.memo += this.simplePrint(this.object)
      this.memoExpect += this.simplePrint(this.expect)
      return
    }
    const seen = new Set()
    // skip all identity matches, nothing to do for these
    for (const val of this.object) {
      if (this.expect.has(val)) {
        seen.add(val)
        continue
      }
    }
    for (const val of this.object) {
      if (seen.has(val)) {
        continue
      }
      let sawMatch = false
      for (const exp of this.expect) {
        if (seen.has(exp)) {
          continue
        }
        const s = this.child(val, {
          expect: exp,
          provisional: true,
        })
        s.print()
        if (s.match) {
          sawMatch = true
          seen.add(exp)
          break
        }
      }
      if (!sawMatch) {
        this.unmatch()
        this.memo += this.simplePrint(this.object)
        this.memoExpect += this.simplePrint(this.expect)
        return
      }
    }
  }
}
