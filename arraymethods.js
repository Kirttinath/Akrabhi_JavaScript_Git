//Array Methods <map, filter, reduce>
//Map: Create a new array with the results of calling a provided function on every element in this array.
//filter: return array of elements where the function returns true
//reduce: accumulate values as specified in function

// Map :
const arr0 = [1, 2, 3, 4, 5];
const newarr = arr0.map(num => num * 5);
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

//findIndex: This works almost identically to find, but rather than returning the first matching element it returns the index of the first matching element. Take the following example, which uses names instead of numbers for clarity.

const arr3 = ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndex = arr3.findIndex(el => el === 'Frank');
console.log(foundIndex);// 1

//indexOf: Works almost identically to findIndex, but instead of taking a function as an argument it takes a simple value. You can use this when you have simpler logic and don’t need to use a function to check whether there is a match.

const arr4 = ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndex1 = arr4.indexOf('Frank');
console.log(foundIndex1);// 1


//*push, pop, shift, unshift**There are a lot of great array method to help add or remove elements from arrays in a targeted fashion.

//push: This is a relatively simple method that adds an item to the end of an array. It modifies the array in-place and the function itself returns the item added to the array.

let arr5 = [1, 2, 3, 4];
const pushed = arr5.push(5);
console.log(arr5);// [1, 2, 3, 4, 5]console.log(pushed);// 5

//pop: This removes the last item from an array. Again, it modifies the array in place. The function itself returns the item removed from the array.
let arr6 = [1, 2, 3, 4];
const popped = arr6.pop();
console.log(arr6);// [1, 2, 3]console.log(popped);// 4

//shift: This removes the first item from an array. Again, it modifies the array in place. The function itself returns the item removed from the array.

let arr7 = [1, 2, 3, 4];
const shifted = arr7.shift();
console.log(arr7);// [2, 3, 4]console.log(shifted);// 1

//unshift: This adds one or more elements to the beginning of an array. Again, it modifies the array in place. Unlike a lot of the other methods, the function itself returns the new length of the array.

let arr8 = [1, 2, 3, 4];
const unshifted = arr8.unshift(5, 6, 7);
console.log(arr8);// [5, 6, 7, 1, 2, 3, 4]console.log(unshifted);// 7


//**splice, slice**These methods either modify or return subsets of arrays.
//splice: Change the contents of an array by removing or replacing existing elements and/or adding new elements. This method modifies the array in place.
//The following code sample can be read as: at position 1 of the array, remove 0 elements and insert b.
let arr9 = ['a', 'c', 'd', 'e'];
arr9.splice(1, 0, 'b');

//slice: returns a shallow copy of an array from a specified start position and before a specified end position. If no end position is specified, the rest of the array is returned. Importantly, this method does not modify the array in place but rather returns the desired subset.
let arr10 = ['a', 'b', 'c', 'd', 'e'];
const sliced = arr10.slice(2, 4);
console.log(sliced);// ['c', 'd']console.log(arr);// ['a', 'b', 'c', 'd', 'e']

//sort: sorts an array based on the provided function which takes a first element and second element argument. Modifies the array in place. If the function returns negative or 0, the order remains unchanged. If positive, the element order is switched.


let arr11 = [1, 7, 3, -1, 5, 7, 2];
const sorter = (firstEl, secondEl) => firstEl - secondEl;
arr11.sort(sorter);
console.log(arr11);