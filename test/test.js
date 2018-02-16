import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.join(__dirname, '..')

test('defaults', async t => {
  const res = await sao.mockPrompt(template)
  t.snapshot(res.fileList)
})

test('poi', async t => {
  const res = await sao.mockPrompt(template, {
    bundler: 'poi'
  })
  t.snapshot(res.fileList)
})

test('parcel', async t => {
  const res = await sao.mockPrompt(template, {
    bundler: 'parcel',
    description: 'mock'
  })
  t.snapshot(res.fileList)
  t.snapshot(res.fileContents('package.json'), 'package.json')
})
