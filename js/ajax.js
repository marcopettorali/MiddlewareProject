const DEBUG_FLAG = true

var DEBUG = {
    "Graziano_x": 180,
    "Graziano_y": 300,
    "Silvano_x": 280,
    "Silvano_y": 700,
    "Mariano_x": 580,
    "Mariano_y": 80
};

// requestForPlayerPositions() is periodically called to ask for other players' position
function requestForPlayerPositions() {
    if (DEBUG_FLAG) {
        var ret = {
            "players": [
                { "player": "GrazianoGrazianoGraziano", "position_x": DEBUG.Graziano_x, "position_y": DEBUG.Graziano_y },
                { "player": "Silvano", "position_x": DEBUG.Silvano_x, "position_y": DEBUG.Silvano_y },
                { "player": "Mariano", "position_x": DEBUG.Mariano_x, "position_y": DEBUG.Mariano_y }
            ]
        };
        DEBUG.Graziano_x += 5 * (Math.floor(Math.random() * 3) - 1)
        DEBUG.Graziano_y += 5 * (Math.floor(Math.random() * 3) - 1)
        DEBUG.Silvano_x += 5 * (Math.floor(Math.random() * 3) - 1)
        DEBUG.Silvano_y += 5 * (Math.floor(Math.random() * 3) - 1)
        DEBUG.Mariano_x += 5 * (Math.floor(Math.random() * 3) - 1)
        DEBUG.Mariano_y += 5 * (Math.floor(Math.random() * 3) - 1)

        drawPlayers(ret.players);
        return;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var positions = JSON.parse(xhttp.responseText);
            drawPlayers(positions)
        }
    };

    // TODO: get JSON file containing positions
    xhttp.open("GET", "positions.json", true);
    xhttp.send();
}