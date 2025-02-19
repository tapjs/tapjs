const stripOnly = process.env.TAP_TYPE_STRIP_ONLY === '1'
if (!stripOnly) {
  //@ts-ignore
  await import('@isaacs/ts-node-temp-fork-for-pr-2009/import')
}
