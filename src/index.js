import modernizr from 'modernizr'
import { createRequire } from 'module'
import nuxtPushPlugins from 'nuxt-push-plugins'
import P from 'path'

const _require = createRequire(import.meta.url)

export default async function (moduleOptions) {
  const options = { ...this.options.modernizr, ...moduleOptions }

  const code = await new Promise(resolve => modernizr.build(options, resolve))
  nuxtPushPlugins(this, {
    fileName: P.join('nuxt-modernizr', 'plugin.js'),
    mode: 'client',
    options: code,
    src: _require.resolve('./plugin.js.template'),
  })
}
