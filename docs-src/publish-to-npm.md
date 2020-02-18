# Publicar no NPM

Para quem faz parte da organização @b2wads, é possível fazer a publicação de uma nova versão no npm. Para fazer isso é preciso seguir os seguintes passos:

* `git checkout [branch]` | Fazer o checkout na branch desejada. É importante lembrar que a versão no package.json precisa estar atualizada.
* `npm login` | Fazer o login com sua conta pertencente ao @b2wads;
* `yarn pack:dist` | Para gerar o pacote novo;
* `npm publish [--tag nome-da-tag]` | Publicar no npm passado tags (rc, beta, etc), se for necessário.

Depois disso, a nova versão estará disponível no npm!

# NPM Tags

Para publicar uma versão de homologação que usa uma branch que não é a master, usamos o seguinte padrão:

| Branch        | Descrição                                                             | NPM Tag   |
|---------------|-----------------------------------------------------------------------|-----------|
| Master        | Releases finais/estáveis                                | n/a       |
| release/X.X.X | Seleção de commits da develop, criando uma nova versão | rc        |
| Develop       | Junção das features que foram consideradas terminadas              | beta      |
| feature/name  | Feature sendo desenvolvida                              | feat-name |

**[voltar para o README](../README.md#Manual)**
