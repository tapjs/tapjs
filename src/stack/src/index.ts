import { builtinModules } from 'module'
import { CallSiteLike } from './call-site-like.js'
export { CallSiteLike, CallSiteLikeJSON } from './call-site-like.js'
export type { GeneratedResult } from './call-site-like.js'
export type { Compiled, LineRef } from './parse.js'

const regExpEscape = (s: string) =>
  s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

let cwd =
  typeof process === 'object' &&
  process &&
  typeof process.cwd === 'function'
    ? process.cwd()
    : undefined

/**
 * Set the effective cwd for shortening filenames in stack traces
 * Set to `undefined` to show full absolute paths.
 */
export const setCwd = (c: string | undefined) => (cwd = c)

/**
 * Get the effective cwd for shortening filenames in stack traces
 * If set to `undefined`, then will show full absolute paths.
 */
export const getCwd = () => cwd

let filterNodeInternals = true
/**
 * Get the current value indicating whether node internals should be
 * filtered out. (Defaults to true)
 */
export const getFilterNodeInternals = () => filterNodeInternals
/**
 * Set whether node internals should be filtered out.
 */
export const setFilterNodeInternals = (s: boolean) =>
  (filterNodeInternals = s)

const ignoredPackages: string[] = ['@tapjs', 'function-loop']
let dirty: boolean = false

/**
 * Add a package name to the list of deps that should be excluded
 * from stack traces.
 */
export const addIgnoredPackage = (s: string) => {
  const i = ignoredPackages.indexOf(s)
  if (i === -1) {
    ignoredPackages.push(s)
    dirty = true
  }
}

/**
 * Remove a package name from the list of deps that should be excluded
 * from stack traces.
 */
export const removeIgnoredPackage = (s: string) => {
  const i = ignoredPackages.indexOf(s)
  if (i !== -1) {
    ignoredPackages.splice(i, 1)
    dirty = true
  }
}

/**
 * Get a read-only copy of the list of deps that should be excluded
 * from stack traces.
 */
export const getIgnoredPackages = () =>
  Object.freeze(ignoredPackages.slice(0))

const buildIgnoredPackages = () => {
  if (!ignoredPackages.length) return undefined
  const p = ignoredPackages.map(s => regExpEscape(s))
  return new RegExp(
    `[/\\\\]node_modules[/\\\\](?:${p.join('|')})([/\\\\]|$)`
  )
}
let ignoredPackagesRE: RegExp | undefined = buildIgnoredPackages()
let filterIgnoredPackages = true

/**
 * Set whether or not the list of ignored packages should
 * be excluded from stack traces.
 */
export const setFilterIgnoredPackages = (s: boolean) =>
  (filterIgnoredPackages = s)

/**
 * Get whether or not the list of ignored packages should
 * be excluded from stack traces.
 */
export const getFilterIgnoredPackages = () => filterIgnoredPackages

const filter = (c: CallSiteLike): boolean => {
  const s = c.fileName
  if (!s) return true
  if (dirty && filterIgnoredPackages) {
    ignoredPackagesRE = buildIgnoredPackages()
    dirty = false
  }
  return (
    (!filterNodeInternals ||
      !(s.startsWith('node:') || builtinModules.includes(s))) &&
    (!filterIgnoredPackages || !ignoredPackagesRE?.test(s))
  )
}

const clean = (c: CallSiteLike[]): CallSiteLike[] => {
  const filtered = c.filter(filter)
  if (cwd !== undefined) {
    for (const c of filtered) {
      c.cwd = cwd
    }
  }
  return filtered
}

/**
 * Get an array of {@link CallSiteLike} objects for the current location,
 * from the call to the `fn` argument supplied, limited to the number of
 * frames specified by `limit`.
 *
 * If the `limit` argument is 0, then the current `Error.stackTraceLimit`
 * value will be used.
 */
export function capture(
  limit: number,
  fn: Function | ((...a: any[]) => any)
): CallSiteLike[]
export function capture(limit: number): CallSiteLike[]
export function capture(
  fn: Function | ((...a: any[]) => any)
): CallSiteLike[]
export function capture(): CallSiteLike[]
export function capture(
  limit: number | Function | ((...a: any[]) => any) = 0,
  fn: Function | ((...a: any[]) => any) = capture
): CallSiteLike[] {
  if (typeof limit === 'function') {
    fn = limit
    limit = 0
  }
  const { prepareStackTrace, stackTraceLimit } = Error
  Error.prepareStackTrace = CallSiteLike.prepareStackTrace
  if (limit) {
    // we always get an extra few frames to account for internals
    // or proxy frames that might be filtered out of the top.
    Error.stackTraceLimit = limit + 10
  }
  const obj: { stack: CallSiteLike[] } = { stack: [] }
  Error.captureStackTrace(obj, fn)
  const { stack } = obj
  Object.assign(Error, { prepareStackTrace, stackTraceLimit })
  return clean(stack)
}

/**
 * Get the current callsite location, from the location specified
 * by `fn`.
 */
export const at: (
  fn?: Function | ((...a: any[]) => any)
) => CallSiteLike | undefined = (fn = at) => {
  const [site] = capture(1, fn)
  return site
}

/**
 * Same as {@link capture}, but return the `toString()` values of the
 * {@link CallSiteLike} objects
 */
export function captureString(
  limit: number,
  fn: Function | ((...a: any[]) => any)
): string
export function captureString(limit: number): string
export function captureString(
  fn: Function | ((...a: any[]) => any)
): string
export function captureString(): string
export function captureString(
  limit: number | Function | ((...a: any[]) => any) = Infinity,
  fn: Function | ((...a: any[]) => any) = captureString
): string {
  if (typeof limit === 'function') {
    fn = limit
    limit = 0
  }
  return capture(limit, fn)
    .map(c => String(c))
    .join('\n')
}

/**
 * Get an array of {@link CallSiteLike} objects corresponding to the
 * stack trace of the Error object provided.
 */
export const captureError = (e: Error): CallSiteLike[] =>
  clean(
    (e.stack || '')
      .trim()
      .split('\n')
      .slice(1)
      .filter(l => !!l)
      .map(line => new CallSiteLike(e, line))
  )

/**
 * Get a processed string stack corresponding to the
 * stack trace of the Error object provided.
 */
export const captureErrorString = (e: Error): string =>
  captureError(e)
    .map(c => String(c))
    .join('\n')

/**
 * Parse a stack string and return an array of CallSiteLike objects
 *
 * Note that without the actual Error object, we can't do SourceMap
 * lookups, but in most cases where this is used, it's with a stack that
 * was already generated by this library, including SourceMap information.
 */
export const parseStack = (s: string): CallSiteLike[] =>
  clean(
    s
      .trim()
      .split('\n')
      .filter(l => !!l.trim())
      .map(line => new CallSiteLike(null, line))
  )
