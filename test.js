import test from 'ava'
import sao from 'sao'

const template = __dirname

test('defaults', async t => {
  const res = await sao.mockPrompt(template)
  t.deepEqual(res.fileList, [
    '.editorconfig',
    '.gitattributes',
    '.gitignore',
    'LICENSE',
    'README.md',
    'app/config.js',
    'app/index.js',
    'app/menu.js',
    'app/package.json',
    'app/renderer/index.html',
    'app/renderer/js/app.js',
    'package.json'
  ])
})

test('webpack', async t => {
  const res = await sao.mockPrompt(template, {
    webpack: true
  })
  t.deepEqual(res.fileList, [
    '.editorconfig',
    '.gitattributes',
    '.gitignore',
    'LICENSE',
    'README.md',
    'app/config.js',
    'app/index.js',
    'app/menu.js',
    'app/package.json',
    'package.json',
    'poi.config.js',
    'src/App.vue',
    'src/index.js'
  ])
})
