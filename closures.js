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