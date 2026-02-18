// print a bunch of debug output for the benefit of reporting issues
// to the tapjs repo.
import { LoadedConfig } from '@tapjs/config'
import { execSync, spawnSync } from 'child_process'
import { resolveImportSync } from 'resolve-import/resolve-import-sync'
import { stringify } from 'tap-yaml'
import { getAllVersions } from './version.js'

export const debug = async (_: string[], config: LoadedConfig) => {
  const tap = String(resolveImportSync('tap', import.meta.url))
  const versions = await getAllVersions()
  const pkgs = [
    'tap',
    '@tapjs/core',
    '@tapjs/run',
    '@isaacs/ts-node-temp-fork-for-pr-2009',
    'typescript',
  ]
  const { stdout: _stdout, ...npmLS } = spawnSync('npm', ['ls', ...pkgs], {
    encoding: 'utf8',
  })
  const { values } = config
  const configDump = Object.fromEntries(
    Object.entries(values).filter(
      ([_, v]) => !Array.isArray(v) || v.length,
    ),
  )
  /* c8 ignore start */
  const shell = process.platform === 'win32' ? 'powershell' : '/bin/sh'
  const envCmd =
    process.platform === 'win32' ?
      "$([Environment]::OSVersion.VersionString)\n$(('x86', 'x64')[[Environment]::Is64BitOperatingSystem])"
    : 'uname -a'
  /* c8 ignore stop */
  const env = execSync(envCmd, { shell, encoding: 'utf8' })
  const pluginList = config.pluginList.join('\n')

  console.log(
    stringify({
      tap,
      config: configDump,
      plugins: pluginList,
      versions,
      'npm ls': npmLS,
      env,
    }).trimEnd(),
  )
}
