import { LoadedConfig } from '@tapjs/config'
import { readFile, unlink, writeFile } from 'fs/promises'
import { resolve } from 'path'

// return the list of entries in the save config, or []
let list: string[]
let file: string

export const readSave = async (config: LoadedConfig) => {
  if (list) return list
  const save = config.get('save')
  if (!save) return (list = [])
  if (!file) file = resolve(config.projectRoot, save)
  const d = (await readFile(file, 'utf8').catch(() => '')).trim()
  return (list = d ? d.split('\n') : [])
}
export const writeSave = async (config: LoadedConfig, list: string[]) => {
  const save = config.get('save')
  if (!save) return
  if (!file) file = resolve(config.projectRoot, save)
  if (!list.length) await unlink(file).catch(() => {})
  else await writeFile(file, list.join('\n') + '\n', 'utf8')
}
