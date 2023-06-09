/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[
  `test/basic.ts > TAP > arthur: set cli options > stderr 1`
] = `
after first {
  answer: 'an african or european swallow?',
  blerp: 'blerp',
  name: 'Arthur, King of the Britons'
}
after second {
  answer: 'an african or european swallow?',
  blerp: 'blerp',
  name: 'Arthur, King of the Britons',
  quest: 'I seek the Holy Grail'
}
starting build {
  answer: 'an african or european swallow?',
  blerp: 'blerp',
  name: 'Arthur, King of the Britons',
  quest: 'I seek the Holy Grail',
  question: 'What is the air speed velocity of an unladen swallow?'
}
done

`

exports[
  `test/basic.ts > TAP > arthur: set cli options > stdout 1`
] = `
What is your name? What is your quest? 

build complete, running commands in arthur-king-of-the-britons-i-seek-the-holy-grail
[ 'package.json', 'quest.html', 'raw.txt', 'src' ]
[ 'index.ts', 'noextension', 'other-module.js' ]
{
  "name": "Arthur, King of the Britons",
  "description": "I seek the Holy Grail",
  "values": {
  "answer": "an african or european swallow?",
  "blerp": "blerp",
  "name": "Arthur, King of the Britons",
  "quest": "I seek the Holy Grail",
  "question": "What is the air speed velocity of an unladen swallow?"
}
}
<html><body style="background-color:">
<h1>Hello, Arthur, King of the Britons!</h1>
<p>Good luck on I seek the Holy Grail.</p>
<p>Q: What is the air speed velocity of an unladen swallow?</p>
<p>A: an african or european swallow?.</p>
</body>
name = Arthur, King of the Britons
export default "Arthur, King of the Britons"

`

exports[
  `test/basic.ts > TAP > galahad: accept default (to great peril) > stderr 1`
] = `
after first { name: 'Sir Galahad of Camelot' }
after second {
  name: 'Sir Galahad of Camelot',
  quest: 'To seek the Holy Grail, yes, yes, get on with it'
}
{CWD}/test/fixture/index.mjs:##
  throw new Error('AAAHHHH!!!!')
        ^

Error: AAAHHHH!!!!



Node.js v18.16.0

`

exports[
  `test/basic.ts > TAP > galahad: accept default (to great peril) > stdout 1`
] = `
What is your name? What is your quest? 
`

exports[
  `test/basic.ts > TAP > lancelot: basic init script behavior > stderr 1`
] = `
after first { includeExtra: 'includeExtra', name: 'Sir Lancelot of Camelot' }
after second {
  includeExtra: 'includeExtra',
  name: 'Sir Lancelot of Camelot',
  quest: 'To seek the Holy Grail'
}
starting build {
  includeExtra: 'includeExtra',
  name: 'Sir Lancelot of Camelot',
  quest: 'To seek the Holy Grail',
  question: 'What is your favorite color?',
  answer: 'blue'
}
done

`

exports[
  `test/basic.ts > TAP > lancelot: basic init script behavior > stdout 1`
] = `
What is your name? What is your quest? What is your favorite color? (blue) 

build complete, running commands in sir-lancelot-of-camelot-to-seek-the-holy-grail
[ 'extra.file', 'package.json', 'quest.html', 'raw.txt', 'src' ]
[ 'index.ts', 'noextension', 'other-module.js' ]
{
  "name": "Sir Lancelot of Camelot",
  "description": "To seek the Holy Grail",
  "values": {
  "includeExtra": "includeExtra",
  "name": "Sir Lancelot of Camelot",
  "quest": "To seek the Holy Grail",
  "question": "What is your favorite color?",
  "answer": "blue"
}
}
<html><body style="background-color:">
<h1>Hello, Sir Lancelot of Camelot!</h1>
<p>Good luck on To seek the Holy Grail.</p>
<p>Q: What is your favorite color?</p>
<p>A: blue.</p>
</body>
name = Sir Lancelot of Camelot
export default "Sir Lancelot of Camelot"

`
