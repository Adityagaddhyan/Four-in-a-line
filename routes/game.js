// build a 6X7 matrix where 0 represents blank space and 1 represents occupied by P1 and 2 represents occupied by P2

//creating a 2d array in js
var arr = new Array(7);

var moveNumber = 0;

function vertical(x, y, player) {
    var count = 1;
    //check
    for (var j = y; j > (y - 3 > 0 ? y - 3 : 0); j--) {
        if (arr[x][j] == player) count++;
        else break;
    }
    for (var j = y; j < (y + 3 < 5 ? y + 3 : 0); j++) {
        if (arr[x][j] == player) count++;
        else break;
    }
    return (count >= 4 ? true : false);
}
function horizonal(x, y, player) {
    var count = 1;
    //check
    for (var j = x; j > (x - 3 > 0 ? x - 3 : 0); j--) {
        if (arr[j][y] == player) count++;
        else break;
    }
    for (var j = x; j < (x + 3 < 6 ? x + 3 : 0); j++) {
        if (arr[j][y] == player) count++;
        else break;
    }
    return (count >= 4 ? true : false);
}
function diagonal1(x, y, player) {
    var count = 1;
    for (var i = x, j = y; i > (x - 3 > 0 ? x - 3 : 0) && j > (y - 3 > 0 ? y - 3 : 0); j--, i--) {
        if (arr[j][y] == player) count++;
        else break;
    }
    for (var i = x, j = y; i < (x + 3 < 6 ? x + 3 : 6) && j < (y + 3 < 5 ? y + 3 : 5); j++, i++) {
        if (arr[j][y] == player) count++;
        else break;
    }
    return (count >= 4 ? true : false);
}
function diagonal2(x, y, player) {
    var count = 1;
    for (var i = x, j = y; i > (x - 3 > 0 ? x - 3 : 0) && j < (y + 3 < 5 ? y + 3 : 5); j++, i--) {
        if (arr[j][y] == player) count++;
        else break;
    }
    for (var i = x, j = y; i < (x + 3 < 6 ? x + 3 : 6) && j > (y - 3 > 0 ? y - 3 : 0); j--, i++) {
        if (arr[j][y] == player) count++;
        else break;
    }
    return (count >= 4 ? true : false);
}
function checkWon(x, y, player) {
    return (horizonal(x, y, player) + vertical(x, y, player) + diagonal1(x, y, player) + diagonal2(x, y, player) > 0);
}



module.exports = {
    restart: function(){
        moveNumber = 0;
        for (var i = 0; i < 6; i++) {
            arr[i] = new Array(6);
        }
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 7; j++) {
                // console.log("before",i,j,arr[i][j]);
                arr[i][j] = 0;
                // console.log("after",i,j,arr[i][j]);


            }
        }
        console.log("Game restarted");
    },
    // yellow->every valid odd move ->P!
    // red -> valid even move   ->p2
    isValid: function (col) {
        if (arr[col][6] == 0) {
            // console.log(arr[col][6]);
            return true;
            for (var i = 0; i < 6; i++) {
                for (var j = 0; j < 7; j++) {
                    console.log("before",i,j,arr[i][j]);
                    arr[i][j] = 0;
                    console.log("after",i,j,arr[i][j]);
    
    
                }
            }
        }
        else
            return false;
    },
    move: function () {
        return (moveNumber % 2 ? 1 : 2)
    },
    makeMove: function (col) {
        if (moveNumber == 0) this.restart();
        moveNumber++;
        var player = this.move();
        var i;
        for (i = 0; i < 7; i++) {
            if (arr[col][i] == 0) {
                // console.log(col,i)
                //put player number here
                arr[col][i] = player;
                break;
            }
        }
        var returnobj={"won": checkWon(col, i, player), "p": player};
        console.log(returnobj,"retobhb");
        return returnobj;

    }
};
