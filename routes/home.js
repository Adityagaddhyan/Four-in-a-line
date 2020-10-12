const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const randtoken=require("rand-token");
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
    // playGame.restart()
    var token = randtoken.generate(16);
    res.redirect("/start/"+token)
    // res.render("gamepage", { username: username });
});
router.get("/start/:userid",(req,res)=>{
    res.render("gamepage");
})
router.get("/start/:userid/:id",(req,res,next)=>{
    console.log("hit");
    var col=parseInt(req.params.id);
    var obj={};
    if(playGame.isValid(col)){
        obj.valid=true; 
        var result=playGame.makeMove(col);
        console.log(result);
        if(result.won){
            obj.won=true;
            // obj.player=parseInt(result.p);
        }
        else{
            obj.won=false;
        }
    }
    else{
        obj.valid=false;
    }
    res.json(obj);
})
module.exports = router;