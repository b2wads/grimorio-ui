# Build Process

Today, the build process of files and the lib generation is done in stages. It happen because we using technologies that need to be process for generate the final code. These are the phases:

- React with JSX and features JS's ES2015+, therefore we need [babel](https://babeljs.io/);
- Our CSS is made with [stylus](http://stylus-lang.com/) and using [CSS Modules](https://github.com/css-modules/css-modules), therefore need be pre-processed;
- For ensure that some color variables could be rewritten on usage of Grimório✨ we use [CSS variables](https://developer.mozilla.org/pt-BR/docs/Web/CSS/var), needing the [PostCSS](https://postcss.org/) for warranty the browsers compatibility;

The build process, so, follow the following order:

- We use babel for transpile all React Code, ES2015 from folder `/source`. As well, we use the [`css-modules-transform`](https://github.com/michalkvasnicak/babel-plugin-css-modules-transform) for insert the CSS Modules Classes on JS and generate all dependent CSS of these files. All of them are create at folder `/lib`. The command used for generate that stage is `yarn build:modules`.

- After that, e use the [`brunch.io`](https://brunch.io/) for concatenate the babel-generated CSS and all of other styles, as well the minify the files and add compatibility prefix. The brunch generates three CSS files on folder `/lib`: The `grimorio-ui.min.css` is a CSS file that contains the CSS variables declared on `:root`. The `grimorio-ui-custom.min.css` it is the same file, however without declarations of CSS variables, it is happens because who going to make them will be who want customize the Grimório✨. And the last file is the `variables.css`, that is the collection of all of CSS variables that the Grimório✨ has. It will bbe used by those who want just replace some Grimório✨'s variables, not all of them.  For understand better this particular process of customizations [see the guide](./advanced-css.md). The command used for generate this stage is `yarn build:css`.

- The last stage consists at use the [PostCSS CLI](https://github.com/postcss/postcss-cli) for to do use the [`postcss-custom-properties`](https://github.com/postcss/postcss-custom-properties). This PostCSS plugin "process" the CSS variables as if they were variables of a pre-process - effectively replacing your values on file. The CLI search on file `grimorio-ui.min.css` and replace all of variables, looking for the definition on `:root` of the own file. So that, this CSS file will be 100% ready to use by those who do not want  customize the Grimório✨'s variables. The command used to genarate this stage is `yarn build:css:variables`.

- It is important remember that these stages have to happen in that specific order! The command `yarn build` call for all these stages in the correct order.

**[back to README](../README.md#Manual)**
