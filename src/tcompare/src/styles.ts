import type { Format } from './format.js'

// can't use buf.toString('ascii') because that unmasks high bytes
const bufToAscii = (buf: Buffer) =>
  buf
    .map(c => (c <= 0x20 || c >= 0x7f ? '.'.charCodeAt(0) : c))
    .toString()

export type StyleType = 'pretty' | 'js' | 'tight'

/**
 * A set of functions defining how various sorts of things get converted
 * into strings.
 */
export interface Style {
  /** a function, optionally with a class name */
  fn: (fn: Function, cls: string) => string
  /** an empty `Set` */
  setEmpty: (cls: string) => string
  /** start of a `Set` */
  setHead: (cls: string) => string
  /** end of a `Set` */
  setTail: (indent: string) => string
  /** separator between entries in a `Set` */
  setEntrySep: () => string
  /** an empty `Map` */
  mapEmpty: (cls: string) => string
  /** start of a `Map` */
  mapHead: (cls: string) => string
  /** end of a `Map` */
  mapTail: (indent: string) => string
  /** start of a key in a `Map` */
  mapKeyStart: () => string
  /** separator between key and value in a `Map` */
  mapKeyValSep: () => string
  /** separator between entries in a `Map` */
  mapEntrySep: () => string
  /** what to print when we encounter a circular reference */
  circular: (node: Format) => string
  /** how to print node identifiers for circular references */
  nodeId: (id: number) => string
  /** an empty `Error` object */
  errorEmpty: (er: Error, cls: string) => string
  /** start of an `Error` object */
  errorHead: (
    er: (Error | { name?: string; message?: string }) & {
      generatedMessage?: string
    },
    cls: string
  ) => string
  /** end of an `Error` object */
  errorTail: (indent: string) => string
  /** empty JavaScript object */
  pojoEmpty: (cls: string) => string
  /** start of a JavaScript object */
  pojoHead: (cls: string) => string
  /** end of a JavaScript object */
  pojoTail: (indent: string) => string
  /** separator between key and value in a JavaScript object */
  pojoKeyValSep: () => string
  /** separator between entries in a JavaScript object */
  pojoEntrySep: () => string
  /** an empty `Array` */
  arrayEmpty: (cls: string) => string
  /** start of an `Array` */
  arrayHead: (cls: string) => string
  /** end of an `Array` */
  arrayTail: (indent: string) => string
  /** separator between entries in an `Array` */
  arrayEntrySep: () => string

  /**
   * how many bytes of a `Buffer` to show per line. can be overridden by
   * the Format constructor options.
   * */
  bufferChunkSize: number
  /** an empty `Buffer` */
  bufferEmpty: () => string
  /** start of a short `Buffer` */
  bufferStart: () => string
  /** contents of a short `Buffer` */
  bufferBody: (buf: Buffer) => string
  /** end of a short `Buffer` */
  bufferEnd: (buf: Buffer) => string

  /** start of a long `Buffer` */
  bufferHead: () => string

  // show line numbers as offset 0x0000 through 0xffff as zero-padded hex
  // this will wrap around if you have more than 64kb buffer, but that's
  // (a) highly unusual for the use cases tcompare works in, and (b) fine.
  /** line numbers to print for lines in a long `Buffer` */
  bufferKey: (i: number) => string
  /** line of bytes in a long `Buffer` */
  bufferLine: (buf: Buffer, chunkSize: number) => string
  /** separator between lines in a long `Buffer` */
  bufferLineSep: () => string
  /** end of a long `Buffer` */
  bufferTail: (indent: string) => string
  /** separator between line number and contents of a long `Buffer` */
  bufferKeySep: () => string

  /** an empty string */
  stringEmpty: () => string
  /** a string that fits on one line */
  stringOneLine: (str: string) => string
  /** start of a long string */
  stringHead: () => string
  /** separator between lines of a long string */
  stringLineSep: () => string
  /** each line of a long string */
  stringLine: (str: string) => string
  /** end of a long string */
  stringTail: (indent: string) => string

  /** indicator as to whether this style is suitable for use in diffs */
  diffable: boolean
  /** beginning of a thing being printed */
  start: (indent: string, key: string, sep: string) => string
}

/**
 * The default style, suitable for diffs, and optimized for human
 * readability.
 */
const pretty: Style = {
  fn: (fn, cls) => {
    const name = fn.name
    const args = fn
      .toString()
      .split('{')[0]
      .split('=>')[0]
      .replace(/[\n\r\s\t]+/g, '')
      .replace(/^[^\(]*\( */, '')
      .replace(/ *\).*/g, '')
      .split(',')
      .join(', ')
      .trim()
    return `${cls} ${name || ''}(${args})`
  },
  setEmpty: cls => `${cls} \{\}`,
  setHead: cls => `${cls} \{\n`,
  setTail: indent => `${indent}}`,
  setEntrySep: () => ',\n',
  mapEmpty: cls => `${cls} \{\}`,
  mapHead: cls => `${cls} \{\n`,
  mapTail: indent => `${indent}}`,
  mapKeyStart: () => '',
  mapKeyValSep: () => ' => ',
  mapEntrySep: () => ',\n',
  circular: node => `<*ref_${node.id}>`,
  nodeId: id => `&ref_${id} `,
  errorEmpty: er =>
    !(er instanceof Error)
      ? `${(er as Error).name || '(no name)'}: ${
          (er as Error).message || '(no message)'
        }`
      : `${er.toString()}`,
  errorHead: (er, cls) => {
    // assertion errors sometimes generate WACKY stuff
    return cls === 'AssertionError' && er.generatedMessage
      ? er.name + ' {\n'
      : !(er instanceof Error)
      ? `${(er as Error).name || '(no name)'}: ${
          (er as Error).message || '(no message)'
        } \{\n`
      : `${er.toString()} \{\n`
  },
  errorTail: indent => `${indent}}`,
  pojoEmpty: cls => `${cls} \{\}`,
  pojoHead: cls => `${cls} \{\n`,
  pojoTail: indent => `${indent}}`,
  pojoKeyValSep: () => ': ',
  pojoEntrySep: () => ',\n',
  arrayEmpty: cls => `${cls} []`,
  arrayHead: cls => `${cls} [\n`,
  arrayTail: indent => `${indent}]`,
  arrayEntrySep: () => ',\n',

  bufferChunkSize: 32,
  bufferEmpty: () => 'Buffer <>',
  bufferStart: () => 'Buffer <',
  bufferBody: buf =>
    buf
      .toString('hex')
      .replace(/(....)/g, '$1 ')
      .trim(),
  bufferEnd: buf => '  ' + bufToAscii(buf) + '>',

  bufferHead: () => 'Buffer <\n',

  // show line numbers as offset 0x0000 through 0xffff as zero-padded hex
  // this will wrap around if you have more than 64kb buffer, but that's
  // (a) highly unusual for the use cases tcompare works in, and (b) fine.
  bufferKey: i => (i + 0x10000).toString(16).slice(-4),
  bufferLine: (buf, chunkSize) => {
    const hex = buf
      .toString('hex')
      .replace(/(....)/g, '$1 ')
      .trim()
    // double for hex, then add 25% for the spaces between every 4 hexits
    const l = Math.ceil(chunkSize * 2 * 1.25)
    const pad = ' '.repeat(l - hex.length + 1)
    return hex + pad + bufToAscii(buf)
  },
  bufferLineSep: () => '\n',
  bufferTail: indent => `\n${indent}>`,
  bufferKeySep: () => ': ',

  stringEmpty: () => '""',
  stringOneLine: str => JSON.stringify(str),
  stringHead: () => 'String(\n',
  stringLineSep: () => '\n',
  stringLine: str =>
    JSON.stringify(str.replace(/\n$/, ''))
      .slice(1, -1)
      .replace(/\\"/g, '"'),
  stringTail: indent => `\n${indent})`,
  diffable: true,
  start: (indent, key, sep) => `${indent}${key}${sep}`,
}

/**
 * A style that can (mostly) be copy-pasted into a JS program
 * and used as-is.
 *
 * Of course, object and function identities won't really work,
 * and if there are circular references, then the results won't
 * be valid JavaScript.
 */
const js: Style = {
  fn: (fn, _) => fn.toString(),
  setEmpty: cls => `new ${cls}()`,
  setHead: cls => `new ${cls}([\n`,
  setTail: indent => `${indent}])`,
  setEntrySep: () => ',\n',
  mapEmpty: cls => `new ${cls}()`,
  mapHead: cls => `new ${cls}([\n`,
  mapTail: indent => `${indent}])`,
  mapKeyStart: () => '[',
  mapKeyValSep: () => ', ',
  mapEntrySep: () => '],\n',
  circular: node => `*ref_${node.id}`,
  nodeId: id => `&ref_${id} `,
  errorEmpty: (er, cls) =>
    `new ${cls}(${er.message ? JSON.stringify(er.message) : ''})`,
  errorHead: (er, cls) =>
    `Object.assign(new ${cls}(${
      er.message ? JSON.stringify(er.message) : ''
    }), {\n`,
  errorTail: indent => `${indent}})`,
  pojoEmpty: _ => '{}',
  pojoHead: _ => `\{\n`,
  pojoTail: indent => `${indent}}`,
  pojoKeyValSep: () => ': ',
  pojoEntrySep: () => ',\n',
  arrayEmpty: _ => `[]`,
  arrayHead: _ => `[\n`,
  arrayTail: indent => `${indent}]`,
  arrayEntrySep: () => ',\n',

  bufferChunkSize: 32,
  bufferEmpty: () => 'Buffer.alloc(0)',
  bufferStart: () => 'Buffer.from("',
  bufferBody: buf => buf.toString('hex'),
  bufferEnd: buf => '", "hex") /* ' + bufToAscii(buf) + ' */',

  bufferHead: () => 'Buffer.from(\n',
  bufferKey: () => '',
  bufferLine: (buf, chunkSize) =>
    JSON.stringify(buf.toString('hex')) +
    ' '.repeat((chunkSize + 1) * 2 - buf.length * 2) +
    '/* ' +
    bufToAscii(buf) +
    ' */',
  bufferTail: indent => `\n${indent}, "hex")`,
  bufferLineSep: () => ' +\n',
  bufferKeySep: () => '',

  stringEmpty: () => '""',
  stringLineSep: () => ' +\n',
  stringLine: str => JSON.stringify(str),
  stringOneLine: str => JSON.stringify(str),
  stringHead: () => 'String(\n',
  stringTail: indent => `\n${indent})`,
  diffable: true,
  start: (indent, key, sep) => `${indent}${key}${sep}`,
}

/**
 * same as the {@link js} style, but no indentation or \n
 *
 * Not suitable for diffs, as everything is printed on one line.
 */
const tight: Style = {
  fn: (fn, _) => fn.toString(),
  setEmpty: cls => `new ${cls}()`,
  setHead: cls => `new ${cls}([`,
  setTail: _ => '])',
  setEntrySep: () => ',',
  mapEmpty: cls => `new ${cls}()`,
  mapHead: cls => `new ${cls}([`,
  mapTail: _ => '])',
  mapKeyStart: () => '[',
  mapKeyValSep: () => ',',
  mapEntrySep: () => '],',
  circular: node => `*${node.id}`,
  nodeId: id => `&${id} `,
  errorEmpty: (er, cls) =>
    `new ${cls}(${JSON.stringify(er.message)})`,
  errorHead: (er, cls) =>
    `Object.assign(new ${cls}(${
      er.message ? JSON.stringify(er.message) : ''
    }), {`,
  errorTail: _ => '})',
  pojoEmpty: _ => '{}',
  pojoHead: _ => `\{`,
  pojoTail: _ => '}',
  pojoKeyValSep: () => ':',
  pojoEntrySep: () => ',',
  arrayEmpty: _ => `[]`,
  arrayHead: _ => `[`,
  arrayTail: () => ']',
  arrayEntrySep: () => ',',

  // tight style doesn't need buffer head/tail/body, because it's
  // always printed as one base64 line.
  bufferChunkSize: Infinity,
  bufferEmpty: () => 'Buffer.alloc(0)',
  bufferStart: () => 'Buffer.from("',
  bufferBody: buf => buf.toString('base64'),
  bufferEnd: () => '","base64")',

  stringEmpty: () => '""',
  stringLineSep: () => '+',
  stringLine: str => JSON.stringify(str),
  stringOneLine: str => JSON.stringify(str),
  stringHead: () => '',
  stringTail: _ => '',
  bufferHead: js.bufferHead,
  bufferKey: js.bufferKey,
  bufferLine: js.bufferLine,
  bufferLineSep: js.bufferLineSep,
  bufferTail: js.bufferTail,
  bufferKeySep: js.bufferKeySep,
  diffable: false,
  start: (_indent, key, sep) => `${key}${sep}`,
}

export const styles: { [style in StyleType]: Style } = {
  pretty,
  js,
  tight,
}
