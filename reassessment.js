//* -------- CallBack function --------
//? Callback function is a function passed as an argument to another function and it executes after the completion of the main function.

function greet(name, callback) {
  console.log(`Hello ${name}`);
  setTimeout(() => {
    callback();
  }, 5000);
}

function goodbye() {
  console.log("Goodbye ..");
}

greet("Kirtti", goodbye);

//* First Class Function ==>
//? First Class Functon is a function whch is assigned to a variable , passed as an arument to an functon and returned to a function

const add = function (num1, num2) {
  return num1 + num2;
};

function operate(operation, n1, n2) {
  return operation(n1, n2);
}

console.log(operate(add, 3, 4));

//* Higher order function
//? A higher order function is a function that takes one or more function as aruments and returns a function as result.

function multiply(factor) {
  return function (number) {
    return factor * number;
  };
}
const double = multiply(2);
const triple = multiply(3);
console.log(double(5));
console.log(triple(5));
