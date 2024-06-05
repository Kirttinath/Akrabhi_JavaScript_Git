let str = "hayah";
let isPallindrome = true;

const checkPalindrome = (str) => {
  let str_split = str.split("");

  for (
    let i = 0, j = str_split.length - 1;
    i <= (str_split.length - 1) / 2, j >= (str_split.length - 1) / 2;
    i++, j--
  ) {
    if (str_split[i] !== str_split[j]) {
      isPallindrome = false;
      break;
    }
  }
  if (isPallindrome) {
    console.log(str + " is a pallindrome");
  } else {
    console.log(str + " is not a pallindrome");
  }
};

checkPalindrome(str);
