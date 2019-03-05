const React = require('react')
const ms = require('ms')
const importJSX = require('import-jsx')
const {render, Static, Box} = require('ink')
const Parser = require('tap-parser')

// XXX: skipAll tests should be treated as skips, and preserve
// the skipReason in the results.
//
// XXX: instead of
//  TODO  test/test.js
//  this is a todo > reason
// do this:
//  TODO  test/test.js > this is a todo > reason
// just like we do for failures, but magenta instead of red
// Actually, also with failures, put the name on the same line as the test
// It's currently doing [FAIL] foo.js\ntest > name
//
// Print time on test end line
//
// Figure out how todo this with stdin.  Should be fine, right?  Just plug
// tap object into this, and then pipe in stdin.

const Summary = importJSX('./summary.js')
const Result = importJSX('./result.js')
const Test = importJSX('./test.js')

// little helper thing to get a single stream of filtered failures
const ParserAsserts = require('./parser-asserts.js')

class Report extends React.Component {
  constructor ({ tap }) {
    super()
    // pending count is tests - pass - fail
    this.state = {
      errors: [],
      tests: [],
      runs: [],
      pass: [],
      fail: [],
      todo: [],
      skip: [],
      summary: null,
      counts: {
        total: 0,
        pass: 0,
        fail: 0,
        skip: 0,
        todo: 0,
      },
      time: 0,
    }
    const start = Date.now()
    this.finishedTests = []
    this.timer = setInterval(() => this.setState(prevState => ({
      ...prevState,
      time: Math.round((Date.now() - start)/1000),
    })), 500)

    // keep counters on the object itself, to debounce
    this.counts = {
      total: 0,
      pass: 0,
      fail: 0,
      skip: 0,
      todo: 0,
    },
    this.counterBouncer = null

    // XXX should this be in componentWillMount()?
    tap.on('subtestAdd', t => this.addTest(t))
    tap.on('subtestProcess', t => {
      if (!t.output && t.results && t.buffered)
        this.startTest(t)
    })
    tap.on('subtestStart', t => this.startTest(t))
    tap.on('subtestEnd', t => this.endTest(t))
    tap.on('end', () => this.endAll(tap))

    // consume the text stream, but ignore it.
    // we get all we need from the child test objects.
    tap.resume()
  }

  incrementCounter (type) {
    this.counts.total++
    this.counts[type]++
    if (this.counterBouncer)
      return
    this.counterBouncer = setTimeout(() => {
      this.counterBouncer = null
      this.setState(prevState => ({
        ...prevState,
        counts: this.counts
      }))
    }, 50)
  }

  addTest (test) {
    this.setState(prevState => ({
      ...prevState,
      tests: prevState.tests.concat(test),
    }))

    test.on('end', () => this.setState(prevState => ({
      ...prevState,
      runs: prevState.runs.filter(t => t.name !== test.name)
    })))

    const pa = new ParserAsserts(test.parser)
    pa.name = test.name
    test.counts = {
      total: 0,
      pass: 0,
      fail: 0,
      skip: 0,
      todo: 0,
    }
    test.lists = {
      fail: [],
      todo: [],
      skip: [],
    }
    const addErr = res => this.setState(prevState => ({
      ...prevState,
      errors: prevState.errors.concat({
        ...res,
        testName: test.name,
      })
    }))

    pa.on('assert', () => test.counts.total++)
    pa.on('pass', res => {
      test.counts.pass ++
      this.incrementCounter('pass')
    })
    pa.on('todo', res => {
      addErr(res)
      test.counts.todo++
      test.lists.todo.push(res)
      this.incrementCounter('todo')
    })
    pa.on('skip', res => {
      addErr(res)
      test.counts.skip ++
      test.lists.skip.push(res)
      this.incrementCounter('skip')
    })
    pa.on('fail', res => {
      res = {
        ...res,
        testName: test.name,
      }
      test.lists.fail.push(res)
      test.counts.fail ++
      this.incrementCounter('fail')
      this.setState(prevState => ({
        ...prevState,
        errors: prevState.errors.concat(res)
      }))
    })
  }

  startTest (test) {
    this.setState(prevState => ({
      ...prevState,
      runs: [
        ...(prevState.runs.filter(t => t.name !== test.name)),
        test
      ]
    }))
  }

  endTest (test) {
    // put it in the appropriate bucket.
    // live update assertion handed by tap.parser event
    const ok = test.results && test.results.ok
    const skip = test.options.skip
    const todo = test.options.todo
    const bucket = !ok ? 'fail'
      : skip ? 'skip'
      : todo ? 'todo'
      : 'pass'

    this.finishedTests.push(test)
    this.setState(prevState => ({
      ...prevState,
      errors: [
        ...prevState.errors,
        {
          // XXX this should be re-printed at the end as well
          test,
        },
      ],
      runs: prevState.runs.filter(t => t.name !== test.name),
      [bucket]: prevState[bucket].concat(test),
    }))
  }

  endAll (tap) {
    clearInterval(this.timer)
    this.setState(prevState => ({
      ...prevState,
      summary: tap.results
    }))
  }

  render () {
    // assign variables from state.  const {foo,...} = this.state

    return (
      <Box flexDirection="column">
        <Static>{
          this.state.errors.map((result, i) =>
            (<Result {...result} key={`${i}`} /> ))
        }</Static>

        <Box flexDirection="column">{
          this.state.runs
            .sort((a, b) => a.name > b.name ? 1 : -1)
            .map(test => (<Test key={test.name} test={test} />))
        }</Box>

        { (<Summary
          results={this.state.summary || null}
          counts={this.state.counts}
          time={this.state.time}
          lists={{
            tests: this.finishedTests,
            fail: this.state.fail,
            pass: this.state.pass,
            todo: this.state.todo,
            skip: this.state.skip,
          }} /> )}
      </Box>
    )
  }
}

module.exports = tap => render(<Report tap={tap} />)
