# Architecture

## Summary

1. [Git Flow](./01-git-flow.md)
2. [Commits](./02-commits.md)
3. [Architecture](./03-architecture.md)
4. [Dependencies](./04-dependencies.md)
5. [Technologies](./05-technologies.md)
6. [Identation (code style)](./06-identation-code-style.md)
7. [CSS (code style)](./07-css-code-style.md)
8. [Javascript (code style)](./08-javascript-code-style.md)

## Folders

```sh
├── dist
├── docs
│   ├── manual
├── helpers
│   ├── build
│   └── component
├── internals
│   ├── storybook
│   ├── test
│   └── webpack
└── source
    ├── components
    │   ├── alert
    │   ├── breadcrumb
    │   ├── button
    │   ├── form
    │   ├── form-actions
    │   ├── form-control
    │   ├── form-group
    │   ├── form-label
    │   ├── grid
    │   ├── grid-col
    │   ├── grid-row
    │   ├── help-text
    │   ├── image
    │   ├── list
    │   ├── modal
    │   ├── notifier
    │   ├── pagination
    │   ├── panel
    │   ├── suggestions
    │   ├── svg-icon
    │   └── tag
    ├── helpers
    ├── images
    │   └── svg
    │       └── icon
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
