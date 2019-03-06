const React = require('react')
const ms = require('ms')
const importJSX = require('import-jsx')
const {render, Static, Box} = require('ink')
const Parser = require('tap-parser')
const chalk = require('chalk')

// Print time on test end line
//
// Handle bailouts - right not it's... not good.

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
      bailout: null,
    }

    const start = Date.now()
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
    tap.on('bailout', message => this.bailout(message || true))

    // consume the text stream, but ignore it.
    // we get all we need from the child test objects.
    tap.resume()
  }

  bailout (bailout) {
    // move all the tests from pending to skipped
    this.setState(prevState => {
      return {
        ...prevState,
        runs: [],
        skip: prevState.skip.concat(prevState.runs.filter(t =>
          !t.results && !prevState.skip.some(test => test.name === t.name))
        .map(t => {
          t.options.skip = true
          t.results = { ok: true }
          return t
        })),
        bailout: (prevState.bailout || bailout),
      }
    })
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

    const onRaw = p => raw => {
      const pref = chalk.bold.dim(test.name + p + ' ')
      raw = raw.replace(/^/gm, pref).replace(/\n$/, '')
      this.setState(prevState => ({
        ...prevState,
        errors: prevState.errors.concat({raw}),
      }))
    }
    test.parser.on('extra', onRaw(' 1>'))
    test.on('preprocess', options =>
      options.stdio = 'pipe')
    test.on('process', proc => {
      proc.stderr.setEncoding('utf8')
      proc.stderr.on('data', onRaw(' 2>'))
    })

    test.on('bailout', message => this.bailout(message || true))

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
    const addErr = res => {
      res.testName = test.name
      this.setState(prevState => ({
        ...prevState,
        errors: prevState.errors.concat({res})
      }))
    }

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
      res.testName = test.name
      test.lists.fail.push(res)
      test.counts.fail ++
      this.incrementCounter('fail')
      this.setState(prevState => ({
        ...prevState,
        errors: prevState.errors.concat({res})
      }))
    })
  }

  startTest (test) {
    test.startTime = Date.now()
    this.setState(prevState => (prevState.bailout ? prevState : {
      ...prevState,
      runs: prevState.runs.filter(t => t.name !== test.name)
        .concat(test),
    }))
  }

  endTest (test) {
    test.endTime = Date.now()
    if (!test.results)
      test.results = {}

    if (!test.results.count && this.state.bailout && !test.results.bailout) {
      test.options = { ...test.options, skip: true }
    }

    if (this.state.bailout && !(test.results && test.results.bailout)) {
      if (!test.results && test.results.count)
        test.options = {...test.options, skip: true}
      test.results = {...test.results, ok: true}
    }

    // put it in the appropriate bucket.
    // live update assertion handed by tap.parser event
    const ok = test.results && test.results.ok
    const skip = test.options.skip && ok !== false
    const todo = test.options.todo && ok !== false
    const bucket =
      skip ? 'skip'
      : todo ? 'todo'
      : !ok ? 'fail'
      : 'pass'

    this.setState(prevState => (
      prevState.bailout && bucket === 'skip' ? prevState : {
        ...prevState,
        errors: prevState.bailout ? prevState.errors
          : prevState.errors.concat({test}),
        runs: prevState.runs.filter(t => t.name !== test.name),
        [bucket]: prevState[bucket]
          .filter(t => t && t.name !== test.name)
          .concat(test),
      }))
  }

  endAll (tap) {
    clearInterval(this.timer)
    this.setState(prevState => ({
      ...prevState,
      summary: tap.results,
    }))
  }

  render () {
    return (
      <Box flexDirection="column">
        <Static>{
          this.state.errors.map((result, i) =>
            (<Result {...result} key={`${i}`} /> ))
        }</Static>

        <Box flexDirection="column">{
          this.state.runs
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(test => (
              <Test key={test.name}
                test={test} />))
        }</Box>

        { (<Summary
          results={this.state.summary || null}
          counts={this.state.counts}
          time={this.state.time}
          bailout={this.state.bailout}
          lists={{
            tests: this.state.tests,
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
