---
title: Change Log
type: features
---

## NODE-TAP Features

### No Fancy DSL To Learn

The whole API is very small, even though it's a powerful framework. `t.test()`, `t.end()`,and a handful of assertion methods.  This results in having to write and remember less than `describe('foo', () => it('is a string or null', () => expect(foo).to.be.a.string().or.null())))

### Batteries Included

Code coverage, test reporting, error handling, parallel tests, support for JSX/TypeScript/ESM, and a full-featured assertion set are all baked in.  No need to choose any other stuff. Just write some tests.