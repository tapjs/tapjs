const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginNavigation = require('@11ty/eleventy-navigation')
const { dirname, resolve, join, relative } = require('path')
const cheerio = require('cheerio')
const contentDir = resolve(__dirname, './content')

const pathPrefix = '/'

const mdIt = require('markdown-it')
const mdItAnchor = require('markdown-it-anchor')
const mdOpts = { html: true }
const mdAnchorOpts = {}
const md = mdIt(mdOpts).use(mdItAnchor, mdAnchorOpts)
const pluginTOC = require('eleventy-plugin-toc')

module.exports = eleventyConfig => {
  eleventyConfig.setLibrary('md', md)

  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addPlugin(pluginTOC)
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPassthroughCopy({
    'content/static': 'static',
  })
  eleventyConfig.addPassthroughCopy('content/*.{jpg,png,gif}')
  eleventyConfig.addPassthroughCopy(
    'content/!(static)/**/*.{jpg,png,gif}'
  )

  eleventyConfig.setDataDeepMerge(true)

  // turn github markdown friendly links like ./blah.md or /content/blah.md
  // into their appropriate urls, like /blah
  eleventyConfig.addTransform('localLinks', function (content) {
    const { inputPath } = this
    const $ = cheerio.load(content)
    for (const h2 of $('h2')) {
      const $h2 = $(h2)
      const m = $h2.html().match(/^From plugin: @tapjs\/([^ ]+)$/)
      if (!m) continue
      $h2.html(
        `From plugin: <a href="/plugins/${m[1]}">@tapjs/${m[1]}</a>`
      )
    }
    for (const link of $('a[href]')) {
      const { href } = link.attribs
      if (
        /^https?:/.test(href) ||
        !/\.(md|json|11ty\.js)(#.*)?$/.test(href)
      ) {
        continue
      }
      const file = href.startsWith('/')
        ? join(__dirname, href)
        : resolve(dirname(inputPath), href)
      const rel = relative(contentDir, file)
      const url = join(
        pathPrefix,
        join('/', rel).replace(
          /(?:\/index)?\.(?:md|11ty.js)(#.*)?$/,
          '/$1'
        )
      )
      link.attribs.href = url
    }
    return '<!doctype html><html>' + $('html').html() + '</html>'
  })

  eleventyConfig.addTransform('localImage', function (content) {
    const { inputPath } = this
    const $ = cheerio.load(content)
    for (const img of $('img[src]')) {
      const { src } = img.attribs
      if (/^https?:/.test(src) || src.startsWith('/')) {
        continue
      }
      const file = src.startsWith('/')
        ? join(__dirname, src)
        : resolve(dirname(inputPath), src)
      const rel = relative(contentDir, file)
      const url = join(pathPrefix, join('/', rel))
      img.attribs.src = url
    }
    return '<!doctype html><html>' + $('html').html() + '</html>'
  })

  return {
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix,
    dir: {
      data: '../_data',
      input: 'content',
      includes: '../_includes',
      layouts: '../_includes/layouts',
      output: '_site/docs',
    },
  }
}
