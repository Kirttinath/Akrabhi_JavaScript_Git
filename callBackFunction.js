//Call Back Function :
// a function passing a function as a parameter
//And this called callback function means that when we required that function we can callback it to execute
//ex 

setTimeout(function()
{
   console.log("after 5 sec print it");
},5000);

function x(z)
{
   console.log("Hello");
   z();

}

x(function y(){
    console.log("world");
});

document.getElementById("btn").addEventListener("click", function xyz(){
    console.log("Kirtti");
});