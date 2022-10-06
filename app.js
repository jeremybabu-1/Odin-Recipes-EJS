const express = require("express");
const app = express();
const ejs = require("ejs");
const _ = require("lodash");

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){


res.render("index");


});


app.get("/recipes/:page",function(req,res){

const pagenew = _.lowerCase(req.params.page);

res.render(pagenew);


});



app.listen(3000,function(){

console.log("Server start on port 3000");

});

