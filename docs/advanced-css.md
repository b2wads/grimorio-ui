## Customizing

For customizing Grimório✨'s Colors it's necessary import another CSS in your entry file. The file `grimorio-ui-custom.min.css` has [CSS variables](https://developer.mozilla.org/pt-BR/docs/Web/CSS/var) without declaration, allowing the file customization.

First of all, create your variables file (these are all variables available to be rewritten.)

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

Then, import your variables and the Grimório✨'s custom file:

```js
// import the CSS on js

import '[path/to/your/styles]/custom-variables.css';
import '[path/to/node_modules]/@b2wads/grimorio-ui/lib/css/grimorio-ui-custom.min.css';

// or on Webpack

{ 
  //...webpack configs
  entry: {
    'your-app': [
      '[path/to/your/styles]/custom-variables.css',
      '[path/to/node_modules]/@b2wads/grimorio-ui/lib/css/grimorio-ui-custom.min.css',
      'index.js',
    ],
  },
}
```

In the case you want just replace some variables, it is have to import the Grimório✨'s default variables and the customizers as well.

```js
// import the CSS on js

import '[path/to/node_modules]/@b2wads/grimorio-ui/lib/css/variables.css';
import '[path/to/your/styles]/custom-variables.css';
import '[path/to/node_modules]/@b2wads/grimorio-ui/lib/css/grimorio-ui-custom.min.css';

// or on Webpack

{ 
  //...webpack configs
  entry: {
    'your-app': [
      '[path/to/your/styles]/custom-variables.css',
      '[path/to/node_modules]/@b2wads/grimorio-ui/lib/css/variables.css',
      '[path/to/node_modules]@b2wads/grimorio-ui/lib/css/grimorio-ui-custom.min.css',
      'index.js',
    ],
  },
}
```

## Compatibility with browsers

The variables has amount of [88% of compatibility on browsers used in Brazil](https://caniuse.com/#feat=css-variables). Because that, it is a good practice use the[`postcss-custom-properties`](https://github.com/postcss/postcss-custom-properties) for process the CSS variables as well as a pre-processor did.

For implement the [`postcss-custom-properties`](https://github.com/postcss/postcss-custom-properties) on yours webpacck, first it is needed install the [`postcss-loader`](https://github.com/postcss/postcss-loader) and specify this loader in a CSS rule. Then just add the `postcss-custom-properties` at plugins list and describe the files where will are read the variables on option `importFrom`.

```bash
yarn add postcss-custom-properties postcss-loader -D

# or

npm i postcss-custom-properties postcss-loader -D
```

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
              preserve: false, // Option for replace the variables
              importFrom: [
                './node_modules/@b2wads/grimorio-ui/lib/css/variables.css',
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
