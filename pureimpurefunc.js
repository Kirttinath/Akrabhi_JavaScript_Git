//Pure and Impure function 
//pure :
//Pure function is any function ehich has 2 features 
//1. It should always return same output for same input
//2.It will never change/update the value of the global variable
//ex :
function prod(a,b)
{
    return a*b;  // This is a pure function
}
var ans1 = prod(1,2);
var ans2 = prod(1,2);
console.log(ans1,ans2);