# tap-yaml

Yaml handling for JavaScript TAP parsers and generators

## USAGE

```js
import { parse, stringify } from 'tap-yaml'

const str = stringify(someObject)
const obj = parse(someString)
```

This is essentially a re-export of the [yaml](http://npm.im/yaml)
package, with a few custom types and default properties to be more suitable for
use in [tap](https://www.node-tap.org).

1. Everything from [yaml-types](http://npm.im/yaml-types) is
   included by default.
2. `omap` and `set` are configured to refer to Map and Set objects.
3. Objects with a `null` prototype maintain their null-prototyped-ness.
