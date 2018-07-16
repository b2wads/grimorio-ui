## Identation

## Summary

1. [Git Flow](./01-git-flow.md)
2. [Commits](./02-commits.md)
3. [Architecture](./03-architecture.md)
4. [Technologies](./04-technologies.md)
5. [Identation (code style)](./05-identation-code-style.md)
6. [CSS (code style)](./06-css-code-style.md)
7. [Javascript (code style)](./07-javascript-code-style.md)

The indentation style is using tab soft and the size of the indentation is 2.

```
<!-- Good -->
<section>
  <h3 class="title"></h3>
  <p class="text"></p>
</section>

<!-- Bad -->
<section>
    <h3 class="title"></h3>
    <p class="text"></p>
</section>
```

```
/* Good */
.item {
  background: red;
  color: white;
}

/* Bad */
.item {
    background: red;
    color: white;
}
```

Example configuration file (.editorconfig):

```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

**[⬆ back to the top](#summary)**
