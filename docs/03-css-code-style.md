# CSS Code Style

### Naming - CSS MODULES

`propName isModifierName`

`elementName isModifierName`

`grm-[component]__[prop||element||modifier]`

- CSS Modules adds an unique hash to the classes. Because of that, block-element naming conventions aren't necessary.
- Names are written in camelCase.
- The value of a modifier should start with with the verb `is` and be camelCased.

```js
  // <Card size="big" color="green" active>Olá</Card>
  
  <div className={`${style.big} ${style.green} ${style.isActive}`}>
    <h1 className={style.header}">Card</p>
    <p className={style.content}>Olá</p>
  </div>
```


#### Property Names (Prop)

These are the general properties of the component, usually inheriting from a common base style. Combined, they can generate different sorts of "themes" for the component.

Ex: light, black, danger, large, small, slim, extended, etc.

#### Element

These are the general elements used in the component. They can be semantically tied to the props or be detached.

Let's say perhaps the header inside a card is only red when the `danger prop` is true - then it's tied. But if the header is the same not mattering the properties, it's detached.

#### tied
```
.danger {
    color: red;
    
    .header {
        background: red;
    }
}
```

#### detached
```
.danger {
    color: red;
}

.header {
    background: gray;
}
```

Ex: header, footer, content, title, text, etc.

#### Modifier

Flags on props or elements. Use them to change appearance, behavior or state.

Ex: isActive, isError, isHidden, etc.


## Syntax

Use double quotes.

```
/* Good */
[type="..."]
[class^="..."]

.item:after {
  content: "";
}

/* Bad */
[type='...']
[class^='...']

.item:after {
  content: '';
}
```

Use a space after the selector.

```
/* Good */
.item {
  ...
}

/* Bad */
.item{
  ...
}
```

Use a space before the property value.

```
/* Good */
.item {
  color: #fff;
  margin: 10px;
}

/* Bad */
.item {
  color:#fff;
  margin:10px;
}
```

Use the semicolon after each value.

```
/* Good */
.item {
  color: #fff;
  margin: 10px;
}

/* Bad */
.item {
  color:#fff;
  margin:10px
}
```

Use a selector per line.

```
/* Good */
.item,
.box {
  color: #fff;
  margin: 10px;
}

/* Bad */
.item, .box {
  color:#fff;
  margin:10px
}
```

If the switch has only one property, use the same line (with space before and after the property value).

```
/* Good */
.item { color: #fff; }

/* Bad */
.item {
  color:#fff;
}
```

Use hexadecimal values ​​in tiny and if you can abbreviate.

```
/* Good */
.item { color: #fff; }

/* Bad */
.item { color: #FFFFFF; }
```

Not specify the drive for value `0`, except for the property `rotate`.

```
/* Good */
.item {
  margin: 0;
  transform: rotate(0deg);
}

/* Bad */
.item {
  font-size: 0em;
  margin: 0px;
}
```

### Performance

Do not use IDs

```
/* Good */
.mainMenu { ... }
.sidebar { ... }

/* Bad */
#mainMenu { ... }
#sidebar { ... }
```

Always give preference to object orientation through classes.

```
/* Good */
.container { ... }
.text { ... }

/* Bad */
div { ... }
p { ... }
```

Do not create complexity in the inheritance and always use classes.

```
/* Good */
.mainMenu-list { ... }
.mainMenu-item { ... }
.mainMenu-text { ... }

/* Bad */
.mainMenu ul { ... }
.mainMenu ul li { ... }
.mainMenu ul .mainMenu-item span { ... }
```

Use a maximum of 3 elements when you need to change the behavior of a class, through another class.

```
/* Good */
.sidebar .mainMenu { ... }
.page.on .mainMenu { ... }

/* Bad */
.page .sidebar .mainMenu a { ... }
```

**[voltar para o README](../README.md#Manual)**
