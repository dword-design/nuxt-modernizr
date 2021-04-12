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
        height="32"
      >
    </a><a href="https://www.buymeacoffee.com/dword">
      <img
        src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
        alt="Buy Me a Coffee"
        height="32"
      >
    </a><a href="https://paypal.me/SebastianLandwehr">
      <img
        src="https://dword-design.de/images/paypal.svg"
        alt="PayPal"
        height="32"
      >
    </a><a href="https://www.patreon.com/dworddesign">
      <img
        src="https://dword-design.de/images/patreon.svg"
        alt="Patreon"
        height="32"
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
$ npm install nuxt-modernizr

# Yarn
$ yarn add nuxt-modernizr
```
<!-- /INSTALL -->

## Usage

Add the module to your Nuxt.js modules list in `nuxt.config.js`:
```js
export default {
  ...
  modules: [
    ['nuxt-modernizr', {
      'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
      options: ['setClasses'],
    }],
  ],
}
```

Access the `Modernizr` variable in your app:
```js
if (process.client && Modernizr.cssscrollbar) {
  ...
}
```

Note that Modernizr only works client-side, so don't forget to check for client-side via `process.client`. If you use a linter that restricts global variables, you can use `window.Modernizr` instead.

Because we use a global variable here, it can also be accessed in contributed components that need to access Modernizr. The only requirement is that this module is included in the build.

## Options
This module passes the options down to the [modernizr](https://www.npmjs.com/package/modernizr) NPM package. Please refer to this for the available options.

Directly:
```js
export default {
  ...
  modules: [
    ['nuxt-modernizr', {
      'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
      options: ['setClasses'],
    }],
  ],
}
```

Top-level:
```js
export default {
  ...
  modules: [
    'nuxt-modernizr',
  ],
  modernizr: {
    'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
    options: ['setClasses'],
  },
}
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
      height="32"
    >
  </a>&nbsp;If you want to send me a one time donation. The coffee is pretty good 😊.<br/>
  <a href="https://paypal.me/SebastianLandwehr">
    <img
      src="https://dword-design.de/images/paypal.svg"
      alt="PayPal"
      height="32"
    >
  </a>&nbsp;Also for one time donations if you like PayPal.<br/>
  <a href="https://www.patreon.com/dworddesign">
    <img
      src="https://dword-design.de/images/patreon.svg"
      alt="Patreon"
      height="32"
    >
  </a>&nbsp;Here you can support me regularly, which is great so I can steadily work on projects.
</p>

Thanks a lot for your support! ❤️

## License

[MIT License](https://opensource.org/licenses/MIT) © [Sebastian Landwehr](https://dword-design.de)
<!-- /LICENSE -->
