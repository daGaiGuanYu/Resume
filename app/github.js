const FS = require('fs')
const Pug = require('pug')
const Path = require('path')
const { SimplePath } = require('./common')

const from = '../resumes'
const to = '../dist/resumes'
const sp = new SimplePath(__dirname)
const tmpl = Pug.compileFile(sp.full('./index.pug'))

const resumes = FS.readdirSync(sp.full(from))
for(let r of resumes) {
  const { name } = Path.parse(r)
  const json = FS.readFileSync(sp.full(from, r)).toString()
  const data = JSON.parse(json)
  formatData(data)
  const result = tmpl(data)
  FS.writeFileSync(sp.full(to, name + '.html'), result)
}

function formatData(data) {
  if(!data.sections) {
    console.warn('未发现任何 sections')
    data.sections = []
  }
  if(!data.name) {
    console.warn('没有姓名？就叫你肥肥了')
    data.name = 'feifei'
  }
  data.my = data.name + '的'
  if(!data.photo) {
    console.warn('没有照片？就用肥肥的照片了')
    data.photo = 'https://gitee.com/ppz-pro/ppz.vscode/raw/v0.3.1-beta/assets/feifei.jpg'
  }

  data.theme = data.theme || 'default'
  data.themeHref = '../themes/' + data.theme + '.css'
}
