import { env } from '../proc.js'
import { TapPlugin } from '../test-base.js'

// This just adds the ts-node/esm loader
export const loader = 'ts-node/esm'

export const plugin: TapPlugin<{}> = () => {
  if (env.TAP_TYPECHECK === '0') {
    env.TS_NODE_TRANSPILE_ONLY = '1'
  } else if (env.TAP_TYPECHECK === '1') {
    env.TS_NODE_TRANSPILE_ONLY = '0'
  }
  return {}
}

export const config = {
  typecheck: {
    type: 'boolean',
    default: true,
    description: `Type-check typescript test files, in addition to
                  transpiling and running them.

                  This defaults to being set, and type checking your tests
                  is generally a good idea. However, it is also often
                  considerably slower, adding as much as half a second to
                  each test suite file, which can be painful if you have
                  a lot of test files.

                  If you find that your typescript tests are taking too
                  long to run, and decide to disable type checking, it is
                  best to enable it in CI, for example by setting
                  TAP_TYPECHECK=1 in the environment.

                  The '"skipLibCheck": true' option in tsconfig will also
                  speed things up a bit, at the expense of some type safety.
    `,
  },
}
