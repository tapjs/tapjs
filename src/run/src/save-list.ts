// return the list of entries in the save config, or []
let list: string[]
let file: string
import { readFile, unlink, writeFile } from 'fs/promises'
import { resolve } from 'path'
import { Config } from './index.js'
export const readSave = async (config: Config) => {
  if (list) return list
  const save = config.get('save')
  if (!save) return (list = [])
  if (!file) file = resolve(save, config.globCwd)
  const d = await readFile(file, 'utf8').catch(() => '')
  return (list = d.trim().split('\n'))
}
export const writeSave = async (config: Config, list: string[]) => {
  const save = config.get('save')
  if (!save) return
  if (!file) file = resolve(save, config.globCwd)
  if (!list.length) await unlink(file)
  else await writeFile(file, list.join('\n') + '\n', 'utf8')
}
