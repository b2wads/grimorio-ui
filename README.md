<p align="center">
  <img alt="Grimório✨" src="internals/logo/logo-grimorio-cores.png?raw=true">
</p>

<h3 align="center">
  UI just like magic
</h3>

## Prerequisites

- [Node >= v8.10.0](https://nodejs.org/en/)

## Install
Primeiro, copie o pacote para uma pasta do seu projeto, por exemplo `/packages`. Depois adicione a dependencia no seu package.json e atualize!

```bash
// your package.json

"dependencies": {
  "grimorio-ui": "./packages/grimorio-ui-4.1.0.variation.tgz"
}
```

```bash
npm install
// or
yarn
```

Importe o css do Grimório✨ no seu arquivo de entrada e insira um loader no webpack

```bash
// import the CSS

// ex: layout.js
import '[node_modules path]/grimorio-ui/dist/grimorio-ui.min.css';

// webpack
{
  test: /\.styl$/,
  loader: 'style!css?modules=1&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss!stylus?sourceMap',
  include: path.resolve(__dirname, '../../source'),
  exclude: path.resolve(__dirname, "../../node_modules")
},
{
  test: /\.css/,
  loader: 'style!css',
  include: path.resolve(__dirname, "../../node_modules/grimorio-ui/dist/")
}
```
E então, é só usar!

```js
// component.js

import { Alert } from 'grimorio-ui';
```

## Local Usage

## UI Components (storybook)

http://localhost:9000

```bash
THEME_ENV=afiliados yarn storybook
```

## Tests

```bash
yarn test
```

## Build and Pack
Caso não exista nenhum pacote já criado, usar esse comando:

```bash
THEME_ENV=afiliados yarn pack:build
```
E caso já exista um pacote gerado:

```bash
THEME_ENV=afiliados yarn pack:full
```

## Copy
Remove o pacote antigo do repositório `APP` e copia o novo

```bash
APP=afiliados-webapp yarn cp:pack
```

## CLI

### Creating file structure for the component

```bash
./helpers/component/create.sh component-name path
```
```sh
└── component-name
    ├── component-name/index.js
    ├── component-name/component-name-component.js
    ├── component-name/component-name.styl
    ├── component-name/component-name.story.js
    └── component-name/component-name.test.js
```

```bash
./helpers/component/create-with-redux.sh component-name path
```
```sh
└── component-name
    ├── component-name/index.js
    ├── component-name/component-name-actions.js
    ├── component-name/component-name-component.js
    ├── component-name/component-name-constants.js
    ├── component-name/component-name-container.js
    ├── component-name/component-name-reducer.js
    ├── component-name/component-name.styl
    ├── component-name/component-name.story.js
    └── component-name/component-name.test.js
```

## Manual

1. [Git Flow](./docs/01-git-flow.md)
2. [Commits](./docs/02-commits.md)
3. [CSS (code style)](./docs/03-css-code-style.md)
4. [Links Úteis](./docs/04-links-uteis.md)

