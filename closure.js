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

//Closures :
//Closure is an important JavaScript pattern to give private access to a variable
function closures(val) {
    return function (name) {
        console.log(val + " " + name);
    }
}
const greet = closures("Hello");
greet("Kirtti");

//In a more real-world scenario, you could envision an initial function apiConnect(apiKey) that returns some methods that would use the API key. In this case, the apiKey would just need to be provided once and never again.

function apiConnect(apiKey) {
    function get(route) {
        return fetch(`${route}?key=${apiKey}`);
    }



    function post(route, params) { 
        return fetch(route, { method: 'POST', body: JSON.stringify(params), headers: { 'Authorization': `Bearer ${apiKey}` } }) }


    return { get, post }
}

const api = apiConnect('my-secret-key');