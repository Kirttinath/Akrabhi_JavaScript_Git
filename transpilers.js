//Transpilers :
//A Software which translate  source code to another source code 
// It can parse modern code and rewrites it using older syntax construct. so It can work in outdated

 //before use transpilers
height ?? 100;// in Morden code  nullish coalescing operator
// After use transpilers 
(height !== undefined && height !==null) ? height : 100;


// Polyfills
// A script that updates/adds new function  is called Polyfills. It fills the gap and missing Implimentation

if (!Math.trunc) { // if no such function
    // implement it
    Math.trunc = function(number) {
      // Math.ceil and Math.floor exist even in ancient JavaScript engines
      
      return number < 0 ? Math.ceil(number) : Math.floor(number);
    };
  }