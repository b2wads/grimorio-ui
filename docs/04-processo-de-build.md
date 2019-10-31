# Processo de Build

Hoje, o processo de build de arquivos e geração da lib é feito em etapas. Isso se dá pois usamos algumas tecnologias que precisam ser processadas para gerar seu código final, são elas:

- React com JSX e features ES2015+ do JS, portanto necessitando do [babel](https://babeljs.io/);
- Nosso CSS é feito com [stylus](http://stylus-lang.com/) e usando [CSS Modules](https://github.com/css-modules/css-modules), portanto nessessitando ser pré-processado;
- Para garantir que algumas variáveis de cor poderão ser re-escritas na utilização do Grimório✨ usamos [variáveis CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/var), necessitando do [PostCSS](https://postcss.org/) para garantir compatibilidade de browsers;

O processo de build, então, segue a seguinte ordem:

- Usamos o babel para transformar todo o código React, ES2015 da pasta `/source`. Além disso, usamos o [`css-modules-transform`](https://github.com/michalkvasnicak/babel-plugin-css-modules-transform) para inserir as classes do CSS Modules no JS e gerar todo o CSS dependente desses arquivos. Todos são criados na pasta `/lib`. O comando usado para gerar essa etapa é `yarn build:modules`.

- Após isso, usamos o [`brunch.io`](https://brunch.io/) para concatenar o CSS gerado pelo babel e todos os outros estilos, além de minificar a adicionar prefixos de compatibilidade. O brunch gera três arquivos CSS na pasta `/lib`: O `grimorio-ui.min.css` é o arquivo CSS contendo as variáveis CSS declaradas no `:root`. O `grimorio-ui-custom.min.css` é o mesmo arquivo, porém sem as declarações de variáveis de CSS, isso porque quem irá fazê-las será quem quiser customizar o Grimório✨. E o último arquivo é o `variables.css`, que é a coleção de todas as variáveis CSS que o Grimório✨ tem. Ele será usado por quem quiser apenas substituir algumas variáveis do Grimório✨, não todas. Para entender melhor o processo de customização [ver o guia](./advanced-css.md). O comando usado para gerar essa etapa é `yarn build:css`.

- A última etapa consiste em usar o [CLI do PostCSS](https://github.com/postcss/postcss-cli) para fazer uso do [`postcss-custom-properties`](https://github.com/postcss/postcss-custom-properties). Esse plugin do PostCSS "processa" as variáveis de CSS como se fossem variáveis de um pré-procesador - efetivamente substituindo seus valores no arquivo. A CLI busca o arquivo `grimorio-ui.min.css` e substitui todas as variáveis, bustando a definição no `:root` do próprio arquivo. Isso faz com que esse arquivo css esteja 100% preparado para o uso de quem não quer customizar as variáveis do Grimório✨. O comando usado para gerar essa etapa é `yarn build:css:variables`.

- É importante lembrar que essas etapas precisam acontecer nessa ordem especificada! O comando `yarn build` chama todas essas etapas na ordem correta.

**[voltar para o README](../README.md#Manual)**
