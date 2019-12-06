# Guidelines des techniques à appliquer en javascript

## Lodash

<a href='https://lodash.com/docs' target='_blank'>Lodash documentation</a>

## ES6

[ES6 Best practices]<a href='https://www.w3schools.com/js/js_es6.asp)

### Arrow functions

```js
function foo() {};
// Using the ECMAScript 2015 arrow notation
const foo = () => {};
};
```

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank'>Arrow function expression</a>

### Import/Export

Use

```js
import defaultExport, { export1 } from './functions.js'

const function1 = (a, b) => {
    return a * b;
}

const function2 = (a, b) => {
    return a + b;
}

export default function1
export function2
```

-   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import' target='_blank'>Import methods</a>
-   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export' target='_blank'>Export methods</a>

### Async / Await

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function' target='_blank'>Async/Await function</a>

### Destructuring

Basic Array variable assignement

```js
var foo = ['one', 'two', 'three']

var [red, yellow, green] = foo
console.log(red) // "one"
console.log(yellow) // "two"
console.log(green) // "three"
```

Rest Array destructuring

``````js
var [a, ...b] = [1, 2, 3]
console.log(a) // 1
console.log(b) // [2, 3]
````

Basic Object variable assignement
`````js
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true
``````

Rest Object destructuring

```js
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 }
a // 10
b // 20
rest // { c: 30, d: 40 }
```

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment' target='_blank'>Destructuring assignement</a>
