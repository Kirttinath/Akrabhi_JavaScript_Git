//Array Methods <map, filter, reduce>
//Map: Create a new array with the results of calling a provided function on every element in this array.
//filter: return array of elements where the function returns true
//reduce: accumulate values as specified in function

// Map :
const arr = [1, 2, 3, 4, 5];
const newarr = arr.map(num => num * 5);
console.log(newarr);