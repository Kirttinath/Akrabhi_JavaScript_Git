// Prototype  in JS : 
//[[prototype]] contains many helper properties and methods which we can use to complete our task, let's say we create an array and we want to know length of it, what do we do, we use length property on array, did we created length on that array, no! but it still contains .length
//many properties and methods are already available to use built by javascript creators inside prototype of every object

//in browser console create 
//var obj = { name: "Kirtti"} now call obj.

var human={
    canfly: false,
    canTalk: true,
    canwalk: true
}
var newhuman= {
    cancode: true,
    cantravel: false
}
newhuman._proto_ = human;