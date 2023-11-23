document.querySelector("#btn").addEventListener("click", function()
{
    var digits = "0123456789";
    var otp = "";
    for (let i=0;i<4;i++)
    {
        otp += digits[Math.floor(Math.random()*10)];
    }
    document.querySelector("#show").innerHTML = otp;
})