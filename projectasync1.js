
const changeobj = function()
{
    document.querySelector("#head1").innerHTML = "Async Javascript";
}

const timer = function(){
    console.log("Kirtti");
};
const stopobj = setTimeout(changeobj, 2000);
document.querySelector("#stop").addEventListener("click", function()
{
    clearTimeout(stopobj);
    console.log("Stopped");
})

document.querySelector("#resume").addEventListener("click", function(){
    setTimeout(changeobj,2000);
    console.log("Resumed");
})


