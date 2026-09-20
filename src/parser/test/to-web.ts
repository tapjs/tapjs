import stream from 'node:stream'
import t from 'tap'
import { Parser } from '../dist/esm/index.js'

const tapContent = `TAP version 13
ok 1 Foo bar
ok 2 Baz > this thing
ok 3 Baz > another thing
ok 4 Quux
1..4
`

t.test('classic write/end still emits complete, finish, close', t => {
  const p = new Parser()
  const events: string[] = []
  p.on('complete', () => events.push('complete'))
  p.on('finish', () => events.push('finish'))
  p.on('close', () => events.push('close'))
  p.write('TAP version 13\n')
  p.write('ok 1 Foo\n')
  p.end('1..1\n')
  t.strictSame(events, ['complete', 'finish', 'close'])
  t.end()
})

t.test('classic end(chunk) still emits finish after parse', t => {
  const p = new Parser()
  const events: string[] = []
  p.on('complete', () => events.push('complete'))
  p.on('finish', () => events.push('finish'))
  p.on('close', () => events.push('close'))
  p.on('plan', () => p.end())
  p.end(tapContent)
  t.ok(events.includes('complete'))
  t.ok(events.includes('finish'))
  t.ok(events.includes('close'))
  t.end()
})

t.test('Writable.toWeb writer.close() does not AbortError', async t => {
  const p = new Parser()
  const completed = new Promise(resolve => p.once('complete', resolve))
  const writable = stream.Writable.toWeb(p)
  const writer = writable.getWriter()
  await writer.write('TAP version 13\n')
  await writer.write('ok 1 Foo\n')
  await writer.write('1..1\n')
  await t.resolves(writer.close())
  const results = await completed
  t.match(results, { ok: true, count: 1 })
})

t.test(
  'toWeb + end() on plan does not AbortError (issue #1045)',
  async t => {
    const p = new Parser()
    let readableController!: ReadableStreamDefaultController<string>
    const readable = new ReadableStream<string>({
      start(c) {
        readableController = c
      },
    })

    const pipe = readable.pipeTo(stream.Writable.toWeb(p))
    const pipeErrors: unknown[] = []
    pipe.catch(er => pipeErrors.push(er))

    const completed = new Promise(resolve => p.once('complete', resolve))
    p.on('plan', function () {
      p.end()
    })

    for (const line of tapContent.split(/(?<=\n)/)) {
      if (line) readableController.enqueue(line)
    }

    const results = await completed
    t.match(results, { ok: true, count: 4 })

    // Let the web adapter react to a premature finish if it will.
    await new Promise<void>(r => setTimeout(r, 25))
    t.equal(pipeErrors.length, 0, 'pipeTo did not reject with AbortError')

    readableController.close()
    await t.resolves(pipe)
  },
)
