//Function in js :
//Anonymous function : A function without a name 
//function(){};
//Named function : A function with a name

//Function Statement :
//A function is declared using the keyword "function" followed by its name and parameters enclosed within parentheses. The code to be executed by the function
a();//Hello
b();//error : b is not a function
function a()
{
    console.log("Hello");
}

//But the difference between statement and expression is hoisting
//Function Expression :
var b = function()
            {
                console.log("World");
            }



