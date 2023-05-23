import { Init } from 'npm-init-template'
const { prompt, build, values, positionals, run } = new Init(
  import.meta.url
)

// any prompts that the user already set in the command line,
// like with --foo=bar will be automatically set in the values
// already, and will skip the prompt
// Otherwise, these will update the values object appropriately.
await prompt('What is your name?', 'name')
console.error('after first', values)
await prompt('What is your quest?', 'quest')
console.error('after second', values)

// third arg is passed as options to `read`
if (/robin/i.test(values.name)) {
  values.question = 'What is the capital of Assyria?'
  await prompt(values.question, 'answer')
} else if (
  /lancelot/i.test(values.name) ||
  /galahad/i.test(values.name)
) {
  values.question = 'What is your favorite color?'
  await prompt(values.question, 'answer', {
    default: 'blue',
  })
} else {
  values.question = 'What is the air speed velocity of an unladen swallow?'
  await prompt(values.question, 'answer')
}

if (
  values.answer === "I don't know that" ||
  (/galahad/i.test(values.name) &&
    values.answer.toLowerCase() !== 'yellow') ||
  (/arthur/i.test(values.name) &&
    (!/african/i.test(values.answer) ||
      !/european/i.test(values.answer)))
) {
  throw new Error('AAAHHHH!!!!')
}

console.error('starting build', values)

const target = (positionals[0] || `${values.name}-${values.quest}`)
  .toLowerCase()
  .replace(/[^a-z0-9]+/, ' ')
  .trim()
  .split(' ')
  .join('-')

values.data = { ...values }

await build({
  templates: './templates',
  templateSettings: {
    bash: {
      tags: ['(%', '%)'],
      escape: text => JSON.stringify(text),
    },
  },

  include: '**',
  exclude: values.includeExtra ? undefined : '**/*.file',
  target,
})

console.log(`\n\nbuild complete, running commands in ${target}`)

await run(
  `node -p 'require("fs").readdirSync(".").sort((a,b)=>a.localeCompare(b,"en"))'`
)
await run(
  `node -p 'require("fs").readdirSync("src").sort((a,b)=>a.localeCompare(b,"en"))'`
)
await run('cat package.json')
await run('cat quest.html')
await run('cat src/noextension')
await run('cat src/index.ts')

console.error('done')
