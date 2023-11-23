//Generate Random Colors
const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
     for(let i=0;i<6;i++)
     {
        color += hex[Math.floor(Math.random() * 16)];
     }
     return color;
};
let colorchange;

const changecolor = function()
{    if(!colorchange){
    colorchange =  setInterval(cchange,1000);
}
     function cchange(){

        document.body.style.backgroundColor = randomcolor();
    }
};


