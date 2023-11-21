//Spread Syntax : 
//The spread syntax allows an iterable (like arrays and strings) to be expanded in places where zero or more arguments are expected.

// Math.max can't be applied to the arr array because it doesn't take an array as an argument, it takes the individual elements as arguments. The spread operator ... is used to pull the individual elements out the array.

const arr = [4, 6, -1, 3, 10, 4];
const max = Math.max(...arr);//... is spread syntax
console.log(max);