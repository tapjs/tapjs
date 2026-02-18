import type { LoadedConfig } from '@tapjs/config'
import type { TAP } from '@tapjs/core'
import {
  report as testReport,
  types as reportTypes,
} from '@tapjs/reporter'
import { spawn } from 'node:child_process'
import { createWriteStream } from 'node:fs'
import { WriteStream } from 'node:tty'
import { resolve } from 'node:path'
import type { Writable } from 'node:stream'
import { pathToFileURL } from 'node:url'
import { resolveImportSync } from 'resolve-import'
import { which } from '@isaacs/which'

const rawTap = (t: TAP, out: Writable) => pipe(t, out)
const pipe = (t: TAP, dest: Writable): false => {
  t.pipe(dest)
  return false
}

/**
 * Return type indicates whether or not stderr is also being handled.
 * If a stream or raw TAP is used, then `false` is returned, indicating
 * that child test process stderr is *not* handled, and stdio should be
 * inherited from main runner process.
 * If a React component is used, then it's responsible for handling the
 * stderr of any spawned child processes, and this function returns true
 * to indicate that stdio should be piped.
 */
export const handleReporter = async (t: TAP, config: LoadedConfig) => {
  // figure out if we MUST use the 'tap' reporter
  const rf = config.get('reporter-file')
  const reporter =
    rf === '/dev/null' ? 'silent' : (config.get('reporter') as string)
  const isRawTap = process.env.TAP === '1'
  const out =
    (
      !rf ||
      rf === '-' ||
      rf === '/dev/stdout' ||
      isRawTap ||
      reporter === 'silent'
    ) ?
      process.stdout
    : createWriteStream(rf)

  if (reporter === 'tap' || isRawTap) {
    return rawTap(t, out)
  }

  if (reporter === 'silent') {
    t.register()
    t.resume()
    return true
  }

  // if it's one of the keys we know, then use that
  if (reportTypes[reporter]) {
    const Type = reporter as keyof typeof reportTypes
    testReport(Type, t, config, out)
    return true
  }

  // Check to see if it's an executable program. If so, run it
  // and pipe the TAP data into its stdin.
  try {
    const stdio: ['pipe', 'inherit' | 'pipe', 'inherit'] = [
      'pipe',
      out === process.stdout ? 'inherit' : 'pipe',
      'inherit',
    ]
    const exe = await which(reporter)
    const rargs = config.get('reporter-arg') || []
    const proc = spawn(exe, rargs, {
      shell: true,
      stdio,
    })
    if (proc.stdout) proc.stdout.pipe(out)
    return pipe(t, proc.stdin as WriteStream)
  } catch {}

  // ok, not one of those, check to see if we can import it
  // load it relative to the cwd, so relative paths work.
  const from = pathToFileURL(resolve('x'))
  let mod: string
  try {
    mod = String(resolveImportSync(reporter, from))
  } catch {
    mod = ''
  }

  const imported = mod && (await import(mod).catch(() => null))?.default
  if (imported) {
    if (typeof imported === 'function') {
      // either react or stream
      if (
        typeof imported.prototype === 'object' &&
        !!imported.prototype &&
        typeof imported.prototype.write === 'function' &&
        typeof imported.prototype.end === 'function'
      ) {
        const Cls = imported as typeof Writable
        const dest = new Cls()
        dest.pipe(out)
        return pipe(t, dest)
      } else {
        // React function component
        testReport(imported, t, config, out)
        return true
      }
    }
  }

  console.error(
    `Could not load ${JSON.stringify(
      reporter,
    )} reporter. Displaying raw TAP.`,
  )
  return rawTap(t, out)
}
