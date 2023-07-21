import { Counts, TestBase } from '@tapjs/core'
import { useEffect, useState } from 'react'
import { listenCleanup } from '../listen-cleanup.js'

export const useAssertTotals = (test: TestBase) => {
  const [asserts, updateAsserts] = useState<Counts>(new Counts())
  useEffect(() =>
    listenCleanup(test, 'assert', () =>
      updateAsserts(new Counts(test.assertTotals))
    )
  )
  return asserts
}
