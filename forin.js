//For in  Loop :
//for in loop is used for access all the properties of an object

var obj = {
    "first name": "Kirttinath",
    "last name ": "Ojha",
    age:  24,
    city: "BBSR"
}
for (var key in obj)
{
    console.log(key+" : "+obj[key]);

}