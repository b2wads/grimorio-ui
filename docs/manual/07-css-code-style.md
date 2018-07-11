# CSS Code Style

## Summary

1. [Git Flow](./01-git-flow.md)
2. [Commits](./02-commits.md)
3. [Architecture](./03-architecture.md)
4. [Dependencies](./04-dependencies.md)
5. [Technologies](./05-technologies.md)
6. [Identation (code style)](./06-identation-code-style.md)
7. [CSS (code style)](./07-css-code-style.md)
8. [Javascript (code style)](./08-javascript-code-style.md)

## Lint

[Pure Node.js Sass linting](https://github.com/sasstools/sass-lint). Configuration file in the root project `.sass-lint.yml`.

See the [rules](https://github.com/sasstools/sass-lint/tree/master/docs/rules)

### IDE Integration

- [Atom](https://atom.io/packages/linter-sass-lint)
- [Sublime Text](https://github.com/skovhus/SublimeLinter-contrib-sass-lint)
- [Brackets](https://github.com/petetnt/brackets-sass-lint)
- [IntelliJ IDEA, RubyMine, WebStorm, PhpStorm, PyCharm](https://github.com/idok/sass-lint-plugin)
- [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint)
- [Vim](https://github.com/gcorne/vim-sass-lint)

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

### Naming - CSS MODULES

`propName isModifierName`

`elementName isModifierName`

`[component]_[prop||element||modifier]_[hash:base64:5]`

- CSS Modules adds an unique hash to the classes. Because of that, block-element naming conventions aren't necessary.
- Names are written in CamelCase.
- The value of a modifier should start with with the verb `is` and be CamelCased.

```
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

### Comments

The comments before the code will always be referred to.

```
/* Basic comment */

/**
 * Block comment
 *
 */

/* ==========================================================================
   Section
   ========================================================================== */

/* Sub-section
   ========================================================================== */
```

### Declaration Order

The declaration of the property must be in alphabetical order. **Plugin CSS Comb**: [Atom](https://atom.io/packages/atom-csscomb), [Sublime text](https://packagecontrol.io/packages/CSScomb), [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-csscomb). (configuration `.csscomb.json` in the project root)

```
/* Good */
.item {
  background: #fff;
  color: #ffcc00;
  margin: 0;
  position: absolute;
}

/* Bad */
.item {
  margin: 0;
  position: absolute;
  background: #fff;
  color: #ffcc00;
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

Delete spaces and comments in the production environment.

```
/* Good */
.mainMenu{...} .mainMenu-item{...}

/* Bad */
.mainMenu {
  ...
}

.mainMenu-item {
  ...
}
```

### Media Queries

Always start development in `Mobile first`

```
/* Good */
.mainMenu { ... }

@media (min-width: 768px) {
  .mainMenu { ... }
}

@media (min-width: 992px) {
  .mainMenu { ... }
}

/* Bad */
.mainMenu { ... }

@media (max-width: 767px) {
  .mainMenu { ... }
}
```

Keep the rules to a selector on mobile devices and so too dispositos, always together.

```
/* Good */
.mainMenu-item { ... }

@media (min-width: 992px) {
  .mainMenu-item { ... }
}

.mainMenu-link { ... }

@media (min-width: 992px) {
  .mainMenu-link { ... }
}

/* Bad */
.mainMenu { ... }
.mainMenu-item { ... }
.mainMenu-link { ... }

@media (min-width: 992px) {
  .mainMenu { ... }
  .mainMenu-item { ... }
  .mainMenu-link { ... }
}
```

**[⬆ back to the top](#summary)**
