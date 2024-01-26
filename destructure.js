//Destructure :
// It is a javascript expression that makes it possible to unpack values from arrays, or properties from objects , into distinct variables
const obj = { name: "Kirtti", food: "veg" };
const { name, food } = obj;
console.log(name, food);

//If you want to extract properties under a different name, you can specify them using the following format.
const obj1 = { name: "Kirtti", food: "veg" };

const { name: myName, food: myFood } = obj1;

console.log(myName, myFood);

// destructuring can be (and often is) used directly for extracting parameters passed to a function.
const person = { name: "Kirtti", age: 24 };
function introduce({ name, age }) {
  console.log(`I'm ${name} and I'm ${age} years old!`);
}
introduce(person);
