# @tapjs/clock

A deterministic mock clock for use in tests involving time.

A mock clock will be available at `t.clock`. If you call
`t.clock.enter()`, it will monkey-patch all the globals to be
tied to the deterministic mock clock implementation. When the
test completes, the patched globals will return to their previous
state automatically.

## USAGE

Add the plugin by running:

```
tap plugin add @tapjs/clock
```

Then, you can use it by accessing the `t.clock` object on any
test, which is an instance of the [`Clock`
class](https://isaacs.github.io/clock-mock/classes/Clock.html).

For example:

```js
t.test('some timers and such', async t => {
  t.clock.enter()
  let timeoutFired = false
  setTimeout(() => (timeoutFired = true), 100)
  t.clock.advance(50)
  t.equal(timeoutFired, false)
  t.clock.advance(50)
  t.equal(timeoutFired, true)
})
```

If you aren't using the `@tapjs/after` plugin, then you'll have
to call `t.clock.exit()` at some point to restore the global
timers to their previous states if you enter it.

See [clock-mock](https://isaacs.github.io/clock-mock/) for full
API details.
