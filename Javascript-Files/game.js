
var L = document.getElementById("img-Enemy")
var Light = document.getElementById("img-Main")
var test = true
var isPlaying = true
if (isPlaying == true) {
    document.body.onkeydown = function (e) {
        if (e.keyCode == 32 && isPlaying == true) {
            setInterval(function () {
                var position1 = L.getBoundingClientRect()
                var position2 = Light.getBoundingClientRect()
                var isColliding = checkCollisions(position1.x, position1.y, position1.width, position1.height, position2.x, position2.y, position2.width, position2.height)
                if (isColliding == true) {
                    isPlaying = false
                    movingL.pause()
                }
            }, 1);
            moveLight()

            if (test == true) {
                moveL()
                startTimer()
            }
        }
    }
}
function checkCollisions(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (x1 + w1 >= x2 && x1 + w1 <= x2 + w2 && y1 + h1 >= y2 && y1 + h1 <= y2 + h2) {
        return true;
    } else if (x1 >= x2 && x1 <= x2 + w2 && y1 >= y2 && y1 <= y2 + h2) {
        return true;
    } else {
        return false;
    }
}
var movingL

function moveL() {
    movingL = document.getElementById("img-Enemy").animate([
        // keyframes
        { transform: 'translatex(0px)' },
        { transform: 'translatex(-350px)' }
    ], {
        // timing options
        duration: 3800,
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
        duration: 670,
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
        movingL.pause()
    } else {
        movingL.play()
        isPlaying = true
    }
}
function finishGame() {
    movingL.cancel()
}

const timer = document.getElementById('Score')
let stoptime = true;
let startTimeout
let starttime
function startTimer() {
    if (stoptime == true) {
        stoptime = false
        starttime = new Date().getTime()
        timerCycle()
    }
}
function stopTimer() {
    stopTimerCycle()
    if (stoptime == false) {
        stoptime = true;
    }
}
function timerCycle() {
    if (stoptime == false) {
        var timeSincePress = new Date().getTime() - starttime
        sec = timeSincePress / 1000
        sec = math(sec)
        

        
        timer.innerHTML = sec 

        startTimeout = setTimeout("timerCycle()", 500)
    }
}

function resetTimer() {
    stopTimerCycle()
    stopTimer()
    timer.innerHTML = '0000'
    stoptime = true
    sec = 0
    
}

function stopTimerCycle() {
    clearTimeout(startTimeout)
}
function math(number) {
    return Math.floor(number)
}
function getFixedValue(giventime, biggerthan, addnumber) {
    if (giventime < biggerthan) {
        giventime = addnumber + giventime
    }
    return giventime
}