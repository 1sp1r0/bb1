var express = require("express");
var port = process.env.PORT || 1337;
var stackOverflowIntergration = require("./stack_overflow_integration");

var app = express();

app.get("/slackOverflow", function(req, res){
  var tag = req.query.tag;
  stackOverflowIntergration.checkOutNewMessages(tag);
  res.json({success : "ok", message : "job submitted"});
});

app.listen(port);
