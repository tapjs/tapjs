const React = require('react')
const ms = require('ms')
const importJSX = require('import-jsx')
const {render, Static, Box} = require('ink')
const Parser = require('tap-parser')

const Result = importJSX('./result.js')
const Test = importJSX('./test.js')

// add, start, process, and end all put the test in the static summary box
// with the appropriate color, and update the assert count
// test/name.js ........................... 19/24  ${time}ms
//
// All failures get printed to the non-static results box

class Report extends React.Component {
  constructor (props) {
    super()
    this.state = {
      tests: [],
      errors: [],
    }
    const onResult = res => {
      if (!res.ok) {
        res.key = Math.random() + ''
        this.setState(prevState => ({
          ...prevState,
          errors: [
            ...prevState.errors,
            res,
          ],
        }))
      }
    }
    this.parser = new Parser()
    this.parser.on('assert', onResult)
    // this.parser.on('end', onEnd)
    // this.parser.on('bailout', onBailout)

    const tap = props.tap
    tap.on('subtestAdd', t => this.addTest(t))
    tap.on('subtestStart', t => this.startTest(t))
    tap.on('subtestProcess', t => this.processTest(t))
    tap.on('subtestEnd', t => this.endTest(t))
    tap.pipe(this.parser)
  }

  startTest (test) {
    this.setTestState(test, 'running')
  }

  addTest (test) {
    this.setTestState(test, 'pending')
    const onResult = res => {
      // res.ok = res.ok && (Math.random() > 0.01)
      if (!res.ok) {
        res.key = Math.random() + ''
        this.setState(prevState => ({
          ...prevState,
          errors: [
            ...prevState.errors,
            res,
          ],
        }))
      }
    }
    const onChild = child => {
      child.on('assert', onResult)
      child.on('child', onChild)
    }
    test.parser.on('assert', onResult)
    test.parser.on('child', onChild)
  }

  processTest (test) {
    return
    this.setTestState(test, 'processing')
  }

  endTest (test) {
    this.setTestState(test, 'ended')
  }

  setTestState (test, state) {
    this.setState(prevState => ({
      ...prevState,
      tests: [
        ...(prevState.tests.filter(t => t.test !== test)),
        { key: test.name, test, state }
      ]
    }))
  }

  render () {
    // assign variables from state.  const {foo,...} = this.state

    return (
      <Box flexDirection="column">
        <Static>{
          this.state.errors.map(result => (<Result {...result} /> ))
        }</Static>
        {/*
        <Box flexDirection="column" margin={0}>{
          this.state.tests.map(test => (<Test {...test} />))
        }</Box>
        <Box flexDirection="column">{
          this.state.tests
            .sort((a, b) => a.name > b.name ? -1 : 1)
            .filter(t => t.state === 'pending')
            .map(test => (<Test {...test} />))
        }</Box>
        */}
        <Box flexDirection="column">{
          this.state.tests
            .sort((a, b) => a.test.name > b.test.name ? 1 : -1)
            .map(test => (<Test {...test} />))
        }</Box>
        {/*
        <Box flexDirection="column">{
          this.state.tests
            .filter(t => t.state === 'ended')
            .sort((a, b) => a.test.name > b.test.name ? -1 : 1)
            .map(test => (<Test {...test} />))
        }</Box>
        <Box flexDirection="column">{
          this.state.tests
            .filter(t => t.state === 'running')
            .sort((a, b) => a.test.name > b.test.name ? -1 : 1)
            .map(test => (<Test {...test} />))
        }</Box>
        <Box flexDirection="column">{
          this.state.tests
            .filter(t => t.state === 'pending')
            .sort((a, b) => a.test.name > b.test.name ? -1 : 1)
            .map(test => (<Test {...test} />))
        }</Box>
        */}
      </Box>
    )
  }
}

module.exports = tap => render(<Report tap={tap} />)
