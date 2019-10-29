# Processo de Build

Hoje, nosso processo de build de arquivos é feito em etapas e de um jeito não-usual. Para garantir que algumas variáveis poderão ser re-escritas na utilização do tema, usamos [variáveis CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/var), mas não deixamos de gerar um CSS padrão para o tema. 

O processo segue a seguinte ordem:

- Usamos o babel para transformar todo o código React, ES5 da pasta `/source`. Além disso, usamos o `css-modules-transform` para inserir as classes do CSS Modules e gerar todo o CSS dependente desses arquivos JS. O arquivo principal, contendo os exports de todos os componentes é o `source/index.js`. Todos esses aquivos são criados na pasta `/lib`. O comando usado para gerar essa etapa é `yarn build:modules`.

- Após isso, usamos o `brunch.io` para concatenar o CSS gerado pelo babel e todos os outros estilos, além de minificar a adicionar prefixos de compatibilidade. O brunch gera três arquivos CSS na pasta `/lib`. O `grimorio-ui.min.css` é o arquivo CSS contendo as variáveis CSS declaradas no `:root`. O `grimorio-ui-custom.min.css` é o mesmo arquivo, porém sem as declarações de variáveis de CSS, isso porque quem irá fazê-las será quem quiser customizar o tema. E o último arquivo é o `variables.css`, que é a coleção de todas as variáveis CSS que o tema tem. Ele será usado na próxima etapa. O comando usado para gerar essa etapa é `yarn build:css`.

- A última etapa consiste em usar o CLI do post-css para fazer uso do `postcss-custom-properties`. Esse plugin do post-css "processa" as variáveis de CSS como se fossem variáveis de um pre-procesador - efetivamente substituindo seus valores. A CLI busca o arquivo `grimorio-ui.min.css` e substitui todas as variáveis, bustando a definição no arquivo `variables.css` da pasta `/lib`. Isso faz com que esse arquivo css esteja 100% preparado para o uso de quem não quer customizar as variáveis do tema. O comando usado para gerar essa etapa é `yarn build:css:variables`.

- É importante lembrar que essas etapas precisam acontecer nessa ordem especificada! O comando `yarn build` chama todas essas etapas na ordem correta.

**[voltar para o README](../README.md#Manual)**
