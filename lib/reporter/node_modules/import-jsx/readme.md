# import-jsx [![Build Status](https://travis-ci.org/vadimdemedes/import-jsx.svg?branch=master)](https://travis-ci.org/vadimdemedes/import-jsx)

> Require and transpile JSX on the fly

- Doesn't install any `require()` hooks
- Auto-detects React pragma (`React.createElement`) and falls back to `h` pragma supported by Preact and others
- Caches transpiled sources by default
- Bundles in [object rest spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/) transform


## Install

```
$ npm install --save import-jsx
```


## Usage

```js
const importJsx = require('import-jsx');

const reactComponent = importJsx('./react');
const preactComponent = importJsx('./preact');
const customComponent = importJsx('./custom', {pragma: 'x'});
```

**react.js**

```jsx
const React = require('react');

module.exports = <div/>;
```

**preact.js**

```jsx
const {h} = require('preact');

module.exports = <div/>;
```

**custom.js**

```jsx
const x = (tagName, attrs, ...children) => {};

module.exports = <div/>;
```

## API

### importJsx(moduleId, [options])

#### moduleId

Type: `string`

Module id.

#### options

##### pragma

Type: `string`<br>
Default: `h`

Override [JSX pragma](https://jasonformat.com/wtf-is-jsx/).

##### cache

Type: `boolean`<br>
Default: `true`

Enable or disable caching of transpiled sources.

### importJsx.create([options])

Factory method to create a version of `importJsx()` with pre-defined options.
Useful when you need a custom pragma, but don't want to pass it along with each `importJsx()` call.

#### options

Type: `object`

Options to pass to `importJsx()`.

```js
// Before
const importJsx = require('import-jsx');

importJsx('./a', {pragma: 'x'});
importJsx('./b', {pragma: 'x'});

// After
const importJsx = require('import-jsx').create({pragma: 'x'});

importJsx('./a');
importJsx('./b');
```

## License

MIT © [Vadim Demedes](https://github.com/vadimdemedes)
