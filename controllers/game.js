// //redis setup
// const redis=require('redis');
// const client = redis.createClient();
 
// client.on("error", function(error) {
//   console.error(error);
// });
const locus=require('locus');
//restart
function restart(req,res,next){
  console.log("restarting game for",req.session.ID);
  req.session.array=[
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];
  req.session.moveNumber=0;
  next();
}
function isValid(req,res,next){
  console.log(req.session);
  var col=req.params.col;
  console.log(req.params.col);
  if(req.session.array[6][col]!=0){
    res.json({"valid":false});
    return;
  }
  next();
}
function makeMove(req,res,next){
  var i;
  for(i=0;i<7;i++){
    if(req.session.array[i][parseInt(req.params.col)]==0){
      req.session.array[i][parseInt(req.params.col)]=req.session.moveNumber%2?1:2;
      break;
    }
  }
  var col=parseInt(req.params.col);
  var row=i;
  var player=req.session.moveNumber%2?1:2;
  req.session.moveNumber+=1;
  //check vertical
  var count=0;
  for(var i=0;i<7;i++){
    if(req.session.array[i][col]==player)count++;
    else count=0;
    if(flag=count>3){
      res.json({"valid":true,"won":true,"player":player,"draw":false})
    }
  }
  //horizontal
  for(var i=0;i<7;i++){
    
    if(req.session.array[row][i]==player)count++;
    else count=0;
    if(flag=count>3){
      res.json({"valid":true,"won":true,"player":player,"draw":false})
    }
  }
  //diagonal 1
  var offset=col<row?col:row;
  for(var i=row-offset,j=col-offset;i<7&& j<7;i++,j++){
    if(req.session.array[i][j]==player)count++;
    else count=0;
    if(flag=count>3){
      res.json({"valid":true,"won":true,"player":player,"draw":false})
    }
  }
  //diagonal 2
  var offset=col<6-row?col:6-row;
  for(var i=row+offset,j=col-offset;i>=0&& j<7;i--,j++){
    if(req.session.array[i][j]==player)count++;
    else count=0;
    if(flag=count>3){
      res.json({"valid":true,"won":true,"player":player,"draw":false})
      return;
    }
  }
  res.json({"valid":true,"won":false,"player":player,"draw":false});

};
module.exports.makeMove=makeMove;
module.exports.isValid=isValid;
module.exports.restart=restart;