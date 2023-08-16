// this runs `tap -h` with the internal TAP_HELP_MARKDOWN flag
// to generate the markdown from our jackspeak configs

const { spawn } = require('child_process')

module.exports = class {
  data() {
    return {
      title: 'tap CLI',
      eleventyNavigation: {
        key: 'CLI',
        order: 20,
      },
      templateEngineOverride: '11ty.js,md',
    }
  }

  async render() {
    const proc = spawn('tap', ['help'], {
      env: {
        ...process.env,
        TAP_HELP_MARKDOWN: '1',
      },
    })
    const out = []
    proc.stdout.on('data', c => out.push(c))
    const err = []
    proc.stderr.on('data', c => err.push(c))
    return new Promise((res, rej) => {
      proc.on('close', (code, signal) => {
        if (code || signal) {
          return rej(
            Object.assign(new Error(Buffer.concat(err).toString())),
            { code, signal }
          )
        }
        res(Buffer.concat(out).toString())
      })
    })
  }
}
