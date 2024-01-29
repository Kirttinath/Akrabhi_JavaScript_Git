//* Primitive data-types such as umbers, strings, and booleans are immutable
//* Immutable means that once a value is assigned to an object it cannot be changed.
let num = 10;
let num2 = num;
num2 = 89;
console.log(num);
console.log(num2);

let str = "Hello";
let str2 = str;
str2 = "World";
console.log(str);
console.log(str2);

let bool = true;
let bool2 = bool;
bool2 = false;
console.log(bool);
console.log(bool2);

//* Non-Primitive data types such as objects(array,functions) are mutable

let arr = [1, 2, 3];
let arr2 = arr;
arr2[2] = 50;
console.log(arr);
console.log(arr2);

let obj = {
  name: "Kirtti",
  age: 24,
};
let obj2 = obj;
obj2.age = 26;
console.log(obj);
console.log(obj2);
