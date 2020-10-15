# vue_template_components

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Storybook

2020/10/8 時点で、Storybook は Vue3 に対応していませんでした。

そのため、 `@storybook/vue": "^6.0.26` は使用せずに [`@andoshin11/storybook-vue3`](https://www.npmjs.com/package/@andoshin11/storybook-vue3) を使用しました。

Strorybook が Vue3 に対応した場合、ライブラリの切り替えが必要になります。

`@storybook/addon-storyshots` も `@storybook/vue` が無いと使えないため、一旦中止です。