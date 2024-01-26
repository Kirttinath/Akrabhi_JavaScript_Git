//* call :
//? If we have a function and object and  you have to run function on that object or we put `this` keyword which reference to the window to change that reference to another object

function newf(val1, val2, val3) {
  console.log(this.age, val1, val2, val3);
}
var obj = {
  age: 24,
};
newf.call(obj, 1, 2, 3);

//* apply :
newf.apply(obj, [1, 2, 3]); //gives same values

//* It says that when passing object as argument we should pass 2 arguments so we pass object and function parameters as an array

//* Bind :
var bindObj = newf.bind(obj, 1, 2, 3);
//* newf.bind(obj,1,2,3); gives the function which we should store for display it

console.log(bindObj); // it invoked and give the result
