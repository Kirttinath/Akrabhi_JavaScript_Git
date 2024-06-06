function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let count = {};

  for (let i = 0; i < str1.length; i++) {
    count[str1[i]] = (count[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!count[str2[i]]) {
      return false;
    }
    count[str2[i]]--;
  }

  return true;
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("mest", "stem"));

function areAnagram(str1, str2) {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
  return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagram("listen", "silent"));
console.log(areAnagram("hello", "world"));
