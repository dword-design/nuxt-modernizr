<!-- TITLE/ -->
# nuxt-modernizr
<!-- /TITLE -->

<!-- BADGES/ -->
[![NPM version](https://img.shields.io/npm/v/nuxt-modernizr.svg)](https://npmjs.org/package/nuxt-modernizr)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)
[![Build status](https://github.com/dword-design/nuxt-modernizr/workflows/build/badge.svg)](https://github.com/dword-design/nuxt-modernizr/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/nuxt-modernizr)](https://coveralls.io/github/dword-design/nuxt-modernizr)
[![Dependency status](https://img.shields.io/david/dword-design/nuxt-modernizr)](https://david-dm.org/dword-design/nuxt-modernizr)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

<a href="https://gitpod.io/#https://github.com/dword-design/bar">
  <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod">
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
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
Adds a Modernizr build to your Nuxt.js app.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# NPM
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
    [
      'nuxt-modernizr',
      {
        'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
        options: ['setClasses']
      }
    ]
  ]
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
    [
      'nuxt-modernizr',
      {
        'feature-detects': ['css/scrollbars', 'css/overflow-scrolling']
        options: ['setClasses']
      }
    ]
  ]
}
```

Top-level:
```js
export default {
  ...
  modules: [
    'nuxt-modernizr'
  ],
  modernizr: {
    'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
    options: ['setClasses'],
  }
}
```
<!-- LICENSE/ -->
## License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->
