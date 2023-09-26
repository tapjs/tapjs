import { LoadedConfig } from '@tapjs/config'
import type { TAP } from '@tapjs/core'
import * as INK from 'ink'
import { render } from 'ink-testing-library'
import { Minipass } from 'minipass'
import React, { FC } from 'react'
import t from 'tap'
import { TapReportOpts } from '../dist/esm/index.js'

// fresh env every time, with no tap configs
const originalEnv = { ...process.env }
for (const k of Object.keys(originalEnv)) {
  if (/TAP/.test(k)) delete originalEnv[k]
}
t.beforeEach(t =>
  t.intercept(process, 'env', { value: { ...originalEnv } })
)

t.test('unknown report type', async t => {
  const { report } = (await t.mockImport(
    '../dist/esm/index.js'
  )) as typeof import('../dist/esm/index.js')
  await t.rejects(
    report(
      'blorgeebloop',
      {} as unknown as TAP,
      {} as unknown as LoadedConfig
    ),
    {
      message: 'unknown report type: blorgeebloop',
    }
  )
})

t.test('render with a custom tag', async t => {
  let rendered: TapReportOpts | undefined = undefined
  const Tag: FC<TapReportOpts> = (opts: TapReportOpts) => {
    rendered = opts
    return <></>
  }
  const { report } = (await t.mockImport('../dist/esm/index.js', {
    ink: t.createMock(INK, {
      render,
    }),
  })) as typeof import('../dist/esm/index.js')
  let registered = false
  const mockTap = {
    register: () => (registered = true),
    on: () => {},
  }
  const mockConfig = {}
  await report(
    Tag,
    mockTap as unknown as TAP,
    mockConfig as unknown as LoadedConfig
  )
  t.strictSame(rendered, {
    test: mockTap,
    config: mockConfig,
  })
  t.equal(registered, true)
})

t.test('render with known ink report type', async t => {
  let rendered: TapReportOpts | undefined = undefined
  const Tag: FC<TapReportOpts> = (opts: TapReportOpts) => {
    rendered = opts
    return <></>
  }
  const { report } = (await t.mockImport('../dist/esm/index.js', {
    ink: t.createMock(INK, {
      render,
    }),
    '../dist/esm/base.js': {
      Base: Tag,
    },
  })) as typeof import('../dist/esm/index.js')
  let registered = false
  const mockTap = {
    register: () => (registered = true),
    on: () => {},
  }
  const mockConfig = {}
  await report(
    'base',
    mockTap as unknown as TAP,
    mockConfig as unknown as LoadedConfig
  )
  t.strictSame(rendered, {
    test: mockTap,
    config: mockConfig,
  })
  t.equal(registered, true)
})

t.test('render with known stream report type', async t => {
  class JUnit {
    pipe(dest: any) {
      t.equal(dest, process.stdout)
      reportPiped = true
      return dest
    }
  }
  const { report } = (await t.mockImport('../dist/esm/index.js', {
    ink: t.createMock(INK, {
      render,
    }),
    '../dist/esm/junit.js': {
      JUnit,
    },
    minipass: { Minipass, isStream: () => true },
  })) as typeof import('../dist/esm/index.js')
  let registered = false
  let tapPiped = false
  let reportPiped = false
  const mockTap = {
    register: () => (registered = true),
    on: () => {},
    pipe: (dest: any) => {
      tapPiped = true
      t.type(dest, JUnit)
      return dest
    },
  }
  const mockConfig = {}
  await report(
    'junit',
    mockTap as unknown as TAP,
    mockConfig as unknown as LoadedConfig
  )
  t.equal(registered, true)
  t.equal(tapPiped, true)
  t.equal(reportPiped, true)
})
