import { mkdirSync, statSync, unlinkSync, writeFileSync } from 'fs'
import { dirname } from 'path'

import type { SnapshotProvider } from './index.js'

const envMsg = `
Run with TAP_SNAPSHOT=1 in the environment
to create snapshots`

const snapshotHeading = `/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'`

const snapshotExport = (k: string, v: string) =>
  `exports[\`${escape(k)}\`] = \`\n${escape(v)}\n\`\n`

const snapshotData = (data: { [k: string]: string }) =>
  `${snapshotHeading}
${Object.entries(data)
  .sort(([a], [b]) => a.localeCompare(b, 'en'))
  .map(([k, v]) => snapshotExport(k, v))
  .join('\n')}`

const escape = (s: string) =>
  s.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\$\{/g, '\\${')

/**
 * This is the default snapshot provider that ships with the plugin.
 * It can be overridden by providing a `snapshotProvider` option to
 * the test options.
 */
export class SnapshotProviderDefault implements SnapshotProvider {
  #indexes: Map<string, number> = new Map()
  #snapshot?: { [k: string]: string }
  file: string

  constructor(file: string) {
    this.file = file
  }

  read(msg: string): string {
    // bump the index if this one gets used again
    const index = this.#indexes.get(msg) || 1
    this.#indexes.set(msg, index + 1)

    if (!this.#snapshot) {
      this.#load()
    }

    const entry = msg + ' ' + index
    const s = this.#snapshot?.[entry]
    if (s === undefined) {
      throw new Error(`Snapshot entry not found: "${entry}"${envMsg}`)
    }

    return s.replace(/^\n|\n$/g, '')
  }

  snap(data: string, msg: string) {
    const index = this.#indexes.get(msg) || 1
    this.#indexes.set(msg, index + 1)
    this.#snapshot = this.#snapshot || {}
    this.#snapshot[msg + ' ' + index] = data
  }

  save() {
    if (!this.#snapshot) {
      try {
        unlinkSync(this.file)
      } catch (err) {
        const er = err as NodeJS.ErrnoException
        if (er.code !== 'ENOENT') throw er
      }
      return
    }
    mkdirSync(dirname(this.file), { recursive: true })
    writeFileSync(this.file, snapshotData(this.#snapshot))
  }

  #load() {
    try {
      if (!statSync(this.file).isFile()) {
        throw 'not a file'
      }
      this.#snapshot = require(this.file)
    } catch {
      throw new Error(`Snapshot file not found: ${this.file}${envMsg}`)
    }
  }
}
