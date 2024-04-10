const add = function (c) {
  return function (b) {
    return function (a) {
      console.log(a, b, c);
      return a + b + c;
    };
  };
};
console.log(add(1)(2)(3));
