const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const randtoken=require("rand-token");
const playGame = require("../controllers/game");

//use body parser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
    console.log(req.cookies);
    console.log("On home")
    res.render("homepage");
})
var username = "aditya";
router.get("/start",(req, res, next) => {
    var token = randtoken.generate(16);
    req.session.ID=token;
    res.redirect("/start/"+token)
});
router.get("/start/:userid",playGame.restart,(req,res)=>{
    res.render("gamepage");
})
router.get("/start/:userid/:col",playGame.isValid,playGame.makeMove)
module.exports = router;