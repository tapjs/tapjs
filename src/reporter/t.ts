import t from 'tap'
import chalk from './test/fixtures/chalk.js'

t.equal(chalk.red('this is red text'), chalk.blue('this is red text'))
