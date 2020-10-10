var matrix=[
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
];
var moveCount=0;
var colindex=[0,0,0,0,0,0,0];
function vertical(x,y,player){
    var count=1;
    for(var j=y;j>(y-4>0?y-4:0);j--){
        if(matrix[x][j]==player)count++;
    }
    for(var j=y;j<(y+4<7?y+4:6);j++){
        if(matrix[x][j]==player)count++;
    }
    console.log("ver",count);
    return count>3;
}
function horizontal(x,y,player){
    var count=1;
    for(var i=x;i>(x-4>0?x-4:0);i--){
        if(matrix[i][y]==player)count++;
    }
    for(var i=x;i<(x+4<7?x+4:6);i++){
        if(matrix[i][y]==player)count++;
    }
    console.log("hor",count);

    return count>3;
}
function diagonal1(x,y,player){
    var count=1;
    for(var i=x,j=y;i>(x-4>0?x-4:0) && j>(y-4>0?y-4:0);i--,j--){
        if(matrix[i][j]==player)count++;
    }
    for(var i=x,j=y;i<(x+4<7?x+4:6) && j<(y+4<7?y+4:6);i++,j++){
        if(matrix[i][j]==player)count++;
    }
    console.log("d1",count);

    return count>3;
}
function diagonal2(x,y,player){
    var count=1;
    for(var i=x,j=y;i>(x-4>0?x-4:0) && j<(y+4<7?y+4:6);i--,j++){
        if(matrix[i][j]==player)count++;
    }
    for(var i=x,j=y;i<(x+4<7?x+4:6) && j>(y-4>0?y-4:0);i++,j--){
        if(matrix[i][j]==player)count++;
    }
    console.log("d2",count);

    return count>3;
}
function checkWon(x,y,player){
    return horizontal(x,y,player) || vertical(x,y,player) || diagonal1(x,y,player) || diagonal2(x,y,player);
}

function restart(){
    for(var i=0;i<7;i++){
        for(var j=0;j<7;j++){
            matrix[i][j]=0;
        }
        colindex[i]=0;
    }
    console.log("restarting...")
}

function isValid(col){
    col--;
    console.log(col,"isvalid");
    console.log(colindex[col],"colin");
    if(matrix[col][6]==0 && colindex[col]!=8)return true;
    return false;
}
function move(){
    return moveCount%2==0?1:2;
}
//col should range from 1-7 so decrease everywhere in this file else error
function makeMove(col){
    col--;
    moveCount++;
    var player=move();
    matrix[col][colindex[col]]=player;
    colindex[col]+=1;
    var result={};
    result.won=checkWon(col,colindex[col],player);
    result.player=player;
    return result;
    //result={won:true/flase,player:0/1}
};

module.exports.makeMove=makeMove;
module.exports.move=move;
module.exports.restart=restart;
module.exports.isValid=isValid;


//code for testing

restart();
isValid(1);
makeMove(1);
isValid(2)
makeMove(2);
isValid(1);
makeMove(1);
isValid(2)
makeMove(2);
isValid(1);
makeMove(1);
isValid(2)
makeMove(2);
isValid(1);
makeMove(1);
isValid(2)
makeMove(2);
isValid(1);
makeMove(1);
isValid(2)
makeMove(2);
isValid(1);
makeMove(1);
isValid(2)
makeMove(2);