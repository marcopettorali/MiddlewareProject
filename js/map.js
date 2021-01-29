const AJAX_POLLING_PERIOD_MS = 1000
const PLAYER_PAWN_SIZE = 50

function main() {
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
    var map = document.getElementById('map_div');

    var playerPawn = document.createElement('div');
    playerPawn.setAttribute('id', player.player + '_pawn_div');
    playerPawn.setAttribute('class', "pawn");

    var playerPawnStyle = '' +
        'height: ' + PLAYER_PAWN_SIZE + 'px;' +
        'width: ' + PLAYER_PAWN_SIZE + 'px;' +
        'top: ' + player.position_y + 'px;' +
        'left: ' + player.position_x + 'px;' +
        '';
    playerPawn.setAttribute('style', playerPawnStyle);

    playerPawn.onmouseover = function (e) {
        var explainingDiv = document.createElement('div');
        explainingDiv.setAttribute('class', 'explaining')
        explainingDiv.setAttribute('id', player.player + '_explaining_div');

        var explainingDivTitle = document.createElement('h1');
        explainingDivTitle.innerHTML = player.player;
        explainingDiv.appendChild(explainingDivTitle);

        var explainingDivStyle = '' +
            'top: ' + player.position_y + 'px;' +
            'left: ' + (parseInt(player.position_x) + PLAYER_PAWN_SIZE) + 'px;' +
            '';
        explainingDiv.setAttribute('style', explainingDivStyle);

        map.appendChild(explainingDiv);
    }

    playerPawn.onmouseleave = function (e) {
        var explainingDiv = document.getElementById(player.player + '_explaining_div');
        if (explainingDiv != null) {
            explainingDiv.remove();
        }
    }

    map.appendChild(playerPawn);
}

function drawPlayers(players) {
    // remove all pawns
    var pawns = document.getElementsByClassName('pawn');
    if (pawns !== undefined) {
        for (i in pawns) {
            pawns[i].parentNode.removeChild();
        }
    }

    //draw each player
    for (i in players) {
        drawPlayer(players[i]);
    }
}