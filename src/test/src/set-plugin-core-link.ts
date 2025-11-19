/**
 * create a symlink from our @tapjs/core into the plugin dir's node_modules
 */

import { readlinkSync, symlinkSync } from 'fs'
import { mkdirpSync } from 'mkdirp'
import { dirname, resolve } from 'path'
import { rimrafSync } from 'rimraf'

const readLink = (pluginCore: string) => {
  try {
    return readlinkSync(pluginCore)
  } catch {}
}

export const setPluginCoreLink = (pluginDir: string, core: string) => {
  const pluginNM = resolve(pluginDir, 'node_modules')
  const pluginCore = resolve(pluginNM, '@tapjs/core')
  const target = readLink(pluginCore)
  if (target !== core) {
    rimrafSync(pluginCore)
    mkdirpSync(dirname(pluginCore))
    symlinkSync(core, pluginCore)
  }
}
