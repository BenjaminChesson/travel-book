# Guidelines autour des CSS / Icons

## Configuration files

-   L'ensemble des fichiers de configuration de styles se trouvent dans `./styles`
-   Ces fichiers de configurations ne doivent pas générer de code CSS (seulement variables, mixins, fonctions, ...)

## Nommage des fichiers

-   Create one or several (if brand customs) less files for each React module then require it into the js file,
-   Default, use common (`foo.common.less`) as an extension,
-   For brand custom styles, use client as extension (`foo.light.less`, `foo.dark.less`, ...).

## BEM Synthax

-   Modules should respect <a href='https://en.bem.info/methodology/naming-convention' target='_blank' >BEM</a> class naming.
-   Write `/** @define Button */` before each BEM module to enable the linter module checking.
-   Please respect : `Block`, `Block_modifier`, `Block__element`, `Block.is-state`.

## Stylelint use case

## Icons & font

1. Add an optimized svg file into `src/assets/{ light | dark }/icons`,
2. Import like any file `import Logo from '../assets/common/icons/Logo.vue';`,
3. Use it like a component (ex: `<Logo />`).
