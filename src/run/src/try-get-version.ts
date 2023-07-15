import { createRequire } from 'module'

const require = createRequire(import.meta.url)

// This is best-effort.  All of tap's internal packages
// export their package.json file, and the @tapjs/create-plugin
// init module will hopefully encourage others to do the same,
// if they use exports at all.
export const tryGetVersion = (pkg: string): string | undefined => {
  try {
    const v = require(`${pkg}/package.json`)?.version
    if (v && typeof v === 'string') {
      return v
    }
  } catch {}
}
