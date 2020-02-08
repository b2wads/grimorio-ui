<p align="center">
  <img alt="Grimório✨" src="internals/logo/logo-grimorio-cores.png?raw=true">
</p>

<h3 align="center">
  UI just like magic
</h3>

<p align="center">
  Grimório✨ is a collection of user interface components ready to use in React projects ⚛️. They are 40 components inspired by <a href="https://material.io/design/">Material Design</a> with customized through <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties">Variáveis CSS</a>!
</p>

<div align="center">

  [![npm version](https://img.shields.io/npm/v/@b2wads/grimorio-ui?label=npm%20package)](https://www.npmjs.com/package/@b2wads/grimorio-ui)
  [![GitHub issues](https://img.shields.io/github/issues/b2wads/grimorio-ui)](https://github.com/b2wads/grimorio-ui/issues)
  [![GitHub contributors](https://img.shields.io/github/contributors/b2wads/grimorio-ui)](https://github.com/b2wads/grimorio-ui/graphs/contributors)  
</div>

# 📦 Installing

First, install the npm package:

```bash
yarn add @b2wads/grimorio-ui
```
```bash
npm i @b2wads/grimorio-ui
```

Import the CSS of Grimório✨ on your enter files or entrypoints list of your Webpack.

```js
// import the CSS on js

import '[path/to/node_modules]/@b2wads/grimorio-ui/lib/css/grimorio-ui.min.css';

// or

{ 
  //...webpack configs
  entry: {
    'your-app': [
      '[path/to/node_modules]/@b2wads/grimorio-ui/lib/css/grimorio-ui.min.css',
      'index.js',
    ],
  },
}

```

So that, it is just to use!

```js
// component.js

import { Alert } from '@b2wads/grimorio-ui';
```


In case your Webpack ignore the `node_modules` when it generates the CSS build, will be necessary create a rule for include the Grimório✨ CSS.

```js
// example of Webpack execution 3.X.X
{
  test: /\.css$/,
  include: path.resolve(__dirname, '[path/to/node_modules]/@b2wads/grimorio-ui/css/grimorio-ui.min.css'),
  use: ['style-loader', 'css-loader', { ... }],
},
```

### 💅 Customizing

If it is necessary change the Grimório✨ main colors, you can do that just using [CSS variables](https://developer.mozilla.org/pt-BR/docs/Web/CSS/var). See the [customizing guide](./docs/advanced-css.md)
 for understanding more.

### 🕰 Old versions migration
For migrate from Grimório✨ 6.X or later to the latest version, it is necessary change the CSS import path. This also count for all variations `grimorio-ui-[version].afiliados.tgz` of Grimório✨.

```js
// ❌ Old CSS
import '[path/to/node_modules]/@b2wads/grimorio-ui/grimorio-ui.min.css';

// ✔️ New CSS
import '[path/to/node_modules]/@b2wads/grimorio-ui/css/grimorio-ui.min.css';

```
In the case of migration occurs from others variations of Grimório✨ (`grimorio-ui-[version].b2wads.tgz` or `grimorio-ui-[version].sieve.tgz`), will be necessary follow the [customizing guide](./docs/advanced-css.md), using [legacy variables](./docs/legacy-variables.md) relative to each variant.


# 🕹 Development

Before start to contribute on Grimório✨, read our [contribution guide](./CONTRIBUTING.md).

### 📘 Storybook Usage

To view and interact with components of Grimório✨, just run localy the `storybook`.

```bash
yarn storybook
```

### ⛏️ Build and Pack

To call the build process and generate the package, the command is:

```bash
yarn pack:dist
```

### 📋 Copy

Remove the old package from repository `APP` and copy the new one 

```bash
APP=[path/to/app]/your-webapp yarn cp:pack
```

### 🧪 Runnigng the tests

Without secrets here, just run:

```bash
yarn test
```

### 💻 CLI

We have a sh script that going to create the files and folders structure of components. 

```sh
yarn create:comp component-name
```

This command is capable to create the files and folders correctly for you. 

### 📜 Docs

- [Git Flow](./docs/git-flow.md)
- [Commits](./docs/commits.md)
- [CSS (code style)](./docs/css-code-style.md)
- [Build Process](./docs/processo-de-build.md)
- [Useful Links](./docs/links-uteis.md)
- [NPM](./docs/publish-to-npm.md)
