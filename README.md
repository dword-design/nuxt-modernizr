<!-- TITLE/ -->
# nuxt-modernizr
<!-- /TITLE -->

<!-- BADGES/ -->
<p>
  <a href="https://npmjs.org/package/nuxt-modernizr">
    <img
      src="https://img.shields.io/npm/v/nuxt-modernizr.svg"
      alt="npm version"
    >
  </a><img src="https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue" alt="Linux macOS Windows compatible"><a href="https://github.com/dword-design/nuxt-modernizr/actions">
    <img
      src="https://github.com/dword-design/nuxt-modernizr/workflows/build/badge.svg"
      alt="Build status"
    >
  </a><a href="https://codecov.io/gh/dword-design/nuxt-modernizr">
    <img
      src="https://codecov.io/gh/dword-design/nuxt-modernizr/branch/master/graph/badge.svg"
      alt="Coverage status"
    >
  </a><a href="https://david-dm.org/dword-design/nuxt-modernizr">
    <img src="https://img.shields.io/david/dword-design/nuxt-modernizr" alt="Dependency status">
  </a><img src="https://img.shields.io/badge/renovate-enabled-brightgreen" alt="Renovate enabled"><br/><a href="https://gitpod.io/#https://github.com/dword-design/nuxt-modernizr">
    <img
      src="https://gitpod.io/button/open-in-gitpod.svg"
      alt="Open in Gitpod"
      width="114"
    >
  </a><a href="https://www.buymeacoffee.com/dword">
    <img
      src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
      alt="Buy Me a Coffee"
      width="114"
    >
  </a><a href="https://paypal.me/SebastianLandwehr">
    <img
      src="https://sebastianlandwehr.com/images/paypal.svg"
      alt="PayPal"
      width="163"
    >
  </a><a href="https://www.patreon.com/dworddesign">
    <img
      src="https://sebastianlandwehr.com/images/patreon.svg"
      alt="Patreon"
      width="163"
    >
  </a>
</p>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
Adds a Modernizr build to your Nuxt.js app.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# npm
$ npx nuxi module add nuxt-modernizr

# Yarn
$ yarn nuxi module add nuxt-modernizr
```
<!-- /INSTALL -->

## Usage

Add the module to your Nuxt.js modules list in `nuxt.config.ts`:
```js
export default defineNuxtConfig({
  ...
  modules: [
    ['nuxt-modernizr', {
      'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
      options: ['setClasses'],
    }],
  ],
});
```

Access Modernizr via the composable in your app:
```vue
<script setup lang="ts">
const modernizr = useModernizr();
</script>
```

Note that Modernizr only works client-side. The composable returns either a Modernizr instance or null, if we are server-side. So a reasonable check would look like this:

```ts
if (modernizr?.rgba) {
  console.log('Browser supports rgba.'),
}
```

## Options
This module passes the options down to the [modernizr](https://www.npmjs.com/package/modernizr) NPM package. Please refer to this for the available options.

Inline:
```ts
export default defineNuxtConfig({
  ...
  modules: [
    ['nuxt-modernizr', {
      'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
      options: ['setClasses'],
    }],
  ],
});
```

Top-level:
```ts
export default defineNuxtConfig({
  ...
  modules: [
    'nuxt-modernizr',
  ],
  modernizr: {
    'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
    options: ['setClasses'],
  },
});
```

<!-- LICENSE/ -->
## Contribute

Are you missing something or want to contribute? Feel free to file an [issue](https://github.com/dword-design/nuxt-modernizr/issues) or a [pull request](https://github.com/dword-design/nuxt-modernizr/pulls)! ⚙️

## Support

Hey, I am Sebastian Landwehr, a freelance web developer, and I love developing web apps and open source packages. If you want to support me so that I can keep packages up to date and build more helpful tools, you can donate here:

<p>
  <a href="https://www.buymeacoffee.com/dword">
    <img
      src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
      alt="Buy Me a Coffee"
      width="114"
    >
  </a>&nbsp;If you want to send me a one time donation. The coffee is pretty good 😊.<br/>
  <a href="https://paypal.me/SebastianLandwehr">
    <img
      src="https://sebastianlandwehr.com/images/paypal.svg"
      alt="PayPal"
      width="163"
    >
  </a>&nbsp;Also for one time donations if you like PayPal.<br/>
  <a href="https://www.patreon.com/dworddesign">
    <img
      src="https://sebastianlandwehr.com/images/patreon.svg"
      alt="Patreon"
      width="163"
    >
  </a>&nbsp;Here you can support me regularly, which is great so I can steadily work on projects.
</p>

Thanks a lot for your support! ❤️

## See also

* [nuxt-mail](https://github.com/dword-design/nuxt-mail): Adds email sending capability to a Nuxt.js app. Adds a server route, an injected variable, and uses nodemailer to send emails.
* [nuxt-route-meta](https://github.com/dword-design/nuxt-route-meta): Adds Nuxt page data to route meta at build time.
* [nuxt-mermaid-string](https://github.com/dword-design/nuxt-mermaid-string): Embed a Mermaid diagram in a Nuxt.js app by providing its diagram string.
* [nuxt-content-git](https://github.com/dword-design/nuxt-content-git): Additional module for @nuxt/content that replaces or adds createdAt and updatedAt dates based on the git history.
* [nuxt-babel-runtime](https://github.com/dword-design/nuxt-babel-runtime): Nuxt CLI that supports babel. Inspired by @nuxt/typescript-runtime.

## License

[MIT License](https://opensource.org/license/mit/) © [Sebastian Landwehr](https://sebastianlandwehr.com)
<!-- /LICENSE -->
