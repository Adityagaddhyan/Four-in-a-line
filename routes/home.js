const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const playGame = require("./game");
const makeMove=require("./makemove")
//use body parser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
    console.log("On home")
    res.render("homepage");
})
var username = "aditya";
router.get("/start", (req, res, next) => {
    // req.body.username=name;
    playGame.restart()
    res.render("gamepage", { username: username });
});
router.get("/start/:id",(req,res,next)=>{
    var col=parseInt(req.params.id);
    var obj={};
    if(playGame.isValid(col)){
        obj.valid=true;
        var result=playGame.makeMove(col);
        console.log(result);
        if(result.won){
            obj.won=true;
            obj.player=parseInt(result.p);
        }
    }
    else{
        obj.valid=false;
    }
    res.json(result);
})
module.exports = router;