import type { Format } from './format.js'

// can't use buf.toString('ascii') because that unmasks high bytes
const bufToAscii = (buf: Buffer) =>
  buf
    .map(c =>
      c <= 0x20 || c >= 0x7f ? '.'.charCodeAt(0) : c
    )
    .toString()

export interface Style {
  fn: (fn: Function, cls: string) => string
  setEmpty: (cls: string) => string
  setHead: (cls: string) => string
  setTail: (indent: string) => string
  setEntrySep: () => string
  mapEmpty: (cls: string) => string
  mapHead: (cls: string) => string
  mapTail: (indent: string) => string
  mapKeyStart: () => string
  mapKeyValSep: () => string
  mapEntrySep: () => string
  circular: (node: Format) => string
  nodeId: (id: number) => string
  errorEmpty: (er: Error, cls: string) => string
  errorHead: (
    er: (Error | { name?: string; message?: string }) & {
      generatedMessage?: string
    },
    cls: string
  ) => string
  errorTail: (indent: string) => string
  pojoEmpty: (cls: string) => string
  pojoHead: (cls: string) => string
  pojoTail: (indent: string) => string
  pojoKeyValSep: () => string
  pojoEntrySep: () => string
  arrayEmpty: (cls: string) => string
  arrayHead: (cls: string) => string
  arrayTail: (indent: string) => string
  arrayEntrySep: () => string

  bufferChunkSize: number
  bufferEmpty: () => string
  bufferStart: () => string
  bufferBody: (buf: Buffer) => string
  bufferEnd: (buf: Buffer) => string

  bufferHead: () => string

  // show line numbers as offset 0x0000 through 0xffff as zero-padded hex
  // this will wrap around if you have more than 64kb buffer, but that's
  // (a) highly unusual for the use cases tcompare works in, and (b) fine.
  bufferKey: (i: number) => string
  bufferLine: (buf: Buffer, chunkSize: number) => string
  bufferLineSep: () => string
  bufferTail: (indent: string) => string
  bufferKeySep: () => string

  stringEmpty: () => string
  stringOneLine: (str: string) => string
  stringHead: () => string
  stringLineSep: () => string
  stringLine: (str: string) => string
  stringTail: (indent: string) => string

  diffable: boolean
  start: (
    indent: string,
    key: string,
    sep: string
  ) => string
}

export const styles: { [style: string]: Style } = {}

styles.pretty = {
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

styles.js = {
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
    `new ${cls}(${
      er.message ? JSON.stringify(er.message) : ''
    })`,
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
  bufferEnd: buf =>
    '", "hex") /* ' + bufToAscii(buf) + ' */',

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

// this one won't work for diffs
// same as the js style, but no indentation or \n
styles.tight = {
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
  bufferHead: styles.js.bufferHead,
  bufferKey: styles.js.bufferKey,
  bufferLine: styles.js.bufferLine,
  bufferLineSep: styles.js.bufferLineSep,
  bufferTail: styles.js.bufferTail,
  bufferKeySep: styles.js.bufferKeySep,
  diffable: false,
  start: (_indent, key, sep) => `${key}${sep}`,
}
