// call : 
//If we have a function and object and  you have to run function on that object or we put this keyword which reference to the window to change that reference to another object

function newf()
{
    console.log(this);
}
 var obj = {
    age: 24
 }
 newf.call(obj);