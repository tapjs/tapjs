// The root Test object singleton
import { Test, TestOpts } from '@tapjs/test'
import Minipass, {
  ContiguousData,
  Encoding,
} from 'minipass'
import { FinalResults } from 'tap-parser'
import { mainScript } from './main-script.js'
import { env, proc } from './proc.js'
const stdout = proc?.stdout

const privSym = Symbol('private constructor')
type PrivateTAPCtor = {
  [privSym]: true
}
const privateTAPCtor: PrivateTAPCtor = {
  [privSym]: true,
}

let instance: TAP | undefined = undefined

const envFlag = (key: string) =>
  env[key] === undefined ? undefined : env[key] === '1'

let piped = false
let pipedToStdout = false
class TAP extends Test {
  constructor(opts: TestOpts, priv: PrivateTAPCtor) {
    if (priv !== privateTAPCtor) {
      throw new Error(
        'the TAP singleton should not be instantiated directly'
      )
    }
    const options = {
      name: mainScript('TAP'),
      diagnostic: envFlag('TAP_DIAG'),
      bail: envFlag('TAP_BAIL'),
      debug: envFlag('TAP_DEBUG'),
      omitVersion: envFlag('TAP_OMIT_VERSION'),
      ...opts,
    }
    super(options)
    instance = this
  }

  pipe(...args: Parameters<Minipass['pipe']>) {
    piped = true
    if (stdout && args[0] === stdout) {
      if (!pipedToStdout) {
        pipedToStdout = true
        this.once('bail', () => proc?.exit(1))
        proc?.once('beforeExit', () => {
          this.end()
          this.endAll()
        })
      }
    }
    return super.pipe(...args)
  }

  write(
    c: ContiguousData,
    e?: Encoding | (() => any),
    cb?: () => any
  ) {
    if (!piped && stdout) {
      this.pipe(stdout)
    }
    return super.write(c, e, cb)
  }

  oncomplete(results: FinalResults) {
    if (pipedToStdout && !results.ok && proc) {
      proc.exitCode = 1
    }
    return super.oncomplete(results)
  }
}

const getInstance = () =>
  instance || new TAP({}, privateTAPCtor)
export { getInstance as TAP }
