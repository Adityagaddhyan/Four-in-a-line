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
var colindex=[];
function vertical(x,y,player){
    var count=1;
    for(var j=y;j>(y-3>0?y-3:0);j--){
        if(matrix[x][j]==player)count++;
    }
    for(var j=y;j<(y+3<7?y+3:6);j++){
        if(matrix[x][j]==player)count++;
    }
    return count>3;
}
function horizontal(x,y,player){
    var count=1;
    for(var i=x;i>(x-3>0?x-3:0);i--){
        if(matrix[i][y]==player)count++;
    }
    for(var i=x;i<(x+3<7?x+3:6);i++){
        if(matrix[i][y]==player)count++;
    }
    return count>3;
}
function diagonal1(x,y,player){
    var count=1;
    for(var i=x,j=y;i>(x-3>0?x-3:0) && j>(y-3>0?y-3:0);i--,j--){
        if(matrix[i][j]==player)count++;
    }
    for(var i=x,j=y;i<(x+3<7?x+3:6) && j<(y+3<7?y+3:6);i++,j++){
        if(matrix[i][j]==player)count++;
    }
    return count>3;
}
function diagonal2(x,y,player){
    var count=1;
    for(var i=x,j=y;i>(x-3>0?x-3:0) && j<(y+3<7?y+3:6);i--,j++){
        if(matrix[i][j]==player)count++;
    }
    for(var i=x,j=y;i<(x+3<7?x+3:6) && j>(y-3>0?y-3:0);i++,j--){
        if(matrix[i][j]==player)count++;
    }
    return count>3;
}
function checkWon(x,y,player){
    return horizontal(x,y,player) || vertical(x,y,player) || diagonal1(x,y,player) || diagonal2(x,y,player);
}

function restart(){
    var matrix2=[
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
    ];
    matrix=matrix2;
}

function isValid(col){
    if(matrix[col][6]==0)return true;
    return false;
}
function move(){
    return moveCount%2;
}
//col should range from 0-6 everywhere in this file else error
function makeMove(col){
    moveCount++;
    var player=move();
    colindex[col]+=1;
    matrix[col][colindex[col]]=player;
    var result={};
    result.won=checkWon(col,colindex[col],player);
    result.player=player;
    return result;
    //result={won:true/flase,player:0/1}
};


