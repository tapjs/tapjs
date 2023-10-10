# `@tapjs/sinon`

A tap plugin for using [sinon](https://sinonjs.org)

A `t.sinon` property is added to tests, which is a Sinon
[sandbox](https://sinonjs.org/releases/latest/sandbox/) for that
single test. When the test is completed, the sandbox is torn
down automatically, but you can also of course call
`t.sinon.restore()` to remove all fakes and spies and such.

Also adds a `sinon` property to the test config, which can be
used to configure the sinon property. If no config is specified,
then it uses `sinon.defaultConfig`, which enables everything.

## Installation

Install `@tapjs/sinon`, and add `'@tapjs/sinon'` to your plugin
config list in `package.json` or `.taprc`.

```bash
# install the plugin:
npx tap plugin add @tapjs/sinon

# or, manually:
npm install --save-dev @tapjs/sinon

# add '@tapjs/sinon' to plugins list
vim .taprc

# rebuild tap with the plugin applied
npx tap plugin build
```

If you're using this, you _may_ want to disable the built-in
`@tapjs/intercept` plugin, because it has a very similar use
case, but is much more limited in scope than sinon.

```bash
tap plugin rm @tapjs/intercept
```

## Usage

Just use the `t.sinon` property, it's a sinon sandbox and it
automatically cleans itself up when the test is done.

```ts
import t from 'tap'

const myAPI = { hello: () => {} }
t.test('some child test', t => {
  // this stub call is only relevant within this test
  t.sinon.stub(myAPI, 'hello')
  myAPI.hello()
  t.sinon.assert.calledOnce(myAPI.hello)
  t.end()
})

t.test('another test', async t => {
  // myAPI.hello is no longer a sinon stub
})

t.test(
  'sinon with a config object',
  {
    sinon: {
      injectInto: null,
      useFakeTimers: true,
    },
  },
  async t => {
    // t.sinon only has the configured setup here
  }
)
```

## Using with Fake Timers

Sinon does not behave properly if fake timers are assigned to the
same global object more than once, resulting in a `'Can't install
fake timers twice on the same global object.'` error.

By default, this library sets `{ useFakeTimers: false }` in the
options to avoid this. You can enable fake timers in a given test
by setting it in the `sinon` option as shown in the examples
above, but note that it can only be used in a single place in a
test heirarchy.

For example:

```js
// ok, works fine
t.test(
  'fake timers test one',
  { sinon: { useFakeTimers: true } },
  t => {
    t.test('child test', t => {
      // etc.
    })
  }
)
t.test(
  'second fake timers test',
  { sinon: { useFakeTimers: true } },
  t => {
    // etc.
  }
)

// this, however, does not work:
t.test('parent', { sinon: { useFakeTimers: true } }, t => {
  t.test('child', { sinon: { useFakeTimers: true } }, t => {
    // will throw an error
  })
})
```
