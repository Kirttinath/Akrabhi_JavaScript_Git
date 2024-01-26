//* Spread Syntax :
//? ---------------

//* It is an operator which use to expand iterable (like array, object, and string ) to individual items.

const arr = [1, 2, 3, 4];
console.log(arr);
console.log(...arr);
const arr1 = [...arr, 5, 6, 7, 8];
console.log(arr1);

//? String

const str = "hello";

const chars = [...str];
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']

//? Object

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

// Combining two objects
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Output: { x: 1, y: 2, z: 3 }
