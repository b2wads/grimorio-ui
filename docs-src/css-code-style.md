# CSS Code Style

### Nomenclatura - CSS MODULES

`propName isModifierName`

`elementName isModifierName`

`grm-[component]__[prop||element||modifier]`

- CSS Modules adicionam uma hash exclusiva às classes. Por causa disso, as convenções de nomenclatura do block-element não são necessárias.
- Os nomes são escritos em camelCase.
- O valor de um modificador deve começar com verbo `is` e ser camelCased.

```js
  // <Card size="big" color="green" active>Olá</Card>
  
  <div className={`${style.big} ${style.green} ${style.isActive}`}>
    <h1 className={style.header}>Card</p>
    <p className={style.content}>Olá</p>
  </div>
```


#### Nome de Propriedades (Prop)

Essas são as propriedades genéricas do componente, geralmente herdadas de um estilo de base comum. Combinadas, elas podem gerar diferentes tipos de "temas" para o componente.

Ex: light, black, danger, large, small, slim, extended, etc.

#### Elemento

Estes são os elementos genéricos usados ​​no componente. Eles podem ser ligados semanticamente as propriedades ou separados.

Digamos que o header dentro de um card seja vermelho apenas quando a propriedade `danger prop` é verdadeira - então estão ligados. Mas se o header é o mesmo, não importando as propriedades, ele é separado.

#### Ligados
```
.danger {
    color: red;
    
    .header {
        background: red;
    }
}
```

#### Separado
```
.danger {
    color: red;
}

.header {
    background: gray;
}
```

Ex: header, footer, content, title, text, etc.

#### Modificador

Flags nas propriedades ou elementos. Use-os para mudar a aparência, o comportamento ou o estado.

Ex: isActive, isError, isHidden, etc.


## Sintaxe

Use aspas duplas.

```
/* Bom */
[type="..."]
[class^="..."]

.item:after {
  content: "";
}

/* Ruim */
[type='...']
[class^='...']

.item:after {
  content: '';
}
```

Use um espaço após o seletor.

```
/* Bom */
.item {
  ...
}

/* Ruim */
.item{
  ...
}
```

Use um espaço antes do valor da propriedade.

```
/* Bom */
.item {
  color: #fff;
  margin: 10px;
}

/* Ruim */
.item {
  color:#fff;
  margin:10px;
}
```

Use o ponto-e-vírgula após cada valor.

```
/* Bom */
.item {
  color: #fff;
  margin: 10px;
}

/* Ruim */
.item {
  color:#fff;
  margin:10px
}
```

Use um seletor por linha.

```
/* Bom */
.item,
.box {
  color: #fff;
  margin: 10px;
}

/* Ruim */
.item, .box {
  color:#fff;
  margin:10px
}
```

Se a opção tiver apenas uma propriedade, use a mesma linha (com espaço antes e depois do valor da propriedade).

```
/* Bom */
.item { color: #fff; }

/* Ruim */
.item {
  color:#fff;
}
```

Use valores hexadecimais em minúsculo e, se for possível abrevie.

```
/* Bom */
.item { color: #fff; }

/* Ruim */
.item { color: #FFFFFF; }
```

Não especifique uma unidade de medida para valor `0`, exceto se a propriedade `rotate`.

```
/* Bom */
.item {
  margin: 0;
  transform: rotate(0deg);
}

/* Ruim */
.item {
  font-size: 0em;
  margin: 0px;
}
```

### Performance

Não use IDs

```
/* Bom */
.mainMenu { ... }
.sidebar { ... }

/* Ruim */
#mainMenu { ... }
#sidebar { ... }
```

Sempre dê preferência à orientação a objetos por meio de classes.

```
/* Bom */
.container { ... }
.text { ... }

/* Ruim */
div { ... }
p { ... }
```

Não crie complexidade na herança e sempre use classes.

```
/* Bom */
.mainMenu-list { ... }
.mainMenu-item { ... }
.mainMenu-text { ... }

/* Ruim */
.mainMenu ul { ... }
.mainMenu ul li { ... }
.mainMenu ul .mainMenu-item span { ... }
```


Use no máximo 3 elementos quando precisar mudar o comportamento de uma classe, através de outra classe.

```
/* Bom */
.sidebar .mainMenu { ... }
.page.on .mainMenu { ... }

/* Ruim */
.page .sidebar .mainMenu a { ... }
```

**[voltar para o README](../README.md#Manual)**
