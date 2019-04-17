const t = require('tap')
const msgTime = require('./msgtime.js')

function clean (output) {
  return output.replace(/ time=[0-9]+$/g, ' time={time}')
}

const output = msgTime('this is a test')
t.matchSnapshot(clean(output), 'add timestamp to message')
