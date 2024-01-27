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
