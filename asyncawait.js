//Async and Await :
// Async function is a special type of function that can be used to create asynchronous operations.
// The async keyword before the function definition allows us to use await inside it, 
// which makes JavaScript wait for an asynchronous operation to complete before continuing with the rest of the code.

const greeter = new Promise((res, rej) => {
    setTimeout(() => res('Hello world!'), 2000);
});
async function myFunc() {
    const greeting = await greeter;
    console.log(greeting);
}
myFunc();// 'Hello world!'