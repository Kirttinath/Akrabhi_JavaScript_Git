//Data Hiding / Encapsulation by closure 
//Encapsulating the data and providing access to it through methods.
//Example :

function dataout() {
    var a = 100;
    function datahide() {
        a++;
    }
}
console.log(a);