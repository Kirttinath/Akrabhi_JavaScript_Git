//using var and closure set timeout
function f()
{
    console.log("Hello JS !");
    for (var i=1; i<=5; i++)
    {
        function closer(a)
        {
            setTimeout(function()
            {
                console.log(a);
            }, a*1000);
        }
       closer(i);
    }
}
f();






/*function F()
{
    console.log("Hello JavaScript !");
    for (let i=1;i<=5;i++)
    {
        setTimeout(function()
        {
            console.log(i);
        }, i*1000);
    }
}
F();*/
