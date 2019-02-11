class Format {
  constructor (obj, options = {}) {
    this.options = options
    this.parent = options.parent || null

    this.id = null
    this.idCounter = 0
    this.idMap = this.parent ? this.parent.idMap : new Map()
    this.style = this.parent ? this.parent.style
      : styles[options.style || 'pretty']
    if (!this.style)
      throw new TypeError(`unknown style: ${options.style}`)

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
  }

  incId () {
    return this.parent ? this.parent.incId() : this.idCounter += 1
  }

  getId () {
    if (this.idMap.has(this.object))
      return this.idMap.get(this.object)
    const id = this.incId()
    this.idMap.set(this.object, id)
    return id
  }

  // for use in child classes, because super.print() will end up
  // diving into the worker methods which are overridden by design.
  simplePrint (obj) {
    return new Format(obj, this.options).print()
  }

  print () {
    if (!this.parent)
      return this.printValue()

    const indent = this.isKey ? ''
      : new Array(this.level).join(this.indent)
    const key = this.parent.isSet() || this.parent.isArray() || this.isKey
      ? '' : this.key

    const sep = !key ? ''
      : this.parent.isMap() ? this.style.mapKeyValSep()
      : this.style.pojoKeyValSep()

    const start = this.parent.isMap() && !this.isKey
      ? this.style.mapKeyStart() : ''

    const end = this.isKey ? ''
      : this.parent.isMap() ? this.style.mapEntrySep()
      : this.parent.isArray() ? this.style.arrayEntrySep()
      : this.parent.isSet() ? this.style.setEntrySep()
      : this.style.pojoEntrySep()

    return `${indent}${start}${key}${sep}${this.printValue()}${end}`
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

      default:
        throw new TypeError(`what even is this ${typeof this.object}`)
    }
  }

  isArray () {
    return Array.isArray(this.object) || this.isArguments()
  }
  isMap () {
    return this.object instanceof Map
  }
  isSet () {
    return this.object instanceof Set
  }

  fn () {
    const name = this.object.name ? ` ${this.object.name}` : ''
    return `[${this.getClass()}${name}]`
  }

  collection () {
    const seen = this.seen(this.object)
    if (seen)
      return this.style.circular(seen)

    const out = this.isSet() ? this.set()
      : this.isMap() ? this.map()
      : this.isArray() ? this.array()
      // TODO buffer, error objects, JSX
      : this.pojo()

    // subject of a circular link
    return (this.id ? this.style.nodeId(this.id) : '') + out
  }

  set () {
    let out = this.style.setStart(this.getClass())
    for (const val of this.object) {
      out += this.setEntry(val)
    }
    const indent = new Array(this.level).join(this.indent)
    out += `${indent}${this.style.setEnd()}`
    return out
  }

  setEntry (val) {
    return this.child(val).print()
  }

  child (obj, options = {}) {
    return new this.constructor(obj, {
      ...this.options,
      isKey: false,
      ...options,
      parent: this,
    })
  }

  map () {
    let out = this.style.mapStart(this.getClass())
    for (const [key, val] of this.object.entries()) {
      out += this.mapEntry(key, val)
    }
    const indent = new Array(this.level).join(this.indent)
    out += `${indent}${this.style.mapEnd()}`
    return out
  }

  mapEntry (key, val) {
    const k = this.child(key, { isKey: true }).print()
    return this.child(val, {
      key: k
    }).print()
  }

  array () {
    if (this.object.length === 0)
      return this.arrayEmpty()

    let out = this.arrayStart()
    const indent = new Array(this.level).join(this.indent)
    const cindent = indent + this.indent
    const obj = Array.isArray(this.object)
      ? this.object : Array.from(this.object)
    out += obj.map((val, key) =>
      this.arrayEntry(key, val)).join('')
    out += this.arrayEnd()
    return out
  }

  arrayEmpty () {
    return this.style.arrayEmpty(this.getClass())
  }

  arrayStart () {
    return this.style.arrayStart(this.getClass())
  }

  arrayEnd () {
    const indent = new Array(this.level).join(this.indent)
    return `${indent}${this.style.arrayEnd()}`
  }

  seen () {
    for (let p = this.parent; p; p = p.parent) {
      if (p.object === this.object) {
        p.id = p.id || this.getId()
        return p
      }
    }
    return false
  }

  arrayEntry (key, val) {
    const seen = this.seen(val)
    return seen
      ? this.style.circular(seen)
      : this.child(val).print()
  }

  pojo () {
    let out = this.style.pojoStart(this.getClass())
    const indent = new Array(this.level).join(this.indent)
    const ent = Object.entries(this.object)
    out += ent.map(([key, val]) => this.pojoEntry(key, val)).join('')
    out += `${indent}${this.style.pojoEnd()}`
    return out
  }

  pojoEntry (key, val) {
    return this.child(val, { key: JSON.stringify(key) }).print()
  }

  getClass () {
    const ts = objToString(this.object).slice(8, -1)
    return ts === 'Object' &&
      this.object.constructor &&
      this.object.constructor.name &&
      this.object.constructor.name !== 'Object'
      ? this.object.constructor.name
      : ts
  }

  isArguments () {
    return Object.prototype.toString.call(this.object) ===
      '[object Arguments]'
  }

}

const styles = {
  pretty: {
    setStart: cls => `${cls} \{\n`,
    setEnd: () => '}',
    setEntrySep: () => ',\n',
    mapStart: cls => `${cls} \{\n`,
    mapEnd: cls => '}',
    mapKeyStart: () => '',
    mapKeyValSep: () => ' => ',
    mapEntrySep: () => ',\n',
    circular: node => `<*ref_${node.id}>`,
    nodeId: id => `&ref_${id} `,
    pojoStart: cls => `${cls} \{\n`,
    pojoEnd: () => '}',
    pojoKeyValSep: () => ': ',
    pojoEntrySep: () => ',\n',
    arrayEmpty: cls => `${cls} []`,
    arrayStart: cls => `${cls} [\n`,
    arrayEnd: () => ']',
    arrayEntrySep: () => ',\n',
  },

  js: {
    setStart: cls => `new ${cls}([\n`,
    setEnd: () => '])',
    setEntrySep: () => ',\n',
    mapStart: cls => `new ${cls}([\n`,
    mapEnd: () => '])',
    mapKeyStart: () => '[',
    mapKeyValSep: () => ', ',
    mapEntrySep: () => '],\n',
    circular: node => `*ref_${node.id}`,
    nodeId: id => `&ref_${id} `,
    pojoStart: cls => `\{\n`,
    pojoEnd: () => '}',
    pojoKeyValSep: () => ': ',
    pojoEntrySep: () => ',\n',
    arrayEmpty: cls => `[]`,
    arrayStart: cls => `[\n`,
    arrayEnd: () => ']',
    arrayEntrySep: () => ',\n',
  },

  // hmm... this one won't work for diffs, though.
  tight: {
    setStart: cls => `new ${cls}([`,
    setEnd: () => '])',
    setEntrySep: () => ',',
    mapStart: cls => `new ${cls}([`,
    mapEnd: () => '])',
    mapKeyStart: () => '[',
    mapKeyValSep: () => ',',
    mapEntrySep: () => '],',
    circular: node => `&${node.id}`,
    nodeId: id => `*${id} `,
    pojoStart: cls => `\{`,
    pojoEnd: () => '}',
    pojoKeyValSep: () => ':',
    pojoEntrySep: () => ',',
    arrayEmpty: cls => `[]`,
    arrayStart: cls => `[`,
    arrayEnd: () => ']',
    arrayEntrySep: () => ',',
  },
}

const hasOwn = (o, k) => Object.prototype.hasOwnProperty.call(o, k)
const objToString = obj => Object.prototype.toString.call(obj)

module.exports = Format
