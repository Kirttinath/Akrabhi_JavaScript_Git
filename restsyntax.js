// Rest syntax :
// use it to put any number of arguments passed to a function into an array
function myFunc(...args) {
  return (args[0] + args[1]);
}
 var res = myFunc(5, 5, 3, 4);
 console.log(res)// 10