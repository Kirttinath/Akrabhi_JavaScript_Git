function f1() {
    var a = 100;
    /*return function f2(){
        console.log(a);

    }*/
    function f2() {
        console.log(a);
    }
   
    return f2;

}
var c = f1();
console.log(c);
c();
