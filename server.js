var express = require("express");
var port = process.env.PORT || 1337;
var app = express();

app.get("/", function(req, res){
  res.json({success : "ok", message : "job submitted"});
});

app.listen(port);

/*
var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Pourquoi ca marche pas !!\n');
}).listen(port);
*/
