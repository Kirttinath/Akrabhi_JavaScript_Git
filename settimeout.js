function f()
{
    var x=19;
    setTimeout(function() {
        console.log(x);
    }, 500);
}
f();
setTimeout(function()
{
    console.log("hellow world");
}, 5000);
