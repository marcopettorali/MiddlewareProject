const AJAX_POLLING_PERIOD_MS = 500
const PLAYER_PAWN_SIZE = 50

var PLAYER_FOLLOWER = null;

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
        'margin-top: ' + (-PLAYER_PAWN_SIZE) + 'px;' +
        'margin-left: ' + (-PLAYER_PAWN_SIZE / 2) + 'px;' +
        '';
    playerPawn.setAttribute('style', playerPawnStyle);

    playerPawn.onmouseover = function (e) {
        var otherDiv = document.getElementById(player.player + '_explaining_div');
        if (otherDiv == null) {
            var explainingDiv = document.createElement('div');
            explainingDiv.setAttribute('class', 'explaining');
            explainingDiv.setAttribute('id', player.player + '_explaining_div');

            //adding title label
            var explainingDivTitle = document.createElement('h1');
            explainingDivTitle.innerHTML = player.player;
            explainingDiv.appendChild(explainingDivTitle);

            //adding position label
            var explainingDivTitle = document.createElement('p');
            explainingDivTitle.innerHTML = "(x=" + player.position_x + ", y=" + player.position_y + ")";
            explainingDiv.appendChild(explainingDivTitle);

            var explainingDivStyle = '' +
                'top: ' + (player.position_y - PLAYER_PAWN_SIZE) + 'px;' +
                'left: ' + (parseInt(player.position_x) + PLAYER_PAWN_SIZE / 2) + 'px;' +
                '';
            explainingDiv.setAttribute('style', explainingDivStyle);

            map.appendChild(explainingDiv);
        }
    }

    playerPawn.onmouseleave = function (e) {
        var explainingDiv = document.getElementById(player.player + '_explaining_div');
        if (explainingDiv != null) {
            explainingDiv.remove();
        }
    }

    playerPawn.onmouseup = function (e) {
        if (PLAYER_FOLLOWER == null || PLAYER_FOLLOWER != player.player) {
            PLAYER_FOLLOWER = player.player;
        } else {
            PLAYER_FOLLOWER = null;
        }
    }

    map.appendChild(playerPawn);

    //Check if this is the followed player
    if (PLAYER_FOLLOWER == player.player) {
        //follower circle
        var follower = document.createElement('div');
        follower.setAttribute('id', 'follower');

        var followerStyle = '' +
            'top: ' + (player.position_y) + 'px;' +
            'left: ' + (player.position_x) + 'px;' +
            '';
        follower.setAttribute('style', followerStyle);

        map.appendChild(follower);

        //follower text
        var followerText = document.createElement('p');
        followerText.setAttribute('id', 'follower_text');
        followerText.innerHTML = player.player;

        var followerTextStyle = '' +
            'top: ' + parseInt(player.position_y) + 'px;' +
            'left: ' + (player.position_x) + 'px;' +
            '';
        followerText.setAttribute('style', followerTextStyle);
        map.appendChild(followerText);
    }
}

function drawPlayers(players) {
    // remove all pawns and the follower (if present)
    var pawns = document.getElementById('map_div').getElementsByClassName('pawn');
    if (pawns !== undefined) {
        for (i = 0; i < pawns.length; i++) {
            pawns[i].remove();
        }
    }

    var follower = document.getElementById('follower');
    if (follower != null) {
        follower.remove();
    }

    var followerText = document.getElementById('follower_text');
    if (followerText != null) {
        followerText.remove();
    }

    //draw each player
    for (i in players) {
        drawPlayer(players[i]);
    }
}