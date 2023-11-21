{
    let a = 10;
    const b = 100;
    var c = 1000;

}
//console.log(a); //ReferenceError: a is not defined
//console.log(b); // ReferenceError: b is not defined 
console.log(c);

// Difference Between var, let and const
//1.  var is function scoped (ES5)
//    let and const are braces scoped   (ES6)
function diff()
{
    for(var i=1;i<=5;i++)
    {
        console.log(i);
    }
    console.log(i);
}
function diffr()
{
    for(let i=1;i<=5;i++)
    {
        console.log(i);
    }
    console.log(i);//i is not defined
}
diff();
