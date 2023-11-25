//promise function

  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 1;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.catch(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );

  //asynchronous 
  async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );
  

  //await
  async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("Kirtti");
    });
    console.log( await myPromise);
  }
  
  myDisplay();

  //
  function myFirst() {
    console.log("Kirttinath");
  }
  
  function mySecond() {
    console.log("Goodbye");
  }
  mySecond();//this will execute first
  myFirst();//second this is execute
  