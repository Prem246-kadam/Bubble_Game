var clutter = "";
var timer = 10;
var score = 0;
var rn;
function scoreIn(){
    score += 10;
    document.querySelector("#sco").textContent = score;
}
function createBubble() {
    for (var i = 1; i <= 75; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
    var timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else {
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER </h1>`
        }
    }, 1000);
}

function getNewHit(){
     rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = rn;
}

document.querySelector("#pbtm").addEventListener("click", 
function(dets){
   var clickedNum = Number(dets.target.textContent);
   if(clickedNum === rn){
    scoreIn();
    createBubble();
    getNewHit();
   }
})
createBubble();
runTimer();
getNewHit();






