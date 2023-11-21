//CallBack function :
//This is a callback function that will be called when the user clicks on any of the buttons in the toolbar.
function myFunc(text, callback) {
    setTimeout(function() {
        callback(text);
    }, 1000);}
myFunc('Hello Kirtti!', console.log);// 'Hello Kirtti!'

//A callback function is a function that is passed as an argument to another function and is executed after the completion of a specific task. 
//Callbacks are commonly used in asynchronous operations, such as handling events, making API requests, or reading files
setTimeout(function(){                                                  
    console.log("Hii Kirtti");
},2000);

