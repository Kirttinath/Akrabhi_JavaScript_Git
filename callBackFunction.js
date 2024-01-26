//Call Back Function :
// a function passing a function as a parameter
//And this called callback function means that when we required that function we can callback it to execute
//ex

setTimeout(function () {
  console.log("after 5 sec print it");
}, 5000);

function x(z) {
  console.log("Hello");
  z();
}

x(function y() {
  console.log("world");
});
var document;
function evvent() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function xyz() {
    var res = Number(++count); // Convert the counting from string to Number
    function tx() {
      document.querySelector("#txt").textContent = res; // Display on the hreading tag
    }
    tx();
  });
}
evvent();

//Garbage Collections and Remove EventListeners
//Event listeners are heavy to control this we have Garbage collecctor in JS
//Events takes more memory
