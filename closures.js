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
    function incrementcounter()
    {
      count++;
      console.log(count);
    }
    return incrementcounter;
  }
 var cn = counter();
 cn();