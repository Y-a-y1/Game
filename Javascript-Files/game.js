

document.body.onkeydown = function (e) {
    if (e.keyCode == 32) {
        moveLight()
        moveL()
    }
}
function moveL() {
    document.getElementById("img-Enemy").animate([
        // keyframes
        { transform: 'translatex(0px)' },
        { transform: 'translatex(-350px)' }
    ], {
        // timing options
        duration: 4000,
        iterations: Infinity
    });
}
   

function moveLight() {
    document.getElementById("img-Main").animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-70px)' },
        { transform: 'translateY(-70px)' },
        { transform: 'translateY(0px)' }
    ], {
        // timing options
        duration: 400,
        iterations: 1
    });
}
