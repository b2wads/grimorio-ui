# Architecture

## Summary

1. [Git Flow](./01-git-flow.md)
2. [Commits](./02-commits.md)
3. [Architecture](./03-architecture.md)
4. [Technologies](./04-technologies.md)
5. [Identation (code style)](./05-identation-code-style.md)
6. [CSS (code style)](./06-css-code-style.md)
7. [Javascript (code style)](./07-javascript-code-style.md)

## Folders

```sh
├── dist
├── docs
│   ├── manual
│   └── support
├── helpers
│   └── component
├── internals
│   ├── storybook
│   ├── test
│   └── webpack
├── lib
└── source
    ├── components
    │   ├── button
    │   ├── icon
    │   ├── panel
    │   └── svg
    ├── helpers
    ├── images
    │   └── svg
    │       └── logo
    └── styl
        ├── 00-settings
        ├── 01-tools
        ├── 02-generic
        ├── 03-base
        ├── 04-vendor
        ├── 05-objects
        ├── 06-components
        ├── 07-pages
        ├── 08-theme
        └── 09-trumps
```

## Components

  - components
    - button
      - button-component.js `component`
      - button.styl `style`
      - button.story.js `storybook`
      - button.test.js `tests`
      - index.js

**[⬆ back to the top](#summary)**
