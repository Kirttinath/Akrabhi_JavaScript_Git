let num = [2, 8, 3, 6, 89, 23, 56, 28];

const find_largest_no = (num) => {
  let largest_no = num[0];

  for (let i = 0; i <= num.length - 1; i++) {
    if (num[i] > largest_no) {
      largest_no = num[i];
    }
  }
  return largest_no;
};

const res_largest_no = find_largest_no(num);
console.log(res_largest_no);
