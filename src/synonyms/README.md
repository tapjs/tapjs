# `@tapjs/synonyms`

This plugin provides a lot of aliases for various [assertion
methods](https://tapjs.github.io/tapjs/modules/_tapjs_asserts.html).

## USAGE

This plugin is not included in tap by default. Add it by running
`tap plugin add @tapjs/synonyms`.

Once added:

```js
import t from 'tap'

// If you can guess it, it's probably what you'd think.
t.isEqual(1 + 2, 3)
```

## History

When node-tap was originally written, there were several
different test and assertion frameworks (including node's
built-in `assert` module) that all had subtly different naming
conventions.

Test libraries in JavaScript at the time were often ported from
other languages like Ruby or Perl, which had different naming
conventions, and they sometimes preserved those conventions.

I had the ""bright"" idea to just not have an opinion, and say
"whatever, JavaScript makes method aliasing easy, why not support
all of them?" This turned out to be a regrettable choice, but
despite years of deprecation, these methods do still exist in
tests out in the wild. So the way forward is to move the aliases
completely out of tap's core feature set into a plugin.

If you want it, opt into it.
