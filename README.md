# tcompare

A comprehensive comparison library, for use in test frameworks.  Walks an
object once, generating both a simple true/false result, as well as a
nicely formatted human-readable diff string.

## USAGE

```js
const { match, same, strict, format } = require('tcompare')

// Result is a TCompare object with { Boolean match, String diff }
const result = match(object, pattern)
if (!result.match) {
  console.log(`item did not match pattern`)
  console.log(result.diff)
} else {
  console.log(`it's a match!`)
}
```

## METHODS

* `match(object, pattern, [options])` - Verify that all items in `pattern` are
  found in `object`, and that they match.  This is the loosest possible
  algorithm, allowing cases where we just want to verify that an object
  contains a few important properties.  The algorithm is the same as
  the one used by `[tmatch](http://npm.im/tmatch)`.  In a nutshell:

    * If the object and pattern are loosely equal, then pass
    * If the object and the pattern are both Regular Expressions, Date objects
      or Buffers, then pass if they're "equivalent".
    * If the pattern is a RegExp, cast object to a string, and test against the
      RegExp.
    * If both are Strings, pass if pattern appears in object.
    * If pattern is a function, and object is an instance of that function,
      then pass.  (This also applies to Symbol, Number, String, etc.)
    * If pattern and object are collections (object, map, set, array or
      iterable), then compare their contents.  Each type of collection can only
      match its same type, with the exception of non-Set iterables (including
      `arguments` objects), which are cast to Arrays.

* `same(object, pattern, [options])` - Similar to match, but also ensure that
  all entries in `pattern` appear in `object`, and do not perform regexp and
  substring testing, or classes.  In this case, the expectation is that the
  `pattern` fully covers the scope of the object.

* `strictSame(object, pattern, [options])` - Similar to `same`, but verify that
  values are strictly equivalent.  For example, `1` and `'1'` would not be
  treated as suitably matched values.

* `format(object, [options])` - No comparisons performed.  Just print out the
  object.

## OPTIONS

Each method can take the following options.

* `prune` - Set to a positive integer to specify the number of context lines
  before and after changes in the diff string.  Default is to show entire
  object.
* `style` - Set to `pretty` for a very human-readable style of object printing.
  Set to `js` for a copy-and-paste friendly valid JavaScript output.  Default
  is `pretty`.  Example:

    ```
    // pretty style
    Object {
      "myMap": Map {
        Object {
          "a": 1,
        } => Object {
          "b": 2,
        }
      }
    }

    // js style
    {
      "myMap": new Map([
        [{
          "a": 1,
        }, {
          "b": 2,
        }]
      ])
    }
    ```
