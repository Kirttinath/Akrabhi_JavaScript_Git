document.addEventListener('DOMContentLoaded', function () {
    // Wait for the HTML to be fully loaded

    // Original string
    let originalString = "Hello, World!";

    // Display original string
    document.getElementById("originalString").innerHTML = originalString;

    // String method: toUpperCase
    let uppercaseString = originalString.toUpperCase();

    // Display uppercase string
    document.getElementById("uppercaseString").innerHTML = uppercaseString;

    let lowercaseString = originalString.toLowerCase();
    document.getElementById("lowercaseString").innerHTML = lowercaseString;


    let characterAtIndex = originalString.charAt(7);
    document.getElementById("characterAtIndex").innerHTML = characterAtIndex;



    let indexOfComma = originalString.indexOf(",");
    document.getElementById("indexOfComma").innerHTML = indexOfComma;


    let slicedString = originalString.slice(7, 12);
    document.getElementById("slicedString").innerHTML = slicedString;



    let replacedString = originalString.replace("World", "Universe");
    document.getElementById("replacedString").innerHTML = replacedString;

    let text3 = "I love cats. Cats are very easy to love. Cats are very popular.";
    let text4 = text3.replaceAll("Cats","Dogs");
    let text5 = text4.replaceAll("cats","dogs");
    
    document.getElementById("rpall").innerHTML = text5;


});
function replacefun() {
    let text1 = document.getElementById("repl").innerHTML; 
    document.getElementById("repl").innerHTML = text1.replace(/RAINY/i,"Sunny");
  }

  function repall() {
    let text2 = document.getElementById("rp").innerHTML; 
    document.getElementById("rp").innerHTML =
    text2.replace(/a/g,"an");
  }

  
