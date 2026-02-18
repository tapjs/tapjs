import { resolveImportSync } from 'resolve-import/resolve-import-sync'
import t from 'tap'

const importer = resolveImportSync(
  '../dist/esm/import.mjs',
  import.meta.url,
)
const loader = resolveImportSync(
  '../dist/esm/loader.mjs',
  import.meta.url,
)
let registered = false
let serviceStarted = false
await t.mockImport('../dist/esm/import.mjs', {
  'node:module': {
    register: (url: URL | string, data: any) => {
      registered = true
      t.equal(String(url), String(loader), 'register loader')
      const u = new URL(data.parentURL)
      t.ok(u.searchParams.get('tapmock'), 'has ?tapmock because mocked')
      u.search = ''
      t.equal(String(u), String(importer), 'parentURL is importer')
      t.hasStrict(
        data,
        {
          data: { port: 'PORT 2' },
          transferList: ['PORT 2'],
        },
        'register data',
      )
    },
  },
  worker_threads: {
    MessageChannel: class {
      port1 = 'PORT 1'
      port2 = 'PORT 2'
    },
  },
  '../dist/esm/mock-service.js': {
    MockService: {
      listen: (port: any) => {
        serviceStarted = true
        t.equal(port, 'PORT 1')
      },
    },
  },
})
t.equal(registered, true)
t.equal(serviceStarted, true)
