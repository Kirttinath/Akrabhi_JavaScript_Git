document.querySelector("#btn").addEventListener("click", function () {
    document.querySelector("#txt").innerHTML = "Kirtti";
})

// Reassessment
//reduce function
const arr = [2, 7, 3, 9, 6];

const output = arr.reduce(function (max, curr) {
    if (curr > max)
    {
        max=curr;
    }
    return max;
}, 0);
console.log(output);

const dtls = [
    {fname: "Kirtti",lname: "Ojha", age: 24},
    {fname: "pritam",lname: "baral", age: 22},
    {fname: "Dipti",lname: "mahakud", age: 12}
];

const output2 = dtls.reduce((names, curr) => {
    if(curr.age > 18){
         names.push(curr.fname); 
    }
    return names; 
}, []);

console.log(output2);