//Array Methods <map, filter, reduce>
//Map: Create a new array with the results of calling a provided function on every element in this array.
//filter: return array of elements where the function returns true
//reduce: accumulate values as specified in function

// Map :
const arr = [1, 2, 3, 4, 5];
const newarr = arr.map(num => num * 5);
console.log(newarr);

//filter:
const newarray = [1, 21, 3, 4, 53, 16];
const filtered = newarray.filter(n1 => n1 === 2 || n1 === 4);
const filt = newarray.filter(n2 => n2>=18)
console.log(filtered);
console.log("Greater than equal to 18 ages are ");
console.log(filt);

// Reduce :
const arr1 = [1, 2, 3, 4, 5, 6];
const reduced = arr1.reduce((total, current) => total + current);
console.log(reduced);

//find:
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr2.find(n => n > 5);
console.log(found);//It gives 6 only because it breakes when it finds it's match