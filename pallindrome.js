function palindrome(num) {
  const number = num;
  let rem,
    rev = 0;
  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  if (rev === number) {
    console.log(number + " is a palindrome number.");
  } else {
    console.log(number + " is not a palindrome number.");
  }
}
palindrome(121);
