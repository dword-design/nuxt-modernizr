import { addPluginTemplate, isNuxt3 as isNuxt3Try } from '@nuxt/kit'
import modernizr from 'modernizr'
import { createRequire } from 'module'
import nuxtPushPlugins from 'nuxt-push-plugins'
import P from 'path'

const resolver = createRequire(import.meta.url)

export default async function (moduleOptions, nuxt) {
  let isNuxt3 = true
  try {
    isNuxt3 = isNuxt3Try()
  } catch {
    isNuxt3 = false
  }
  nuxt = nuxt || this

  const options = { ...nuxt.options.modernizr, ...moduleOptions }

  const code = await new Promise(resolve => modernizr.build(options, resolve))
  if (isNuxt3) {
    addPluginTemplate({
      filename: P.join('nuxt-modernizr', 'plugin.js'),
      getContents: () => `export default defineNuxtPlugin(() => { ${code} })`,
      mode: 'client',
    })
  } else {
    nuxtPushPlugins(nuxt, {
      fileName: P.join('nuxt-modernizr', 'plugin.js'),
      mode: 'client',
      options: code,
      src: resolver.resolve('./plugin.js.template'),
    })
  }
}
