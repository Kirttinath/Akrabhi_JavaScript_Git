//* Async and Await :
//?   Async function is a special type of function that can be used to create asynchronous operations.
//?  The async keyword before the function definition allows us to use await inside it,
//?  which makes JavaScript wait for an asynchronous operation to complete before continuing with the rest of the code.

const greeter = new Promise((res, rej) => {
  setTimeout(() => res("Hello world!"), 2000);
});
async function myFunc() {
  const greeting = await greeter;
  console.log(greeting);
}
myFunc(); // 'Hello world!'

//? Async & await is just syntactic sugar on top of Promises and like promises it also provides a way to maintain asynchronous operation more synchronously. So in JavaScript asynchronous operations can be handled in various versions ..........
//! ES5 -> Callback  ||  ES6 -> Promise   ||   ES7 -> async & await

const showPosts = async () => {
  const response = await fetch("");
  const posts = await response.json();
  console.log(posts);
};
showPosts();
