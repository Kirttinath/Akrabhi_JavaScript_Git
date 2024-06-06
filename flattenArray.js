//* Write a function to flatten a nested array.
const arr = [1, [2, 3, [5, [6, 9], 7], 8], 6];

const Flatten_Array = (arr) => {
  let Flt_arr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (Array.isArray(arr[i])) {
      Flt_arr = Flt_arr.concat(Flatten_Array(arr[i]));
    } else {
      Flt_arr.push(arr[i]);
    }
  }
  return Flt_arr;
};

const result_array = Flatten_Array(arr);

console.log(result_array);
