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

// If any of two conditions are not maintain then impure function created
// Impure function :
//ex :
var x=12;
function prod1(a,b)
{
    var x=15;
    return a*b;  // although it gives same output, This is not a pure function
}
var ans1 = prod1(1,2);
var ans2 = prod1(1,2);
console.log(ans1,ans2);
//or
function out(a)
{
return Math.random()*a;
}
var res1 = out(2);
var res2 = out(2);
console.log(res1,res2);
