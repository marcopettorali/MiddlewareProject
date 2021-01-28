const AJAX_POLLING_PERIOD_MS = 1000

function main() {
    drawPlayers(null);
    document.addEventListener('keyup', function (e) {
        handleKey(e.key);
    })
    setInterval(requestForPlayerPositions, AJAX_POLLING_PERIOD_MS)
}

function handleKey(key) {
    switch (key) {
        case 'w':

            break;
        case 'a':

            break;
        case 's':

            break;
        case 'd':

            break;
    }
}

function drawPlayer(player) {
    var c = document.getElementById("map");
    var ctx = c.getContext("2d");

    var img = new Image();   // Create new img element
    img.src = '../img/graziano.png'; // Set source path
    img.onload = function () {
        ctx.drawImage(img, player.position_x, player.position_y, 10, 10);
    }
}

function drawPlayers(positions) {
    alert(positions)
    for(player in positions){
        drawPlayer(player);
    }
}