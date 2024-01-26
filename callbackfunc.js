//* CallBack function :
//? This is a callback function that will be called when the user clicks on any of the buttons in the toolbar.
function myFunc(text, callback) {
  setTimeout(function () {
    callback(text);
  }, 1000);
}
myFunc("Hello Kirtti!", console.log); //! 'Hello Kirtti!'

//* A callback function is a function that is passed as an argument to another function and is executed after the completion of a specific task.
//? Callbacks are commonly used in asynchronous operations, such as handling events, making API requests, or reading files

setTimeout(function () {
  console.log("Hii Kirtti");
}, 2000);

//todo ===> A callback is a function that is passed as an argument to another function, and is called after the main function has finished its execution. The main function is called with a callback function as its argument, and when the main function is finished, it calls the callback function to provide a result. Callbacks allow you to handle the results of an asynchronous operation in a non-blocking manner, which means that the program can continue to run while the operation is being executed.

const greeting = (n) => {
  console.log("Hello" + n);
};

const processUserName = (callback) => {
  let name = "Kirtti";
  callback(name);
};
processUserName(greeting);
