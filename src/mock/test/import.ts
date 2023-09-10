import {resolveImport} from "resolve-import"
import t from "tap"

const importer = await resolveImport('../dist/mjs/import.js', import.meta.url)
const loader = await resolveImport('../dist/mjs/loader.js', import.meta.url)
let registered = false
let serviceStarted = false
await t.mockImport('../dist/mjs/import.js', {
  module: {
    register: (url: URL|string, data:any) => {
      registered = true
      t.equal(String(url), String(loader), 'register loader')
      const u = new URL(data.parentURL)
      t.ok(u.searchParams.get('tapmock'), 'has ?tapmock because mocked')
      u.search = ''
      t.equal(String(u), String(importer), 'parentURL is importer')
      t.hasStrict(data, {
        data: { port: 'PORT 2' },
        transferList: ['PORT 2'],
      }, 'register data')
    },
  },
  worker_threads: {
    MessageChannel: class {
      port1 = 'PORT 1'
      port2 = 'PORT 2'
    },
  },
  '../dist/mjs/mock-service.js': {
    MockService: {
      listen: (port: any) => {
        serviceStarted = true
        t.equal(port, 'PORT 1')
      }
    }
  }
})
t.equal(registered, true)
t.equal(serviceStarted, true)
