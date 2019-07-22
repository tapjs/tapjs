const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')

t.test('ts-typings', t => {
  const ok = tmpfile(t, 'ts-typings/ok.ts', `
    import * as t from ${tap};
    import tap from ${tap};
    import { assertType /*, assertEquals */ } from "typescript-is";
    import { AnyFunction, AnyClass, AnyConstructor } from "tsdef";
    
    /**
     * 'typescript-is' has some limitations on what it can check and
     * what it cannot, so here are utility type convertion type
     * which helps construct type that can be checked by it.
     *
     * Recursively excludes (but still checks for existence):
     * - fields which have the same type to prevent infinite recursion
     * - functions and class constructors
     *
     * Recursively excludes (and doesn't check for existence):
     * - private/protected fields (converts classes into interfaces)
     */
    type Prepare<T> = {
      [P in keyof T]: T[P] extends T
        ? any
        : (T[P] extends AnyFunction | AnyClass | AnyConstructor
            ? any
            : Prepare<T[P]>)
    };
    
    // assertType checks that ts type is assignable to real type
    // assertEquals also checks that real type is assignable to ts type
    (t as any).notThrow(() => assertType<Prepare<typeof t>>(t));
    (t as any).notThrow(() => assertType<Prepare<typeof tap>>(tap));
  `)
  const options = {
    env: {
      TS_NODE_COMPILER_OPTIONS: JSON.stringify({
        strict: true,
        noImplicitReturns: true,
        noImplicitAny: true,
        noFallthroughCasesInSwitch: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        plugins: [
          {
            transform: 'typescript-is/lib/transform-inline/transformer'
          },
        ]
      }),
      TS_NODE_COMPILER: 'ttypescript'
    }
  }
  run([ok], options, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(o)
    t.end()
  })
})
