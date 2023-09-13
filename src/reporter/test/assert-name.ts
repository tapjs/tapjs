import type { Base } from '@tapjs/core'
import t from 'tap'
import type { Result } from 'tap-parser'
import { assertName } from '../dist/esm/assert-name.js'

t.equal(
  assertName(
    {
      fullname: 'full > name',
    } as unknown as Result,
    {
      name: 'test name',
    } as unknown as Base
  ),
  'full > name'
)

t.equal(
  assertName(
    {
      fullname: 'test name > full > name',
    } as unknown as Result,
    {
      name: 'test name',
    } as unknown as Base
  ),
  'full > name'
)

t.equal(
  assertName(
    {
      fullname: 'full > name',
      diag: { test: 'test name' },
    } as unknown as Result,
    {
      name: 'test name',
    } as unknown as Base
  ),
  'test name > full > name'
)

t.equal(
  assertName(
    {
      fullname: 'full > name',
      diag: { test: 'subtest name' },
    } as unknown as Result,
    {
      name: 'test name',
    } as unknown as Base
  ),
  'subtest name > full > name'
)

t.equal(
  assertName(
    {
      fullname: 'subtest name > full > name',
      test: 'subtest name',
    } as unknown as Result,
    {
      name: 'test name',
    } as unknown as Base
  ),
  'subtest name > full > name'
)

t.equal(
  assertName(
    {
      fullname: 'subtest name > full > name',
      test: 'subtest name',
    } as unknown as Result,
    {
      name: 'test name',
    } as unknown as Base
  ),
  'subtest name > full > name'
)
