<p align="center">
  <img alt="Grimório✨" src="internals/logo/logo-grimorio-cores.png?raw=true">
</p>

<h3 align="center">
  UI just like magic
</h3>

## Prerequisites

- [Node >= v8.10.0](https://nodejs.org/en/)

## Install
Primeiro, copie o pacote para uma pasta do seu projeto, por exemplo `/packages`. Depois adicione a dependencia no seu package.json e instale!

```bash
# your package.json

"dependencies": {
  "grimorio-ui": "./packages/grimorio-ui-x.x.x.tgz"
}
```

```bash
yarn

# or

npm i
```

Importe o CSS do Grimório✨ no seu arquivo de entrada ou na lista de entrypoints do seu Webpack:

```js
// import the CSS on js

import '[path/to/node_modules]/grimorio-ui/lib/css/grimorio-ui.min.css';

// or

{ 
  //...webpack configs
  entry: {
    'your-app': [
      '[path/to/node_modules]/grimorio-ui/lib/css/grimorio-ui.min.css',
      'index.js',
    ],
  },
}

```

E então, é só usar!

```js
// component.js

import { Alert } from 'grimorio-ui';
```

Caso seu webpack ignore o `node_modules` na hora de gerar o build de CSS, é necessário criar uma regra para incluir o CSS do Grimório✨.

```js
// exemplo de exceção no webpack 3.X.X
{
  test: /\.css$/,
  include: path.resolve(__dirname, '[path/to/node_modules]/grimorio-ui/lib/css/grimorio-ui.min.css'),
  use: ['style-loader', 'css-loader', { ... }],
},
```

## Personalização

Caso seja necessário mudar as cores principais do Grimório✨ é possível através de [variáveis CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/var). Veja o [guia de personalização](./docs/advanced-css.md)
 para entender como.

## Comandos

### Visualização com Storybook

Para visualizar e interagir com os componentes do Grimório✨, basta rodar localmente o `storybook`.

```bash
yarn storybook
```

### Build e Pack
Para chamar a build e gerar o pacote, o comando é:

```bash
yarn pack:dist
```

### Copiar
Remove o pacote antigo do repositório `APP` e copia o novo

```bash
APP=[path/to/app]/your-webapp yarn cp:pack
```

### Rodando testes

```bash
yarn test
```

### CLI

Temos um script sh que fica encarregado por criar a estrutura de arquivos e pastas dos componentes.

```sh
yarn create:comp nome-do-componente
```

Esse comando será capaz de criar as pastas e arquivos corretamente para iniciar o desenvolvimento de um componente.

## Manual

1. [Git Flow](./docs/01-git-flow.md)
2. [Commits](./docs/02-commits.md)
3. [CSS (code style)](./docs/03-css-code-style.md)
4. [Processo de Build](./docs/04-processo-de-build.md)
5. [Links Úteis](./docs/05-links-uteis.md)
6. [Guia de Personalização](./docs/advanced-css.md)

