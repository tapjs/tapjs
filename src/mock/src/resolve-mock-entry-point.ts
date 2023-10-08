import { resolveImport } from 'resolve-import'

export const resolveMockEntryPoint = async (
  url: URL,
  module: string,
  serviceKey: string,
  key: string,
  caller: Function | ((...a: any[]) => any)
): Promise<string> => {
  let mockedModuleURL: URL
  if (module.startsWith('./') || module.startsWith('../')) {
    mockedModuleURL = new URL(module, url)
  } else {
    const res = (await resolveImport(module, url)) as URL
    // caught at the exposed API, defense in depth only
    // but the experience if it throws here is unhelpful.
    /* c8 ignore start */
    if (typeof res === 'string') {
      const er = new TypeError(
        'node builtins cannot be mock imported'
      )
      Error.captureStackTrace(er, caller)
      throw er
    }
    /* c8 ignore stop */
    mockedModuleURL = res
  }
  mockedModuleURL.searchParams.set('tapmock', `${serviceKey}.${key}`)
  return String(mockedModuleURL)
}
