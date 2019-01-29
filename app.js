var express = require("express");
var app = express();

app.set("view engine","pug");

app.get("/",(req,res) => {
  //res.send("Hola mundo");
  res.render("index",{youAreUsingPug:true,pageTitle:".::HOME::."});
});


app.listen(8080);
