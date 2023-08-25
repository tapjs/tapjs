import { useLayoutEffect } from 'react'

// push cleanup functions onto the array, and they'll be cleaned up
export const useCleanup = (
  effect: (
    cleanup: (() => any)[],
    doCleanup: () => void
  ) => void | undefined | (() => void),
  deps: any[]
) =>
  useLayoutEffect(() => {
    const cleanup: (() => any)[] = []
    let c: (() => void) | void | undefined = undefined
    const doCleanup = () => {
      if (c) c()
      for (const c of cleanup) c()
      cleanup.length = 0
    }
    c = effect(cleanup, doCleanup)
    return doCleanup
  }, deps)
