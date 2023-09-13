import { LoadedConfig } from '@tapjs/config'
import {readFileSync, statSync} from 'fs'
import {resolve} from 'path'
import t from 'tap'

t.test('read when save=true, return empty list', async t => {
  const globCwd = t.testdir({
    save: 'some\nthings\n',
  })
  const config = {
    globCwd,
    get: () => undefined,
  } as unknown as LoadedConfig
  const { readSave } = await t.mockImport('../dist/esm/save-list.js') as (
    typeof import('../dist/esm/save-list.js')
  )
  const list = await readSave(config)
  const fromCache = await readSave(config)
  t.equal(fromCache, list)
  t.strictSame(list, [])
})

t.test('read when save=true, load list', async t => {
  const globCwd = t.testdir({
    save: 'some\nthings\n',
  })
  const config = {
    globCwd,
    get: () => 'save',
  } as unknown as LoadedConfig
  const { readSave } = await t.mockImport('../dist/esm/save-list.js') as (
    typeof import('../dist/esm/save-list.js')
  )
  const list = await readSave(config)
  t.strictSame(list, ['some', 'things'])
})

t.test('file missing, return empty list', async t => {
  const globCwd = t.testdir({
    save: {},
  })
  const config = {
    globCwd,
    get: () => 'save',
  } as unknown as LoadedConfig
  const { readSave } = await t.mockImport('../dist/esm/save-list.js') as (
    typeof import('../dist/esm/save-list.js')
  )
  const list = await readSave(config)
  t.strictSame(list, [])
})

t.test('file empty or whitespace, return empty list', async t => {
  const globCwd = t.testdir({
    save: '\n',
  })
  const config = {
    globCwd,
    get: () => 'save',
  } as unknown as LoadedConfig
  const { readSave } = await t.mockImport('../dist/esm/save-list.js') as (
    typeof import('../dist/esm/save-list.js')
  )
  const list = await readSave(config)
  t.strictSame(list, [])
})

t.test('write save list back to file', async t => {
  const list = ['other', 'things']
  const globCwd = t.testdir({
    save: 'some\nthings\n',
  })
  const config = {
    globCwd,
    get: () => 'save',
  } as unknown as LoadedConfig
  const { writeSave } = await t.mockImport('../dist/esm/save-list.js') as (
    typeof import('../dist/esm/save-list.js')
  )
  await writeSave(config, list)
  t.equal(readFileSync(resolve(globCwd, 'save'), 'utf8'), 'other\nthings\n')
})

t.test('unlink if list is empty', async t => {
  const list: string[] = []
  const globCwd = t.testdir({
    save: 'some\nthings\n',
  })
  const config = {
    globCwd,
    get: () => 'save',
  } as unknown as LoadedConfig
  const { writeSave } = await t.mockImport('../dist/esm/save-list.js') as (
    typeof import('../dist/esm/save-list.js')
  )
  await writeSave(config, list)
  t.throws(() => statSync(resolve(globCwd, 'save')), { code: 'ENOENT' })
})

t.test('writeSave is no op if no save config', async t => {
  const list = ['other', 'things']
  const globCwd = t.testdir({
    save: 'some\nthings\n',
  })
  const config = {
    globCwd,
    get: () => undefined,
  } as unknown as LoadedConfig
  const { writeSave } = await t.mockImport('../dist/esm/save-list.js') as (
    typeof import('../dist/esm/save-list.js')
  )
  await writeSave(config, list)
  t.equal(readFileSync(resolve(globCwd, 'save'), 'utf8'), 'some\nthings\n')
})
