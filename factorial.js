const number = 5;

const find_factorial = (num) => {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
};

const res = find_factorial(number);
console.log(res);
