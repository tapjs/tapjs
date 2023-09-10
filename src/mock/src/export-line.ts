/**
 * utility used in creating the source of a mocked import module
 * @module
 */

const exportIndex = new Map<string, number>()

/**
 * Create the `export` lines in the generated module source
 */
export const exportLine = (k: string, mockSrc: string): string => {
  if (k === 'default') {
    return `const defExp = ${mockSrc}.default
export default defExp
`
  }
  const kSrc = JSON.stringify(k)

  const i = exportIndex.get(mockSrc) || 0
  exportIndex.set(mockSrc, i + 1)
  return `const exp${i} = ${mockSrc}[${kSrc}]
export { exp${i} as ${kSrc} }
`
}
