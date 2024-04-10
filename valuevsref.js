// Value VS Reference Variables
// In Javascript always assigns variables by value. But this part is very important: when the assigned value is one of JavaScript’s five primitive type (i.e., Boolean, null, undefined, String, and Number) the actual value is assigned. However, when the assigned value is an Array, Function, or Object a reference to the object in memory is assigned

let str = "Kirttinath";
let str1 = str;
str1 = "Kirtti";
console.log(str);
console.log(str1); // this gives same output as str
// But in reference case
let obj = { name: "Kirtti" };
let obj1 = obj;
obj1.name = "Kojha";
console.log(obj);
console.log(obj1); // This will give different output because it is a reference to the original object not creating new one
let a = [1, 2];
let b = a;
b[0] = 3;
console.log(a[0]);
