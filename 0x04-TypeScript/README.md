# TypeScript

TypeScript is a superset of JavaScript that adds static typing and other advanced features to the language. It was created by Microsoft and released in 2012. TypeScript is designed to make it easier to build large-scale applications by providing a robust type system, improved tooling, and better developer productivity.

![TypeScript Image](https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png)

## Features

### Static Typing

One of the key features of TypeScript is static typing. It allows developers to define types for variables, function parameters, and return values. The TypeScript compiler checks these types and provides compile-time errors and warnings, helping catch potential bugs before runtime. This can significantly improve the reliability and maintainability of codebases, especially in large projects.

```typescript
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet('John'); // Output: Hello, John!
greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Object-Oriented Programming

TypeScript supports object-oriented programming concepts such as classes, interfaces, inheritance, and access modifiers. This allows developers to write more structured and reusable code.

```typescript
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.
```

### Type Inference

TypeScript infers types based on context, allowing developers to omit type annotations in many cases. This reduces the verbosity of the code while still providing static type checking.

```typescript
const message = 'Hello, TypeScript!'; // Type inferred as 'string'
const count = 42; // Type inferred as 'number'

function add(a: number, b: number) {
  return a + b;
}

const result = add(10, 20); // Type inferred as 'number'
```

### Advanced Features

TypeScript also introduces advanced features like union types, intersection types, generics, and more. These features provide additional flexibility and expressiveness to the language.

```typescript
type Shape = Circle | Rectangle;

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rectangle':
      return shape.width * shape.height;
  }
}

const circle: Circle = { kind: 'circle', radius: 5 };
console.log(area(circle)); // Output: 78.53981633974483
```

## Tooling

TypeScript has excellent tooling support, including a command-line compiler (`tsc`), integration with popular code editors, and a wide range of third-party libraries. The TypeScript compiler can transpile TypeScript code to standard JavaScript, allowing it to run on any JavaScript runtime.

To install TypeScript using npm:

```
npm install -g typescript
```

To compile a TypeScript file:

```
tsc myfile.ts
```

## Conclusion

TypeScript enhances JavaScript with static typing, object-oriented programming features, and advanced language capabilities. It provides benefits like improved code quality, better tooling, and increased developer productivity. With its growing popularity and strong ecosystem, TypeScript is an excellent choice for building modern web applications.