//closures :
//Closure is a function object that has access to its own scope, the outer function’s variables. Three characteristics of closures are:

const a=10;
const f = () => 
{
  const a=23;
  const f2 = () =>
  {
    console.log(a);//23
  }
  f2();
}
f();
console.log(a);//10

//Closures are used when you want to extend behavior such as passing variables, methods, or arrays from an outer function to an inner function.
//JavaScript is not pure object-oriented language but you can achieve object-oriented behavior through closures


//closure access
  function counter()
  {
    var count =0;
    this.incrementcounter = function()
    {
      count++;
      console.log(count);
    }
    this.decrementcounter = function()
    {
      count--;
      console.log(count);
    }
  }
 var cn = new  counter();
for(let i=1; i<=50;i++)
{
  cn.incrementcounter();
  cn.decrementcounter();
}//50 times 1 and 0 values are printed

//Disadvantages of closures :
//1) memory leakage: if we have a lot of nested functions, it can cause the browser to run out of memory.
//2) scope chain pollution: when you declare variables in a function that is inside another function, these variables become part of the outer function'



