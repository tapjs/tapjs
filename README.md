# tap-yaml

Yaml handling for TAP parsers and generators

## USAGE

```js
const yaml = require('tap-yaml')

const str = yaml.stringify(someObject)
const obj = yaml.parse(someString)
```

This is essentially a re-export of the [yaml](http://npm.im/yaml)
package, with a few modifications to be more suitable for use in
[tap](https://www.node-tap.org).

1. Symbol and Function types are added, so that they don't throw.
   Functions aren't parsed to actual functions, though, since that's
   horribly unsafe, but they do parse to an empty function with a
   `___source` field that contains the string source.
2. Certain common Error and tap-internal properties are removed, since
   they are excessively noisy.  (Mostly related to domains and event
   emitters.)
3. Binary types are implicitly allowed in a standard way.
4. `omap` and `set` are configured to load using Map and Set objects.

## Status

This is not yet ready for prime time.  Work is underway to port
node-tap projects to use it, which will take a bit of time, and
probably flush out a lot of bugs and issues along the way.

If you'd like to help, get in touch!
