import { expect, test } from '@playwright/test';
import endent from 'endent';
import { execaCommand } from 'execa';
import getPort from 'get-port';
import nuxtDevReady from 'nuxt-dev-ready';
import outputFiles from 'output-files';
import kill from 'tree-kill-promise';

test('valid', async ({ page }, testInfo) => {
  const cwd = testInfo.outputPath();

  await outputFiles(cwd, {
    'app/pages/index.vue': endent`
      <template>
        <div :class="['foo', { 'rgba': modernizr.rgba }]" />
      </template>

      <script setup lang="ts">
      const modernizr = useModernizr();
      </script>
    `,
    'nuxt.config.ts': endent`
      export default {
        modules: [
          [
            '../../src',
            {
              'feature-detects': ['css/rgba'],
              options: ['setClasses'],
            },
          ],
        ],
      }
    `,
  });

  const port = await getPort();
  const nuxt = execaCommand('nuxt dev', { cwd, env: { PORT: String(port) } });

  try {
    await nuxtDevReady();
    await page.goto(`http://localhost:${port}`);
    await expect(page.locator('html')).toContainClass('rgba');
    await expect(page.locator('.foo')).toContainClass('rgba');
  } finally {
    await kill(nuxt.pid!);
  }
});
