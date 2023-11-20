//This keyword in js : 
// this :
//In Global Scope :

console.log(this);// Refers to window

// In function scope
console.log(this);// Refers to window

// In method scope 
 var obj = {
    name: "Kirtti",
    somemethd: function()
    {
    console.log(this); // Refers to  Object obj
 }
}
obj.somemethd();
//In any Method "this" keyword always refers to parent object