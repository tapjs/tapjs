// Format is the base class for all other comparators, and used
// directly by comparators for their "simplePrint" methods.
// It doesn't do comparison, just formatting.

import { styles } from './styles.js'
import type { Style } from './styles.js'

const arrayFrom = (obj: any) => {
  try {
    return Array.from(obj)
  } catch (_) {
    return null
  }
}

const { toString } = Object.prototype
const objToString = (obj: any) => toString.call(obj)

export interface FormatOptions {
  parent?: Format
  sort?: boolean
  // overridden in child classes when doing simplePrint()
  seen?: (obj?: any) => false | Format
  style?: string
  bufferChunkSize?: number
  key?: any
  // used when formatting Map keys
  isKey?: boolean
  level?: number
  indent?: string
  provisional?: boolean
  includeEnumerable?: boolean
  includeGetters?: boolean

  // ignored in this class, but used in all children
  expect?: any
}

export class Format {
  options: FormatOptions
  parent: Format | null
  memo: null | string
  sort: boolean
  id: null | number
  idCounter: number
  idMap: Map<any, number>
  style: Style
  bufferChunkSize: number
  key: any
  isKey: boolean
  level: number
  indent: string
  match: boolean
  object: any
  expect: any

  constructor(obj: any, options: FormatOptions = {}) {
    this.options = options
    this.parent = options.parent || null
    this.memo = null
    this.sort = !!options.sort
    if (typeof options.seen === 'function') {
      this.seen = options.seen
    }
    this.id = null
    this.idCounter = 0
    this.idMap = this.parent ? this.parent.idMap : new Map()
    const style = this.parent
      ? this.parent.style
      : styles[options.style || 'pretty']
    if (!style) {
      throw new TypeError(`unknown style: ${options.style}`)
    }
    this.style = style
    this.bufferChunkSize =
      this.style.bufferChunkSize === Infinity
        ? Infinity
        : options.bufferChunkSize ||
          this.style.bufferChunkSize

    // for printing child values of pojos and maps
    this.key = options.key

    // for printing Map keys
    this.isKey = !!options.isKey
    if (
      this.isKey &&
      !(this.parent && this.parent.isMap())
    ) {
      throw new Error(
        'isKey should only be set for Map keys'
      )
    }

    this.level = this.parent ? this.parent.level + 1 : 0
    this.indent = this.parent
      ? this.parent.indent
      : typeof options.indent === 'string'
      ? options.indent
      : '  '
    this.match = true
    this.object = obj
    this.expect = obj
  }

  incId(): number {
    return this.parent
      ? this.parent.incId()
      : (this.idCounter += 1)
  }

  getId(): number {
    if (this.id) {
      return this.id
    }
    const fromMap = this.idMap.get(this.object)
    if (fromMap) {
      return (this.id = fromMap)
    }
    const id = this.incId()
    this.idMap.set(this.object, id)
    return (this.id = id)
  }

  seen(_?: any): false | Format {
    if (!this.object || typeof this.object !== 'object') {
      return false
    }

    for (let p = this.parent; p; p = p.parent) {
      if (p.object === this.object) {
        p.id = p.id || p.getId()
        return p
      }
    }
    return false
  }

  child(
    obj: any,
    options: FormatOptions,
    cls?: typeof Format
  ) {
    // This raises an error because ts thinks 'typeof Class' is
    // a normal function, not an instantiable class. Ignore.
    //@ts-expect-error
    return new (cls || this.constructor)(obj, {
      ...this.options,
      isKey: false,
      provisional: false,
      ...options,
      parent: this,
    })
  }

  // type testing methods
  isError(): boolean {
    return this.object instanceof Error
  }

  isArguments(): boolean {
    return objToString(this.object) === '[object Arguments]'
  }

  isArray(): boolean {
    return (
      Array.isArray(this.object) ||
      this.isArguments() ||
      this.isIterable()
    )
  }

  // technically this means "is an iterable we don't have another fit for"
  // sets, arrays, maps, and streams all handled specially.
  isIterable(): boolean {
    return (
      this.object &&
      typeof this.object === 'object' &&
      !this.isSet() &&
      !this.isMap() &&
      !this.isStream() &&
      typeof this.object[Symbol.iterator] === 'function'
    )
  }

  isKeyless(): boolean {
    return (
      !this.parent ||
      this.parent.isSet() ||
      this.parent.isArray() ||
      this.parent.isString() ||
      this.isKey
    )
  }

  isStream(): boolean {
    const s = this.object
    return (
      s &&
      typeof s === 'object' &&
      (typeof s.pipe === 'function' || // readable
        typeof s.pipeTo === 'function' || // whatwg readable
        (typeof s.write === 'function' &&
          typeof s.end === 'function')) // writable
    )
  }

  isMap(): boolean {
    return this.object instanceof Map
  }

  isSet(): boolean {
    return this.object instanceof Set
  }

  isBuffer(): boolean {
    return Buffer.isBuffer(this.object)
  }

  isString(): boolean {
    return typeof this.object === 'string'
  }

  // end type checking functions

  getClass(): string {
    const ts = objToString(this.object).slice(8, -1)
    return this.object.constructor !== Object &&
      this.object.constructor &&
      this.object.constructor.name &&
      this.object.constructor.name !== ts
      ? this.object.constructor.name
      : !Object.getPrototypeOf(this.object)
      ? 'Null Object'
      : ts
  }

  get objectAsArray(): any[] | null {
    // return the object as an actual array, if we can
    const value = Array.isArray(this.object)
      ? this.object
      : this.isArray()
      ? arrayFrom(this.object)
      : null

    if (value === null) {
      this.isArray = () => false
    }

    Object.defineProperty(this, 'objectAsArray', {
      value,
      configurable: true,
    })
    return value
  }

  // printing methods

  // Change from v5: ONLY the print() method returns a string
  // everything else mutates this.memo, so that child classes
  // can track both this.memo AND this.expectMemo, and then calculate
  // a diff at the end.
  print(): string {
    if (this.memo !== null) {
      return this.memo
    }
    this.memo = ''
    const seen = this.seen(this.object)
    if (seen) {
      this.printCircular(seen)
    } else {
      this.printValue()
    }
    this.printStart()
    this.printEnd()
    // this should be impossible
    /* c8 ignore start */
    if (typeof this.memo !== 'string') {
      throw new Error(
        'failed to build memo string in print() method'
      )
    }
    /* c8 ignore stop */
    return this.memo
  }

  printValue(): void {
    switch (typeof this.object) {
      case 'undefined':
        this.printUndefined()
        break

      case 'object':
        if (!this.object) {
          this.printNull()
        } else if (this.object instanceof RegExp) {
          this.printRegExp()
        } else if (this.object instanceof Date) {
          this.printDate()
        } else {
          this.printCollection()
        }
        break

      case 'symbol':
        this.printSymbol()
        break

      case 'bigint':
        this.printBigInt()
        break

      case 'string':
        this.printString()
        break

      case 'boolean':
        this.printBoolean()
        break

      case 'number':
        this.printNumber()
        break

      case 'function':
        this.printFn()
        break
    }
  }

  printDate(): void {
    this.memo += this.object.toISOString()
  }

  printRegExp(): void {
    this.memo += this.object.toString()
  }

  printUndefined(): void {
    this.memo += 'undefined'
  }

  printNull(): void {
    this.memo += 'null'
  }

  printSymbol(): void {
    this.memo += this.object.toString()
  }

  printBigInt(): void {
    this.memo += this.object.toString() + 'n'
  }

  printBoolean(): void {
    this.memo += JSON.stringify(this.object)
  }

  printNumber(): void {
    this.memo += JSON.stringify(this.object)
  }

  printStart(): void {
    if (!this.parent) {
      this.memo = this.nodeId() + this.memo
      return
    }
    const indent = this.isKey ? '' : this.indentLevel()
    const key = this.isKeyless() ? '' : this.getKey()
    const sep = !key
      ? ''
      : this.parent && this.parent.isMap()
      ? this.style.mapKeyValSep()
      : this.style.pojoKeyValSep()
    this.memo =
      this.style.start(indent, key, sep) +
      this.nodeId() +
      this.memo
  }

  printEnd(): void {
    if (!this.parent) {
      return
    }
    this.memo +=
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
  }

  getKey(): string {
    return this.parent && this.parent.isMap()
      ? this.style.mapKeyStart() +
          this.parent
            .child(this.key, { isKey: true }, Format)
            .print()
      : JSON.stringify(this.key)
  }

  printCircular(seen: Format): void {
    this.memo += this.style.circular(seen)
  }

  indentLevel(n = 0): string {
    return this.indent.repeat(this.level + n)
  }

  printCollection(): void {
    return this.isError()
      ? this.printError()
      : this.isSet()
      ? this.printSet()
      : this.isMap()
      ? this.printMap()
      : this.isBuffer()
      ? this.printBuffer()
      : this.isArray() && this.objectAsArray
      ? this.printArray()
      : // TODO streams, JSX
        this.printPojo()
  }

  nodeId(): string {
    return this.id ? this.style.nodeId(this.id) : ''
  }

  printBuffer(): void {
    if (this.parent && this.parent.isBuffer()) {
      this.memo +=
        this.style.bufferKey(this.key) +
        this.style.bufferKeySep() +
        this.style.bufferLine(
          this.object,
          this.bufferChunkSize
        )
    } else if (this.object.length === 0) {
      this.memo += this.style.bufferEmpty()
    } else if (this.bufferIsShort()) {
      this.memo +=
        this.style.bufferStart() +
        this.style.bufferBody(this.object) +
        this.style.bufferEnd(this.object)
    } else {
      this.printBufferHead()
      this.printBufferBody()
      this.printBufferTail()
    }
  }

  bufferIsShort(): boolean {
    return this.object.length < this.bufferChunkSize + 5
  }

  printBufferHead(): void {
    this.memo += this.style.bufferHead()
  }

  printBufferBody(): void {
    const c = this.bufferChunkSize
    let i: number
    for (i = 0; i < this.object.length - c; i += c) {
      this.printBufferLine(i, this.object.slice(i, i + c))
    }
    this.printBufferLastLine(i, this.object.slice(i, i + c))
  }

  printBufferLine(key: number, val: Buffer): void {
    this.printBufferLastLine(key, val)
    this.memo += this.style.bufferLineSep()
  }

  printBufferLastLine(key: any, val: Buffer): void {
    const child = this.child(val, { key })
    child.print()
    this.memo += child.memo
  }

  printBufferTail(): void {
    this.memo += this.style.bufferTail(this.indentLevel())
  }

  printSet(): void {
    if (this.setIsEmpty()) {
      this.printSetEmpty()
    } else {
      this.printSetHead()
      this.printSetBody()
      this.printSetTail()
    }
  }

  setIsEmpty(): boolean {
    return this.object.size === 0
  }

  printSetEmpty(): void {
    this.memo += this.style.setEmpty(this.getClass())
  }

  printSetHead(): void {
    this.memo += this.style.setHead(this.getClass())
  }

  printSetBody(): void {
    for (const val of this.object) {
      this.printSetEntry(val)
    }
  }

  printSetTail(): void {
    this.memo += this.style.setTail(this.indentLevel())
  }

  printSetEntry(val: any): void {
    const child = this.child(val, { key: val })
    child.print()
    this.memo += child.memo
  }

  printMap(): void {
    if (this.mapIsEmpty()) {
      this.printMapEmpty()
    } else {
      this.printMapHead()
      this.printMapBody()
      this.printMapTail()
    }
  }

  mapIsEmpty(): boolean {
    return this.object.size === 0
  }

  printMapEmpty(): void {
    this.memo += this.style.mapEmpty(this.getClass())
  }

  printMapHead(): void {
    this.memo += this.style.mapHead(this.getClass())
  }

  getMapEntries(obj: any = this.object): [string, any][] {
    // can never get here unless obj is already a map
    /* c8 ignore start */
    if (!(obj instanceof Map)) {
      throw new TypeError(
        'cannot get map entries for non-Map object'
      )
    }
    /* c8 ignore stop */
    return [...obj.entries()]
  }

  printMapBody(): void {
    for (const [key, val] of this.getMapEntries()) {
      this.printMapEntry(key, val)
    }
  }

  printMapTail(): void {
    this.memo += this.style.mapTail(this.indentLevel())
  }

  printMapEntry(key: any, val: any): void {
    const child = this.child(val, { key })
    child.print()
    this.memo += child.memo
  }

  printFn(): void {
    this.memo += this.style.fn(this.object, this.getClass())
  }

  printString(): void {
    if (this.parent && this.parent.isString()) {
      this.memo = this.style.stringLine(this.object)
    } else if (this.stringIsEmpty()) {
      this.printStringEmpty()
    } else if (this.stringIsOneLine()) {
      return this.printStringOneLine()
    } else {
      this.printStringHead()
      this.printStringBody()
      this.printStringTail()
    }
  }

  stringIsEmpty(): boolean {
    return this.object.length === 0
  }

  printStringEmpty(): void {
    this.memo += this.style.stringEmpty()
  }

  stringIsOneLine(): boolean {
    return /^[^\n]*\n?$/.test(this.object)
  }

  printStringOneLine(): void {
    this.memo += this.style.stringOneLine(this.object)
  }

  printStringHead(): void {
    this.memo += this.style.stringHead()
  }

  printStringBody(): void {
    const lines: string[] = this.object.split('\n')
    const lastLine = lines.pop()
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      this.printStringLine(i, line + '\n')
    }
    this.printStringLastLine(lines.length, lastLine + '\n')
  }

  printStringLine(key: any, val: string): void {
    this.printStringLastLine(key, val)
    this.memo += this.style.stringLineSep()
  }

  printStringLastLine(key: any, val: string): void {
    const child = this.child(val, { key })
    child.print()
    this.memo += child.memo
  }

  printStringTail(): void {
    this.memo += this.style.stringTail(this.indentLevel())
  }

  printArray(): void {
    if (this.arrayIsEmpty()) {
      this.printArrayEmpty()
    } else {
      this.printArrayHead()
      this.printArrayBody()
      this.printArrayTail()
    }
  }

  arrayIsEmpty(): boolean {
    const a = this.objectAsArray
    return !!a && a.length === 0
  }

  printArrayEmpty(): void {
    this.memo += this.style.arrayEmpty(this.getClass())
  }

  printArrayHead(): void {
    this.memo += this.style.arrayHead(this.getClass())
  }

  printArrayBody(): void {
    if (this.objectAsArray) {
      this.objectAsArray.forEach((val, key) =>
        this.printArrayEntry(key, val)
      )
    }
  }

  printArrayTail(): void {
    this.memo += this.style.arrayTail(this.indentLevel())
  }

  printArrayEntry(key: any, val: any): void {
    const child = this.child(val, { key })
    child.print()
    this.memo += child.memo
  }

  printError(): void {
    if (this.errorIsEmpty()) {
      this.printErrorEmpty()
    } else {
      this.printErrorHead()
      this.printErrorBody()
      this.printErrorTail()
    }
  }

  errorIsEmpty(): boolean {
    return this.pojoIsEmpty()
  }

  printErrorEmpty(): void {
    this.memo += this.style.errorEmpty(
      this.object,
      this.getClass()
    )
  }

  printErrorHead(): void {
    this.memo += this.style.errorHead(
      this.object,
      this.getClass()
    )
  }

  printErrorTail(): void {
    this.memo += this.style.errorTail(this.indentLevel())
  }

  printErrorBody(): void {
    this.printPojoBody()
  }

  getPojoKeys(obj: any = this.object): string[] {
    if (this.options.includeEnumerable) {
      const keys = []
      for (const i in obj) {
        keys.push(i)
      }
      return keys
    } else if (this.options.includeGetters) {
      const own = new Set(Object.keys(obj))
      const proto = Object.getPrototypeOf(obj)
      if (proto) {
        const desc = Object.getOwnPropertyDescriptors(proto)
        for (const [name, prop] of Object.entries(desc)) {
          if (
            prop.enumerable &&
            typeof prop.get === 'function'
          ) {
            // public wrappers around internal things are worth showing
            own.add(name)
          }
        }
      }
      return Array.from(own)
    } else {
      return Object.keys(obj)
    }
  }

  printPojo(): void {
    if (this.pojoIsEmpty()) {
      this.printPojoEmpty()
    } else {
      this.printPojoHead()
      this.printPojoBody()
      this.printPojoTail()
    }
  }

  pojoIsEmpty(obj: any = this.object): boolean {
    return this.getPojoKeys(obj).length === 0
  }

  printPojoEmpty(): void {
    this.memo += this.style.pojoEmpty(this.getClass())
  }

  printPojoHead(): void {
    // impossible
    /* c8 ignore start */
    if (this.memo === null) {
      throw new Error('pojo head while memo is null')
    }
    /* c8 ignore stop */
    this.memo += this.style.pojoHead(this.getClass())
  }

  printPojoBody(): void {
    const ent = this.getPojoEntries(this.object)
    for (const [key, val] of ent) {
      this.printPojoEntry(key, val)
    }
  }

  getPojoEntries(obj: any): [string, any][] {
    const ent: [string, any][] = this.getPojoKeys(obj).map(
      k => [k, obj[k]]
    )
    return this.sort
      ? ent.sort((a, b) => a[0].localeCompare(b[0], 'en'))
      : ent
  }

  printPojoTail(): void {
    this.memo += this.style.pojoTail(this.indentLevel())
  }

  printPojoEntry(key: any, val: any): void {
    const child = this.child(val, { key })
    child.print()
    this.memo += child.memo
  }
}
