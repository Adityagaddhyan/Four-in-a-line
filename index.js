const express = require("express");
const bodyParser = require("body-parser");
const { EPERM } = require("constants");
const session=require("express-session");
const methodOverride=require("method-override");
//make app
const   app = express();

//method override
app.use(methodOverride("_method"));

//port
const PORT=4000;

//use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//host public dir
app.use(express.static("public"));

//session
app.use(session({
    secret: "secret message",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 12000000
    }
}));

//view enfine
app.set("view engine", "ejs");

//home routes
var homeRoutes=require("./routes/home.js");
app.use("/",homeRoutes);


//listen
app.listen(PORT,(err)=>{
    if(err) console.log("Error");
    else console.log("app is running");
})