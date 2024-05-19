import { useLayoutEffect } from 'react'

export type CleanupEffect = (
  cleanup: (() => any)[],
  doCleanup: () => void,
) => void | undefined | (() => void)

// push cleanup functions onto the array, and they'll be cleaned up
export const useCleanup = (effect: CleanupEffect, deps: any[]) =>
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
