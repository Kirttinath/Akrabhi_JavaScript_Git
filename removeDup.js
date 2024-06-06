const arr = [1, 2, 2, 3, 3, 4, 6, 5, 6, 8, 9, 3, 5];

const remove_duplicate = (arr) => {
  const unique = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

const result_unique = remove_duplicate(arr);
console.log(result_unique.sort()); //? [ 1, 2, 3, 4, 5, 6, 8, 9 ]
console.log(result_unique.sort((a, b) => b - a));
