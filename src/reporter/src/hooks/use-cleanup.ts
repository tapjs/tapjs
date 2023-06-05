import { useEffect } from 'react'

// push cleanup functions onto the array, and they'll be cleaned up
export const useCleanup = (
  effect: (
    cleanup: (() => void)[],
    doCleanup: () => void
  ) => void | undefined | (() => void),
  deps: any[]
) => {
  useEffect(() => {
    const cleanup: (() => void)[] = []
    let c: (() => void) | void | undefined = undefined
    const doCleanup = () => {
      if (c) c()
      for (const c of cleanup) c()
      cleanup.length = 0
    }
    c = effect(cleanup, doCleanup)
    return doCleanup
  }, deps)
}
