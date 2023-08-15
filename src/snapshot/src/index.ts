import type { TapPlugin, TestBase } from '@tapjs/core'
import {
  argv,
  cwd,
  env,
  mainScript,
  MessageExtra,
  normalizeMessageExtra,
} from '@tapjs/core'
import { isPromise } from 'is-actual-promise'
import { relative, resolve } from 'path'
import { CompareOptions, format, strict } from 'tcompare'
import { Deferred } from 'trivial-deferred'
import { SnapshotProviderDefault } from './provider.js'

const defaultFormatSnapshot =
  (co: CompareOptions = {}) =>
  (obj: any) =>
    format(obj, { sort: true, ...co })

/**
 * Interface provided by the class set in the `snapshotProvider` option.
 * `save()` may be an async method, but `read()` must be synchronous.
 */
export interface SnapshotProvider {
  file: string
  read(msg: string): string
  snap(data: string, msg: string): void
  save(): void | Promise<void>
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

export const plugin: TapPlugin<SnapshotPlugin, SnapshotOptions> = (
  t: TestBase,
  opts: SnapshotOptions = {}
) => new SnapshotPlugin(t, opts)

export class SnapshotPlugin {
  static #refs = new Map<TestBase, SnapshotPlugin>()
  #t: TestBase
  #provider: Exclude<SnapshotOptions['snapshotProvider'], undefined>
  #cleanSnapshot: SnapshotOptions['cleanSnapshot']
  #formatSnapshot: SnapshotOptions['formatSnapshot']
  #snapshot: SnapshotProvider
  writeSnapshot: boolean = false
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
    this.#provider =
      opts.snapshotProvider || pp || SnapshotProviderDefault

    if (typeof opts.writeSnapshot === 'boolean') {
      this.writeSnapshot = opts.writeSnapshot
    } else {
      if (p) {
        this.writeSnapshot = p.writeSnapshot
      } else {
        this.writeSnapshot =
          env.TAP_SNAPSHOT === '1' ||
          env.npm_lifecycle_event === 'snap' ||
          env.npm_lifecycle_event === 'snapshot'
      }
    }

    if (p && this.#provider === pp && snapshotFile === pf) {
      this.#snapshot = p.#snapshot
    } else {
      this.#snapshot = this.#newSnapshot(snapshotFile)
    }
  }

  #newSnapshot(f: string): SnapshotProvider {
    const snapshot = new this.#provider(f)
    if (this.writeSnapshot) {
      const onEOF = this.#t.onEOF
      this.#t.onEOF = () => {
        onEOF.call(this.#t)
        return snapshot.save()
      }
    }
    return snapshot
  }

  /**
   * Options that will be used when formatting snapshots and diffing/comparing
   * objects using any assertion methods.
   */
  get compareOptions(): Exclude<
    SnapshotOptions['compareOptions'],
    undefined
  > {
    return this.#compareOptions
  }
  set compareOptions(
    cmt: Exclude<SnapshotOptions['compareOptions'], undefined>
  ) {
    this.#compareOptions = cmt
    this.#t.options.compareOptions = cmt
  }

  /**
   * Method that will be called on snapshot strings. This can be used
   * to remove transient run-specific data from snapshots using simple
   * string transforms.
   */
  get cleanSnapshot(): SnapshotOptions['cleanSnapshot'] {
    return this.#cleanSnapshot
  }
  set cleanSnapshot(clean: SnapshotOptions['cleanSnapshot']) {
    this.#cleanSnapshot = clean
    this.#t.options.cleanSnapshot = clean
  }

  /**
   * Function that turns an object into a snapshot string.
   *
   * By default {@link tcompare!format} is used. If a string is returned,
   * then that string is the snapshot string. If any other type is returned,
   * then the returned value will be formatted using {@link tcompare!format}.
   */
  get formatSnapshot(): SnapshotOptions['formatSnapshot'] {
    return this.#formatSnapshot
  }
  set formatSnapshot(format: SnapshotOptions['formatSnapshot']) {
    this.#formatSnapshot = format
    this.#t.options.formatSnapshot = format
  }

  /**
   * The file where snapshots will be written to and read from
   */
  get snapshotFile(): string {
    return this.#snapshot.file
  }
  set snapshotFile(f: string) {
    const p =
      this.#t.parent && SnapshotPlugin.#refs.get(this.#t.parent)
    if (p && this.#snapshot === p.#snapshot) {
      this.#snapshot = this.#newSnapshot(f)
    } else {
      this.#snapshot.file = f
    }
  }

  /**
   * In `--snapshot` mode, takes a snapshot of the object provided, and writes
   * to the snapshot file.
   *
   * Otherwise, reads the snapshot file, and verifies that a snapshot of the
   * object provided matches the stored snapshot.
   *
   * @group Assertion Methods
   */
  matchSnapshot(found: any, ...[msg, extra]: MessageExtra): boolean {
    this.#t.currentAssert = this.#t.t.matchSnapshot
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('must match snapshot', args)
    const m = this.#t.fullname + ' > ' + me[0]
    if (typeof found !== 'string') {
      if (!this.#formatSnapshot) {
        for (
          let p = this.#t.parent;
          p && p.t.pluginLoaded(plugin);
          p = p.parent
        ) {
          const fs = p.t.formatSnapshot
          if (fs) {
            this.#formatSnapshot = fs
          }
        }
      }
      const format =
        this.#formatSnapshot ||
        defaultFormatSnapshot(this.#compareOptions)
      found = format(found)
      if (typeof found !== 'string') {
        found = defaultFormatSnapshot(this.#compareOptions)(found)
      }
    }

    // see if a parent had defined it if we don't.
    // pretty common to define once on the root t for the whole test.
    if (!this.#cleanSnapshot) {
      for (
        let p = this.#t.parent;
        p && p.t.pluginLoaded(plugin);
        p = p.parent
      ) {
        const cs = p.t.cleanSnapshot
        if (cs) {
          this.#cleanSnapshot = cs
        }
      }
    }

    if (this.#cleanSnapshot) {
      found = this.#cleanSnapshot(found)
    }

    if (this.writeSnapshot) {
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

  /**
   * Resolve a promise, and verify that the resulting value matches the
   * snapshot.
   *
   * @group Assertion Methods
   */
  async resolveMatchSnapshot<T extends any = any>(
    fnOrPromise: Promise<T> | (() => Promise<T>),
    ...[msg, extra]: MessageExtra
  ): Promise<boolean> {
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra(
      'promise must resolve to match snapshot',
      args
    )

    let p!: Promise<T>
    try {
      p =
        typeof fnOrPromise === 'function'
          ? fnOrPromise()
          : fnOrPromise
    } catch (er) {
      p = Promise.reject(er)
    }

    if (!isPromise(p)) {
      return this.#t.fail(
        'no promise or async function provided to t.resolveMatchSnapshot'
      )
    }

    const d = new Deferred<boolean>()
    this.#t.waitOn(d.promise)
    this.#t.currentAssert = this.#t.t.resolveMatchSnapshot
    try {
      d.resolve(this.matchSnapshot(await p, ...me))
    } catch (er) {
      d.resolve(this.#t.fail(...me))
    }
    return d.promise
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
    const args = argv.slice(2)
    const head = relative(cwd, resolve(main))
    const tail =
      args.length === 0
        ? ''
        : '-' + args.join(' ').replace(/[^a-zA-Z0-9\._\-]/g, '-')
    return resolve(cwd, 'tap-snapshots', head + tail + '.test.cjs')
  }
}

export const config = {
  snapshot: {
    type: 'boolean',
    short: 'S',
    description: `Generate snapshot files for 't.matchSnapshot()'
                  assertions.

                  Defaults to true if the TAP_SNAPSHOT environment variable
                  is set to '1', or if the npm_lifecycle_event environment
                  variable is set to either 'snap' or 'snapshot'.

                  That is, if you put "scripts": { "snap": "tap" } in your
                  package.json file, then 'npm run snap' will generate
                  snapshots.
    `,
  },
}
