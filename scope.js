function f1()
{
    var x=10;
    f2();
    function f2()
    {
        var b=100;
        f3();
        function f3()
        {
            console.log(a);

            
        }
        
    }
   
}
var a=100;
f1();
