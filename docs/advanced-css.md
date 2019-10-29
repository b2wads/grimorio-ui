## Instalação personalizada

Para personalizar as cores do Grimório✨ é necessário importar outro CSS no seu arquivo de entrada. O arquivo `grimorio-ui-custom.min.css` possui [variáveis CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/var) sem declaração, permitindo a personalização do arquivo.

Primeiro, crie seu arquivo de variáveis (estas são todas as variáveis disponíveis para serem reescritas):

```css
/* custom-variables.css */
:root {
  --c-primary: #00b8ad;
  --c-primary-light: #1bfff1;
  --c-primary-dark: #008179;
  --c-primary-dark-hover: #006e68;
  --c-secondary: #dcdcdc;
  --c-secondary-light: #e7e7e7;
  --c-secondary-medium: #bbb;
  --c-secondary-dark: #9a9a9a;
  --c-support: #2c3b4d;
  --c-support-light: #48617f;
  --c-support-dark: #1a293c;
  --c-active-input: #00b8ad;
  --c-back-disabled: #eee;
  --c-text-disabled: #999;
  --c-menu-text: #3f5d79;
  --c-beacon-color: #de4e4e;
}
```

Depois, importe suas variáveis e o arquivo custom do Grimório✨:

```js
// import the CSS on js

import '[path/to/your/styles]/custom-variables.css';
import '[path/to/node_modules]/grimorio-ui/lib/css/grimorio-ui-custom.min.css';

// or on Webpack

{ 
  //...webpack configs
  entry: {
    'your-app': [
      '[path/to/your/styles]/custom-variables.css',
      '[path/to/node_modules]/grimorio-ui/lib/css/grimorio-ui-custom.min.css',
      'index.js',
    ],
  },
}
```

No caso de querer apenas substituir algumas variáveis, é preciso importar as variáveis padrão do Grimório✨, além das customizadas.

```js
// import the CSS on js

import '[path/to/node_modules]/grimorio-ui/lib/css/variables.css';
import '[path/to/your/styles]/custom-variables.css';
import '[path/to/node_modules]/grimorio-ui/lib/css/grimorio-ui-custom.min.css';

// or on Webpack

{ 
  //...webpack configs
  entry: {
    'your-app': [
      '[path/to/your/styles]/custom-variables.css',
      '[path/to/node_modules]/grimorio-ui/lib/css/variables.css',
      '[path/to/node_modules]/grimorio-ui/lib/css/grimorio-ui-custom.min.css',
      'index.js',
    ],
  },
}
```

As variáveis do CSS tem cerca de [88% de aderência dos browsers usados no Brasil](https://caniuse.com/#feat=css-variables). Por isso, é uma boa prática usar o [`postcss-custom-properties`](https://github.com/postcss/postcss-custom-properties) para processar as variáveis css como um pre-processador faria.

Para implementar o [`postcss-custom-properties`](https://github.com/postcss/postcss-custom-properties) no seu webpack, primeiro é preciso instalar o [`postcss-loader`](https://github.com/postcss/postcss-loader) e especificar este loader numa regra de CSS. Depois basta adicionar o `postcss-custom-properties` na lista de plugins e especificar os arquivos de onde serão lidas as variáveis na opção `importFrom`.

```js
const postcssCustomProperties = require('postcss-custom-properties');

{
  // webpack css rule
  {
    test: /\.css/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            postcssCustomProperties({
              preserve: false, // Opção para sobrescrever as variaveis
              importFrom: [
                './node_modules/grimorio-ui/lib/css/variables.css',
                './path/to/your/style/custom-variables.css',
              ],
            }),
          ],
        },
      },
    ]
  }
}
```

