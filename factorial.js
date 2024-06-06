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


function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  // Example usage:
  console.log(factorial(5)); // Output: 120
  