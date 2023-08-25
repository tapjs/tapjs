import { Base, Counts, Lists } from '@tapjs/core'
import { useLayoutEffect, useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'

export const useCountsLists = (test: Base): [Counts, Lists] => {
  const [[counts, lists], update] = useState<[Counts, Lists]>([
    test.counts,
    test.lists,
  ])
  useLayoutEffect(
    () =>
      listenCleanup(test.parser, 'result', () =>
        update([test.counts, test.lists])
      ),
    [test, counts, lists]
  )
  return [counts, lists]
}
