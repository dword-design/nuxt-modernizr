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
declare module '@nuxt/schema' {
  interface NuxtConfig {
    modernizr?: Partial<ModernizrConfig>;
  }
  interface NuxtOptions {
    modernizr: ModernizrConfig;
  }
}

export default defineNuxtModule({
  setup: async (moduleOptions, nuxt) => {
    const options = { ...nuxt.options.modernizr, ...moduleOptions };

    const code = await new Promise(resolve =>
      modernizr.build(options, resolve),
    );

    addPluginTemplate({
      filename: pathLib.join('nuxt-modernizr', 'plugin.ts'),
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
