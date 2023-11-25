//Higher Order Function :✅
//A function  which accept a function as a parameter
//or Return a function or Both
//for ex  : ForEach Method alwaays takes another function inside it
//So forEach is a higher order function
function f(val) {
  val();
  return function g() { console.log("Ojha"); };

}

var gres = f(function fx() {
  console.log("Kirtti");

});
gres();
//or ex:
var arr = [1, 2, 3, 4, 5];
arr.forEach(function () { })



// function findArea(radius) {
//   const res =[];
//   for(let i=0;i < radius.length; i++)
//   {
//     res.push(Math.PI*radius[i]*radius[i]);
//   }
//   return res;
// }

// console.log(findArea(radius));
//and similarly create for find diameter and circumference
//That would be not a good programming skill to repeat the code 
//so the optimized and good programming skill would be
const radius = [3, 4, 5, 2];

const area = function (radius) {
  return Math.PI * radius * radius;
}

const diameter = function (radius) {
  return 2 * radius;
}

const circumference = function (radius) {
 return 2*Math.PI*radius;   
}

function calculate(radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

