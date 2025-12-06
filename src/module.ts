import pathLib from 'node:path';

import {
  addImports,
  addPluginTemplate,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit';
import endent from 'endent';
import modernizr, { type ModernizrConfig } from 'modernizr-build';

const resolver = createResolver(import.meta.url);

export default defineNuxtModule<ModernizrConfig>({
  meta: { configKey: 'modernizr', name: 'nuxt-modernizr' },
  setup: async options => {
    const code = await new Promise(resolve =>
      modernizr.build(options, resolve),
    );

    addPluginTemplate({
      filename: pathLib.join('nuxt-modernizr', 'plugin.client.ts'),
      getContents: () => endent`
        // @ts-nocheck

        import { defineNuxtPlugin } from '#imports';

        export default defineNuxtPlugin(() => {
          ${code}
        })\n
      `,
      mode: 'client',
    });

    addImports({
      from: resolver.resolve('./composable'),
      name: 'useModernizr',
    });
  },
});
