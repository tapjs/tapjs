class Format {
  constructor (obj, options = {}) {
    this.options = options
    this.parent = options.parent || null
    this.memo = null
    this.sort = !!options.sort

    // matching object circularity needs to be handled differently,
    // by looking for matches in the expect rather than object values
    if (typeof options.seen === 'function')
      this.seen = options.seen

    this.id = null
    this.idCounter = 0
    this.idMap = this.parent ? this.parent.idMap : new Map()
    const style = this.parent ? this.parent.style
      : styles[options.style || 'pretty']
    if (!style)
      throw new TypeError(`unknown style: ${options.style}`)
    Object.defineProperty(this, 'style', { value: style })

    // for printing child values of pojos and maps
    this.key = options.key

    // for printing Map keys
    this.isKey = options.isKey
    if (this.isKey && !(this.parent && this.parent.isMap()))
      throw new Error(`isKey should only be set for Map keys`)

    this.path = (this.parent ? this.parent.path : []).concat([obj])
    this.level = this.parent ? this.parent.level + 1 : 1
    this.indent = this.style === styles.tight ? ''
      : this.parent ? this.parent.indent
      : hasOwn(options, 'indent') ? options.indent
      : '  '
    this.match = true
    this.object = obj
    this.expect = obj
  }

  incId (via) {
    return this.parent ? this.parent.incId(true)
      : this.idCounter += 1
  }

  getId () {
    if (this.idMap.has(this.object))
      return this.idMap.get(this.object)
    const id = this.incId()
    this.idMap.set(this.object, id)
    return id
  }

  print () {
    if (this.memo)
      return this.memo

    const seen = this.seen(this.object)
    const val = seen ? this.circular(seen) : this.printValue()
    if (!this.parent)
      return this.memo = val

    const start = this.printStart()
    const end = this.printEnd()

    return this.memo = `${start}${val}${end}`
  }

  printEnd () {
    return this.isKey ? ''
      : this.parent.isMap() ? this.style.mapEntrySep()
      : this.parent.isArray() ? this.style.arrayEntrySep()
      : this.parent.isSet() ? this.style.setEntrySep()
      : this.style.pojoEntrySep()
  }

  printKey (k) {
    return this.parent.isMap()
      ? this.style.mapKeyStart() +
        this.parent.child(this.key, { isKey: true }, Format).print()
      : JSON.stringify(this.key)
  }

  printStart () {
    const indent = this.isKey ? ''
      : new Array(this.level).join(this.indent)
    const key = this.parent.isSet() || this.parent.isArray() || this.isKey
      ? ''
      : this.printKey(this.key)

    const sep = !key ? ''
      : this.parent.isMap() ? this.style.mapKeyValSep()
      : this.style.pojoKeyValSep()

    return `${indent}${key}${sep}`
  }

  printValue () {
    switch (typeof this.object) {
      case 'undefined':
        return 'undefined'

      case 'object':
        if (!this.object)
          return 'null'

        if (this.object instanceof RegExp)
          return this.object.toString()

        if (this.object instanceof Date)
          return this.object.toISOString()

        return this.collection()

      case 'symbol':
        return this.object.toString()

      case 'string':
      case 'boolean':
      case 'number':
        return JSON.stringify(this.object)

      case 'function':
        return this.fn()
    }
  }

  isArray () {
    return Array.isArray(this.object) || this.isArguments() || (
      this.object &&
      typeof this.object === 'object' &&
      !this.isSet() &&
      !this.isMap() &&
      typeof this.object[Symbol.iterator] === 'function'
    )
  }
  isMap () {
    return this.object instanceof Map
  }
  isSet () {
    return this.object instanceof Set
  }

  fn () {
    return this.style.fn(this.object, this.getClass())
  }

  child (obj, options, cls) {
    return new (cls || this.constructor)(obj, {
      ...this.options,
      isKey: false,
      provisional: false,
      ...options,
      parent: this,
    })
  }

  circular (seen) {
    return this.style.circular(seen)
  }

  isError () {
    return this.object instanceof Error
  }

  collection () {
    const out = this.isError() ? this.error()
      : this.isSet() ? this.set()
      : this.isMap() ? this.map()
      : Buffer.isBuffer(this.object) ? this.buffer()
      : this.isArray() ? this.array()
      // TODO buffer, error objects, JSX
      : this.pojo()

    // subject of a circular link
    return this.nodeId() + out
  }

  nodeId () {
    return this.id ? this.style.nodeId(this.id) : ''
  }

  buffer () {
    if (this.object.length === 0)
      return this.style.bufferEmpty()
    return this.style.bufferStart() +
      this.style.bufferBody(this.object) +
      this.style.bufferEnd()
  }

  set () {
    if (this.setIsEmpty())
      return this.setEmpty()
    const b = this.setBody()
    return this.setHead() + b + this.setTail()
  }
  setIsEmpty () {
    return this.object.size === 0
  }
  setEmpty () {
    return this.style.setEmpty(this.getClass())
  }
  setHead () {
    return this.style.setHead(this.getClass())
  }
  setBody () {
    let out = ''
    for (const val of this.object) {
      out += this.setEntry(val)
    }
    return out
  }
  setTail () {
    return `${this.indentLevel()}${this.style.setTail()}`
  }
  setEntry (val) {
    return this.child(val, { key: val }).print()
  }

  map () {
    if (this.mapIsEmpty())
      return this.mapEmpty()
    const b = this.mapBody()
    return this.mapHead() + b + this.mapTail()
  }
  mapIsEmpty () {
    return this.object.size === 0
  }
  mapEmpty () {
    return this.style.mapEmpty(this.getClass())
  }
  mapHead () {
    return this.style.mapHead(this.getClass())
  }
  mapBody () {
    let out = ''
    for (const [key, val] of this.object.entries()) {
      out += this.mapEntry(key, val)
    }
    return out
  }
  mapTail () {
    return `${this.indentLevel()}${this.style.mapTail()}`
  }
  mapEntry (key, val) {
    return this.child(val, {key}).print()
  }

  array () {
    if (this.arrayIsEmpty())
      return this.arrayEmpty()
    const b = this.arrayBody()
    return this.arrayHead() + b + this.arrayTail()
  }
  arrayIsEmpty () {
    return this.object.length === 0
  }
  arrayEmpty () {
    return this.style.arrayEmpty(this.getClass())
  }
  arrayHead() {
    return this.style.arrayHead(this.getClass())
  }
  arrayBody() {
    const obj = Array.isArray(this.object)
      ? this.object : Array.from(this.object)
    return obj.map((val, key) =>
      this.arrayEntry(key, val)).join('')
  }
  arrayTail () {
    return `${this.indentLevel()}${this.style.arrayTail()}`
  }
  arrayEntry (key, val) {
    return this.child(val, { key }).print()
  }

  error () {
    if (this.errorIsEmpty())
      return this.errorEmpty()
    const b = this.errorBody()
    return this.errorHead() + b + this.errorTail()
  }
  errorIsEmpty () {
    return this.pojoIsEmpty()
  }
  errorEmpty () {
    return this.style.errorEmpty(this.object, this.getClass())
  }
  errorHead () {
    return this.style.errorHead(this.object, this.getClass())
  }
  errorTail () {
    return `${this.indentLevel()}${this.style.errorTail()}`
  }
  errorBody () {
    return this.pojoBody()
  }

  pojo () {
    // get the body first so the id can be seen
    if (this.pojoIsEmpty())
      return this.pojoEmpty()
    const b = this.pojoBody()
    return this.pojoHead() + b + this.pojoTail()
  }
  pojoIsEmpty () {
    return Object.keys(this.object).length === 0
  }
  pojoEmpty () {
    return this.style.pojoEmpty(this.getClass())
  }
  pojoHead () {
    return this.style.pojoHead(this.getClass())
  }
  pojoBody () {
    const ent = this.pojoEntries(this.object)
    let out = ''
    for (const [key, val] of ent) {
      out += this.pojoEntry(key, val)
    }
    return out
  }
  pojoEntries (object) {
    const ent = Object.entries(object)
    return this.sort ? ent.sort((a, b) => a[0].localeCompare(b[0])) : ent
  }
  pojoTail () {
    return `${this.indentLevel()}${this.style.pojoTail()}`
  }
  pojoEntry (key, val) {
    return this.child(val, {key}).print()
  }

  indentLevel () {
    return new Array(this.level).join(this.indent)
  }

  seen () {
    if (!this.object || typeof this.object !== 'object')
      return false

    for (let p = this.parent; p; p = p.parent) {
      if (p.object === this.object) {
        p.id = p.id || p.getId()
        return p
      }
    }
    return false
  }

  getClass () {
    const ts = objToString(this.object).slice(8, -1)
    return this.object.constructor !== Object &&
      this.object.constructor &&
      this.object.constructor.name &&
      this.object.constructor.name !== ts
      ? this.object.constructor.name
      : !Object.getPrototypeOf(this.object) ? 'Null Object'
      : ts
  }

  isArguments () {
    return Object.prototype.toString.call(this.object) ===
      '[object Arguments]'
  }
}

const styles = {
  pretty: {
    fn: (fn, cls) => {
      const name = fn.name
      const args = fn.toString().split('{')[0]
        .split('=>')[0]
        .replace(/[\n\r\s\t]+/g, '')
        .replace(/^[^\(]*\( */, '')
        .replace(/ *\).*/g, '')
        .split(',').join(', ')
        .trim()
      return `${cls} ${name || ''}(${args})`
    },
    setEmpty: cls => `${cls} \{\}`,
    setHead: cls => `${cls} \{\n`,
    setTail: () => '}',
    setEntrySep: () => ',\n',
    mapEmpty: cls => `${cls} \{\}`,
    mapHead: cls => `${cls} \{\n`,
    mapTail: cls => '}',
    mapKeyStart: () => '',
    mapKeyValSep: () => ' => ',
    mapEntrySep: () => ',\n',
    circular: node => `<*ref_${node.id}>`,
    nodeId: id => `&ref_${id} `,
    errorEmpty: er => `${er.toString()}`,
    errorHead: (er, cls) => {
      // assertion errors sometimes generate WACKY stuff
      return (cls === 'AssertionError' && er.generatedMessage)
        ? er.name + ' {\n'
        : `${er.toString()} \{\n`
    },
    errorTail: () => '}',
    pojoEmpty: cls => `${cls} \{\}`,
    pojoHead: cls => `${cls} \{\n`,
    pojoTail: () => '}',
    pojoKeyValSep: () => ': ',
    pojoEntrySep: () => ',\n',
    arrayEmpty: cls => `${cls} []`,
    arrayHead: cls => `${cls} [\n`,
    arrayTail: () => ']',
    arrayEntrySep: () => ',\n',
    bufferEmpty: () => 'Buffer <>',
    bufferStart: () => 'Buffer <',
    bufferBody: buf => buf.toString('hex').replace(/(..)/g, '$1 ').trim(),
    bufferEnd: () => '>',
  },

  js: {
    fn: (fn, cls) => fn.toString(),
    setEmpty: cls => `new ${cls}()`,
    setHead: cls => `new ${cls}([\n`,
    setTail: () => '])',
    setEntrySep: () => ',\n',
    mapEmpty: cls => `new ${cls}()`,
    mapHead: cls => `new ${cls}([\n`,
    mapTail: () => '])',
    mapKeyStart: () => '[',
    mapKeyValSep: () => ', ',
    mapEntrySep: () => '],\n',
    circular: node => `*ref_${node.id}`,
    nodeId: id => `&ref_${id} `,
    errorEmpty: (er, cls) => `new ${cls}(${JSON.stringify(er.message)})`,
    errorHead: (er, cls) => `Object.assign(new ${cls}(${JSON.stringify(er.message)}), {`,
    errorTail: () => '})',
    pojoEmpty: cls => '{}',
    pojoHead: cls => `\{\n`,
    pojoTail: () => '}',
    pojoKeyValSep: () => ': ',
    pojoEntrySep: () => ',\n',
    arrayEmpty: cls => `[]`,
    arrayHead: cls => `[\n`,
    arrayTail: () => ']',
    arrayEntrySep: () => ',\n',
    bufferEmpty: () => 'Buffer.alloc(0)',
    bufferStart: () => 'Buffer.from("',
    bufferBody: buf => buf.toString('hex'),
    bufferEnd: () => '", "hex")'
  },

  // hmm... this one won't work for diffs, though.
  tight: {
    fn: (fn, cls) => fn.toString(),
    setEmpty: cls => `new ${cls}()`,
    setHead: cls => `new ${cls}([`,
    setTail: () => '])',
    setEntrySep: () => ',',
    mapEmpty: cls => `new ${cls}()`,
    mapHead: cls => `new ${cls}([`,
    mapTail: () => '])',
    mapKeyStart: () => '[',
    mapKeyValSep: () => ',',
    mapEntrySep: () => '],',
    circular: node => `*${node.id}`,
    nodeId: id => `&${id} `,
    errorEmpty: (er, cls) => `new ${cls}(${JSON.stringify(er.message)})`,
    errorHead: (er, cls) => `Object.assign(new ${cls}(${JSON.stringify(er.message)}), {`,
    errorTail: () => '})',
    pojoEmpty: cls => '{}',
    pojoHead: cls => `\{`,
    pojoTail: () => '}',
    pojoKeyValSep: () => ':',
    pojoEntrySep: () => ',',
    arrayEmpty: cls => `[]`,
    arrayHead: cls => `[`,
    arrayTail: () => ']',
    arrayEntrySep: () => ',',
    bufferEmpty: () => 'Buffer.alloc(0)',
    bufferStart: () => 'Buffer.from("',
    bufferBody: buf => buf.toString('hex'),
    bufferEnd: () => '", "hex")'
  },
}

const hasOwn = (o, k) => Object.prototype.hasOwnProperty.call(o, k)
const objToString = obj => Object.prototype.toString.call(obj)

module.exports = Format
