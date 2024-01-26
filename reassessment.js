console.log(b);

let a = 10;
var b = 20;
a = 40;
console.log(a);
const c = 30;
console.log(a, b, c);

//* let and var are function scoped, const is block scoped

{
  var k = 20;
}
console.log(k);

const arr = [1, 2, 3, 4];
const arr1 = [...arr, 5, 6, 7];
console.log(arr1);
function s(x, y, ...a) {
  console.log(x, y);
  return a.reduce((sum, num) => sum + num, 0);
}
let result = s(1, 2, 3, 4, 5);
console.log(result);
