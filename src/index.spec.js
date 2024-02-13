import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir'
import { execaCommand } from 'execa'
import fs from 'fs-extra'
import nuxtDevReady from 'nuxt-dev-ready'
import ora from 'ora'
import outputFiles from 'output-files'
import P from 'path'
import kill from 'tree-kill-promise'

export default tester(
  {
    async nuxt2() {
      await outputFiles({
        'nuxt.config.js': endent`
          export default {
            modules: [
              [
                '~/../src/index.js',
                {
                  'feature-detects': ['css/rgba'],
                  options: ['setClasses'],
                },
              ],
            ],
          }
        `,
        'pages/index.vue': endent`
          <template>
            <div />
          </template>
        `,
      })
      await fs.remove('node_modules')
      await fs.symlink(
        P.join('..', 'node_modules', '.cache', 'nuxt2', 'node_modules'),
        'node_modules',
      )

      const nuxt = execaCommand('node_modules/.bin/nuxt dev')
      try {
        await nuxtDevReady()
        await this.page.goto('http://localhost:3000')
        await this.page.waitForSelector('html.rgba')
        expect(
          await this.page.evaluate(() => window.Modernizr.rgba),
        ).toBeTruthy()
      } finally {
        await kill(nuxt.pid)
      }
    },
    async valid() {
      await outputFiles({
        'nuxt.config.js': endent`
          export default {
            modules: [
              [
                '../src/index.js',
                {
                  'feature-detects': ['css/rgba'],
                  options: ['setClasses'],
                },
              ],
            ],
          }
        `,
        'pages/index.vue': endent`
          <template>
            <div />
          </template>
        `,
      })

      const nuxt = execaCommand('nuxt dev')
      try {
        await nuxtDevReady()
        await this.page.goto('http://localhost:3000')
        await this.page.waitForSelector('html.rgba')
        expect(
          await this.page.evaluate(() => window.Modernizr.rgba),
        ).toBeTruthy()
      } finally {
        await kill(nuxt.pid)
      }
    },
  },
  [
    testerPluginTmpDir(),
    testerPluginPuppeteer(),
    {
      before: async () => {
        const spinner = ora('Installing Nuxt 2').start()
        await fs.outputFile(
          P.join('node_modules', '.cache', 'nuxt2', 'package.json'),
          JSON.stringify({}),
        )
        await execaCommand('yarn add nuxt@^2 @nuxt/content@^1', {
          cwd: P.join('node_modules', '.cache', 'nuxt2'),
        })
        spinner.stop()
      },
    },
  ],
)
