// utility used in creating the source of a mocked import module
const [_, version] = process?.version?.match(
  /v([0-9]+)\.[0-9]+\.[0-9]+$/
) || ['', '0']

const stringExports = +version >= 16

const exportIndex = new Map<string, number>()
export const exportLine = (
  k: string,
  mockSrc: string,
  callerStack: string
): string => {
  if (k === 'default') {
    return `const defExp = ${mockSrc}.default
export default defExp
`
  }
  const kSrc = JSON.stringify(k)

  if (stringExports) {
    const i = exportIndex.get(mockSrc) || 0
    exportIndex.set(mockSrc, i + 1)
    return `const exp${i} = ${mockSrc}[${kSrc}]
export { exp${i} as ${kSrc} }
`
  }

  // node 14 can't handle arbitrary string exports, so every key
  // has to be a valid identifier.
  try {
    new Function(`let ${k}`)()
  } catch {
    // make it throw from where the user actually called this
    const er = new Error(`invalid identifier in mock object: ${kSrc}`)
    er.stack = `${er.message}\n${callerStack}`
    throw er
  }
  return `export const ${k} = ${mockSrc}[${kSrc}]\n`
}
