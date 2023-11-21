function f1() {
    var a = 100;
    /*return function f2(){
        console.log(a);

    }*/
    function f2() {
        console.log(a);
    }
   
    return f2;

}
var c = f1();
console.log(c);
c();

//Closures :
//Closure is an important JavaScript pattern to give private access to a variable
function closures(val)
{
   return function (name)
   {
     console.log(val+" "+name);
   }
}
const greet = closures("Hello");
greet("Kirtti");


