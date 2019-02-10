class Format {
  constructor (obj, options = {}) {
    this.options = options
    const style = styles[options.style || 'pretty']
    if (!style)
      throw new TypeError(`unknown style: ${options.style}`)
    this.style = style
    this.path = options.path || []
    this.level = options.level || 1
    this.match = true
    this.indent = Object.prototype.hasOwnProperty.call(options, 'indent')
      ? options.indent : '  '
    this.object = obj
  }

  print () {
    const obj = this.object
    switch (typeof obj) {
      case 'undefined':
        return 'undefined'

      case 'object':
        if (!obj)
          return 'null'

        if (obj instanceof RegExp)
          return obj.toString()

        if (obj instanceof Date)
          return obj.toISOString()

        return this.collection(obj)

      case 'symbol':
        return obj.toString()

      case 'string':
      case 'boolean':
      case 'number':
        return JSON.stringify(obj)

      case 'function':
        return this.fn(obj)

      default:
        throw new TypeError(`what even is this ${typeof obj}`)
    }
  }

  fn (obj) {
    const name = obj.name ? ` ${obj.name}` : ''
    return `[${Format.getClass(obj)}${name}]`
  }

  collection (obj) {
    return obj instanceof Set ? this.set(obj)
      : obj instanceof Map ? this.map(obj)
      : Array.isArray(obj) ? this.array(obj)
      // TODO buffer
      : this.pojo(obj)
  }

  set (obj) {
    const cls = Format.getClass(obj)
    let out = this.style.setStart(cls)
    const indent = new Array(this.level).join(this.indent)
    const cindent = indent + this.indent
    for (const val of obj) {
      out += this.setEntry(val, cindent)
    }
    out += `${indent}${this.style.setEnd()}`
    return out
  }

  setEntry (val, indent) {
    let out = indent
    out += new Set(this.path).has(val)
      ? this.style.circular()
      : this.child(val).print()
    out += this.style.setEntrySep()
    return out
  }

  child (obj) {
    return new Format(obj, {
      ...this.options,
      path: this.path.concat([obj]),
      level: this.level + 1,
      indent: this.indent,
    })
  }

  map (obj) {
    const cls = Format.getClass(obj)
    let out = this.style.mapStart(cls)
    const indent = new Array(this.level).join(this.indent)
    const cindent = indent + this.indent
    for (const [key, val] of obj.entries()) {
      out += this.mapEntry(key, val, cindent)
    }
    out += `${indent}${this.style.mapEnd()}`
    return out
  }

  mapEntry (key, val, indent) {
    let out = indent + this.style.mapKeyStart()

    // key
    out += new Set(this.path).has(key)
      ? this.style.circular()
      : this.child(key).print()

    out += this.style.mapKeyValSep()

    // val
    out += new Set(this.path).has(key)
      ? this.style.circular()
      : this.child(val).print()
    out += this.style.mapEntrySep()

    return out
  }

  array (obj) {
    let out = this.style.arrayStart(Format.getClass(obj))
    const indent = new Array(this.level).join(this.indent)
    const cindent = indent + this.indent
    out += obj.map((val, key) => this.arrayEntry(key, val, cindent))
      .join('')
    out += `${indent}${this.style.arrayEnd()}`
    return out
  }

  arrayEntry (key, val, indent) {
    let out = indent
    out += new Set(this.path).has(val)
      ? this.style.circular()
      : this.child(val).print()
    out += this.style.arrayEntrySep()
    return out
  }

  pojo (obj) {
    let out = this.style.pojoStart(Format.getClass(obj))
    const indent = new Array(this.level).join(this.indent)
    const cindent = indent + this.indent
    const ent = Object.entries(obj)
    out += ent.map(([key, val]) => this.pojoEntry(key, val, cindent))
      .join('')
    out += `${indent}${this.style.pojoEnd()}`
    return out
  }

  pojoEntry (key, val, indent) {
    let out = indent
    out += JSON.stringify(key) + this.style.pojoKeyValSep()
    out += new Set(this.path).has(val)
      ? this.style.circular()
      : this.child(val).print()
    out += this.style.pojoEntrySep()
    return out
  }

  static getClass (o) {
    return o.constructor && o.constructor.name ||
      objToString(o).slice(8, -1)
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
    circular: () => '<Circular>',
    pojoStart: cls => `${cls} \{\n`,
    pojoEnd: () => '}',
    pojoKeyValSep: () => ': ',
    pojoEntrySep: () => ',\n',
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
    circular: () => '<Circular>',
    pojoStart: cls => `\{\n`,
    pojoEnd: () => '}',
    pojoKeyValSep: () => ': ',
    pojoEntrySep: () => ',\n',
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
    circular: () => '<!>',
    pojoStart: cls => `\{`,
    pojoEnd: () => '}',
    pojoKeyValSep: () => ':',
    pojoEntrySep: () => ',',
    arrayStart: cls => `[`,
    arrayEnd: () => ']',
    arrayEntrySep: () => ',',
  },
}

module.exports = Format
