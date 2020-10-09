const express=require("express");
const router=express.Router();
const bodyParser = require("body-parser");

//use body parser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/",(req,res,next)=>{
    console.log("On home")
    res.render("homepage");
})
var username="aditya";
router.get("/start",(req,res,next)=>{
    // req.body.username=name;
    res.render("gamepage",{username:username});
})
module.exports=router;