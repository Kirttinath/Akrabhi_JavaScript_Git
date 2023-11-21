//CallBack function :
//This is a callback function that will be called when the user clicks on any of the buttons in the toolbar.
function myFunc(text, callback) {
    setTimeout(function() {
        callback(text);
    }, 3000);}
myFunc('Hello world!', console.log);// 'Hello world!'