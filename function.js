//Function in js :

//Function Statement :
a();//Hello
//b();//error : b is not a function
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


//Named function expression : A function with a name use as a variable
var f = function abc(){
    console.log("hello");
};
f();//hello
//abc();//abc is not defined error


//Difference between parameter and arguments :
//parameter - functions accepts : parameters
//arguments - functions gives   : arguments
//ex ;
function sum(x,y){};// x and y are parameters
sum(1,2);//1 and 2 are argumets


//First class function :
//A function passed to another function or returns another function
//The ability of function used as values andd passed into as an argument to another function is known as firstclass function in JS

function xyz(m)
{
    console.log(m);
}
xyz(function we() {});