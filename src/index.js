import pushPlugins from '@dword-design/nuxt-push-plugins'
import modernizr from 'modernizr'
import P from 'path'

export default async function (moduleOptions) {
  const options = { ...this.options.modernizr, ...moduleOptions }
  const code = await new Promise(resolve => modernizr.build(options, resolve))
  pushPlugins(this, {
    fileName: P.join('nuxt-modernizr', 'plugin.js'),
    mode: 'client',
    options: code,
    src: require.resolve('./plugin.js.template'),
  })
}
