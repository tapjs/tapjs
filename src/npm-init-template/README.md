# npm-init-template

This is a library for building `npm init` packages more easily,
by providing a set of utility functions for collecting
information and then creating the starter package from a folder
of template files.

## USAGE

Create a package that exports a single `bin` command:

```json
{
  "name": "create-my-special-thing",
  "version": "1.0.0",
  "description": "npm init my-special-thing",
  "bin": "index.mjs"
}
```

Then in that bin script (shown here as `index.mjs`), put code
like this:

```js
#!/usr/bin/env node
import { Init } from 'npm-init-template'

// Provide it with the path to this file, so we know how to find
// the template files.  If using commonjs, use __filename instead.
const { prompt, build, values, positionals, run } = new Init(
  import.meta.url
)

// any prompts that the user already set in the command line,
// like with --foo=bar will be automatically set in the values
// already, and will skip the prompt
// Otherwise, these will update the values object appropriately.
await prompt('What is your name?', 'name')
await prompt('What is your quest?', 'quest')
// third arg is passed as options to `read`
await prompt('What is your favorite color?', 'color', {
  default: 'blue',
})
await prompt(
  'What is the flight average velocity of an unladen sparrow?',
  'sparrow'
)

if (values.sparrow === "I don't know") {
  throw new Error('AAAHHHH!!!!')
}

await build({
  // The folder where the templates live
  // Any files that named *.mustache will be expanded using
  // the values object built up by the prompts.
  // Any other kinds of files will be copied as-is.
  //
  // Default is './templates'

  // templates: './templates',

  // Set the settings for template file handling.
  //
  // By default:
  //
  // Any file named *.{json,js,ts,jsx,tsx}.mustache will use the
  // template tags <% %> instead of {{ }}, and JSON.stringify
  // escaping instead of HTML escaping.
  //
  // Any file named *.{html,xhtml,xml}.mustache will be escaped using
  // HTML escaping by default.
  //
  // Any other kind of *.mustache file will not escape values
  // (default behavior can be overridden by setting the '*'
  // member here)
  //
  // add/adjust as you see fit

  // templateSettings: {
  //   bash: {
  //     tags: ['(%', '%)'],
  //     escape: text => JSON.stringify(text),
  //   }
  // },

  // of course, you can also change the mustache tags in the
  // template itself, using the syntax like `{{=(% %)=}}`

  // the folder to build the package in. To build in place,
  // use `target: '.'`
  // this is required.
  // positionals is the positional arguments read by parseArgs
  target: positionals[0] || `${values.name}-${values.quest}`,

  // glob pattern(s) of template files to include, defaults to '**'
  // You can use this for example to conditionally only include
  // tsconfig and .ts files if the user has opted into typescript
  // This is matched against the file being written, so without
  // the '.mustache' extension.
  // include: '**',
  // include: ['tsconfig*.json', 'src/**/*.ts'],

  // excludes take priority over includes. This will omit
  // templates from the built results. Defaults to undefined (ie,
  // include everything.)
  // exclude: 'files/to/exclude/**',
})

// after building, you can run stuff in the folder, if you want
await run('npm install')
```

In `./templates/quest.html.mustache`, you can put [mustache
templates](https://github.com/janl/mustache.js/), something like
this:

```html
<html>
  <body style="background-color:{{ color }}">
    <h1>Hello, {{name}}!</h1>
    <p>Good luck on {{quest}}.</p>
    <p>
      The average flight velocity of an unladen sparrow is {{ sparrow
      }}.
    </p>
  </body>
</html>
```

JSON files use `JSON.stringify` as the default escaping
mechanism, so in `templates/package.json.mustache`, you can put
something like this:

```json
{
  "name": <% name %>,
  "description": <% quest %>
}
```

Templates can also include each other as partials, each will be
loaded with its name relative to the templates folder.

```html
<html>
  <body style="background-color:{{ color }}">
    <h1>Hello, {{name}}!</h1>
    <p>Good luck on {{quest}}.</p>
    <p>
      The average flight velocity of an unladen sparrow is {{ sparrow
      }}.
    </p>

    <p>Your `package.json` file is:</p>
    <pre>{{>package.json}}</pre>
  </body>
</html>
```
