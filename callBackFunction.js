//Call Back Function :
// a function passing a function as a parameter
//ex 

function x(z)
{
   console.log("Hello");
   z();
   
}

x(function y(){
    console.log("world");
});