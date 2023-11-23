//The try and catch  has two main blocks: try, and then catch
//try and catch only works for runtime errors

try {
   // .;
} catch (err) {
    console.log("The engine can't understand this code, it's invalid");
    //It won’t work if the code is syntactically wrong
}


//try...catch works synchronously
setTimeout(function () {
    try {
        noSuchVariable; // try...catch handles the error!
    } catch {
        console.log("error is caught here!");
    }
}, 1000);