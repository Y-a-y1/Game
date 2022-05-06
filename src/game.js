var isStarted = false
var x = 3600
var Score = 0
var sec
var movingL
const timer = document.getElementById('score')
let stoptime = true
let startTimeout
let starttime
const buttonChange = document.getElementById('button1')
var L = document.getElementById("img-Enemy")
var Light = document.getElementById("img-Main")
var test = true
var isPlaying = true
var animationL
var animEnd = false
document.body.onkeydown = createLogic
document.getElementById('imageId').ontouchstart = createLogic2

function moveL(Velocity) {
    if (isPlaying === false) {
        return
    }
    movingL = document.getElementById("img-Enemy").animate([
        // keyframes
        { transform: 'translatex(0px)' },
        { transform: 'translatex(-350px)' }
    ],
     {
        // timing options
        duration: Velocity,
        iterations: Infinity
    });
}
function moveLight() {
    document.getElementById("img-Main").animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-90px)' },

        { transform: 'translateY(-90px)' },
        { transform: 'translateY(0px)' }
    ], {
        // timing options
        duration: 700,
        iterations: 1
    });
}
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
    }
});
function pauseGame() {
    if (isPlaying == true) {
        isPlaying = false
        isStarted = false
        stopTimer()
        movingL.pause()
        buttonChange.innerHTML = 'Resume'
    } else {
        buttonChange.innerHTML = 'Pause'
        movingL.play()
        isStarted = true
        startTimer()
        isPlaying = true
    }
}
function finishGame() {
    movingL.cancel()
    resetTimer()
    isStarted = false
    isPlaying = true
    test = true
}
function startTimer() {
    if (stoptime == true) {
        stoptime = false
        starttime = new Date().getTime()
        timerCycle()
    }
}
function stopTimer() {
    stopTimerCycle()
    Score = sec
    if (stoptime == false) {
        stoptime = true;
    }
}
function timerCycle() {
    if (stoptime == false) {
        var timeSincePress = new Date().getTime() - starttime
        sec = Score + (timeSincePress / 1000)
        sec = math(sec)
        timer.innerHTML = `Score: ${sec}`
        startTimeout = setTimeout("timerCycle()", 500)
    }
}
function resetTimer() {
    stopTimerCycle()
    stopTimer()
    timer.innerHTML = 'Score :0'
    stoptime = true
    sec = 0
    Score = 0
}
function stopTimerCycle() {
    clearTimeout(startTimeout)
}
function math(number) {
    return Math.floor(number)
}
function checkCollisions(right1, left1, top1, bottom1, right2, left2, top2, bottom2) {
    return right1 >= left2 && left1 <= right2 && bottom1 >= top2 && top1 <= bottom2
}
function createLogic() {
    if (isPlaying == true) {
        isStarted = true
        document.body.onkeydown = function (e) {
            if (e.keyCode == 32 && isPlaying == true) {
                setInterval(function () {
                    var position1 = L.getBoundingClientRect()
                    var position2 = Light.getBoundingClientRect()
                    var isColliding = checkCollisions(position2.right, position2.left, position2.top, position2.bottom, position1.right, position1.left, position1.top, position1.bottom)
                    if (isColliding === true) {
                        isPlaying = false
                        isStarted = false
                        movingL.cancel()
                        stopTimer()
                        timer.innerHTML = `YOU DIED  <br /> Your Final Score is: ${sec}`
                    }
                }, 1);
                moveLight()
                if (test == true) {
                    teste2()
                    startTimer()
                    test = false

                }
            }
        }
    }
}
function createLogic2() {
    if (isPlaying == true) {
        isStarted = true
        setInterval(function () {
            var position1 = L.getBoundingClientRect()
            var position2 = Light.getBoundingClientRect()
            var isColliding = checkCollisions(position2.right, position2.left, position2.top, position2.bottom, position1.right, position1.left, position1.top, position1.bottom)
            if (isColliding === true) {
                isPlaying = false
                isStarted = false
                stopTimer()
                movingL.cancel()
                timer.innerHTML = `YOU DIED  <br /> Your Final Score is: ${sec}`
            }
        }, 1);
        moveLight()
        if (test == true) {
            teste2()
            startTimer()
            test = false

        }
    }
}
 function test4(){
    setTimeout(function (){
        if(x > 11 && isStarted === true){
            x -= 10
           moveL(x)
            test4()
        }
    }, x)
}
function teste2() {
    moveL(x) 
    test4()
}
