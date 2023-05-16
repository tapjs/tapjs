const t = require('tap')
const msgTime = require('./msgtime.js')

t.cleanSnapshot = output => {
  return output.replace(/ time=[0-9]+$/g, ' time={time}')
}

const output = msgTime('this is a test')
t.matchSnapshot(output, 'add timestamp to message')
