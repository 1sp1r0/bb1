var express = require("express");
var port = process.env.PORT || 1337;
var app = express();

app.get("/", function(req, res){
  res.json({success : "ok", message : "job submitted"});
});

app.listen(port);
