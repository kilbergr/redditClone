var express = require("express"),
app = express(),
morgan = require("morgan"),
bodyParser = require("body-parser"),
methodOverride = require("method-override"),
db = require("./models"),
session = require("cookie-session");

app.set("view engine", "ejs");
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));

//POST routes
//ROOT

//index

//new

//create

//show

//edit

//update

//destroy

//COMMENT routes
//index

//new

//create

//show

//edit

//update

//destroy

//remaining errors

//start server
app.listen(8000, function(){
	console.log("server listening on 8000");
});