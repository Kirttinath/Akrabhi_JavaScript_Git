var timer = 60;//for timer

var score = 0;//Initial score
var bub =0;
function scoreincrease() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}// for increase the score when hit the bubble

function makeBubbles() {
    var clutter = "";
    for (var i = 1; i <= 152; i++) {
        var val = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${val}</div> `;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}//For make new bubbles in screen

function setTimer() {
    var clrtm = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(clrtm);
            document.querySelector("#pbtm").innerHTML = `<h1>Score = ${score}<br>GAME OVER</h1>`;
        }
    }, 1000)
}//timer countdown and game over 


function hitbubble() {
     bub = Math.floor(Math.random() * 10);
    document.querySelector("#hitbub").textContent = bub;
}//for hit a new bubble this create a new value of bubble

document.querySelector("#pbtm")
.addEventListener("click", function (details) {
  var values = Number(details.target.textContent);
  if(bub === values)
  {
    scoreincrease();
    makeBubbles();
    hitbubble();
  }
});//when click the right bubble it increase the vbalue with creating new bubbles and creating new value for hit


hitbubble();
setTimer();
makeBubbles();