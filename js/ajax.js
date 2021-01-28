const DEBUG = true

// requestForPlayerPositions() is periodically called to ask for other players' position
function requestForPlayerPositions() {
    if(DEBUG){
        var ret=[
            {
                "player": "Graziano",
                "position_x": "180",
                "position_y": "300"
            },
            {
                "player": "Silvano",
                "position_x": "280",
                "position_y": "700"
            },
            {
                "player": "Mariano",
                "position_x": "580",
                "position_y": "80"
            },

    ]
        drawPlayers(ret);
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