console.error('some stderr output 1')
console.log(`TAP version 14
1..1
ok
`)

setTimeout(() => {
  console.error('some stderr output 2')
  setTimeout(() => console.error('some stderr output 3'))
}, 5000)
