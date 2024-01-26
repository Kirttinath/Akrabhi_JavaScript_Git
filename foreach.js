//* For Each loop :
//? This is a simple for each loop that iterates over an array of numbers. It prints out the index and value of each element in the array

const a = [1, 2, 3, 4, 5];
a.forEach(function (val) {
  console.log(val * 2);
});
//* forEach shouldn't change the default array
