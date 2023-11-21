//For in  Loop :
//for in loop is used for access all the properties of an object

var obj = {
    name: "Kirtti",
    age:  24,
    city: "BBSR"
}
for (var key in obj)
{
    console.log(key+" : "+obj[key]);

}