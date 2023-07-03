# ES6 Data Manipulation

ES6 (ECMAScript 2015) introduced several new features and enhancements to JavaScript, providing powerful tools for data manipulation. These features make it easier to work with arrays, objects, sets, maps, and other data structures. In this markdown file, we'll explore some common ES6 data manipulation techniques.

![Data-Manipulation]()

## Table of Contents

1. [Map](#map)
2. [Filter](#filter)
3. [Reduce](#reduce)
4. [Set](#set)
5. [WeakMap](#weakmap)

## Map<a name="map"></a>

The `map` function is used to transform each element of an array and create a new array based on the transformation. It takes a callback function as an argument and applies it to each element of the array. The callback function receives the current element as an argument and returns the transformed value.

Example: Doubling each element of an array using `map`

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

## Filter<a name="filter"></a>

The `filter` function is used to create a new array containing only the elements that satisfy a specific condition. It takes a callback function as an argument that defines the condition for filtering. The callback function receives the current element and returns `true` or `false` based on whether the element should be included in the filtered array.

Example: Filtering even numbers from an array using `filter`

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```

## Reduce<a name="reduce"></a>

The `reduce` function is used to reduce an array to a single value by applying a callback function to each element of the array. The callback function takes an accumulator and the current element as arguments and returns the updated value of the accumulator. The `reduce` function also accepts an optional initial value for the accumulator.

Example: Summing all elements of an array using `reduce`

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15
```

## Set<a name="set"></a>

The `Set` object is an ES6 built-in data structure that allows you to store unique values of any type. It provides methods for adding, deleting, and checking the presence of elements.

Example: Working with a `Set`

```javascript
const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(2); // Duplicate value, ignored

console.log(set.size); // Output: 3

set.delete(2);

console.log(set.has(2)); // Output: false
```

## WeakMap<a name="weakmap"></a>

The `WeakMap` object is another ES6 built-in data structure that is similar to a `Map`, but with some important differences. WeakMap allows only objects as keys and does not prevent the garbage collector from removing keys that are no longer referenced elsewhere in the program.

Example: Using `WeakMap`

```javascript
const weakMap = new WeakMap();

const key1 = {};
const key2 = {};

weakMap.set(key1, 'value1');
weakMap.set

(key2, 'value2');

console.log(weakMap.get(key1)); // Output: 'value1'

weakMap.delete(key2);

console.log(weakMap.has(key2)); // Output: false
```

These are just a few examples of how ES6 provides powerful tools for data manipulation. The features covered here, including `map`, `filter`, `reduce`, `Set`, and `WeakMap`, can greatly simplify and enhance your data manipulation tasks in JavaScript.

Remember to consult the official ECMAScript documentation and experiment with these features to explore their full potential.

Happy coding!