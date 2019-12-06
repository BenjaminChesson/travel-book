# Travel-Book

## Technologies

- 🔥 `Vue & Nuxt` - server side and client side view components.
- 🤖 `Vuex` - application state and actions provider.
- 📦 `webpack` - bundling of both client and server with tree shaking.
- 🚀 `babel` - transpiles ES6+ where needed.
- 🍃 `less`, `BEM` and `atomic design` - modular styles.
- 🔧 `eslint` - code quality tools.
- 👟 `jest` with snapshots - testing.
- 😺 `yarn` - dependencies manager.

## Installation

- Clone the repository,
- Install NodeJS LTS (with nvm),
- Install `yarn` (ex: `brew install yarn`),
- Execute `yarn install`.

## Project tasks (✨ Yarn)

- `yarn dev` - Starts the development server.
- `yarn test` - Executes all the test suite (unit tests and linters).
- `yarn lint` - Check the code quality with ESLint and Stylelint.

## Vscode

Extensions :

```
ESLint
Prettier - Code formatter
```

Config (.vscode/settings.json) :

```JSON
{
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": true,
  "vetur.validation.template": true,
  "editor.tabSize": 2
}
```

## Glossary

<a href='https://www.wholewhale.com/tips/developer-terms-glossary' target='_blank'>Some basics</a>

## Js best practices

[View Js best practices section](tools/docs/js-tech.md)

## CSS/Less & Icons

[View CSS/LESS & Icons section](tools/docs/styles.md)

## Git

- Use <a href='https://gitmoji.carloscuesta.me' target='_blank'>Gitmoji</a> for git commit visual association: npm i -g gitmoji-cli
- Always create a feature branches named as `feat/subject` for a feature or `bug/subject` for a bug fixing branch.
- Don't commit directly to `develop` branch. Always use a Merge request with your feature branch.

Commit messages should be as :

```
<type> <subject>
```

ex:

```
:bug: Fixing video list
```

With **type** :

- :sparkles: `:sparkles:`: Creating a new feature,
- :bug: `:bug:`: Resolving a bug fix,
- :ambulance: `:ambulance:`: Temporary critical hotfix,
- :pencil: `:pencil:`: Documentation creation and changes,
- :lipstick: `:lipstick:`: Changes that do not affect the meaning of the code (Only style changes),
- :iphone: `:iphone:`: WOrking on responsive design improvements,
- :recycle: `:recycle:`: Refactoring code,
- :zap: `:zap:`: A code change that improves performance,
- :white_check_mark: `:white_check_mark:`: Adding or updating tests,
- :fire: `:fire:`: Removing useless code of files

## Project Structure

### Global structure

```
|- assets // The client bundle entry and specific source
|      |- fonts
|      |- icons
|      |- images
|- components // Most of the project components
|      |- 01-atoms // Atomic components (like input)
|      |- 02-molecules // Group of atomic components
|- layouts // Structure of layers to compose a page visual
|- pages // All website pages
|- middlewares
|- static
|- store
|- styles
|- test
|- tools
|  |- docs // Global documentations, specifications and best practices
|  |- utils // Formating & tool functions
```

## Overview

This project uses Webpack 2 to produce bundles for both the client and the
server. You will notice the following Webpack configuration files:

Using Webpack and babel across all of our source allows us to use the same level of javascript (ex: es2015/2016/2017) without having to worry about what each target environment supports. In addition to this it allows our client/server code to both support the additional file types that a typical Vue application may import (ex: CSS/Images).

## Project Dependencies

The dependencies within `package.json` are structured so that the libraries required to transpile/bundle the source are contained within the `devDependencies` section, whilst the libraries required during the server runtime are contained within the `dependencies` section.
