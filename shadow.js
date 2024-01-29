//* shadowing :
//? Shadowing refers to the situation where a variable declared within a certain scope has the same name as a variable in an outer scope

let outerVariable = "I'm outside!";

function myFunction() {
  let outerVariable = "I'm inside!"; // This variable shadows the outer one within this function
  console.log(outerVariable); // Output: I'm inside!
}

myFunction();

console.log(outerVariable); // Output: I'm outside!
