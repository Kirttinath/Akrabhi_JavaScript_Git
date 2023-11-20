let x  = 9;
{
    let x = 5;
    var z = 10;
    console.log("The value of the x = "+x);  // value will be 5 insie the block
}
console.log("The value of the x = "+x);    //we can't access {x}outside the block 
                                           //here the value of x is 9 outside the block
                                           
console.log("The value of the z = "+z);       //we can access the variable z outside the block