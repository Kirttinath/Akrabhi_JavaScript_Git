let str = "hello";

const reverseStr = (str) => {
  var rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
};
console.log(reverseStr(str));

let rev = [];
const revStr = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    rev.push(str[i]);
  }
  let rv = rev.join("");
  return rv;
};

console.log(revStr(str));
