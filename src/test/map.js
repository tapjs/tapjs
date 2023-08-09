// we need a coverage map, because this folder is called 'test'
// so tap excludes it from coverage by default.
export default () => ['src/**', 'scripts/**/*.?(c|m)[jt]s']
