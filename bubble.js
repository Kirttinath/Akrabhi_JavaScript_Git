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
}

function setTimer() {
    var clrtm = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(clrtm);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000)
}


function hitbubble() {
     bub = Math.floor(Math.random() * 10);
    document.querySelector("#hitbub").textContent = bub;
}

document.querySelector("#pbtm")
.addEventListener("click", function (details) {
  var values = Number(details.target.textContent);
  if(bub === values)
  {
    scoreincrease();
    makeBubbles();
    hitbubble();
  }
});


hitbubble();
setTimer();
makeBubbles();