import { endent, mapValues, noop } from '@dword-design/functions'
import puppeteer from '@dword-design/puppeteer'
import { outputFile } from 'fs-extra'
import { Builder, Nuxt } from 'nuxt'
import withLocalTmpDir from 'with-local-tmp-dir'

let browser
let page

const runTest = config => () => {
  config = { test: noop, ...config }

  return withLocalTmpDir(async () => {
    await outputFile('pages/index.vue', config.page)

    const nuxt = new Nuxt({
      createRequire: 'native',
      dev: false,
      modules: [
        [
          '~/../src',
          {
            'feature-detects': ['css/rgba'],
            options: ['setClasses'],
          },
        ],
      ],
    })
    await new Builder(nuxt).build()
    await nuxt.listen()
    try {
      await page.goto('http://localhost:3000')
      await config.test()
    } finally {
      await nuxt.close()
    }
  })
}

export default {
  after: () => browser.close(),
  before: async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
  },
  ...({
    valid: {
      page: endent`
        <script>
        export default {
          render() {
            return <div />
          }
        }
        </script>

      `,
      test: async () => {
        await page.waitForSelector('html.rgba')
        expect(await page.evaluate(() => window.Modernizr.rgba)).toBeTruthy()
      },
    },
  } |> mapValues(runTest)),
}
