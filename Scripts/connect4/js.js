function emptyBoard() {
    redturn = true;
    gamerunning = true;
    for (x = 1; x <= 7; x++) {
        for (y = 1; y <= 6; y++) {
            document.getElementById(x + "-" + y).src = "https://www.paulneve.com/pp/blankc4.png";
        }
    }
    document.getElementById("gamestatus").innerHTML = "New game started - Red goes first";
}

var redturn = true;
var gamerunning = false;
function place() {
    if(gamerunning){
    var column = this.id[0];
    var row = this.id[2];
    var rowNum = 6;
    if(document.getElementById(column+"-1").src.indexOf("blank") != -1){
    while (rowNum != 1 && document.getElementById(column + "-" + rowNum).src.indexOf("blank") == -1) {
        rowNum--
    }
    if (redturn) {
        document.getElementById(column + "-" + rowNum).src = "https://www.paulneve.com/pp/redc4.png";
        document.getElementById("gamestatus").innerHTML = "It is Yellow's turn";
        redturn = false;
    } else {
        document.getElementById("gamestatus").innerHTML = "It is Red's turn";
        document.getElementById(column + "-" + rowNum).src = "https://www.paulneve.com/pp/yellowc4.png";
        redturn = true;
    }
}
}
gamecheck();
}

function gamecheck(){
    var row1 = [document.getElementById("1-1").src.substr(28,3),document.getElementById("1-2").src.substr(28,3),document.getElementById("1-3").src.substr(28,3),document.getElementById("1-4").src.substr(28,3),document.getElementById("1-5").src.substr(28,3),document.getElementById("1-6").src.substr(28,3),document.getElementById("1-7").src.substr(28,3),]
    document.getElementById("testline").innerHTML = row1;
}

for (x = 1; x <= 7; x++) {
    for (y = 1; y <= 6; y++) {
        document.getElementById(x + "-" + y).onclick = place;
    }
}
document.getElementById("newgame").onclick = emptyBoard;