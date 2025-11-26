#!/usr/bin/env node
//@ts-ignore
process.setSourceMapsEnabled(true)

// lazy load commands, because node:repl can't live in the
// same process as the @tapjs/core Base class. node:repl loads
// node:domain, which conflicts with async-hook-domains used by tap

import { args, config, mainCommand } from './main-config.js'

process.title = 'tap'

switch (mainCommand) {
  case 'help':
    ;(await import('./help.js')).help(args, config)
    break
  case 'versions':
  case 'version':
    ;(await import('./version.js')).version(args, config)
    break

  case 'debug':
    ;(await import('./debug.js')).debug(args, config)
    break

  case 'repl':
    ;(await import('./repl.js')).repl(args, config)
    break

  case 'replay':
    ;(await import('./replay.js')).replay(args, config)
    break

  case 'node-options':
    console.log((await import('./test-argv.js')).nodeOptions(config))
    break

  case 'run':
    ;(await import('./run.js')).run(args, config)
    break

  case 'build':
    ;(await import('./build.js')).build(args, config)
    break

  case 'report':
    ;(await import('./report.js')).report(args, config)
    break

  case 'config':
    ;(await import('./config.js')).config(args, config)
    break

  case 'plugin':
    ;(await import('./plugin.js')).plugin(args, config)
    break

  case 'list':
    ;(await import('./list.js')).list(args, config)
    break
}
