import {
  MessageExtra,
  normalizeMessageExtra,
  TapPlugin,
  TestBase,
} from '@tapjs/core'
import { relative, resolve } from 'path'
import { Deferred } from 'trivial-deferred'
import { SnapshotProviderDefault } from './provider.js'

import { CompareOptions, format, strict } from 'tcompare'
import { isPromise } from 'util/types'

const defaultFormatSnapshot = (obj: any) => format(obj, { sort: true })

export interface SnapshotProvider {
  file: string
  read(msg: string): string
  snap(daga: string, msg: string): void
  save(): void
}

export interface SnapshotOptions {
  compareOptions?: CompareOptions

  /**
   * Class to use to store and load snapshot data.
   * Defaults to SnapshotProviderDefault, which writes
   * to files in ./tap-snapshots
   * There's no hard requirement that "file" be a file on
   * disk of course. Could easily be in a database, localStorage,
   * whatever.
   */
  snapshotProvider?: {
    new (file: string): SnapshotProvider
  }

  /**
   * the "file" used to store snapshots.
   * Defaults to a filename based on the test file name and arguments,
   * in ./tap-snapshots.  Specifying the same filename will result in
   * getting the same SnapshotProvider.
   */
  snapshotFile?: string

  /**
   * whether or not to write the snapshot file.
   * Defaults true if TAP_SNAPSHOT=1 in the environment.
   */
  writeSnapshot?: boolean

  /**
   * Function used to serialize snapshotted objects to a string.
   * If a non-string is returned, then the default formatting will
   * be used, so this can also transform the object, if needed.
   */
  formatSnapshot?: (obj: any) => any

  /**
   * Function called on the string snapshot result, can be used to
   * remove changeable data, platform-specific stuff, etc.
   */
  cleanSnapshot?: (snapshotData: string) => string
}

export class SnapshotPlugin {
  static #refs = new Map<TestBase, SnapshotPlugin>()
  #t: TestBase
  #provider: Exclude<SnapshotOptions['snapshotProvider'], undefined>
  #cleanSnapshot: SnapshotOptions['cleanSnapshot']
  #formatSnapshot: SnapshotOptions['formatSnapshot']
  #snapshot: SnapshotProvider
  #writeSnapshot: boolean
  #compareOptions: CompareOptions

  constructor(t: TestBase, opts: SnapshotOptions) {
    SnapshotPlugin.#refs.set(t, this)
    this.#compareOptions = opts.compareOptions || {}
    this.#t = t
    const snapshotFile = SnapshotPlugin.#getFilename(t, opts)
    if (typeof opts.cleanSnapshot === 'function') {
      this.#cleanSnapshot = opts.cleanSnapshot
    }
    if (typeof opts.formatSnapshot === 'function') {
      this.#formatSnapshot = opts.formatSnapshot
    }
    // if the filename matches, and the provider type matches,
    // use the parent's snapshot provider object.  Otherwise,
    // create a new one.
    const p = t.parent && SnapshotPlugin.#refs.get(t.parent)
    const pp = p && p.#provider
    const pf = p && p.snapshotFile
    this.#provider = opts.snapshotProvider || pp || SnapshotProviderDefault

    if (typeof opts.writeSnapshot === 'boolean') {
      this.#writeSnapshot = opts.writeSnapshot
    } else {
      if (p) this.#writeSnapshot = p.#writeSnapshot
      else this.#writeSnapshot = env('TAP_SNAPSHOT') === '1'
    }

    if (p && this.#provider === pp && snapshotFile === pf) {
      this.#snapshot = p.#snapshot
    } else {
      this.#snapshot = this.#newSnapshot(snapshotFile)
    }
  }

  #newSnapshot(f: string): SnapshotProvider {
    const snapshot = new this.#provider(f)
    if (this.#writeSnapshot) {
      const onEOF = this.#t.onEOF
      this.#t.onEOF = () => {
        onEOF.call(this.#t)
        snapshot.save()
      }
    }
    return snapshot
  }

  get snapshotFile(): string {
    return this.#snapshot.file
  }
  set snapshotFile(f: string) {
    const p = this.#t.parent && SnapshotPlugin.#refs.get(this.#t.parent)
    if (p && this.#snapshot === p.#snapshot) {
      this.#snapshot = this.#newSnapshot(f)
    } else {
      this.#snapshot.file = f
    }
  }

  matchSnapshot(found: any, ...[msg, extra]: MessageExtra): boolean {
    this.#t.currentAssert = this.#t.t.matchSnapshot
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('should match snapshot', args)
    const m = this.#t.fullname + ' > ' + me[0]
    if (typeof found !== 'string') {
      found = (this.#formatSnapshot || defaultFormatSnapshot)(found)
      if (typeof found !== 'string') {
        found = defaultFormatSnapshot(found)
      }
    }

    if (this.#cleanSnapshot) {
      found = this.#cleanSnapshot(found)
    }

    if (this.#writeSnapshot) {
      this.#snapshot.snap(found, m)
      return this.#t.pass(...me)
    }
    const wanted = this.#snapshot.read(m)
    if (found === wanted) {
      return this.#t.pass(...me)
    }
    const { diff } = strict(found, wanted, this.#compareOptions)

    Object.assign(me[1], {
      found,
      wanted,
      diff,
      compare: '===',
    })
    return this.#t.fail(...me)
  }

  async resolveMatchSnapshot<T extends any = any>(
    fnOrPromise: Promise<T> | (() => Promise<T>),
    ...[msg, extra]: MessageExtra
  ): Promise<boolean | Error> {
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'promise should resolve to match snapshot',
      args
    )
    const d = new Deferred<boolean | Error>()
    this.#t.waitOn(d.promise)
    try {
      const p =
        typeof fnOrPromise === 'function' ? fnOrPromise() : fnOrPromise
      if (!isPromise(p)) {
        d.reject(new Error('did not provide a promise or async function'))
        return d.promise
      }
      let res: boolean | Error
      this.#t.currentAssert = this.#t.t.resolveMatchSnapshot
      try {
        res = this.matchSnapshot(await p, ...me)
      } catch (er) {
        res = this.#t.fail(...me) || (er as Error)
      }
      d.resolve(res)
      return d.promise
    } catch (er) {
      d.reject(er)
      return d.promise
    }
  }

  static #getFilename(t: TestBase, opts: SnapshotOptions): string {
    if (opts.snapshotFile) {
      return opts.snapshotFile
    }
    const p = t.parent && SnapshotPlugin.#refs.get(t.parent)
    if (p) {
      return p.snapshotFile
    }
    // get name from main file and args
    const main = mainScript()
    const args = argv().slice(2)
    const head = relative(cwd, resolve(main))
    const tail =
      args.length === 0
        ? ''
        : '-' + args.join(' ').replace(/[^a-zA-Z0-9\._\-]/g, '-')
    return resolve(cwd, 'tap-snapshots', head + tail + '.test.cjs')
  }
}

// TODO: DRY this to somewhere in core
const proc = () =>
  typeof process === 'object' && process ? process : undefined
const argv = () => proc()?.argv || []
const cwd = (() => proc()?.cwd() || '.')()
const mainScript = (def: string = 'TAP') => {
  const p = proc()
  //@ts-ignore
  if (typeof repl !== 'undefined' || (p && '_eval' in p)) {
    return def
  }
  return argv()[1] || def
}
const env = (k: string) => (proc()?.env || {})[k]

const plugin: TapPlugin<SnapshotPlugin, SnapshotOptions> = (
  t: TestBase,
  opts: SnapshotOptions = {}
) => new SnapshotPlugin(t, opts)

export default plugin
