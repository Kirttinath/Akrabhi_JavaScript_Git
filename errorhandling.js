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

//If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it
try {
    setTimeout(function() {
      noSuchVariable; // script will die here
    }, 1000);
  } catch (err) {
    console.log( "won't work" );//that’s because the function itself is executed later, when the engine has already left the try...catch construct.
  }

  //To catch an exception inside a scheduled function, try...catch must be inside that function:

setTimeout(function() {
    try {
      noSuchVariable; // try...catch handles the error!
    } catch {
      console.log( "error is caught here!" );
    }
  }, 1000);


  //Error Object
  //When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch
  //For all built-in errors, the error object has two main properties:
// name : Error name. For instance, for an undefined variable that’s "ReferenceError".
// message : Textual message about error details.
try {
    // ...
  } catch (err) { // <-- the "error object", could use another word instead of err
    // ...
  }