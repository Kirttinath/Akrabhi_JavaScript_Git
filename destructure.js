//Destructure : 
// It is a javascript expression that makes it possible to unpack values from arrays, or properties from objects , into distinct variables
const obj = {name: 'Kirtti',food: 'veg'}
const { name, food } = obj;
console.log(name,food);

//If you want to extract properties under a different name, you can specify them using the following format.
const obj1 = {name: 'Kirtti',food: 'veg'}

const { name: myName, food: myFood } = obj;


console.log(myName, myFood);