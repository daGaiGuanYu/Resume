const Stylus = require('stylus')
const FS = require('fs')
const Path = require('path')
const { SimplePath } = require('./common')

const from = '../themes'
const to = '../dist/themes'
const sp = new SimplePath(__dirname)

const themes = FS.readdirSync(sp.full(from))
for(let t of themes) {
  console.debug('transforming', t)
  const raw = FS.readFileSync(sp.full(from, t)).toString()
  const { name, ext } = Path.parse(t)
  const result = Stylus.render(raw)
  FS.writeFileSync(sp.full(to, name + '.css'), result)
}
