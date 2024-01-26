// 1. length
const str = "Hello, World!";
console.log(str.length); // Output: 13

// 2. toUpperCase
console.log(str.toUpperCase()); // Output: HELLO, WORLD!

// 3. toLowerCase
console.log(str.toLowerCase()); // Output: hello, world!

// 4. concat
const firstName = "John";
const lastName = "Doe";
console.log(firstName.concat(" ", lastName)); // Output: John Doe

// 5. indexOf
console.log(str.indexOf("World")); // Output: 7

// 6. lastIndexOf
console.log(str.lastIndexOf("o")); // Output: 8

// 7. charAt
console.log(str.charAt(0)); // Output: H

// 8. charCodeAt
console.log(str.charCodeAt(0)); // Output: 72

// 9. substring
console.log(str.substring(7, 12)); // Output: World

// 10. slice
console.log(str.slice(7, 12)); // Output: World

// 11. replace
console.log(str.replace("World", "Universe")); // Output: Hello, Universe!

// 12. trim
const paddedStr = "   Hello   ";
console.log(paddedStr.trim()); // Output: Hello

// 13. split
const words = str.split(", ");
console.log(words); // Output: ['Hello', 'World!']

// 14. startsWith
console.log(str.startsWith("Hello")); // Output: true

// 15. endsWith
console.log(str.endsWith("World!")); // Output: true

// 16. includes
console.log(str.includes("lo")); // Output: true

// 17. repeat
console.log("La ".repeat(3)); // Output: La La La

// 18. match
const regex = /[A-Z]/g;
console.log(str.match(regex)); // Output: ['H', 'W']

// 19. padStart
console.log(str.padStart(20, "*")); // Output: ***Hello, World!

// 20. padEnd
console.log(str.padEnd(20, "*")); // Output: Hello, World!***

// 21. toLocaleUpperCase
console.log(str.toLocaleUpperCase("tr-TR")); // Output: HELLO, WORLD!

// 22. toLocaleLowerCase
console.log(str.toLocaleLowerCase("tr-TR")); // Output: hello, world!
