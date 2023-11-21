//IIFE : Immidiately Invoked Function Expression
//It is a function in JS which immidiately invoked and executed as soon as defined
let paintColor = 'red'
const paint = (() => {//This is an IIFE that defines an object with two methods (changeColorToBlue and   
                      //changeColorToGreen). The IIFE is executed immediately, creating and returning 
                      //the paint object.
    return {
        changeColorToBlue: () => {
            paintcolor: 'Blue'; 
            return paintColor;
        },
        changeColorToGreen: () => {
            paintColor: 'Green';
            return paintColor;
        }
    }
})();
console.log(
    paint.changeColorToBlue()
);

