var express = require("express");
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser')
var stackOverflowIntegration = require("./stack_overflow_integration");
var githubIntegration = require("./github_integration");

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get("/", function(req, res){
  res.render("index.ejs");
});

app.get("/slackOverflow", function(req, res){
  var tag = req.query.tag;
  stackOverflowIntegration.checkOutNewMessages(tag);
  res.json({success : "ok", message : "job submitted"});
});

app.get("/github/callback", function(req, res){
  var githubProfil = req.query.githubProfil;
  var axaEmail = req.query.axaEmail;
  var team = req.query.team;
  var code = req.query.code;

  githubIntegration.getAuthorizationToken(code, function(err, authorizationToken){
    res.json(code);
    //res.render("pending.ejs", {githubProfil : githubProfil, axaEmail : axaEmail, team : team, authorizationToken : authorizationToken});
  });

});

app.post("/github/peer", function(req, res){
  var githubProfil = req.body.githubProfil;
  var axaEmail = req.body.axaEmail;
  var team = req.body.team;
  var authorizationToken = req.query.authorizationToken;

  githubIntegration.userAsValidatedAxaEmail(githubProfil, axaEmail, authorizationToken, function(err, emailHasBeenValidated){
    if(emailHasBeenValidated){
      res.json({success : true});
    }else{
      res.json({success : false});
    }
  });

});

app.listen(port);
