function findLongestWord(sentence) {
  let words = [];
  let word = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      words.push(word);
      word = "";
    } else {
      word += sentence[i];
    }
  }
  words.push(word); // Add the last word

  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length >= longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

// Example usage:
console.log(findLongestWord("The quickheal brown fox jumps overlacud the lazy dog")); // Output: 'jumps'
