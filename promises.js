//Promises :
//A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. Promises are a way to handle asynchronous
//A promise is an object that may produce a single value sometime in the future.
//It has three states: pending, fulfilled (with data), and rejected (with error).

const myPromise = new Promise(function(res, rej) {
    setTimeout(function(){
        if (Math.random() < 0.9) {
            return res('Hooray!');
        }
        return rej('Oh no!');}, 1000);});

myPromise.then(function(data) {
    console.log('Success: ' + data);}).catch(function(err) {console.log('Error: ' + err);});

// If Math.random() returns less than 0.9 the following is logged:// "Success: Hooray!"// If Math.random() returns 0.9 or greater the following is logged:// "Error: On no!"