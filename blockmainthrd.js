console.log("Started");

function cb()
 {
    console.log("After 5 sec");
 }
 setTimeout(cb, 0);

console.log("Ended");

// Block Main Thread

let startdt = new Date().getTime();
let enddt = startdt;
while(enddt < startdt+10000)
{
    enddt = new Date().getTime();
}
console.log("This is before settimeout");