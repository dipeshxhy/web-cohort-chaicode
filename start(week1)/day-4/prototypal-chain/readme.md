prototype and **proto**

- `prototype` is a property of functions, including constructor functions like `Object`, `Number`,
  `String`, and user-defined functions/classes that are meant to be used with `new`

- Instances created from these constructors have a `__proto__` property that points to their
  constructor's `prototype` object

- This creates the prototype chain that enables inheritance in JavaScript

[Blog on prototypal inheritance](https://is-everything-in-js-is-object.hashnode.dev/understanding-everything-is-an-object-in-javascript)
