//Function in js :

//Function Statement :
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


//Function declaration : it is same as function statement
//A function is declared using the keyword "function" followed by its name and parameters enclosed within parentheses.
//but it gets hoisted to top of scope


//Anonymous function : A function without a name 
//function(){};
//anonymous functions are used when the functions are used as values


//Named function : A function with a name
